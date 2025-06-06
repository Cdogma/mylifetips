
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MicroInteractionProps {
  children: React.ReactNode;
  type?: 'hover' | 'click' | 'magnetic' | 'tilt' | 'float' | 'glow';
  className?: string;
  intensity?: 'subtle' | 'normal' | 'strong';
}

const MicroInteractions = ({ 
  children, 
  type = 'hover', 
  className = '',
  intensity = 'normal'
}: MicroInteractionProps) => {
  
  const getHoverAnimation = () => {
    const intensityMap = {
      subtle: {
        hover: { scale: 1.02, y: -2 },
        click: { scale: 0.98 },
        magnetic: { scale: 1.05, y: -4 },
        tilt: { rotate: 1 },
        float: { y: [-2, 2, -2] },
        glow: { scale: 1.02, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)" }
      },
      normal: {
        hover: { scale: 1.05, y: -4 },
        click: { scale: 0.95 },
        magnetic: { scale: 1.1, y: -8 },
        tilt: { rotate: 2 },
        float: { y: [-4, 4, -4] },
        glow: { scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }
      },
      strong: {
        hover: { scale: 1.1, y: -8 },
        click: { scale: 0.9 },
        magnetic: { scale: 1.25, y: -12 },
        tilt: { rotate: 3 },
        float: { y: [-6, 6, -6] },
        glow: { scale: 1.1, boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)" }
      }
    };

    return intensityMap[intensity][type];
  };

  const getTransition = () => {
    if (type === 'float') {
      return {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      };
    }
    return {
      duration: 0.3,
      ease: [0.25, 0.25, 0, 1]
    };
  };

  return (
    <motion.div 
      className={cn('transform-gpu', className)}
      whileHover={type !== 'float' ? getHoverAnimation() : undefined}
      whileTap={type === 'click' ? getHoverAnimation() : undefined}
      animate={type === 'float' ? getHoverAnimation() : undefined}
      transition={getTransition()}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  );
};

export default MicroInteractions;
