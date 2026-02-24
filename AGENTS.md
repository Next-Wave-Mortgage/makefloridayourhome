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

## Quality

- Run `npm run lint` and `npm run format` before finishing any task.
- Run `npm run build` to verify no type errors before committing.
- Keep Playwright smoke tests passing (`npm run test:smoke`).

## Content & SEO

- Every public page must export a `metadata` object (or use `generateMetadata`).
- `src/lib/site.ts` is the single source of truth for site name, URLs, and
  contact info. Import from there; do not hardcode.

## Environment Variables

- Never commit secrets. Use `.env.local` (git-ignored) for secrets.
- Document every env var in `.env.example` with a placeholder value.
