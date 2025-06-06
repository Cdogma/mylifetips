
import { motion } from "framer-motion";
import PageTransition from "../components/UI/PageTransition";
import LandingHero from "../components/UI/LandingHero";
import FeaturesSection from "../components/Home/FeaturesSection";
import CategoriesSection from "../components/Home/CategoriesSection";
import RecommendationsSection from "../components/Home/RecommendationsSection";
import BlogSection from "../components/Home/BlogSection";
import NewsletterSection from "../components/Home/NewsletterSection";
import AnimatedSection from "../components/UI/AnimatedSection";
import Hero from "../components/UI/Hero";

const Index = () => {
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={childVariants}>
          <Hero
            title="Dein Leben. Bessere Entscheidungen."
            subtitle="Willkommen bei MyLifeTips – deinem Portal für ehrliche Produkt- und Serviceempfehlungen basierend auf persönlichen Erfahrungen."
            ctaText="Empfehlungen entdecken"
            ctaLink="/empfehlungen"
            secondaryCtaText="Mehr über mich"
            secondaryCtaLink="/ueber-mich"
            imageSrc="/lovable-uploads/e20d1a22-a3ff-4bda-9092-5dc8d352f9e9.png"
          />
        </motion.div>

        <motion.div variants={childVariants}>
          <FeaturesSection />
        </motion.div>

        <motion.div variants={childVariants}>
          <AnimatedSection direction="up" delay={0.2}>
            <CategoriesSection />
          </AnimatedSection>
        </motion.div>

        <motion.div variants={childVariants}>
          <AnimatedSection direction="up" delay={0.3}>
            <RecommendationsSection />
          </AnimatedSection>
        </motion.div>

        <motion.div variants={childVariants}>
          <AnimatedSection direction="up" delay={0.4}>
            <BlogSection />
          </AnimatedSection>
        </motion.div>

        <motion.div variants={childVariants}>
          <AnimatedSection direction="up" delay={0.5}>
            <NewsletterSection />
          </AnimatedSection>
        </motion.div>
      </motion.div>
    </PageTransition>
  );
};

export default Index;
