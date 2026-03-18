import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "learn");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedDate?: string;
  author: string;
  authorTitle?: string;
  authorImage?: string;
  reviewedBy?: string;
  reviewedByImage?: string;
  reviewedByTitle?: string;
  reviewedBySlug?: string;
  featuredImage?: string;
  imageAlt?: string;
  tags?: string[];
  readTime: number;
  content: string;
}

function estimateReadTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 238));
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedDate?: string;
  author: string;
  featuredImage?: string;
  tags?: string[];
}

/** Recursively find all .mdx files and return their slugs (relative paths without .mdx). */
function findMdxFiles(dir: string, base: string = dir): string[] {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findMdxFiles(fullPath, base));
    } else if (entry.name.endsWith(".mdx")) {
      const relativePath = path.relative(base, fullPath).replace(/\\/g, "/");
      files.push(relativePath.replace(/\.mdx$/, ""));
    }
  }

  return files;
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = findMdxFiles(CONTENT_DIR);

  const posts = slugs.map((slug) => {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      updatedDate: data.updatedDate || null,
      author: data.author || "Phil Ganz",
      featuredImage: data.featuredImage || null,
      tags: data.tags || [],
    } as BlogPostMeta;
  });

  // Sort by most recent date (updatedDate if available, otherwise date)
  return posts.sort((a, b) => {
    const dateA = new Date(a.updatedDate || a.date).getTime();
    const dateB = new Date(b.updatedDate || b.date).getTime();
    return dateB - dateA;
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || "",
    updatedDate: data.updatedDate || null,
    author: data.author || "Phil Ganz",
    authorTitle: data.authorTitle || "Mortgage Expert · NMLS #227607",
    authorImage: data.authorImage || "/images/team/phil-ganz.jpg",
    reviewedBy: data.reviewedBy ?? "Ryan Skerritt",
    reviewedByImage: data.reviewedByImage || "/images/team/ryan-skerritt.jpg",
    reviewedByTitle: data.reviewedByTitle || "Mortgage Expert · NMLS #1170025",
    reviewedBySlug: data.reviewedBySlug || "ryan-skerritt",
    featuredImage: data.featuredImage || null,
    imageAlt: data.imageAlt || null,
    tags: data.tags || [],
    readTime: estimateReadTime(content),
    content,
  };
}

export function getAllSlugs(): string[] {
  return findMdxFiles(CONTENT_DIR);
}
