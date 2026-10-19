# Agent Rules — MakeFloridaYourHome

These rules apply to ALL AI agents (Claude Code, Cursor, Copilot, etc.)
working in this repository.

## Routing

- **Do NOT change, rename, or remove routes** without documenting a
  corresponding redirect in `next.config.ts` `redirects()`.
- The `(marketing)` route group wraps all public-facing pages. Keep it.
- Dynamic segments (`[slug]`) are powered by MDX content in `src/content/`.

## Architecture

- **Pages must be thin.** A page file should import and compose components
  from `src/components/`. Business logic lives in `src/lib/`.
- **Prefer MDX** for long-form or editorial content (blog posts, program
  descriptions). Only use TSX pages for interactive/dynamic views.
- Section-level components go in `src/components/sections/`.
- Layout-level components (Header, Footer) go in `src/components/layout/`.

## Dependencies

- **Do NOT add a new dependency** without leaving a comment in the PR
  explaining why it is needed and what alternatives were considered.
- Prefer the built-in Next.js / React API over third-party packages.

## Tailwind / CSS

- Brand colors are defined in `src/app/globals.css` via the `@theme` directive.
- **`npm run dev` auto-clears `.next` cache** before starting. This prevents
  stale CSS when theme tokens are added or changed.
- If a Tailwind utility class (e.g. `bg-brand-green`) isn't applying, the
  `.next` cache is likely stale. Run `npm run dev` (which clears it) or
  manually delete `.next/` and restart.

## Quality

- Run `npm run lint` and `npm run format` before finishing any task.
- Run `npm run build` to verify no type errors before committing.
- Keep Playwright smoke tests passing (`npm run test:smoke`).

## Content & SEO

- Every public page must export a `metadata` object (or use `generateMetadata`).
- `src/lib/site.ts` is the single source of truth for site name, URLs, and
  contact info. Import from there; do not hardcode.

## Blog/Page Editing Workflow

When creating or updating a blog post, learn article, program page, or other
public content page:

- Start from a clean working tree. Run `git status --short` before making
  edits, and do not mix unrelated changes into the same commit.
- Keep changes scoped to the specific page/article and any assets/components
  required only for that page. If a shared template, layout, or global CSS file
  must change, keep the change narrowly scoped and explain why.
- Do not run repo-wide formatting for content-only work. Format only the files
  intentionally changed, or run format checks without rewriting unrelated files.
- Do not use `git add .`. Stage explicit paths only, then verify with
  `git diff --cached --name-status` before committing.
- Before pushing, verify `git show --name-status HEAD` and confirm the commit
  contains only the intended page/article, assets, and narrowly scoped support
  files.
- If replacing images, remove unused old assets only when the page no longer
  references them and the deletion is part of the intended page update.

## Learn Article Format

Apply this to every new or updated learn article in `content/learn/`.

- **Intro:** three sentences, each in its own paragraph. The intro must
  introduce the article and set the reader up. Open with the reader's
  situation or problem, say what the guide covers, then tell them what they
  will get from it. Do not open with a bare data answer or a list of facts.
- Put the blue CTA between the second and third intro sentences:
  `**[Check Your Florida Home Purchase Eligibility](/home-purchase-eligibility)**`
- Every other CTA uses the same blue bold-link format and destination.
  CTA text may be personalized to the article's reader while keeping the
  "check eligibility" meaning, e.g. "Check Your Florida Home Purchase
  Eligibility as a Canadian" or "See If You Qualify for a Florida Mortgage
  From the UK". Do not use button CTAs (`dpa-btn`). Place CTAs at conversion
  points: after key sections, examples, or tables, and at the close.
  Roughly one every two or three major sections; never stack them.
- Exception: a designed featured promo component (for example
  `VeteranExpressLane` in the VA disability article) may use its own button
  and send leads to a loan-specific funnel such as `/check-va-loan-eligibility`.
- Titles favor buyer and mortgage intent ("buy", "home loans") over
  higher-volume informational wording. The goal is mortgage leads.
- Learn pages have no sidebar promo cards; the sidebar is the table of
  contents only.

## Environment Variables

- Never commit secrets. Use `.env.local` (git-ignored) for secrets.
- Document every env var in `.env.example` with a placeholder value.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
