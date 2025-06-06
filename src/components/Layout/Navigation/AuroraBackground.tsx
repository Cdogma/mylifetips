
import { motion } from "framer-motion";

interface AuroraBackgroundProps {
  mousePosition: { x: number; y: number };
  scrolled: boolean;
}

const AuroraBackground = ({ mousePosition, scrolled }: AuroraBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(255, 154, 0, 0.15) 0%, 
              rgba(255, 105, 180, 0.12) 25%, 
              rgba(0, 255, 255, 0.08) 50%, 
              transparent 70%
            ),
            radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
              rgba(138, 43, 226, 0.15) 0%, 
              rgba(255, 20, 147, 0.12) 30%, 
              transparent 60%
            )
          `,
        }}
      />
      
      {/* Floating Aurora Orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-radial from-orange-400/20 to-transparent rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 0.8, 1],
          opacity: [0.3, 0.6, 0.2, 0.4],
          x: [0, 50, -25, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-radial from-cyan-400/20 to-transparent rounded-full blur-2xl"
        animate={{
          scale: [0.8, 1.4, 1, 0.9],
          opacity: [0.2, 0.5, 0.3, 0.4],
          x: [0, -40, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  );
};

export default AuroraBackground;
