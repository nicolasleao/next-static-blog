# Next.js Static Blog

A modern, fully static blogging solution built with Next.js, Tailwind CSS, and Three.js. Features a beautiful dark theme with green accents and an interactive 3D cloud animation.

## Features

- Markdown-based blog posts with frontmatter support
- Syntax highlighting for code blocks
- SEO-optimized rendered post results
- Interactive 3D cloud animation on the homepage
- Fully responsive design with dark mode
- About and Community pages

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Blog Posts

To add a new blog post, create a new markdown file in the `/posts` directory with the following format:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
excerpt: "A short excerpt or summary of your post"
coverImage: "/images/your-image.jpg"
---

# Your Post Title

Content goes here...
```

All posts will automatically appear on the homepage, sorted by date (newest first).

## Structure

- `/posts`: Markdown files for blog posts
- `/src/app`: Next.js app router components
- `/src/components`: Reusable React components
- `/public/images`: Images for blog posts

## Technologies Used

- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Three.js](https://threejs.org) / [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) - 3D graphics
- [Gray Matter](https://github.com/jonschlinkert/gray-matter) - Markdown frontmatter parsing
- [Remark](https://github.com/remarkjs/remark) - Markdown processing

## Customization

- Update theme colors in `tailwind.config.ts`
- Modify the 3D cloud in `src/components/ThreeCloud.tsx`
- Edit global styles in `src/app/globals.css`
