
import { useState, useRef } from "react";
import { motion, useTransform, useInView } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
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
      style={{ y: yHero, opacity, scale, rotateX: springY, rotateY: springX }}
      className="relative min-h-screen flex items-center justify-center px-4 z-20"
    >
      {/* Floating 3D Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotateX: [0, 10, 0],
          rotateY: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-[5%] w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl"
        style={{
          transformStyle: "preserve-3d",
          boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
        }}
      />
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotateX: [0, -8, 0],
          rotateY: [0, -12, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-32 right-[8%] w-24 h-24 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl"
        style={{
          transformStyle: "preserve-3d",
          boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)"
        }}
      />
      
      <div className="relative z-30 text-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isHeroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="mb-12"
        >
          <MicroInteractions type="float" intensity="subtle">
            <div className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-full border border-white/20 shadow-2xl mb-12 group hover:scale-105 transition-all duration-500">
              <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 font-bold text-lg">
                Willkommen in der Zukunft
              </span>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
            </div>
          </MicroInteractions>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.span 
            className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundSize: "200% 200%",
              filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))"
            }}
          >
            NEXT LEVEL
          </motion.span>
          <motion.span 
            className="block text-white"
            style={{
              filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
            }}
          >
            DIGITAL EXPERIENCE
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Erlebe eine Revolution des Digitalen. Wo Künstliche Intelligenz auf 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"> grenzenlose Innovation </span>
          trifft und Träume zu virtueller Realität werden.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <MicroInteractions type="magnetic" intensity="strong">
            <Link
              to="/empfehlungen"
              className="group relative overflow-hidden px-12 py-6 text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-2xl inline-flex items-center transition-all duration-500 hover:scale-110 hover:rotate-1"
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)"
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                animate={{
                  rotate: isHovered ? 180 : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <span className="relative z-10">Jetzt entdecken</span>
              <ArrowRight className="ml-3 w-7 h-7 transition-transform group-hover:translate-x-2 group-hover:scale-110 relative z-10" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{ transformStyle: "preserve-3d" }}
              />
            </Link>
          </MicroInteractions>
          
          <MicroInteractions type="tilt" intensity="normal">
            <Link
              to="/ueber-mich"
              className="px-12 py-6 text-xl font-semibold glass-card border border-white/20 hover:border-white/40 text-white rounded-2xl inline-flex items-center transition-all duration-500 hover:scale-105 hover:-rotate-1"
              style={{
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              }}
            >
              Mehr erfahren
            </Link>
          </MicroInteractions>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2 font-medium">Scroll für mehr</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
