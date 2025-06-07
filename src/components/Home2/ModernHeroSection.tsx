
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Star, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const ModernHeroSection = () => {
  const heroRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-[10%] w-32 h-32 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-2xl"
        />
        
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 right-[15%] w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"
        />
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl mb-8 group hover:scale-105 transition-all duration-500">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </div>
            <span className="text-white/90 font-semibold text-sm">
              Premium Empfehlungen
            </span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
        </motion.div>
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9]"
        >
          <motion.span 
            className="block text-white mb-2"
            style={{
              textShadow: "0 0 40px rgba(255, 255, 255, 0.3)"
            }}
          >
            DEIN LEBEN.
          </motion.span>
          <motion.span 
            className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 relative"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundSize: "200% 200%",
              textShadow: "0 0 30px rgba(168, 85, 247, 0.4)"
            }}
          >
            BESSERE ENTSCHEIDUNGEN.
          </motion.span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Entdecke ehrliche Produktempfehlungen und wertvolle Life-Hacks, 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 font-medium"> die dein Leben verbessern</span>.
          Basierend auf echten Erfahrungen und gründlicher Recherche.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/empfehlungen"
            className="group relative overflow-hidden px-8 py-4 text-lg font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white rounded-xl inline-flex items-center transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-purple-500/25"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600"
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Empfehlungen entdecken</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
          </Link>
          
          <Link
            to="/ueber-mich"
            className="px-8 py-4 text-lg font-semibold bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/30 text-white rounded-xl inline-flex items-center transition-all duration-500 hover:scale-105 hover:bg-white/15"
          >
            Mehr über mich
          </Link>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2 font-medium">Entdecke mehr</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ModernHeroSection;
