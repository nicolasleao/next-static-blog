"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { scrollStaggerContainer, scrollStaggerItem, scrollStaggerProps } from "../utils/animations";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  status?: string;
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <motion.div 
      className="space-y-6 mt-8"
      variants={scrollStaggerContainer}
      {...scrollStaggerProps}
    >
      {posts.map((post) => (
        <motion.div
          key={post.slug}
          variants={scrollStaggerItem}
        >
          <motion.div
            whileHover={{ 
              y: -2,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href={`/posts/${post.slug}`}
              className="block border-b border-[#88A773]/20 pb-6 hover:bg-[#88A773]/5 transition-colors rounded-lg p-4 -mx-4"
            >
              <h3 className="text-xl font-semibold text-pastel-primary group-hover:text-pastel-accent transition-colors">
                {post.title}
              </h3>
              <div className="text-sm text-pastel-muted/80 mt-1">{formatDate(post.date)}</div>
              <div className="text-pastel-light mt-2">{post.excerpt}</div>
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
} 