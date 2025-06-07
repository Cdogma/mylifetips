
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LegalSection = () => {
  const legalLinks = [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Über mich", href: "/ueber-mich" }
  ];

  return (
    <motion.div 
      className="md:col-span-3 flex flex-col items-start justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="glass-card p-8 w-full micro-hover"
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
        }}
      >
        <h3 className="text-2xl font-bold mb-8 gradient-text-secondary">
          Rechtliches
        </h3>
        <div className="flex flex-col gap-y-4">
          {legalLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ x: 10 }}
            >
              <Link 
                to={link.href} 
                className="text-gray-300 hover:text-white text-lg transition-all duration-300 flex items-center gap-3 p-4 rounded-xl hover:bg-white/5 micro-hover"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse-glow"></div>
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LegalSection;
