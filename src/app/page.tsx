import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostList, { Post } from "../components/PostList";
import Avatar from "../components/Avatar";
import ClientThreeCloud from "../components/ClientThreeCloud";

function getPosts(): Post[] {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);
  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const filePath = path.join(postsDir, file);
    const { data } = matter(fs.readFileSync(filePath, "utf8"));
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      status: data.status || "public", // Default to public if status is not specified
    };
  })
  .filter(post => post.status === "public") // Only include public posts
  .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function HomePage() {
  const posts = getPosts();
  return (
    <main className="max-w-5xl mx-auto px-4">
      {/* Hero section with 3D cloud as background */}
      <section className="hero-section">
        {/* 3D Cloud Background */}
        <div className="cloud-container">
          <ClientThreeCloud />
        </div>
        
        {/* Hero Content (Foreground) */}
        <div className="hero-content">
          <Avatar />
          <h1 className="text-4xl font-bold text-pastel-primary mb-2">Hey, I'm Nicolas</h1>
          <p className="text-pastel-light max-w-lg mx-auto">
            I'm an AI Engineer from Brazil, and here I share some of my personal projects, guides and other content about what I'm currently working on.
          </p>
        </div>
      </section>
      
      {/* Content section */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold text-pastel-primary mb-4">Latest posts</h2>
        <PostList posts={posts} />
      </section>
    </main>
  );
}
