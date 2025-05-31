"use client";

import { motion } from "framer-motion";
import Avatar from "./Avatar";
import { heroAvatar, heroTitle, heroSubtitle } from "../utils/animations";

export default function AnimatedHero() {
  return (
    <div className="hero-content">
      <motion.div
        variants={heroAvatar}
        initial="initial"
        animate="animate"
      >
        <Avatar />
      </motion.div>
      <motion.h1 
        className="text-4xl font-bold text-pastel-primary mb-2"
        variants={heroTitle}
        initial="initial"
        animate="animate"
      >
        Hey, I&apos;m Nicolas
      </motion.h1>
      <motion.p 
        className="text-pastel-light max-w-lg mx-auto"
        variants={heroSubtitle}
        initial="initial"
        animate="animate"
      >
        I&apos;m an AI Engineer from Brazil, and here I share some of my personal projects, guides and other content about what I&apos;m currently working on.
      </motion.p>
    </div>
  );
} 