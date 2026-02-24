# Blog Content (MDX)

Place blog post MDX files in this directory.

## File naming convention

Use kebab-case filenames that match the desired URL slug:

```
src/content/blog/first-time-buyer-guide.mdx
→ /blog/first-time-buyer-guide
```

## Frontmatter schema

Each MDX file should include YAML frontmatter:

```yaml
---
title: "Your Post Title"
description: "Short description for SEO meta tags."
date: "2025-01-15"
author: "Author Name"
tags: ["mortgage", "florida"]
published: true
---
```

## Writing content

Write standard MDX below the frontmatter. You can import and use React
components from `@/components/` as needed.
