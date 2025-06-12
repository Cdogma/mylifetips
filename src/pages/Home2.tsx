

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
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
  const { theme } = useTheme();

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

  // Theme-aware gradient colors with EXTREME contrast
  const getThemeGradients = () => {
    if (theme === 'light') {
      return {
        primary: 'rgba(255, 20, 147, 0.8)',     // Deep Pink
        secondary: 'rgba(0, 191, 255, 0.7)',    // Deep Sky Blue
        accent: 'rgba(255, 105, 180, 0.6)',     // Hot Pink
        complementary: 'rgba(50, 205, 50, 0.7)' // Lime Green
      };
    } else {
      return {
        primary: 'rgba(0, 255, 255, 0.9)',      // Electric Cyan
        secondary: 'rgba(255, 0, 255, 0.8)',    // Electric Magenta
        accent: 'rgba(0, 255, 0, 0.7)',         // Electric Green
        complementary: 'rgba(255, 255, 0, 0.6)' // Electric Yellow
      };
    }
  };

  const themeGradients = getThemeGradients();

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden">
        {/* Scroll Progress Indicator */}
        <ScrollProgressIndicator />
        
        {/* Theme-aware Background */}
        <div 
          className="fixed inset-0" 
          style={{ background: 'var(--gradient-background)' }}
        />
        
        {/* Dynamic Theme-aware Gradient Overlay with EXTREME colors */}
        <motion.div 
          className="fixed inset-0 z-10"
          style={{ 
            y: backgroundY, 
            scale: backgroundScale,
            opacity,
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                ${themeGradients.primary} 0%, 
                ${themeGradients.secondary} 25%, 
                ${themeGradients.accent} 50%, 
                transparent 70%
              ),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
                ${themeGradients.complementary} 0%, 
                ${themeGradients.primary} 30%, 
                transparent 60%
              )
            `,
          }}
        />

        {/* Particle System */}
        <div className="fixed inset-0 z-20">
          <ParticleBackground />
        </div>

        {/* Theme-aware Aurora Light Effects with EXTREME colors */}
        <div className="fixed inset-0 z-30 pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{
              background: theme === 'light' 
                ? 'radial-gradient(circle, rgba(255, 20, 147, 0.6) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(0, 255, 255, 0.8) 0%, transparent 70%)'
            }}
            animate={{
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.3, 0.8, 0.2, 0.6],
              x: [0, 100, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
            style={{
              background: theme === 'light'
                ? 'radial-gradient(circle, rgba(0, 191, 255, 0.6) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(255, 0, 255, 0.8) 0%, transparent 70%)'
            }}
            animate={{
              scale: [0.8, 1.3, 1, 0.9],
              opacity: [0.2, 0.7, 0.3, 0.5],
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
