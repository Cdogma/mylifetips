
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
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Advanced Background Effects */}
        <motion.div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 70%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.2) 0%, transparent 70%),
              radial-gradient(circle at ${mousePosition.x}% ${100 - mousePosition.y}%, rgba(16, 185, 129, 0.2) 0%, transparent 70%)
            `,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <footer className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            {/* Brand Section */}
            <motion.div 
              className="md:col-span-6 flex flex-col gap-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="glass-card p-8 rounded-3xl border border-white/20 hover:border-white/30 transition-all duration-500"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(30px)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: "0 35px 60px -12px rgba(168, 85, 247, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Heart className="w-8 h-8 text-pink-400" />
                  MyLifeTips
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </motion.div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Ehrliche Tipps und Empfehlungen für ein besseres Leben – mit Fokus auf Finanzen, Business, Technik und Lifestyle.
                </p>
                <motion.p 
                  className="text-gray-400 text-sm italic border-l-2 border-purple-500/50 pl-4 glass-card p-4 rounded-xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    backdropFilter: "blur(10px)"
                  }}
                  whileHover={{ borderColor: "rgba(168, 85, 247, 0.8)" }}
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
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="glass-card p-6 rounded-2xl w-full border border-white/10 hover:border-white/20 transition-all duration-500"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)"
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
                }}
              >
                <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Rechtliches
                </h3>
                <div className="flex flex-col gap-y-3">
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
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <Link 
                        to={link.href} 
                        className="text-gray-300 hover:text-white text-lg transition-all duration-300 flex items-center gap-2 p-3 rounded-xl hover:bg-white/5"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
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
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)"
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.2)"
                }}
              >
                {flags.showNewsletterSignup && (
                  <div className="mb-8">
                    <h4 className="text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                      Newsletter
                    </h4>
                    <div className="relative">
                      <input 
                        type="email" 
                        className="w-full p-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white placeholder-gray-400 focus:border-purple-500/50 focus:bg-white/10 transition-all outline-none" 
                        placeholder="Deine E-Mail"
                      />
                      <motion.button 
                        className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium transition-all hover:opacity-90"
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
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                      Social Media
                    </h4>
                    <div className="flex gap-3">
                      {[
                        { icon: Twitter, color: "from-blue-400 to-blue-600" },
                        { icon: Instagram, color: "from-pink-400 to-purple-600" },
                        { icon: Linkedin, color: "from-blue-500 to-blue-700" }
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href="#"
                          className={`p-3 rounded-xl bg-gradient-to-r ${social.color} text-white transition-all`}
                          whileHover={{ 
                            scale: 1.1, 
                            rotateY: 15,
                            boxShadow: "0 10px 20px rgba(168, 85, 247, 0.3)"
                          }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Enhanced Theme Switch */}
                <motion.div 
                  className="flex items-center cursor-pointer p-4 rounded-xl glass-card border border-white/10 hover:border-white/20 transition-all"
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    backdropFilter: "blur(10px)"
                  }}
                >
                  <div className={`relative w-16 h-8 rounded-full transition-all duration-500 ${theme === 'dark' ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gradient-to-r from-amber-400 to-orange-500'}`}>
                    <motion.div 
                      className={`absolute w-6 h-6 rounded-full top-1 transition-all duration-500 ${theme === 'dark' ? 'bg-slate-900 translate-x-9' : 'bg-white translate-x-1'}`}
                      animate={{ 
                        x: theme === 'dark' ? 32 : 4,
                        boxShadow: theme === 'dark' ? "0 0 20px rgba(168, 85, 247, 0.5)" : "0 0 20px rgba(251, 191, 36, 0.5)"
                      }}
                    />
                  </div>
                  <span className="text-gray-300 text-sm ml-4 font-medium">
                    {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 border-t border-white/10 gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-gray-400 text-sm">
              © {currentYear} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">MyLifeTips</span>. Made with ❤️ in Germany.
            </div>
          </motion.div>
        </footer>
      </div>
      
      {/* Enhanced Scroll to top button */}
      <motion.div 
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        onClick={scrollToTop}
        whileHover={{ 
          scale: 1.1,
          rotateY: 15,
          boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        style={{
          background: "linear-gradient(135deg, rgba(168, 85, 247, 0.9), rgba(59, 130, 246, 0.9))",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)"
        }}
        className="w-14 h-14 rounded-2xl flex items-center justify-center cursor-pointer text-white shadow-2xl"
      >
        <ArrowUp className="h-6 w-6" />
      </motion.div>
    </>
  );
};

export default ModernFooter;
