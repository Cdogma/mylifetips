
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

const CallToAction3 = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30" />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-purple-400/30 rounded-full"
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity }
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg"
        animate={{ 
          rotate: -360,
          y: [0, -30, 0]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity }
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Floating stars */}
          <div className="relative inline-block mb-8">
            <motion.div
              className="absolute -top-4 -left-4"
              animate={{ 
                rotate: 360,
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </motion.div>
            
            <motion.div
              className="absolute -top-2 -right-6"
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity },
                scale: { duration: 3, repeat: Infinity, delay: 1 }
              }}
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Ready to
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Transform
              </span>
              <br />
              Your Future?
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Join thousands of innovators who are already building tomorrow with our cutting-edge platform
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            className="group relative px-12 py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full text-white font-bold text-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Button content */}
            <span className="relative flex items-center gap-3">
              Get Started Free
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight size={24} />
              </motion.div>
            </span>

            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-50"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
            />
          </motion.button>

          <motion.button
            className="px-12 py-6 border-2 border-slate-400 rounded-full text-slate-300 font-bold text-xl backdrop-blur-sm hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
            whileHover={{ 
              borderColor: "rgba(168,85,247,0.8)",
              boxShadow: "0 0 40px rgba(168,85,247,0.3)",
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            />
            <span className="relative">Watch Demo</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-slate-400 text-sm"
        >
          No credit card required • Free 14-day trial • Cancel anytime
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction3;
