
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div 
      className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-3xl flex items-center justify-center cursor-pointer text-white shadow-2xl transition-all duration-500 glass-card micro-hover ${
        showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onClick={scrollToTop}
      whileHover={{ 
        scale: 1.1,
        rotateY: 15,
        boxShadow: "0 20px 40px rgba(168, 85, 247, 0.5)"
      }}
      whileTap={{ scale: 0.9 }}
      style={{
        background: "linear-gradient(135deg, rgba(168, 85, 247, 0.9), rgba(59, 130, 246, 0.9))",
      }}
    >
      <ArrowUp className="h-7 w-7" />
    </motion.div>
  );
};

export default ScrollToTopButton;
