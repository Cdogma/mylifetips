
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MicroInteractions from "../UI/MicroInteractions";

const StatsSection = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const stats = [
    { number: "∞", label: "Möglichkeiten", icon: "🚀" },
    { number: "99.99%", label: "Perfektion", icon: "⚡" },
    { number: "24/7", label: "Evolution", icon: "🌟" },
    { number: "0ms", label: "Latenz", icon: "💎" }
  ];

  return (
    <motion.section
      ref={statsRef}
      className="relative py-32 px-4 z-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
          animate={isStatsInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 1, type: "spring" }}
          className="relative p-16 glass-card rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(30px)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
          }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <motion.div 
              className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500">
                  Unglaubliche Zahlen
                </span>
              </h2>
              <p className="text-xl text-gray-300 font-light">
                Perfektion in Daten gemessen
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={isStatsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
                  className="text-center group"
                >
                  <MicroInteractions type="hover" intensity="strong">
                    <div className="relative mb-6">
                      <motion.div 
                        className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-500"
                        style={{
                          filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))"
                        }}
                        whileHover={{ rotateY: 10 }}
                      >
                        {stat.number}
                      </motion.div>
                      <motion.div 
                        className="text-4xl absolute -top-4 -right-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
                        whileHover={{ scale: 1.5, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {stat.icon}
                      </motion.div>
                    </div>
                    <div className="text-gray-400 font-semibold text-lg group-hover:text-white transition-colors duration-500">
                      {stat.label}
                    </div>
                  </MicroInteractions>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
