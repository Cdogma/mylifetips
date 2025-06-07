
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Shield, Rocket, Globe, Brain, Infinity } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const FuturisticFeatures = () => {
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true });

  const features: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
    delay: number;
  }> = [
    {
      icon: Brain,
      title: "KI-Powered Analytics",
      description: "Modernste künstliche Intelligenz analysiert Millionen von Datenpunkten für präzise Empfehlungen",
      color: "from-orange-400 to-pink-500",
      delay: 0
    },
    {
      icon: Shield,
      title: "100% Unabhängig",
      description: "Keine gesponserten Inhalte - nur ehrliche, datenbasierte Bewertungen für beste Entscheidungen",
      color: "from-emerald-400 to-teal-500",
      delay: 0.1
    },
    {
      icon: Zap,
      title: "Blitzschnelle Performance",
      description: "Sofortige Ergebnisse durch modernste Cloud-Technologie und optimierte Algorithmen",
      color: "from-yellow-400 to-orange-500",
      delay: 0.2
    },
    {
      icon: Globe,
      title: "Globale Marktanalyse",
      description: "Weltweite Datenquellen für umfassende Produktvergleiche und beste Deals",
      color: "from-blue-400 to-indigo-500",
      delay: 0.3
    },
    {
      icon: Rocket,
      title: "Innovative Technologie",
      description: "Cutting-edge Tools für zukunftsweisende Empfehlungen und Trends",
      color: "from-purple-400 to-pink-500",
      delay: 0.4
    },
    {
      icon: Infinity,
      title: "Endlose Möglichkeiten",
      description: "Kontinuierlich wachsende Datenbank für jeden Lebensbereich und jede Kategorie",
      color: "from-cyan-400 to-purple-500",
      delay: 0.5
    }
  ];

  return (
    <motion.section
      ref={featuresRef}
      className="relative py-32 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-xl border border-white/20"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)"
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.div>
            <span className="text-white/80 font-semibold">Premium-Features</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400">
              SMARTE
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-400">
              EMPFEHLUNGEN
            </span>
          </h2>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
            Erlebe eine neue Ära der digitalen Beratung mit Technologien, 
            die deine Erwartungen übertreffen werden
          </p>
        </motion.div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 100, rotateX: -20 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: feature.delay }}
                className="group relative"
              >
                <div 
                  className="relative p-10 rounded-3xl border border-white/10 overflow-hidden transition-all duration-700 hover:scale-105 hover:-translate-y-4"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(30px)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  }}
                >
                  {/* Animated background */}
                  <motion.div 
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(255,154,0,0.05), rgba(255,105,180,0.05))",
                        "linear-gradient(135deg, rgba(255,105,180,0.05), rgba(0,255,255,0.05))",
                        "linear-gradient(225deg, rgba(0,255,255,0.05), rgba(138,43,226,0.05))",
                        "linear-gradient(315deg, rgba(138,43,226,0.05), rgba(255,154,0,0.05))"
                      ]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <motion.div 
                    className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${feature.color} mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                    whileHover={{ rotateY: 15, scale: 1.1 }}
                    style={{
                      boxShadow: "0 25px 50px -12px rgba(255, 105, 180, 0.3)"
                    }}
                  >
                    <IconComponent className="w-12 h-12 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-orange-400 transition-all duration-500">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-300 text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                    {feature.description}
                  </p>

                  {/* Floating particles */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default FuturisticFeatures;
