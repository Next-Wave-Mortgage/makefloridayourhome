# design-sync notes — MakeFloridaYourHome

Repo-specific quirks for syncing this Next.js **website** (not a packaged
component library) to claude.ai/design.

- **Synth-entry trick**: `cfg.entry` is `./src/index.ts`, which deliberately
  does NOT exist. That forces the converter into synth-entry mode while
  anchoring `PKG_DIR` at the repo root (without `--entry`/`cfg.entry` it looks
  for `node_modules/makefloridayourhome`, which can't exist — npm won't
  self-install). Components are discovered from `src/components` (`cfg.srcDir`).
- **Next.js runtime shims**: components import `next/link`, `next/image`,
  `next/navigation`, and (via `@/lib/rates`) `@vercel/functions` +
  `@vercel/blob`. None of those run in a plain browser, so
  `.design-sync/tsconfig.sync.json` maps them to `.design-sync/shims/*` —
  Link renders an `<a>`, Image renders `<img>` with a pale-green SVG
  placeholder on 404 (public/images/* only exists in the app), usePathname
  returns "/". Without the shims every preview dies on
  `ReferenceError: process is not defined` (Next module scope).
- **Directory-import pin**: `@/data/dpa` is a directory; the tsconfig-paths
  plugin resolves bare dirs before extensions, so tsconfig.sync.json pins
  `"@/data/dpa": ["src/data/dpa/index.ts"]` (exact rules must be listed BEFORE
  the `@/*` wildcard).
- **FAQ fork**: `sections/FAQ` is excluded by the ALL-CAPS-constant heuristic
  in `lib/dts.mjs` `isComponentName`. Forked to
  `.design-sync/overrides/dts.mjs` (declared in `cfg.libOverrides`). The fork
  imports `ts-morph`, so `.design-sync/node_modules` must link to
  `.ds-sync/node_modules` — on Windows: `cmd /c "mklink /J
  .design-sync\node_modules .ds-sync\node_modules"` (recreate per clone).
  Do NOT add `"FAQ"` to `componentSrcMap` — a non-empty pinned name list
  short-circuits src discovery and the build drops to 1 component.
- **FloridaCountyMap named export**: the component was `export default` only;
  the synth entry re-exports with `export *`, which skips defaults. A named
  `export { FloridaCountyMap };` was appended to the source file.
- **Props contracts are hand-written**: the `.d.ts` extractor only parses
  `.d.ts` trees and this repo keeps props interfaces in `.tsx`, so every
  props-bearing component has a `cfg.dtsPropsFor` body. Keep them in sync when
  component props change.
- **CSS**: Tailwind v4 compiled standalone via `cfg.buildCmd`
  (`npx @tailwindcss/cli -i src/app/globals.css -o
  .design-sync/.cache/tailwind.css`). Re-run it BEFORE the final rebuild of a
  sync so utility classes used only in `.design-sync/previews/*.tsx` get
  compiled in (Tailwind's auto-content scan covers them — the dir is not
  gitignored). Fonts are the system stack — nothing to ship.
- **Preview data**: `.design-sync/extra/preview-data.ts` (cfg.extraEntries)
  re-exports FLORIDA_COUNTIES / FLORIDA_DPA_PROGRAMS / the DPA selectors and a
  hand-authored `sampleMortgageMarketSnapshot` onto `window.MFYH` so
  data-driven components (DpaCalculator, MortgageRatesDashboard, …) are
  buildable in previews and by the design agent.
- **TrackPageView** is analytics-only and excluded via `componentSrcMap: null`.

## Preview-authoring lessons (wave 1, 2026-08-08)

- **Animation freeze**: components with entrance/marquee/pulse animations
  (FinalCTA's IntersectionObserver fade-up, Testimonials' marquee) capture
  nondeterministically. Their previews prepend
  `<style>{'*, *::before, *::after { animation: none !important; transition: none !important; }'}</style>`
  to freeze the rest state. Apply the same pattern to any future animated
  component.
- **Capture viewport is 900x700, cells crop past that height** and the width
  sits below the `lg`/`xl` breakpoints: tall marketing sections are
  bottom-cropped on sheets, `hidden lg:block` image columns legitimately don't
  appear (PageHero, ArticleHero, Hero), and Header shows its mobile/hamburger
  state. All graded good on the visible portion. If full-height verification
  ever matters, add `cfg.overrides.<Name>.viewport` (e.g. WhatWeDo 900x1900,
  Programs 900x1400, WhyTrust 900x1300, FinalCTA 900x800) and recapture.
- **`getDpaProgramCountsByCounty(counties, programSummaries)` takes two args**;
  call it as the calculator page does. `FLORIDA_COUNTIES` is already
  `string[]`.
- **Interaction-only states** (DpaCalculator results view / wizard steps 2–3,
  FloridaCountyMap hover) can't render statically and are deliberately absent
  from previews; the map's selected state renders via `selectedCounty`.
- HthUrgencyBanner lives in `src/components/shared/` (group `shared`).

## Known render warns

(none — validate's warn lines were all clean at the final build)

## Re-sync risks

- `sampleMortgageMarketSnapshot` and the preview data re-exports live in
  `.design-sync/extra/preview-data.ts` — if `MortgageMarketSnapshot`'s shape or
  the DPA selector signatures change in `src/lib`, that file and the affected
  `cfg.dtsPropsFor` entries must be updated by hand.
- `cfg.dtsPropsFor` bodies duplicate the source interfaces; they silently rot
  when component props change.
- The compiled Tailwind CSS is a build artifact in `.design-sync/.cache/` —
  always regenerate via `cfg.buildCmd` on re-sync, never trust a stale copy.
- Next.js major upgrades can change what the shims must cover (new runtime
  imports in components → add mappings in tsconfig.sync.json).
