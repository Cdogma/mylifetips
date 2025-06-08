
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";
    setTheme(theme === "light" ? "dark" : "light");
    setTimeout(() => {
      document.body.style.transition = "";
    }, 500);
  };

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
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 text-white transition-colors duration-300" />
            ) : (
              <Sun className="h-5 w-5 text-white transition-colors duration-300" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
