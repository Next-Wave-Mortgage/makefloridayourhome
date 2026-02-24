# Program Content (MDX)

Place mortgage program MDX files in this directory.

## File naming convention

Use kebab-case filenames that match the desired URL slug:

```
src/content/programs/fha-loans.mdx
→ /programs/fha-loans
```

## Frontmatter schema

Each MDX file should include YAML frontmatter:

```yaml
---
title: "FHA Loans"
description: "Low down payment loans backed by the Federal Housing Administration."
order: 1
published: true
---
```

## Writing content

Write standard MDX below the frontmatter. You can import and use React
components from `@/components/` as needed.
