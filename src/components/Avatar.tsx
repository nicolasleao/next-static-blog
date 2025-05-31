"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Avatar() {
  return (
    <motion.div 
      className="relative w-32 h-32 mb-4"
      whileHover={{ 
        scale: 1.05,
        rotate: 2,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Image 
        src="/images/profile-picture.webp" 
        alt="Nicolas' profile picture"
        width={128}
        height={128}
        className="rounded-full border-2 border-pastel-primary shadow-lg"
        priority
      />
    </motion.div>
  );
} 