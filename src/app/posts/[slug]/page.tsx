import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeFormat from "rehype-format";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

// Define the params type with Promise
interface SlugParams extends ParsedUrlQuery {
  slug: string;
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);
  return files.map((file) => ({ slug: file.replace(/\.md$/, "") }));
}

async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  
  // Use unified with enhanced rehype plugins for better markdown rendering
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm) // Add GFM support for tables, strikethrough, etc.
    .use(remarkRehype, { allowDangerousHtml: true }) // Allow HTML in markdown
    .use(rehypeRaw) // Parse HTML in the markdown
    .use(rehypeSlug) // Add IDs to headings
    .use(rehypeAutolinkHeadings, { behavior: 'append' }) // Add links to headings
    .use(rehypeHighlight, { ignoreMissing: true, detect: true }) // Syntax highlighting
    .use(rehypeFormat) // Format HTML output
    .use(rehypeStringify)
    .process(content);
  
  return {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    contentHtml: processedContent.toString(),
    status: data.status || "public",
  };
}

// Export metadata for better SEO
export async function generateMetadata({ params }: { params: Promise<SlugParams> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: post.title,
    description: post.excerpt || `Read more about ${post.title}`,
  };
}

export default async function PostPage({ params }: { params: Promise<SlugParams> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return notFound();
  
  // Don't render draft posts
  if (post.status === "draft") {
    return notFound();
  }
  
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/" className="text-pastel-primary hover:text-pastel-accent transition-colors mb-6 inline-block">
        ← Back to home
      </Link>
      <h1 className="text-3xl font-bold text-pastel-primary mb-2">{post.title}</h1>
      <div className="text-sm text-pastel-muted mb-8">{new Date(post.date).toLocaleDateString()}</div>
      <article 
        className="prose prose-invert prose-headings:text-pastel-primary prose-a:text-pastel-secondary max-w-none markdown-table
                   prose-table:border-collapse prose-table:w-full prose-table:my-4
                   prose-thead:bg-pastel-primary/10 prose-thead:border-pastel-primary/20
                   prose-th:p-3 prose-th:border prose-th:border-pastel-primary/20 prose-th:text-pastel-primary
                   prose-td:p-3 prose-td:border prose-td:border-pastel-primary/20
                   prose-tr:even:bg-pastel-primary/5" 
        dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
      />
    </main>
  );
} 