import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const DynamicStats = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const { t } = useLanguage();

  const stats = [
    { 
      number: "∞", 
      label: t("possibilities"), 
      icon: "🚀",
      color: "from-orange-400 to-pink-500",
      targetValue: 999
    },
    { 
      number: "99.99%", 
      label: t("perfection"), 
      icon: "⚡",
      color: "from-cyan-400 to-blue-500", 
      targetValue: 99.99
    },
    { 
      number: "24/7", 
      label: t("evolution"), 
      icon: "🌟",
      color: "from-purple-400 to-pink-500",
      targetValue: 24
    },
    { 
      number: "0ms", 
      label: t("latency"), 
      icon: "💎",
      color: "from-emerald-400 to-cyan-500",
      targetValue: 0
    }
  ];

  useEffect(() => {
    if (isStatsInView) {
      stats.forEach((stat, index) => {
        let startTime: number;
        const duration = 2000 + index * 200;
        
        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          
          const currentValue = progress * stat.targetValue;
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = currentValue;
            return newCounters;
          });
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
      });
    }
  }, [isStatsInView]);

  return (
    <motion.section
      ref={statsRef}
      className="relative py-32 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
          animate={isStatsInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 1, type: "spring" }}
          className="relative p-16 rounded-3xl border border-white/10 overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(30px)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
          }}
        >
          {/* Animated mesh gradient background */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <motion.div 
              className="absolute -top-1/2 -left-1/2 w-full h-full"
              animate={{
                background: [
                  "radial-gradient(circle, rgba(255,154,0,0.1) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(255,105,180,0.1) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(138,43,226,0.1) 0%, transparent 70%)"
                ],
                rotate: [0, 90, 180, 270, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400">
                  {t("legendary.stats")}
                </span>
              </h2>
              <p className="text-xl text-slate-300 font-light">
                {t("stats.making.history")}
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={isStatsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15, 
                    type: "spring",
                    stiffness: 100
                  }}
                  className="text-center group cursor-pointer"
                >
                  <div className="relative mb-6">
                    <motion.div 
                      className={`text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform duration-500`}
                      style={{
                        filter: "drop-shadow(0 0 20px rgba(255, 105, 180, 0.5))"
                      }}
                      whileHover={{ rotateY: 10, scale: 1.1 }}
                    >
                      {index < 2 ? (
                        stat.number === "∞" ? "∞" : 
                        index === 1 ? `${counters[index].toFixed(2)}%` :
                        Math.floor(counters[index])
                      ) : stat.number}
                    </motion.div>
                    
                    <motion.div 
                      className="text-4xl absolute -top-4 -right-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
                      whileHover={{ scale: 1.5, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                  </div>
                  
                  <div className={`text-slate-400 font-semibold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${stat.color} transition-all duration-500`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DynamicStats;
