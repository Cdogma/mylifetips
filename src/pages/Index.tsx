
import Layout from "../components/Layout/Layout";
import LandingHero from "../components/UI/LandingHero";
import FeaturesSection from "../components/Home/FeaturesSection";
import CategoriesSection from "../components/Home/CategoriesSection";
import RecommendationsSection from "../components/Home/RecommendationsSection";
import BlogSection from "../components/Home/BlogSection";
import NewsletterSection from "../components/Home/NewsletterSection";
import PageTransition from "../components/UI/PageTransition";
import { motion } from "framer-motion";
import AnimatedSection from "../components/UI/AnimatedSection";

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
    <Layout
      title="MyLifeTips - Ehrliche Empfehlungen und Tipps"
      description="Ehrliche Tipps und Empfehlungen für ein besseres Leben – von Finanzen über Business und Technik bis hin zu Lifestyle"
    >
      <PageTransition>
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={childVariants}>
            <LandingHero
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
            <CategoriesSection />
          </motion.div>

          <motion.div variants={childVariants}>
            <AnimatedSection direction="up">
              <RecommendationsSection />
            </AnimatedSection>
          </motion.div>

          <motion.div variants={childVariants}>
            <AnimatedSection direction="up">
              <BlogSection />
            </AnimatedSection>
          </motion.div>

          <motion.div variants={childVariants}>
            <AnimatedSection direction="up">
              <NewsletterSection />
            </AnimatedSection>
          </motion.div>
        </motion.div>
      </PageTransition>
    </Layout>
  );
};

export default Index;
