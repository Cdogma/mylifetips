
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PageTransition from "../components/UI/PageTransition";
import ModernHeroSection from "../components/Home2/ModernHeroSection";
import ModernFeaturesSection from "../components/Home2/ModernFeaturesSection";
import ModernStatsSection from "../components/Home2/ModernStatsSection";
import ModernCTASection from "../components/Home2/ModernCTASection";

const Home2 = () => {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

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
      <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="fixed inset-0 z-0"
          style={{ y: backgroundY, opacity }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.3),transparent_50%)]" />
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                radial-gradient(circle at ${100 - mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
              `,
            }}
          />
        </motion.div>

        {/* Content Sections */}
        <div className="relative z-10">
          <ModernHeroSection />
          <ModernFeaturesSection />
          <ModernStatsSection />
          <ModernCTASection />
        </div>
      </div>
    </PageTransition>
  );
};

export default Home2;
