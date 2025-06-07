
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden group"
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 8px 32px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
      }}
      aria-label={theme === "light" ? "Dunkelmodus aktivieren" : "Hellmodus aktivieren"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Holographic glow background */}
      <motion.div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, rgba(255, 154, 0, 0.1), rgba(255, 105, 180, 0.1), rgba(0, 255, 255, 0.1))",
          boxShadow: "0 0 30px rgba(255, 105, 180, 0.3)"
        }}
      />
      
      <motion.div 
        className="transition-opacity duration-300 relative z-10"
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5 text-white group-hover:text-cyan-300 transition-colors duration-300" />
        ) : (
          <Sun className="h-5 w-5 text-white group-hover:text-orange-300 transition-colors duration-300" />
        )}
      </motion.div>
      
      {/* Quantum particles */}
      <motion.div 
        className="absolute top-1 right-1 w-1 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-60"
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
};

export default ThemeToggle;
