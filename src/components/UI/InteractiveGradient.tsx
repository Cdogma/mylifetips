
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const InteractiveGradient = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Track mouse position for desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    // Auto-animation for mobile
    let intervalId: number | undefined;
    
    if (isMobile) {
      intervalId = window.setInterval(() => {
        setMousePosition({
          x: 0.5 + (Math.random() - 0.5) * 0.3,
          y: 0.5 + (Math.random() - 0.5) * 0.3,
        });
      }, 3000);
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isMobile]);

  return (
    <motion.div 
      className="fixed inset-0 -z-10 opacity-50 pointer-events-none transition-opacity duration-1000"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1.5 }}
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
          radial-gradient(circle at ${100 - mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
          radial-gradient(circle at ${mousePosition.x * 100}% ${100 - mousePosition.y * 100}%, rgba(244, 63, 94, 0.1) 0%, transparent 50%),
          radial-gradient(circle at ${100 - mousePosition.x * 100}% ${100 - mousePosition.y * 100}%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)
        `,
        backgroundSize: '200% 200%',
        backgroundPosition: 'center',
        transition: isMobile ? 'background 1.5s ease-out' : 'background 0.3s ease-out'
      }}
    />
  );
};

export default InteractiveGradient;
