
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowUp, Facebook, Instagram, Twitter, Linkedin, Heart, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { getFeatureFlags } from "@/config/environment";

const ModernFooter = () => {
  const currentYear = new Date().getFullYear();
  const { theme, setTheme } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const flags = getFeatureFlags();
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.querySelector('footer')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      <div className="relative overflow-hidden footer-glass">
        {/* Enhanced Background Effects */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.4) 0%, transparent 70%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.3) 0%, transparent 70%),
              radial-gradient(circle at ${mousePosition.x}% ${100 - mousePosition.y}%, rgba(16, 185, 129, 0.3) 0%, transparent 70%)
            `,
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating orbs with improved positioning */}
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl float-element"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl float-element"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl float-element"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        
        <footer className="relative z-10 section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
              {/* Brand Section */}
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
              
              {/* Legal Section */}
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
                    {[
                      { name: "Impressum", href: "/impressum" },
                      { name: "Datenschutz", href: "/datenschutz" },
                      { name: "Kontakt", href: "/kontakt" },
                      { name: "Über mich", href: "/ueber-mich" }
                    ].map((link, index) => (
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
              
              {/* Interactive Section */}
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
                        {[
                          { icon: Twitter, color: "from-blue-400 to-blue-600" },
                          { icon: Instagram, color: "from-pink-400 to-purple-600" },
                          { icon: Linkedin, color: "from-blue-500 to-blue-700" }
                        ].map((social, index) => (
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
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-10 border-t border-white/10 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="text-gray-400 text-lg">
                © {currentYear} <span className="gradient-text font-bold">MyLifeTips</span>. Made with ❤️ in Germany.
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
      
      {/* Enhanced Scroll to top button */}
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
    </>
  );
};

export default ModernFooter;
