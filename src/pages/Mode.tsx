
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import ModeOverview from "../components/Mode/ModeOverview";
import ModeTabs from "../components/Mode/ModeTabs";
import ArticleSection from "../components/Lifestyle/ArticleSection";
import ContactBanner from "../components/Lifestyle/ContactBanner";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import SectionHeading from "../components/UI/SectionHeading";
import RecommendationCard from "../components/UI/RecommendationCard";

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

  const fashionRecommendations = [
    {
      title: "Zeitlose Seidenblusen",
      category: "Basics",
      description: "Hochwertige Seidenblusen in klassischen Schnitten und Farben - ein unverzichtbares Basis-Piece für jeden Kleiderschrank.",
      rating: 4.9,
      imageSrc: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop",
      link: "/empfehlungen/zeitlose-seidenblusen",
      isAffiliate: true,
    },
    {
      title: "Nachhaltiges Pflegeset für Kleidung",
      category: "Pflege",
      description: "Dieses Set enthält alles, was du brauchst, um deine Kleidung länger schön zu halten - umweltfreundlich und effektiv.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?q=80&w=800&auto=format&fit=crop",
      link: "/empfehlungen/nachhaltiges-kleiderpflegeset",
      isAffiliate: true,
    },
    {
      title: "Capsule Wardrobe Planer",
      category: "Organisation",
      description: "Der perfekte Planer, um deinen Kleiderschrank zu organisieren und eine funktionale Capsule Wardrobe zusammenzustellen.",
      rating: 4.8,
      imageSrc: "https://images.unsplash.com/photo-1589156288859-f0cb0d82b065?q=80&w=800&auto=format&fit=crop",
      link: "/empfehlungen/capsule-wardrobe-planer",
      isAffiliate: true,
    }
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
      
      <section className="py-16 bg-muted/30" id="mode-kategorien">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Mode-Kategorien"
            description="Entdecke verschiedene Bereiche rund um Stil und Kleidung"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Basics & Essentials</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Zeitlose Klassiker</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Qualität erkennen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Capsule Wardrobe</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Investitionsstücke</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Stilvolle Kombinationen</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Nachhaltige Mode</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Faire Produktion</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Umweltfreundliche Materialien</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Second Hand & Vintage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Slow Fashion Labels</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Kleiderpflege & Reparatur</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Persönlicher Stil</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Stilfindung</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Körperformen & Proportionen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Farbanalyse</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Minimalistische Garderobe</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Accessoires & Styling-Tipps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <ModeTabs />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Empfohlene Mode-Produkte"
            description="Ausgewählte Empfehlungen für zeitlose und nachhaltige Mode"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {fashionRecommendations.map((recommendation, index) => (
              <RecommendationCard 
                key={recommendation.title}
                {...recommendation}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
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
