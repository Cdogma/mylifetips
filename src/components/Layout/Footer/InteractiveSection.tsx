
import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import { getFeatureFlags } from "@/config/environment";

const InteractiveSection = () => {
  const { theme, setTheme } = useTheme();
  const flags = getFeatureFlags();
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const socialLinks = [
    { icon: Twitter, color: "from-blue-400 to-blue-600" },
    { icon: Instagram, color: "from-pink-400 to-purple-600" },
    { icon: Linkedin, color: "from-blue-500 to-blue-700" }
  ];

  return (
    <motion.div 
      className="md:col-span-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="glass-card p-8 micro-tilt"
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 25px 50px rgba(168, 85, 247, 0.25)"
        }}
      >
        {flags.showNewsletterSignup && (
          <div className="mb-10">
            <h4 className="text-xl font-bold mb-6 gradient-text">
              Newsletter
            </h4>
            <div className="relative">
              <input 
                type="email" 
                className="w-full p-5 rounded-2xl glass-card text-white placeholder-gray-400 focus:border-purple-500/50 focus:bg-white/10 transition-all outline-none" 
                placeholder="Deine E-Mail"
              />
              <motion.button 
                className="absolute right-2 top-2 bottom-2 px-8 glass-button rounded-xl font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ✨
              </motion.button>
            </div>
          </div>
        )}
        
        {/* Social Links */}
        {flags.showSocialMedia && (
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-6 gradient-text-secondary">
              Social Media
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`p-4 rounded-2xl bg-gradient-to-r ${social.color} text-white transition-all micro-hover`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 15,
                    boxShadow: "0 15px 30px rgba(168, 85, 247, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        )}
        
        {/* Enhanced Theme Switch */}
        <motion.div 
          className="flex items-center cursor-pointer p-5 rounded-2xl glass-card border border-white/10 hover:border-white/20 transition-all micro-hover"
          onClick={toggleTheme}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className={`relative w-20 h-10 rounded-full transition-all duration-500 ${theme === 'dark' ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gradient-to-r from-amber-400 to-orange-500'}`}>
            <motion.div 
              className={`absolute w-8 h-8 rounded-full top-1 transition-all duration-500 ${theme === 'dark' ? 'bg-slate-900 translate-x-11' : 'bg-white translate-x-1'}`}
              animate={{ 
                x: theme === 'dark' ? 44 : 4,
                boxShadow: theme === 'dark' ? "0 0 20px rgba(168, 85, 247, 0.5)" : "0 0 20px rgba(251, 191, 36, 0.5)"
              }}
            />
          </div>
          <span className="text-gray-300 text-lg ml-5 font-medium">
            {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InteractiveSection;
