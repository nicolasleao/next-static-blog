"use client";

import { motion } from "framer-motion";
import { 
  scrollFadeInUpVariants,
  scrollAnimationProps,
  scrollStaggerContainer,
  scrollStaggerItem,
  scrollStaggerProps
} from "../utils/animations";

export default function AnimatedAboutContent() {
  const skills = [
    "JavaScript (ES6+)", "React.js", "TypeScript", "PHP", "Python",
    "AI/ML", "LLMs", "Next.js", "Redux", "Nest.js",
    "Google Cloud", "AWS", "Jest", "CI/CD", "Git",
    "Elasticsearch", "Microservices", "RAG Systems", "Compound AI Systems"
  ];

  const contactLinks = [
    { href: "https://github.com/nicolasleao", text: "GitHub" },
    { href: "https://linkedin.com/in/nicolasleao", text: "LinkedIn" },
    { href: "https://www.youtube.com/@nicolasleao-tech", text: "Youtube" }
  ];

  return (
    <div className="prose prose-invert max-w-none">
      <motion.p
        variants={scrollFadeInUpVariants}
        {...scrollAnimationProps}
      >
        I&apos;m a Full Stack Engineer with expertise in accelerating value delivery and resolving complex 
        technical challenges to optimize system performance and improve user experiences. Currently 
        working at Vectal where I&apos;m helping redefine productivity through innovative software solutions.
      </motion.p>

      <motion.h2
        variants={scrollFadeInUpVariants}
        {...scrollAnimationProps}
      >
        Professional Highlights
      </motion.h2>
      <motion.ul 
        className="list-disc list-inside"
        variants={scrollStaggerContainer}
        {...scrollStaggerProps}
      >
        <motion.li variants={scrollStaggerItem}>Engineering productivity tools at Vectal with focus on UX and performance</motion.li>
        <motion.li variants={scrollStaggerItem}>Built AI systems for enterprise customer support automation at Kodif</motion.li>
        <motion.li variants={scrollStaggerItem}>Led engineering teams to deliver complex products on schedule</motion.li>
        <motion.li variants={scrollStaggerItem}>Developed ecommerce applications impacting thousands of users</motion.li>
      </motion.ul>

      <motion.h2
        variants={scrollFadeInUpVariants}
        {...scrollAnimationProps}
      >
        Skills
      </motion.h2>
      <motion.div 
        className="flex flex-wrap gap-2 my-4"
        variants={scrollStaggerContainer}
        {...scrollStaggerProps}
      >
        {skills.map((skill) => (
          <motion.span 
            key={skill} 
            className="px-3 py-1 bg-pastel-primary/20 text-pastel-primary border border-pastel-primary/30 rounded-full text-sm hover:bg-pastel-primary/30 transition-colors cursor-default"
            variants={scrollStaggerItem}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(136, 167, 115, 0.3)",
              transition: { duration: 0.2 }
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      <motion.h2
        variants={scrollFadeInUpVariants}
        {...scrollAnimationProps}
      >
        Contact Me
      </motion.h2>
      <motion.p
        variants={scrollFadeInUpVariants}
        {...scrollAnimationProps}
      >
        I&apos;m always open to collaboration and discussions about productivity, technology trends, and 
        innovative projects. Feel free to reach out via:
      </motion.p>
      <motion.ul
        variants={scrollStaggerContainer}
        {...scrollStaggerProps}
      >
        {contactLinks.map((link) => (
          <motion.li key={link.text} variants={scrollStaggerItem}>
            <motion.a 
              href={link.href} 
              className="text-pastel-secondary hover:text-pastel-accent transition-colors"
              whileHover={{ 
                x: 5,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              {link.text}
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
} 