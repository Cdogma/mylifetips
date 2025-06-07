
import React from 'react';
import { motion, useInView, Variant } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade' | 'rotate';
  duration?: number;
  amount?: number;
  once?: boolean;
  staggerChildren?: boolean;
  staggerDelay?: number;
  hover?: boolean;
  custom?: any;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 0.6,
  amount = 0.1,
  once = true,
  staggerChildren = false,
  staggerDelay = 0.1,
  hover = false,
  custom,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const variants = {
    up: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 }
    },
    down: {
      hidden: { opacity: 0, y: -60 },
      visible: { opacity: 1, y: 0 }
    },
    left: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 }
    },
    right: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    rotate: {
      hidden: { opacity: 0, rotate: -5 },
      visible: { opacity: 1, rotate: 0 }
    }
  };

  const containerVariants = staggerChildren ? {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: staggerDelay,
        delayChildren: delay
      } 
    }
  } : undefined;

  const hoverVariants = hover ? {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  } : {};

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerChildren ? containerVariants : variants[direction]}
      custom={custom}
      whileHover={hover ? "hover" : undefined}
      transition={{
        duration,
        delay: staggerChildren ? 0 : delay,
        ease: [0.25, 0.25, 0, 1]
      }}
      className={className}
      {...hoverVariants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
