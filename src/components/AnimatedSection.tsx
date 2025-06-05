"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { scrollStaggerContainer, scrollStaggerItem, scrollStaggerProps } from "../utils/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedSection({ children, className = "py-12" }: AnimatedSectionProps) {
  return (
    <motion.section 
      className={className}
      variants={scrollStaggerContainer}
      {...scrollStaggerProps}
    >
      <motion.div variants={scrollStaggerItem}>
        {children}
      </motion.div>
    </motion.section>
  );
} 