import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostList, { Post } from "../components/PostList";
import Avatar from "../components/Avatar";
import ClientThreeCloud from "../components/ClientThreeCloud";
import AnimatedHero from "../components/AnimatedHero";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedCloudContainer from "../components/AnimatedCloudContainer";

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
        <AnimatedCloudContainer>
          <ClientThreeCloud />
        </AnimatedCloudContainer>
        
        {/* Hero Content (Foreground) */}
        <AnimatedHero />
      </section>
      
      {/* Content section */}
      <AnimatedSection>
        <h2 className="text-2xl font-semibold text-pastel-primary mb-4">Latest posts</h2>
        <PostList posts={posts} />
      </AnimatedSection>
    </main>
  );
}
