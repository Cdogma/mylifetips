
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ModernStatsSection = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const stats = [
    { number: "500+", label: "Getestete Produkte", icon: "🔍" },
    { number: "98%", label: "Zufriedenheit", icon: "⭐" },
    { number: "24/7", label: "Aktuelle Updates", icon: "🚀" },
    { number: "100%", label: "Ehrliche Reviews", icon: "💎" }
  ];

  return (
    <motion.section
      ref={statsRef}
      className="relative py-32 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative p-16 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                Beeindruckende Zahlen
              </span>
            </h2>
            <p className="text-xl text-white/70 font-light">
              Vertrauen durch Transparenz
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <motion.div 
                    className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ rotateY: 10 }}
                  >
                    {stat.number}
                  </motion.div>
                  <motion.div 
                    className="text-4xl absolute -top-4 -right-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
                    whileHover={{ scale: 1.5, rotate: 360 }}
                  >
                    {stat.icon}
                  </motion.div>
                </div>
                <div className="text-white/70 font-semibold text-lg group-hover:text-white transition-colors duration-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ModernStatsSection;
