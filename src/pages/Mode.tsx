import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import ModeOverview from "../components/Mode/ModeOverview";
import ModeTabs from "../components/Mode/ModeTabs";
import ArticleSection from "../components/Lifestyle/ArticleSection";
import ContactBanner from "../components/Lifestyle/ContactBanner";
import Breadcrumbs from "../components/UI/Breadcrumbs";

const Mode = () => {
  const featuredPosts = [
    {
      title: "Zeitlose Mode: Investiere in diese Klassiker für deinen Kleiderschrank",
      excerpt: "Welche Kleidungsstücke wirklich zeitlos sind und wie du sie für verschiedene Anlässe kombinieren kannst.",
      date: "8. Mai 2024",
      category: "Mode",
      imageSrc: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
      slug: "zeitlose-mode-klassiker",
    },
    {
      title: "Nachhaltige Mode: Diese Labels setzen auf Fairness und Umweltbewusstsein",
      excerpt: "Entdecke Modemarken, die nicht nur gut aussehen, sondern auch verantwortungsvoll produzieren.",
      date: "25. April 2024",
      category: "Mode",
      imageSrc: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop",
      slug: "nachhaltige-mode-labels",
    },
    {
      title: "Capsule Wardrobe: Mit weniger Kleidung besser angezogen sein",
      excerpt: "Wie du mit einer durchdachten Minimalgarderobe mehr Outfits kreieren und gleichzeitig Zeit und Geld sparen kannst.",
      date: "12. April 2024",
      category: "Mode",
      imageSrc: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop",
      slug: "capsule-wardrobe-guide",
    },
  ];

  const breadcrumbs = [
    { label: "Lifestyle", link: "/lifestyle" },
    { label: "Mode & Stil" }
  ];

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      
      <Hero
        title="Mode & Stil"
        subtitle="Zeitlose Stilempfehlungen und nachhaltige Mode für jeden Anlass."
        ctaText="Stilberatung entdecken"
        ctaLink="#mode-beratung"
        imageSrc="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop"
      />

      <ModeOverview />
      
      <ModeTabs />
      
      <ArticleSection 
        title="Mode-Artikel"
        description="Inspirierende Beiträge und praktische Tipps rund um Mode und Stil"
        articles={featuredPosts}
        viewAllLabel="Alle Mode-Artikel anzeigen"
      />

      <ContactBanner 
        title="Stilberatung für deinen persönlichen Look"
        description="Du möchtest deinen persönlichen Stil definieren oder deinen Kleiderschrank optimieren? Ich biete individuelle Beratung und praktische Tipps."
        buttonText="Beratung anfragen"
      />
    </Layout>
  );
};

export default Mode;
