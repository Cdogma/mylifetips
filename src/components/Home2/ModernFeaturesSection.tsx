
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Shield, Rocket, Globe } from "lucide-react";

const ModernFeaturesSection = () => {
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true });

  const features = [
    {
      icon: Zap,
      title: "Blitzschnelle Recherche",
      description: "Sofortige Produktanalysen und Vergleiche für schnelle Entscheidungen",
      color: "from-yellow-400 to-orange-500",
      delay: 0
    },
    {
      icon: Shield,
      title: "Vertrauenswürdige Tests",
      description: "Unabhängige Bewertungen ohne gesponserte Inhalte",
      color: "from-emerald-400 to-teal-500",
      delay: 0.1
    },
    {
      icon: Rocket,
      title: "Innovative Lösungen",
      description: "Entdecke die neuesten Trends und bahnbrechende Produkte",
      color: "from-purple-400 to-pink-500",
      delay: 0.2
    },
    {
      icon: Globe,
      title: "Globale Perspektive",
      description: "Internationale Marktübersicht für die besten Deals",
      color: "from-blue-400 to-indigo-500",
      delay: 0.3
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
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400">
              Warum uns vertrauen?
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            Unsere Mission ist es, dir die besten Entscheidungen zu ermöglichen
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: feature.delay }}
              className="group relative"
            >
              <div 
                className="relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-4"
              >
                <motion.div 
                  className={`inline-flex p-5 rounded-2xl bg-gradient-to-r ${feature.color} mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                  whileHover={{ rotateY: 15 }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-violet-300 transition-colors duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ModernFeaturesSection;
