
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PageTransition from "../components/UI/PageTransition";
import FeaturesSection from "../components/Home/FeaturesSection";
import CategoriesSection from "../components/Home/CategoriesSection";
import RecommendationsSection from "../components/Home/RecommendationsSection";
import BlogSection from "../components/Home/BlogSection";
import NewsletterSection from "../components/Home/NewsletterSection";
import ModernHero from "../components/UI/ModernHero";
import InteractiveGradient from "../components/UI/InteractiveGradient";
import ScrollProgressIndicator from "../components/UI/ScrollProgressIndicator";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  // Parallax effect for scrolling
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Force scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollProgressIndicator />
      
      <PageTransition>
        {/* Interactive Background */}
        <InteractiveGradient />
        
        {/* Hero Section with Parallax */}
        <motion.div 
          style={{ y, opacity, scale }}
          className="relative z-10"
        >
          <ModernHero 
            title="Dein Leben. Bessere Entscheidungen."
            subtitle="Willkommen bei MyLifeTips – deinem Portal für ehrliche Produkt- und Serviceempfehlungen basierend auf persönlichen Erfahrungen."
            ctaText="Empfehlungen entdecken"
            ctaLink="/empfehlungen"
            secondaryCtaText="Mehr über mich"
            secondaryCtaLink="/ueber-mich"
            imageSrc="/lovable-uploads/e20d1a22-a3ff-4bda-9092-5dc8d352f9e9.png"
          />
        </motion.div>

        {/* Main Content Sections */}
        <div className="relative z-20 bg-background">
          <FeaturesSection />
          <CategoriesSection />
          <RecommendationsSection />
          <BlogSection />
          <NewsletterSection />
        </div>
      </PageTransition>
    </>
  );
};

export default Index;
