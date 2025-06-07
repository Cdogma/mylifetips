
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const BrandSection = () => {
  return (
    <motion.div 
      className="md:col-span-6 flex flex-col gap-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="glass-card p-10 micro-tilt"
        whileHover={{ 
          scale: 1.02,
          rotateY: 5,
          boxShadow: "0 25px 50px rgba(168, 85, 247, 0.3)"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div 
          className="text-4xl font-black gradient-text mb-6 flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <Heart className="w-10 h-10 text-pink-400 animate-pulse-glow" />
          MyLifeTips
          <Sparkles className="w-8 h-8 text-blue-400 animate-float" />
        </motion.div>
        <p className="text-gray-300 text-xl mb-8 leading-relaxed font-light">
          Ehrliche Tipps und Empfehlungen für ein besseres Leben – mit Fokus auf Finanzen, Business, Technik und Lifestyle.
        </p>
        <motion.p 
          className="text-gray-400 text-sm italic glass-card p-6 border-l-4 border-purple-500/50"
          whileHover={{ borderColor: "rgba(168, 85, 247, 0.8)" }}
          transition={{ duration: 0.3 }}
        >
          * Transparenzhinweis: Einige Links sind Affiliate-Links. Du unterstützt damit unsere Arbeit – danke! 😊
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default BrandSection;
