
import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.4
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
