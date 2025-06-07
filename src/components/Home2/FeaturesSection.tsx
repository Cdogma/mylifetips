
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Shield, Rocket, Globe } from "lucide-react";
import MicroInteractions from "../UI/MicroInteractions";

interface FeaturesSectionProps {
  yFeatures: any;
  rotate: any;
}

const FeaturesSection = ({ yFeatures, rotate }: FeaturesSectionProps) => {
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true });

  const features = [
    {
      icon: Zap,
      title: "Hypersonische Performance",
      description: "Quantum-optimierte Algorithmen für unvorstellbare Geschwindigkeit",
      color: "from-amber-400 via-orange-500 to-red-500",
      delay: 0
    },
    {
      icon: Shield,
      title: "Unzerbrechliche Sicherheit",
      description: "Militärgrade Verschlüsselung mit KI-gestütztem Schutz",
      color: "from-emerald-400 via-teal-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: Rocket,
      title: "Zukunftstechnologie",
      description: "Neurale Netzwerke treffen auf Quantum Computing",
      color: "from-purple-400 via-pink-500 to-rose-500",
      delay: 0.2
    },
    {
      icon: Globe,
      title: "Universelle Präsenz",
      description: "Multi-dimensionale Verfügbarkeit im gesamten Metaverse",
      color: "from-blue-400 via-indigo-500 to-purple-500",
      delay: 0.3
    }
  ];

  return (
    <motion.section
      ref={featuresRef}
      style={{ y: yFeatures, rotateX: rotate }}
      className="relative py-32 px-4 z-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Revolutionäre Features
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Technologien, die die Grenzen des Möglichen neu definieren
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: feature.delay, type: "spring" }}
              className="group relative"
            >
              <MicroInteractions type="tilt" intensity="strong">
                <div 
                  className="relative p-8 glass-card rounded-3xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-4"
                  style={{
                    transformStyle: "preserve-3d",
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(20px)",
                    boxShadow: `0 25px 50px -12px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                  }}
                >
                  {/* Animated background gradient */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-xl`}
                    style={{ transform: "translateZ(-10px)" }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`inline-flex p-5 rounded-2xl bg-gradient-to-r ${feature.color} mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                      style={{
                        transformStyle: "preserve-3d",
                        boxShadow: "0 20px 40px -12px rgba(168, 85, 247, 0.4)"
                      }}
                      whileHover={{ rotateY: 15, rotateX: 10 }}
                    >
                      <feature.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </MicroInteractions>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
