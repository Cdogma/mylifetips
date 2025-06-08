
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PageTransition from "../components/UI/PageTransition";
import ParticleBackground from "../components/Home2/ParticleBackground";
import UltraModernHero from "../components/Home2/UltraModernHero";
import FuturisticFeatures from "../components/Home2/FuturisticFeatures";
import DynamicStats from "../components/Home2/DynamicStats";
import EliteCallToAction from "../components/Home2/EliteCallToAction";
import ScrollProgressIndicator from "../components/UI/ScrollProgressIndicator";
import EasterEggs from "../components/UI/EasterEggs";

const Home2 = () => {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setMousePosition({ 
        x: (clientX / innerWidth) * 100, 
        y: (clientY / innerHeight) * 100 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden">
        {/* Scroll Progress Indicator */}
        <ScrollProgressIndicator />
        
        {/* Aurora Gradient Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900" />
        
        {/* Dynamic Gradient Overlay */}
        <motion.div 
          className="fixed inset-0 z-10"
          style={{ 
            y: backgroundY, 
            scale: backgroundScale,
            opacity,
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(255, 154, 0, 0.15) 0%, 
                rgba(255, 105, 180, 0.12) 25%, 
                rgba(0, 255, 255, 0.08) 50%, 
                transparent 70%
              ),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
                rgba(138, 43, 226, 0.15) 0%, 
                rgba(255, 20, 147, 0.12) 30%, 
                transparent 60%
              )
            `,
          }}
        />

        {/* Particle System */}
        <div className="fixed inset-0 z-20">
          <ParticleBackground />
        </div>

        {/* Aurora Light Effects */}
        <div className="fixed inset-0 z-30 pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-orange-400/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.3, 0.6, 0.2, 0.4],
              x: [0, 100, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-400/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [0.8, 1.3, 1, 0.9],
              opacity: [0.2, 0.5, 0.3, 0.4],
              y: [0, -80, 40, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
        </div>

        {/* Content Sections */}
        <div className="relative z-40">
          <UltraModernHero />
          <FuturisticFeatures />
          <DynamicStats />
          <EliteCallToAction />
        </div>
        
        {/* Easter Eggs */}
        <EasterEggs />
      </div>
    </PageTransition>
  );
};

export default Home2;
