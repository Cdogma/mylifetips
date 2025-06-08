import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Shield, Rocket, Infinity } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FuturisticFeatures = () => {
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t("neural.intelligence"),
      description: t("neural.desc"),
      gradient: "from-orange-400 via-red-500 to-pink-500",
      delay: 0,
      shadowColor: "rgba(255, 105, 180, 0.4)"
    },
    {
      icon: Shield,
      title: t("quantum.security"),
      description: t("quantum.desc"),
      gradient: "from-cyan-400 via-blue-500 to-purple-500",
      delay: 0.1,
      shadowColor: "rgba(0, 255, 255, 0.4)"
    },
    {
      icon: Rocket,
      title: t("warp.speed"),
      description: t("warp.desc"),
      gradient: "from-purple-400 via-pink-500 to-orange-500",
      delay: 0.2,
      shadowColor: "rgba(138, 43, 226, 0.4)"
    },
    {
      icon: Infinity,
      title: t("unlimited.potential"),
      description: t("unlimited.desc"),
      gradient: "from-emerald-400 via-cyan-500 to-blue-500",
      delay: 0.3,
      shadowColor: "rgba(16, 185, 129, 0.4)"
    }
  ];

  return (
    <motion.section
      ref={featuresRef}
      className="relative py-32 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400">
              {t("quantum.features")}
            </span>
          </h2>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
            {t("tech.redefining")}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 100, rotateY: -30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: feature.delay, 
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div 
                className="relative p-8 rounded-3xl border border-white/10 transition-all duration-700 hover:scale-105 hover:-translate-y-6 hover:rotate-y-12"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(30px)",
                  boxShadow: `0 25px 50px -12px ${feature.shadowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Animated background glow */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl`}
                  style={{ transform: "translateZ(-10px)" }}
                />
                
                {/* Floating icon container */}
                <motion.div 
                  className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow: `0 20px 40px -12px ${feature.shadowColor}`
                  }}
                  whileHover={{ 
                    rotateY: 15, 
                    rotateX: 10,
                    scale: 1.15
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-12 h-12 text-white" />
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-500">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FuturisticFeatures;
