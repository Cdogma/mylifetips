
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, Cpu, Globe, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Blazing performance with sub-second load times",
    color: "from-orange-400 to-red-500"
  },
  {
    icon: Shield,
    title: "Ultra Secure",
    description: "Enterprise-grade security with zero compromises",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Real-time",
    description: "Instant updates and seamless synchronization",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Cpu,
    title: "AI Powered",
    description: "Smart automation with machine learning",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Worldwide infrastructure for maximum reach",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Sparkles,
    title: "Next-Gen UX",
    description: "Intuitive design that anticipates your needs",
    color: "from-pink-400 to-purple-500"
  }
];

const FeatureGrid3 = () => {
  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Cutting-Edge
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 ml-4">
              Features
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Built with tomorrow's technology, available today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -20,
                rotateY: 5,
                rotateX: 5,
                scale: 1.02
              }}
              className="group relative"
            >
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 h-full overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={{ scale: 0, rotate: 180 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Floating icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 relative`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ 
                    rotate: { duration: 0.6 },
                    scale: { duration: 0.3 }
                  }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                  
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} blur-xl opacity-0 group-hover:opacity-50`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover border effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent"
                  whileHover={{
                    borderImage: "linear-gradient(45deg, rgba(168,85,247,0.5), rgba(236,72,153,0.5)) 1"
                  }}
                />

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${feature.color} opacity-20 rounded-bl-3xl rounded-tr-3xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid3;
