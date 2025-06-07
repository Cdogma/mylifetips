
import { useState, useRef } from "react";
import { motion, useTransform, useInView } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown, Star } from "lucide-react";
import { Link } from "react-router-dom";
import MicroInteractions from "../UI/MicroInteractions";

interface HeroSectionProps {
  yHero: any;
  opacity: any;
  scale: any;
  springX: any;
  springY: any;
}

const HeroSection = ({ yHero, opacity, scale, springX, springY }: HeroSectionProps) => {
  const heroRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <motion.section
      ref={heroRef}
      style={{ y: yHero, opacity, scale }}
      className="relative min-h-screen flex items-center justify-center px-4 z-20 overflow-hidden"
    >
      {/* Moderne Gradient Orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-[10%] w-40 h-40 bg-gradient-to-br from-blue-400/30 via-purple-500/20 to-pink-400/30 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.2, 1],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 right-[10%] w-32 h-32 bg-gradient-to-br from-emerald-400/30 via-cyan-500/20 to-blue-400/30 rounded-full blur-3xl"
      />

      {/* Top Decorative Elements */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
        />
      </div>
      
      <div className="relative z-30 text-center max-w-6xl mx-auto">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isHeroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
          className="mb-8"
        >
          <MicroInteractions type="float" intensity="subtle">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 via-slate-700/80 to-slate-800/80 backdrop-blur-xl rounded-full border border-slate-600/30 shadow-2xl mb-8 group hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              </div>
              <span className="text-slate-200 font-semibold text-sm">
                Premium Empfehlungen
              </span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
          </MicroInteractions>
        </motion.div>
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9]"
        >
          <motion.span 
            className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-slate-200 mb-2"
            style={{
              filter: "drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))"
            }}
          >
            DEIN LEBEN.
          </motion.span>
          <motion.span 
            className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 relative"
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
              filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.4))"
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
          className="text-lg md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Entdecke ehrliche Produktempfehlungen und wertvolle Life-Hacks, 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium"> die dein Leben verbessern</span>.
          Basierend auf echten Erfahrungen und gründlicher Recherche.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MicroInteractions type="magnetic" intensity="strong">
            <Link
              to="/empfehlungen"
              className="group relative overflow-hidden px-8 py-4 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl inline-flex items-center transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-blue-500/25"
              style={{
                boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)"
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
                animate={{
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Empfehlungen entdecken</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
            </Link>
          </MicroInteractions>
          
          <MicroInteractions type="tilt" intensity="normal">
            <Link
              to="/ueber-mich"
              className="px-8 py-4 text-lg font-semibold bg-slate-800/50 backdrop-blur-xl border border-slate-600/30 hover:border-slate-500/50 text-slate-200 rounded-xl inline-flex items-center transition-all duration-500 hover:scale-105 hover:bg-slate-700/50"
            >
              Mehr über mich
            </Link>
          </MicroInteractions>
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
            className="flex flex-col items-center text-slate-400"
          >
            <span className="text-sm mb-2 font-medium">Entdecke mehr</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
