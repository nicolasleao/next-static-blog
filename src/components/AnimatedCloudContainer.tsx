"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeIn } from "../utils/animations";

interface AnimatedCloudContainerProps {
  children: ReactNode;
}

export default function AnimatedCloudContainer({ children }: AnimatedCloudContainerProps) {
  return (
    <motion.div 
      className="cloud-container"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
} 