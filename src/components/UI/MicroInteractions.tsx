
import React from 'react';
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
  
  const getInteractionClasses = () => {
    const intensityMap = {
      subtle: {
        hover: 'hover:scale-101 hover:-translate-y-0.5',
        click: 'active:scale-98',
        magnetic: 'hover:scale-102 hover:-translate-y-1',
        tilt: 'hover:rotate-1',
        float: 'animate-float',
        glow: 'hover:shadow-lg hover:shadow-primary/20'
      },
      normal: {
        hover: 'hover:scale-105 hover:-translate-y-1',
        click: 'active:scale-95',
        magnetic: 'hover:scale-110 hover:-translate-y-2',
        tilt: 'hover:rotate-2',
        float: 'animate-float',
        glow: 'hover:shadow-xl hover:shadow-primary/30 animate-glow'
      },
      strong: {
        hover: 'hover:scale-110 hover:-translate-y-2',
        click: 'active:scale-90',
        magnetic: 'hover:scale-125 hover:-translate-y-3',
        tilt: 'hover:rotate-3',
        float: 'animate-float',
        glow: 'hover:shadow-2xl hover:shadow-primary/40 animate-glow'
      }
    };

    return intensityMap[intensity][type];
  };

  const baseClasses = 'transition-all duration-300 ease-bounce-soft transform-gpu';
  
  return (
    <div 
      className={cn(
        baseClasses, 
        getInteractionClasses(),
        className
      )}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
};

export default MicroInteractions;
