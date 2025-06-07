
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const UltraModernHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Dynamic cursor glow */}
      <motion.div
        className="fixed w-96 h-96 pointer-events-none z-10"
        style={{
          background: "radial-gradient(circle, rgba(255, 105, 180, 0.15) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, type: "spring" }}
          className="mb-12"
        >
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-8 py-4 mb-12 rounded-2xl border border-white/20"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 25px 50px -12px rgba(255, 105, 180, 0.3)"
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-orange-400" />
            </motion.div>
            <span className="text-white/90 font-semibold text-lg">
              Willkommen in der Zukunft
            </span>
          </motion.div>

          {/* Main headline with quantum effects */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none overflow-hidden">
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "200% 200%",
                filter: "drop-shadow(0 0 40px rgba(255, 105, 180, 0.6))"
              }}
            >
              ELITE
            </motion.span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-400"
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "200% 200%",
                filter: "drop-shadow(0 0 40px rgba(0, 255, 255, 0.6))"
              }}
            >
              LIFESTYLE
            </motion.span>
          </h1>

          {/* Subtitle with kinetic typography */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl md:text-3xl text-slate-300 mb-16 max-w-4xl mx-auto font-light leading-relaxed"
          >
            Entdecke eine neue Dimension der 
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400 font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {" "}Perfektion{" "}
            </motion.span>
            und erlebe, wie Technologie dein Leben revolutioniert
          </motion.p>

          {/* CTA Buttons with magnetic effects */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link
              to="/empfehlungen"
              className="group relative px-12 py-6 text-xl font-bold text-white rounded-2xl inline-flex items-center transition-all duration-700 hover:scale-110 hover:rotate-1"
              style={{
                background: "linear-gradient(135deg, #ff9a00, #ff69b4, #00ffff, #8a2be2)",
                backgroundSize: "300% 300%",
                boxShadow: "0 25px 50px -12px rgba(255, 105, 180, 0.5)"
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: "linear-gradient(135deg, #8a2be2, #00ffff, #ff69b4, #ff9a00)",
                  backgroundSize: "300% 300%"
                }}
              />
              <span className="relative z-10 flex items-center">
                Evolution starten
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-3 w-6 h-6" />
                </motion.div>
              </span>
            </Link>

            <Link
              to="/kontakt"
              className="px-12 py-6 text-xl font-semibold text-white rounded-2xl inline-flex items-center transition-all duration-500 hover:scale-105"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              <Zap className="mr-3 w-6 h-6 text-cyan-400" />
              Beratung erhalten
            </Link>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-20 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </section>
  );
};

export default UltraModernHero;
