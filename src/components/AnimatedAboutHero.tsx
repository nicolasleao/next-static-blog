"use client";

import { motion } from "framer-motion";
import Avatar from "./Avatar";
import { heroAvatar, heroTitle, heroSubtitle } from "../utils/animations";

export default function AnimatedAboutHero() {
  return (
    <div className="flex flex-col items-center text-center mb-8">
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
        About Me
      </motion.h1>
      <motion.p 
        className="text-pastel-light max-w-lg"
        variants={heroSubtitle}
        initial="initial"
        animate="animate"
      >
        Software Engineer & Full Stack Developer with 5 years of experience helping redefine productivity and digital experiences.
      </motion.p>
    </div>
  );
} 