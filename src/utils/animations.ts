export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }
};

// Container variants for staggered animations
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

// Scroll-triggered animation variants (variants only)
export const scrollFadeInUpVariants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

// Scroll animation props (for component props)
export const scrollAnimationProps = {
  initial: "initial",
  whileInView: "whileInView",
  viewport: { once: true, margin: "-100px" }
};

export const scrollStaggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const scrollStaggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

// Scroll container props
export const scrollStaggerProps = {
  initial: "initial",
  whileInView: "whileInView",
  viewport: { once: true, margin: "-50px" }
};

// Hover animations
export const hoverScale = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  whileTap: { scale: 0.95 }
};

export const hoverLift = {
  whileHover: { 
    y: -5,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

// Hero animations with delays
export const heroTitle = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const heroSubtitle = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const heroAvatar = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }
};

// Legacy exports for backward compatibility (keeping old names)
export const scrollFadeInUp = scrollFadeInUpVariants; 