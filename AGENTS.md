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

## Environment Variables

- Never commit secrets. Use `.env.local` (git-ignored) for secrets.
- Document every env var in `.env.example` with a placeholder value.
