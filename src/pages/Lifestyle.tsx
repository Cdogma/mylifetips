
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import LifestyleOverview from "../components/Lifestyle/LifestyleOverview";
import LifestyleCategories from "../components/Lifestyle/LifestyleCategories";
import LifestyleTips from "../components/Lifestyle/LifestyleTips";
import LifestyleArticles from "../components/Lifestyle/LifestyleArticles";
import ContactBanner from "../components/Lifestyle/ContactBanner";

const Lifestyle = () => {
  const featuredPosts = [
    {
      title: "Minimalismus im Alltag: Wie weniger mehr sein kann",
      excerpt: "Entdecke, wie ein minimalistischer Lebensstil zu mehr Zufriedenheit, weniger Stress und mehr Freiheit führen kann.",
      date: "12. Mai 2024",
      category: "Lifestyle",
      imageSrc: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop",
      slug: "minimalismus-im-alltag",
    },
    {
      title: "Work-Life-Balance: 7 Strategien für mehr Ausgeglichenheit",
      excerpt: "Praktische Tipps, wie du Beruf und Privatleben besser in Einklang bringen und mehr Zeit für die wichtigen Dinge im Leben finden kannst.",
      date: "3. Mai 2024",
      category: "Lifestyle",
      imageSrc: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=800&auto=format&fit=crop",
      slug: "work-life-balance-strategien",
    },
    {
      title: "Nachhaltig leben: Kleine Veränderungen mit großer Wirkung",
      excerpt: "So kannst du mit einfachen Veränderungen im Alltag nachhaltiger leben und die Umwelt schonen.",
      date: "20. April 2024",
      category: "Lifestyle",
      imageSrc: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
      slug: "nachhaltig-leben-kleine-veraenderungen",
    },
  ];

  const subcategories = [
    {
      title: "Gesundheit & Wellness",
      description: "Tipps für ein gesundes und ausgewogenes Leben, Fitness und mentales Wohlbefinden.",
      link: "/lifestyle/gesundheit",
      imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Hobbys & Freizeit",
      description: "Inspirationen für sinnvolle Freizeitgestaltung und persönliche Interessen.",
      link: "/lifestyle/hobbys",
      imageSrc: "https://images.unsplash.com/photo-1511649475669-e288648b2339?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Reisen & Abenteuer",
      description: "Reiseziele, Tipps und Erfahrungsberichte für unvergessliche Erlebnisse.",
      link: "/lifestyle/reisen",
      imageSrc: "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Mode & Stil",
      description: "Zeitlose Stilempfehlungen und nachhaltige Mode für jeden Anlass.",
      link: "/lifestyle/mode",
      imageSrc: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <Layout>
      <Hero
        title="Lifestyle"
        subtitle="Inspiration und praktische Tipps für ein bewussteres, ausgewogeneres und erfüllteres Leben."
        ctaText="Entdecke meine Tipps"
        ctaLink="#lifestyle-tipps"
      />

      <LifestyleOverview />
      
      <LifestyleCategories categories={subcategories} />
      
      <LifestyleTips />
      
      <LifestyleArticles articles={featuredPosts} />
      
      <ContactBanner />
    </Layout>
  );
};

export default Lifestyle;
