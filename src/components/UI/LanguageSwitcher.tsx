
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div 
      className="flex bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-1"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <motion.button
        onClick={() => setLanguage("de")}
        className={`px-4 py-2 rounded-xl transition-all duration-300 ${
          language === "de" 
            ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg" 
            : "text-white/70 hover:text-white"
        }`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-sm font-medium">DE</span>
      </motion.button>
      
      <motion.button
        onClick={() => setLanguage("en")}
        className={`px-4 py-2 rounded-xl transition-all duration-300 ${
          language === "en" 
            ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg" 
            : "text-white/70 hover:text-white"
        }`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-sm font-medium">EN</span>
      </motion.button>
    </motion.div>
  );
};

export default LanguageSwitcher;
