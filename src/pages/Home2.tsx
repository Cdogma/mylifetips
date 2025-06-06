
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
  const yHero = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const yFeatures = useTransform(scrollYProgress, [0.2, 0.8], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.98]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setMousePosition({ 
        x: (clientX / innerWidth) * 100, 
        y: (clientY / innerHeight) * 100 
      });
      
      mouseX.set((clientX / innerWidth - 0.5) * 20);
      mouseY.set((clientY / innerHeight - 0.5) * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Enhanced Background Canvas */}
        <ParticleCanvas />
        
        {/* Dynamic Background Gradients */}
        <motion.div 
          className="fixed inset-0 opacity-30 z-10"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.4) 0%, transparent 70%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.3) 0%, transparent 70%),
              radial-gradient(circle at ${mousePosition.x}% ${100 - mousePosition.y}%, rgba(16, 185, 129, 0.3) 0%, transparent 70%)
            `,
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
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
        <FeaturesSection 
          yFeatures={yFeatures}
          rotate={rotate}
        />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* CTA Section */}
        <CTASection />
      </div>
    </PageTransition>
  );
};

export default Home2;
