import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const isHome2 = location.pathname === '/home2';

  const toggleTheme = () => {
    // Add smooth transition class to body
    document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";
    
    setTheme(theme === "light" ? "dark" : "light");
    
    // Remove transition after animation
    setTimeout(() => {
      document.body.style.transition = "";
    }, 500);
  };

  if (isHome2) {
    return (
      <motion.button
        onClick={toggleTheme}
        className="relative p-3 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden group"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
        }}
        aria-label={theme === "light" ? "Dunkelmodus aktivieren" : "Hellmodus aktivieren"}
        whileHover={{ scale: 1.1, rotateY: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Animated background glow */}
        <motion.div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: theme === "light" 
              ? "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))"
              : "linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.2))",
            boxShadow: theme === "light" 
              ? "0 0 30px rgba(59, 130, 246, 0.3)" 
              : "0 0 30px rgba(251, 191, 36, 0.3)"
          }}
        />
        
        <motion.div 
          className="transition-opacity duration-300 relative z-10"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-white group-hover:text-blue-300 transition-colors duration-300" />
              ) : (
                <Sun className="h-5 w-5 text-white group-hover:text-yellow-300 transition-colors duration-300" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {/* Quantum particles */}
        <motion.div 
          className="absolute top-1 right-1 w-1 h-1 rounded-full opacity-60"
          style={{
            background: theme === "light" 
              ? "linear-gradient(45deg, #3b82f6, #8b5cf6)" 
              : "linear-gradient(45deg, #fbbf24, #f59e0b)"
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-3 transition-all duration-300"
      aria-label={theme === "light" ? "Dunkelmodus aktivieren" : "Hellmodus aktivieren"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div 
        className="transition-opacity duration-300"
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5 text-white transition-colors duration-300" />
        ) : (
          <Sun className="h-5 w-5 text-white transition-colors duration-300" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
