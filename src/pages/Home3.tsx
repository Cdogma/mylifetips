
import React from 'react';
import ModernHero3 from '@/components/Home3/ModernHero3';
import FeatureGrid3 from '@/components/Home3/FeatureGrid3';
import StatsSection3 from '@/components/Home3/StatsSection3';
import CallToAction3 from '@/components/Home3/CallToAction3';
import FloatingElements from '@/components/Home3/FloatingElements';
import { motion } from 'framer-motion';

const Home3 = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <FloatingElements />
      
      <div className="relative z-10">
        <ModernHero3 />
        <FeatureGrid3 />
        <StatsSection3 />
        <CallToAction3 />
      </div>
    </motion.div>
  );
};

export default Home3;
