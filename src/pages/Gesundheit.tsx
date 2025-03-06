import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import GesundheitOverview from "../components/Gesundheit/GesundheitOverview";
import GesundheitTabs from "../components/Gesundheit/GesundheitTabs";
import ContactBanner from "../components/Lifestyle/ContactBanner";
import ArticleSection from "../components/Lifestyle/ArticleSection";
import Breadcrumbs from "../components/UI/Breadcrumbs";

const Gesundheit = () => {
  const featuredPosts = [
    {
      title: "Mentale Gesundheit: Wie du dein Wohlbefinden stärkst",
      excerpt: "Praktische Übungen und Routinen für den Alltag, die deine mentale Gesundheit verbessern können.",
      date: "15. Mai 2024",
      category: "Gesundheit",
      imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
      slug: "mentale-gesundheit-staerken",
    },
    {
      title: "Die besten Entspannungstechniken für den stressigen Alltag",
      excerpt: "Einfache Methoden, um Stress abzubauen und mehr Gelassenheit in deinen Alltag zu bringen.",
      date: "2. Mai 2024",
      category: "Gesundheit",
      imageSrc: "https://images.unsplash.com/photo-1506126279646-a697353d3166?q=80&w=800&auto=format&fit=crop",
      slug: "entspannungstechniken-stressiger-alltag",
    },
    {
      title: "Ausgewogene Ernährung ohne Verzicht: So geht's",
      excerpt: "Wie du dich gesund ernähren kannst, ohne auf Genuss zu verzichten - mit praktischen Tipps und leckeren Rezeptideen.",
      date: "20. April 2024",
      category: "Gesundheit",
      imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
      slug: "ausgewogene-ernaehrung-ohne-verzicht",
    },
  ];

  const breadcrumbs = [
    { label: "Lifestyle", link: "/lifestyle" },
    { label: "Gesundheit & Wellness" }
  ];

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      
      <Hero
        title="Gesundheit & Wellness"
        subtitle="Tipps für ein gesundes und ausgewogenes Leben, Fitness und mentales Wohlbefinden."
        ctaText="Zu den Tipps"
        ctaLink="#gesundheits-tipps"
        imageSrc="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
      />

      <GesundheitOverview />
      
      <GesundheitTabs />
      
      <ArticleSection 
        title="Gesundheits-Artikel"
        description="Aktuelle Beiträge zum Thema Gesundheit & Wellness"
        articles={featuredPosts}
        viewAllLabel="Alle Gesundheitsartikel anzeigen"
      />

      <ContactBanner 
        title="Fragen zu Gesundheitsthemen?"
        description="Ich freue mich über deine Nachricht und beantworte gerne deine Fragen zum Thema Gesundheit."
      />
    </Layout>
  );
};

export default Gesundheit;
