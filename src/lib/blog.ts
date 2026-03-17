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
  author: string;
  featuredImage?: string;
  tags?: string[];
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(CONTENT_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      author: data.author || "Phil Ganz",
      featuredImage: data.featuredImage || null,
      tags: data.tags || [],
    } as BlogPostMeta;
  });

  // Sort by date descending
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
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
    reviewedBy: data.reviewedBy || null,
    reviewedByImage: data.reviewedByImage || "/images/team/ryan-skerritt.jpg",
    reviewedByTitle: data.reviewedByTitle || "Mortgage Expert · NMLS #1170025",
    reviewedBySlug: data.reviewedBySlug || "ryan-skerritt",
    featuredImage: data.featuredImage || null,
    tags: data.tags || [],
    readTime: estimateReadTime(content),
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
