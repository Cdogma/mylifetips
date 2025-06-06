
import { motion } from "framer-motion";
import { Heart, Rocket, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const EliteCallToAction = () => {
  return (
    <motion.section className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="relative p-20 rounded-3xl border border-white/20 overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(30px)",
            boxShadow: "0 25px 50px -12px rgba(255, 105, 180, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          }}
        >
          {/* Dynamic holographic background */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(255,154,0,0.1), rgba(255,105,180,0.1), rgba(0,255,255,0.05), rgba(138,43,226,0.1))",
                "linear-gradient(135deg, rgba(138,43,226,0.1), rgba(0,255,255,0.1), rgba(255,105,180,0.05), rgba(255,154,0,0.1))",
                "linear-gradient(225deg, rgba(0,255,255,0.1), rgba(255,154,0,0.1), rgba(138,43,226,0.05), rgba(255,105,180,0.1))",
                "linear-gradient(315deg, rgba(255,105,180,0.1), rgba(138,43,226,0.1), rgba(255,154,0,0.05), rgba(0,255,255,0.1))"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-10">
            {/* Floating icon constellation */}
            <motion.div 
              className="flex justify-center mb-12"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <motion.div 
                  className="p-6 rounded-3xl shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, #ff9a00, #ff69b4, #00ffff, #8a2be2)",
                    boxShadow: "0 25px 50px -12px rgba(255, 105, 180, 0.5)"
                  }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Heart className="w-16 h-16 text-white" />
                </motion.div>
                
                {/* Orbiting elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-4 h-4 text-white" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Kinetic headline */}
            <h2 className="text-5xl md:text-7xl font-black mb-8 overflow-hidden">
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400"
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
                  filter: "drop-shadow(0 0 30px rgba(255, 105, 180, 0.6))"
                }}
              >
                READY FOR INFINITY?
              </motion.span>
            </h2>
            
            <p className="text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Betrete eine neue Dimension der Möglichkeiten. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400 font-semibold">
                {" "}Deine Metamorphose wartet.
              </span>
            </p>
            
            {/* Elite action buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link
                to="/empfehlungen"
                className="group px-16 py-6 text-xl font-bold text-white rounded-2xl inline-flex items-center transition-all duration-700 hover:scale-110 hover:rotate-1 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #ff9a00, #ff69b4, #00ffff, #8a2be2)",
                  backgroundSize: "300% 300%",
                  boxShadow: "0 25px 50px -12px rgba(255, 105, 180, 0.5)"
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: "linear-gradient(135deg, #8a2be2, #00ffff, #ff69b4, #ff9a00)",
                    backgroundSize: "300% 300%"
                  }}
                />
                <span className="relative z-10 flex items-center">
                  ASCENSION BEGINNEN
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Rocket className="ml-4 w-7 h-7" />
                  </motion.div>
                </span>
              </Link>
              
              <Link
                to="/kontakt"
                className="px-16 py-6 text-xl font-semibold backdrop-blur-xl border-2 text-white rounded-2xl inline-flex items-center transition-all duration-500 hover:scale-105"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderImage: "linear-gradient(135deg, rgba(255, 154, 0, 0.5), rgba(0, 255, 255, 0.5)) 1",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
              >
                ELITE KONTAKT
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EliteCallToAction;
