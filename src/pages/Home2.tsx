
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import PageTransition from "../components/UI/PageTransition";
import ParticleCanvas from "../components/Home2/ParticleCanvas";
import HeroSection from "../components/Home2/HeroSection";
import FeaturesSection from "../components/Home2/FeaturesSection";
import StatsSection from "../components/Home2/StatsSection";
import CTASection from "../components/Home2/CTASection";

const Home2 = () => {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Enhanced parallax effects
  const yHero = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const yFeatures = useTransform(scrollYProgress, [0.2, 0.8], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.99]);

  // Mouse tracking for subtle 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setMousePosition({ 
        x: (clientX / innerWidth) * 100, 
        y: (clientY / innerHeight) * 100 
      });
      
      mouseX.set((clientX / innerWidth - 0.5) * 10);
      mouseY.set((clientY / innerHeight - 0.5) * 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Enhanced Background Canvas */}
        <ParticleCanvas />
        
        {/* Subtile dynamische Hintergrund-Gradients */}
        <motion.div 
          className="fixed inset-0 opacity-20 z-10"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
              radial-gradient(circle at ${mousePosition.x}% ${100 - mousePosition.y}%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
            `,
          }}
          animate={{
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Hero Section */}
        <HeroSection 
          yHero={yHero}
          opacity={opacity}
          scale={scale}
          springX={springX}
          springY={springY}
        />
        
        {/* Features Section */}
        <div className="relative bg-gradient-to-b from-slate-950/50 to-slate-900/80 backdrop-blur-sm">
          <FeaturesSection 
            yFeatures={yFeatures}
            rotate={useTransform(scrollYProgress, [0, 1], [0, 1])}
          />
        </div>
        
        {/* Stats Section */}
        <div className="relative bg-gradient-to-b from-slate-900/80 to-slate-950/90">
          <StatsSection />
        </div>
        
        {/* CTA Section */}
        <div className="relative bg-slate-950">
          <CTASection />
        </div>
      </div>
    </PageTransition>
  );
};

export default Home2;
