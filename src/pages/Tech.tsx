
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import CategoryCard from "../components/UI/CategoryCard";
import RecommendationCard from "../components/UI/RecommendationCard";

const Tech = () => {
  const subcategories = [
    {
      title: "Smartphones",
      description: "Die neuesten Smartphones und Zubehör im Test und meine persönlichen Empfehlungen.",
      link: "/technik/smartphones",
      imageSrc: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Smart Home",
      description: "Alles für ein intelligentes Zuhause - von Beleuchtung über Sicherheit bis zu Entertainment.",
      link: "/technik/smart-home",
      imageSrc: "https://images.unsplash.com/photo-1558002038-bb0401c95e8c?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Wearables",
      description: "Smartwatches, Fitness-Tracker und mehr für deinen digitalen Lifestyle.",
      link: "/technik/wearables",
      imageSrc: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Computer",
      description: "Laptops, PCs und Zubehör für Arbeit, Gaming und Kreatives.",
      link: "/technik/computer",
      imageSrc: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Software",
      description: "Apps und Programme für mehr Produktivität, Kreativität und Unterhaltung.",
      link: "/technik/software",
      imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const topRecommendations = [
    {
      title: "Philips Hue Starter Kit",
      category: "Smart Home",
      description: "Das beste Smart-Lighting-System mit einfacher Einrichtung, zuverlässiger Funktionalität und beeindruckenden Lichtszenen.",
      rating: 4.8,
      imageSrc: "https://images.unsplash.com/photo-1558002038-bb0401c95e8c?q=80&w=800&auto=format&fit=crop",
      link: "/technik/smart-home/philips-hue",
      isAffiliate: true,
    },
    {
      title: "Apple MacBook Air M2",
      category: "Computer",
      description: "Mein täglicher Begleiter mit beeindruckender Leistung, hervorragender Akkulaufzeit und elegantem Design.",
      rating: 4.9,
      imageSrc: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=800&auto=format&fit=crop",
      link: "/technik/computer/macbook-air-m2",
      isAffiliate: true,
    },
    {
      title: "Apple Watch Series 8",
      category: "Wearables",
      description: "Die beste Smartwatch mit umfassenden Gesundheitsfunktionen, großem App-Angebot und nahtloser Integration ins Apple-Ökosystem.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop",
      link: "/technik/wearables/apple-watch-8",
      isAffiliate: true,
    },
  ];

  return (
    <Layout>
      <Hero
        title="Technik & Gadgets"
        subtitle="Entdecke meine persönlichen Erfahrungen und Empfehlungen zu Smartphones, Smart Home, Wearables, Computern und Software für deinen digitalen Alltag."
        ctaText="Top-Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Technik, die das Leben einfacher macht"
            description="Als Technik-Enthusiast teste ich ständig die neuesten Gadgets und Tools. Hier teile ich meine ehrlichen Erfahrungen und Empfehlungen für Produkte, die deinen Alltag wirklich verbessern können."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Technik ist ein fester Bestandteil unseres Alltags geworden. Die richtige Technologie kann unser Leben vereinfachen, uns produktiver machen und neue Möglichkeiten eröffnen. Doch bei der schieren Menge an verfügbaren Produkten ist es oft schwer, die Spreu vom Weizen zu trennen.
            </p>
            <p>
              In diesem Bereich teile ich meine persönlichen Erfahrungen mit verschiedenen Technikprodukten, die ich selbst im Alltag nutze. Von Smartphones über Smart-Home-Geräte bis hin zu Software-Lösungen - ich teste die Produkte ausführlich und berichte ehrlich über meine Erfahrungen.
            </p>
            <p>
              <strong>Wichtiger Hinweis:</strong> Bei einigen der vorgestellten Produkte handelt es sich um Affiliate-Links. Das bedeutet, dass ich eine kleine Provision erhalte, wenn du über meinen Link ein Produkt kaufst - für dich entstehen dabei keine zusätzlichen Kosten. Diese Provisionen helfen mir, diese Website zu betreiben und weiterhin qualitativ hochwertige Inhalte zu erstellen. Ich empfehle ausschließlich Produkte, die ich selbst nutze und von denen ich überzeugt bin.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Technik-Kategorien"
            description="Entdecke alle Bereiche rund um Technik und Gadgets."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategories.map((category, index) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                imageSrc={category.imageSrc}
                link={category.link}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="empfehlungen" className="section-padding">
        <div className="container">
          <SectionHeading
            subtitle="Meine Top-Empfehlungen"
            title="Diese Tech-Produkte nutze ich täglich"
            description="Basierend auf meinen persönlichen Erfahrungen und ausführlichen Tests kann ich diese Produkte uneingeschränkt empfehlen."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topRecommendations.map((recommendation, index) => (
              <RecommendationCard
                key={recommendation.title}
                title={recommendation.title}
                category={recommendation.category}
                description={recommendation.description}
                rating={recommendation.rating}
                imageSrc={recommendation.imageSrc}
                link={recommendation.link}
                isAffiliate={recommendation.isAffiliate}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold mb-2">
                  Du suchst Beratung zu Technik-Produkten?
                </h3>
                <p className="text-muted-foreground">
                  Kontaktiere mich gerne, wenn du spezifische Fragen zu bestimmten Technikprodukten hast oder Hilfe bei der Auswahl benötigst.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <a
                  href="/kontakt"
                  className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tech;
