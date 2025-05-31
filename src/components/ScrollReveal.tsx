import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  duration?: number;
  className?: string;
}

const defaultVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

export default function ScrollReveal({ 
  children, 
  variants = defaultVariants, 
  delay = 0,
  duration = 0.6,
  className = ""
}: ScrollRevealProps) {
  const customVariants: Variants = delay > 0 || duration !== 0.6 ? {
    initial: variants.initial,
    whileInView: {
      ...(variants.whileInView as any),
      transition: {
        delay,
        duration,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  } : variants;

  return (
    <motion.div
      className={className}
      variants={customVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
} 