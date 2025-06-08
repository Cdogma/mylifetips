
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const UltraModernHero = () => {
  const heroRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isHeroInView = useInView(heroRef, { once: true });

  const letterVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -90 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const text1 = "REVOLUTION".split("");
  const text2 = "BEGINNT JETZT".split("");

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-[15%] w-32 h-32"
        >
          <div className="w-full h-full border-2 border-orange-400/30 rounded-full" />
          <div className="absolute inset-4 border border-pink-400/40 rounded-full" />
        </motion.div>
        
        <motion.div
          animate={{
            rotate: [360, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 right-[10%] w-24 h-24 border-2 border-cyan-400/30 rotate-45"
        />
      </div>
      
      <div className="relative z-10 text-center max-w-7xl mx-auto">
        {/* Premium Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={isHeroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 backdrop-blur-xl mb-8 group hover:scale-105 transition-all duration-500"
               style={{
                 background: "linear-gradient(135deg, rgba(255, 154, 0, 0.1), rgba(255, 105, 180, 0.1), rgba(0, 255, 255, 0.05))",
                 boxShadow: "0 20px 40px -12px rgba(255, 105, 180, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
               }}>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-orange-400 fill-orange-400" />
              <Star className="w-5 h-5 text-pink-400 fill-pink-400" />
              <Star className="w-5 h-5 text-cyan-400 fill-cyan-400" />
            </div>
            <span className="text-white font-bold text-lg">
              ELITE EXPERIENCE
            </span>
            <Sparkles className="w-6 h-6 text-orange-400" />
          </div>
        </motion.div>
        
        {/* Kinetic Typography Headlines */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={isHeroInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-[0.85] overflow-hidden"
        >
          <div className="mb-2">
            {text1.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate={isHeroInView ? "visible" : "hidden"}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400"
                style={{
                  backgroundSize: "200% 200%",
                  filter: "drop-shadow(0 0 30px rgba(255, 105, 180, 0.6))"
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div>
            {text2.map((letter, i) => (
              <motion.span
                key={i}
                custom={i + text1.length}
                variants={letterVariants}
                initial="hidden"
                animate={isHeroInView ? "visible" : "hidden"}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                style={{
                  backgroundSize: "200% 200%",
                  filter: "drop-shadow(0 0 30px rgba(0, 255, 255, 0.6))"
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </motion.h1>
        
        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-2xl md:text-3xl text-slate-300 mb-16 max-w-5xl mx-auto leading-relaxed font-light"
        >
          Tauche ein in die{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 font-semibold">
            Zukunft des Lebens
          </span>
          {" "}– wo jede Entscheidung{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
            perfekt optimiert
          </span>
          {" "}ist.
        </motion.p>
        
        {/* Advanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            to="/empfehlungen"
            className="group relative overflow-hidden px-12 py-6 text-xl font-bold text-white rounded-2xl inline-flex items-center transition-all duration-700 hover:scale-110 hover:rotate-1"
            style={{
              background: "linear-gradient(135deg, #ff9a00, #ff69b4, #00ffff, #8a2be2)",
              backgroundSize: "300% 300%",
              boxShadow: "0 25px 50px -12px rgba(255, 105, 180, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: isHovered 
                  ? "linear-gradient(135deg, #8a2be2, #00ffff, #ff69b4, #ff9a00)"
                  : "linear-gradient(135deg, #ff9a00, #ff69b4, #00ffff, #8a2be2)",
                backgroundPosition: isHovered ? "100% 100%" : "0% 0%"
              }}
              transition={{ duration: 0.8 }}
              style={{ backgroundSize: "300% 300%" }}
            />
            <span className="relative z-10 flex items-center">
              EVOLUTION STARTEN
              <motion.div
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.7 }}
              >
                <Zap className="ml-3 w-6 h-6" />
              </motion.div>
            </span>
          </Link>
          
          <Link
            to="/ueber-mich"
            className="px-12 py-6 text-xl font-semibold backdrop-blur-xl border-2 text-white rounded-2xl inline-flex items-center transition-all duration-500 hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderImage: "linear-gradient(135deg, rgba(255, 154, 0, 0.5), rgba(0, 255, 255, 0.5)) 1",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
            }}
          >
            MEHR ERFAHREN
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UltraModernHero;
