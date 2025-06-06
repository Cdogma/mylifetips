
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: 99.9, suffix: '%', label: 'Uptime Guarantee', color: 'from-green-400 to-emerald-500' },
  { value: 150, suffix: 'ms', label: 'Response Time', color: 'from-blue-400 to-cyan-500' },
  { value: 10, suffix: 'M+', label: 'Active Users', color: 'from-purple-400 to-pink-500' },
  { value: 24, suffix: '/7', label: 'Support Available', color: 'from-orange-400 to-red-500' }
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number, suffix: string, inView: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.onChange((latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span>
      {suffix === 'M+' ? 
        `${(displayValue / 1000000).toFixed(1)}${suffix}` :
        `${Math.round(displayValue * 10) / 10}${suffix}`
      }
    </span>
  );
};

const StatsSection3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-4 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Trusted by
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 ml-4">
              Millions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join the revolution that's changing the digital landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5
              }}
              className="group relative"
            >
              <div className="relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-8 text-center overflow-hidden">
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Glow effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl blur opacity-0 group-hover:opacity-30`}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />

                <motion.div
                  className={`text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-4`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    inView={isInView}
                  />
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>

                {/* Floating particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-1 h-1 bg-white/20 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.2, 0.8, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection3;
