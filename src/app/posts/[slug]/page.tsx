import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
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
  
  // Use unified with rehype-highlight for better syntax highlighting
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight, { ignoreMissing: true, detect: true })
    .use(rehypeStringify)
    .process(content);
  
  return {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    contentHtml: processedContent.toString(),
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
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/" className="text-pastel-primary hover:text-pastel-accent transition-colors mb-6 inline-block">
        ← Back to home
      </Link>
      <h1 className="text-3xl font-bold text-pastel-primary mb-2">{post.title}</h1>
      <div className="text-sm text-pastel-muted mb-8">{post.date}</div>
      <article className="prose prose-invert prose-headings:text-pastel-primary prose-a:text-pastel-secondary max-w-none" 
               dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </main>
  );
} 