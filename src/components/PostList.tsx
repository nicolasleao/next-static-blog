import Link from "next/link";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  status?: string;
};

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-6 mt-8">
      {posts.map((post) => (
        <Link 
          key={post.slug} 
          href={`/posts/${post.slug}`}
          className="block border-b border-[#88A773]/20 pb-6 hover:bg-[#88A773]/5 transition-colors rounded-lg p-4 -mx-4"
        >
          <h3 className="text-xl font-semibold text-pastel-primary group-hover:text-pastel-accent transition-colors">
            {post.title}
          </h3>
          <div className="text-sm text-pastel-muted/80 mt-1">{new Date(post.date).toLocaleDateString()}</div>
          <div className="text-pastel-light mt-2">{post.excerpt}</div>
        </Link>
      ))}
    </div>
  );
} 