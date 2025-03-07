
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import ReisenOverview from "../components/Reisen/ReisenOverview";
import ReisenTabs from "../components/Reisen/ReisenTabs";
import ArticleSection from "../components/Lifestyle/ArticleSection";
import ContactBanner from "../components/Lifestyle/ContactBanner";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import SectionHeading from "../components/UI/SectionHeading";
import RecommendationCard from "../components/UI/RecommendationCard";

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
  
  const travelRecommendations = [
    {
      title: "Ultraleichter Reiserucksack",
      category: "Reiseausrüstung",
      description: "Dieser praktische Reiserucksack ist ultraleicht, wasserabweisend und ideal für Wochenendtrips oder als Handgepäck.",
      rating: 4.8,
      imageSrc: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=800&auto=format&fit=crop",
      link: "/empfehlungen/ultraleichter-rucksack",
      isAffiliate: true,
    },
    {
      title: "Kompakte Reiseapotheke",
      category: "Reisezubehör",
      description: "Diese gut sortierte Reiseapotheke enthält alles Wichtige für kleine Notfälle unterwegs, kompakt verpackt.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop",
      link: "/empfehlungen/reiseapotheke",
      isAffiliate: true,
    },
    {
      title: "Noise-Cancelling Kopfhörer",
      category: "Technik",
      description: "Diese kabellosen Kopfhörer mit aktiver Geräuschunterdrückung sind perfekt für lange Flüge und Zugreisen.",
      rating: 4.9,
      imageSrc: "https://images.unsplash.com/photo-1505236273555-eda46635d3a5?q=80&w=800&auto=format&fit=crop",
      link: "/empfehlungen/noise-cancelling-kopfhoerer",
      isAffiliate: true,
    }
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

      <section className="py-16 bg-muted/30" id="reise-kategorien">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Reise-Kategorien"
            description="Von Städtetrips bis Backpacking - entdecke verschiedene Reisearten"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Städtereisen</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Kulturelle Highlights</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Lokale Gastronomie</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Architektur & Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Museen & Galerien</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Stadttouren</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Naturerlebnisse</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Nationalparks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Wanderrouten</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Camping & Glamping</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Wassersport</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Tierbeobachtungen</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Fernreisen</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Kultureller Austausch</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Rundreisen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Backpacking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Einzigartige Unterkünfte</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Lokale Küche entdecken</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <ReisenTabs />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Empfohlene Reiseprodukte"
            description="Qualitativ hochwertige Produkte, die ich selbst auf Reisen nutze"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {travelRecommendations.map((recommendation, index) => (
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
