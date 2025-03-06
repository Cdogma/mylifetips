import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import ReisenOverview from "../components/Reisen/ReisenOverview";
import ReisenTabs from "../components/Reisen/ReisenTabs";
import ArticleSection from "../components/Lifestyle/ArticleSection";
import ContactBanner from "../components/Lifestyle/ContactBanner";
import Breadcrumbs from "../components/UI/Breadcrumbs";

const Reisen = () => {
  const featuredPosts = [
    {
      title: "Nachhaltig reisen: So geht umweltbewusster Tourismus",
      excerpt: "Tipps für umweltfreundlicheres Reisen ohne auf besondere Erlebnisse verzichten zu müssen.",
      date: "5. Mai 2024",
      category: "Reisen",
      imageSrc: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=800&auto=format&fit=crop",
      slug: "nachhaltig-reisen",
    },
    {
      title: "Günstig verreisen: Die besten Spartipps für deinen nächsten Urlaub",
      excerpt: "Wie du auch mit kleinem Budget unvergessliche Reiseerlebnisse haben kannst.",
      date: "28. April 2024",
      category: "Reisen",
      imageSrc: "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=800&auto=format&fit=crop",
      slug: "guenstig-verreisen-spartipps",
    },
    {
      title: "Unterkünfte abseits der Touristenpfade: Authentisch reisen",
      excerpt: "Entdecke besondere Unterkünfte, die dir authentische Einblicke in die lokale Kultur ermöglichen.",
      date: "15. April 2024",
      category: "Reisen",
      imageSrc: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
      slug: "unterkuenfte-abseits-touristenpfade",
    },
  ];

  const breadcrumbs = [
    { label: "Lifestyle", link: "/lifestyle" },
    { label: "Reisen & Abenteuer" }
  ];

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      
      <Hero
        title="Reisen & Abenteuer"
        subtitle="Inspiration, Tipps und Erfahrungsberichte für unvergessliche Reiseerlebnisse."
        ctaText="Reisetipps entdecken"
        ctaLink="#reise-tipps"
        imageSrc="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"
      />

      <ReisenOverview />
      
      <ReisenTabs />
      
      <ArticleSection 
        title="Reise-Artikel"
        description="Inspirierende Beiträge und praktische Tipps für deine nächste Reise"
        articles={featuredPosts}
        viewAllLabel="Alle Reiseartikel anzeigen"
      />

      <ContactBanner 
        title="Reisefragen oder Tipps?"
        description="Du planst eine Reise und hast spezifische Fragen? Oder du möchtest deine eigenen Reisetipps teilen? Ich freue mich über deine Nachricht."
      />
    </Layout>
  );
};

export default Reisen;
