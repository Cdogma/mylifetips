
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MicroInteractionProps {
  children: React.ReactNode;
  type?: 'hover' | 'click' | 'magnetic' | 'tilt' | 'float' | 'glow' | 'pulse' | 'shake' | 'bounce';
  className?: string;
  intensity?: 'subtle' | 'normal' | 'strong';
}

const MicroInteractions = ({ 
  children, 
  type = 'hover', 
  className = '',
  intensity = 'normal'
}: MicroInteractionProps) => {
  
  // For magnetic effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smoother animation with springs
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (type === 'magnetic') {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance from center
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        // Map intensity to movement amount
        const intensityFactor = intensity === 'subtle' ? 0.2 : intensity === 'normal' ? 0.5 : 1;
        x.set(distanceX * intensityFactor);
        y.set(distanceY * intensityFactor);
      }
    },
    [type, intensity, x, y]
  );

  const handleMouseLeave = React.useCallback(() => {
    if (type === 'magnetic') {
      x.set(0);
      y.set(0);
    }
  }, [type, x, y]);
  
  const getHoverAnimation = () => {
    const intensityMap = {
      subtle: {
        hover: { scale: 1.02, y: -2 },
        click: { scale: 0.98 },
        magnetic: {}, // handled by springs
        tilt: { rotateX: 2, rotateY: 2 },
        float: { y: [-2, 2, -2] },
        glow: { boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)" },
        pulse: { scale: [1, 1.02, 1] },
        shake: { x: [-1, 1, -1, 1, 0] },
        bounce: { y: [0, -4, 0] }
      },
      normal: {
        hover: { scale: 1.05, y: -4 },
        click: { scale: 0.95 },
        magnetic: {}, // handled by springs
        tilt: { rotateX: 5, rotateY: 5 },
        float: { y: [-4, 4, -4] },
        glow: { boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" },
        pulse: { scale: [1, 1.05, 1] },
        shake: { x: [-2, 2, -2, 2, 0] },
        bounce: { y: [0, -8, 0] }
      },
      strong: {
        hover: { scale: 1.1, y: -8 },
        click: { scale: 0.9 },
        magnetic: {}, // handled by springs
        tilt: { rotateX: 8, rotateY: 8 },
        float: { y: [-6, 6, -6] },
        glow: { boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)" },
        pulse: { scale: [1, 1.1, 1] },
        shake: { x: [-4, 4, -4, 4, 0] },
        bounce: { y: [0, -12, 0] }
      }
    };

    return intensityMap[intensity][type];
  };

  const getTransition = () => {
    if (type === 'pulse' || type === 'float') {
      return {
        duration: type === 'pulse' ? 1.5 : 3,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: "easeInOut"
      };
    }
    if (type === 'shake' || type === 'bounce') {
      return {
        duration: 0.5,
        repeat: 0,
        type: "spring",
        stiffness: 300,
        damping: 10
      };
    }
    return {
      duration: 0.3,
      ease: [0.25, 0.25, 0, 1]
    };
  };

  // Common props for motion component
  const motionProps = {
    className: cn('transform-gpu', className),
    style: type === 'magnetic' ? { x: springX, y: springY } : undefined,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileHover: ['float', 'pulse'].includes(type) ? undefined : getHoverAnimation(),
    whileTap: type === 'click' ? getHoverAnimation() : undefined,
    animate: ['float', 'pulse'].includes(type) ? getHoverAnimation() : undefined,
    transition: getTransition(),
  };

  return <motion.div {...motionProps}>{children}</motion.div>;
};

export default MicroInteractions;
