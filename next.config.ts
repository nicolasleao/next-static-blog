import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Set this to your repository name if you're deploying to GitHub Pages
  // e.g., if your repository is username.github.io/blog then basePath should be '/blog'
  // If deploying to a custom domain or a user/org site (username.github.io), leave it empty
  basePath: process.env.NODE_ENV === 'production' ? '/next-static-blog' : '',
  // This ensures static links work correctly
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
