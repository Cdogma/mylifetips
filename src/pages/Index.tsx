
import Layout from "../components/Layout/Layout";
import LandingHero from "../components/UI/LandingHero";
import FeaturesSection from "../components/Home/FeaturesSection";
import CategoriesSection from "../components/Home/CategoriesSection";
import RecommendationsSection from "../components/Home/RecommendationsSection";
import BlogSection from "../components/Home/BlogSection";
import NewsletterSection from "../components/Home/NewsletterSection";
import PageTransition from "../components/UI/PageTransition";

const Index = () => {
  return (
    <Layout
      title="MyLifeTips - Ehrliche Empfehlungen und Tipps"
      description="Ehrliche Tipps und Empfehlungen für ein besseres Leben – von Finanzen über Business und Technik bis hin zu Lifestyle"
    >
      <PageTransition>
        <LandingHero
          title="Dein Leben. Bessere Entscheidungen."
          subtitle="Willkommen bei MyLifeTips – deinem Portal für ehrliche Produkt- und Serviceempfehlungen basierend auf persönlichen Erfahrungen."
          ctaText="Empfehlungen entdecken"
          ctaLink="/empfehlungen"
          secondaryCtaText="Mehr über mich"
          secondaryCtaLink="/ueber-mich"
          imageSrc="/lovable-uploads/e20d1a22-a3ff-4bda-9092-5dc8d352f9e9.png"
        />

        <FeaturesSection />
        <CategoriesSection />
        <RecommendationsSection />
        <BlogSection />
        <NewsletterSection />
      </PageTransition>
    </Layout>
  );
};

export default Index;
