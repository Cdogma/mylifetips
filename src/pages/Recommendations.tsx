
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import RecommendationCard from "../components/UI/RecommendationCard";

const Recommendations = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const recommendations = [
    {
      title: "C24 Smart Girokonto",
      category: "finanzen",
      subcategory: "Bankkonten",
      description: "Das beste kostenlose Girokonto mit allen wichtigen Funktionen und einer tollen App für deinen Alltag.",
      rating: 4.8,
      imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
      link: "/finanzen/bankkonten/c24",
      isAffiliate: true,
    },
    {
      title: "American Express Platinum",
      category: "finanzen",
      subcategory: "Kreditkarten",
      description: "Die Premium-Kreditkarte mit exzellenten Versicherungsleistungen und attraktiven Bonusprogrammen.",
      rating: 4.5,
      imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
      link: "/finanzen/kreditkarten/amex-platinum",
      isAffiliate: true,
    },
    {
      title: "Scalable Capital",
      category: "finanzen",
      subcategory: "Broker",
      description: "Der nutzerfreundliche Broker mit 0€ Ordergebühren und großer ETF-Auswahl für deine Investments.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
      link: "/finanzen/broker/scalable-capital",
      isAffiliate: true,
    },
    {
      title: "iShares Core MSCI World ETF",
      category: "finanzen",
      subcategory: "ETFs",
      description: "Der Klassiker für passive Investoren - global diversifiziert mit 1600+ Aktien aus 23 Industrieländern.",
      rating: 4.9,
      imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
      link: "/finanzen/etfs/msci-world",
      isAffiliate: true,
    },
    {
      title: "Notion",
      category: "business",
      subcategory: "Produktivität",
      description: "Mein liebstes All-in-One Workspace-Tool für Notizen, Projekte, Datenbanken und Team-Zusammenarbeit.",
      rating: 4.8,
      imageSrc: "https://images.unsplash.com/photo-1659027750866-f4cc31174ca0?q=80&w=800&auto=format&fit=crop",
      link: "/business/produktivitaet/notion",
      isAffiliate: true,
    },
    {
      title: "Philips Hue Starter Kit",
      category: "technik",
      subcategory: "Smart Home",
      description: "Das zuverlässigste Smart-Beleuchtungssystem mit toller App und vielseitigen Integrationen.",
      rating: 4.6,
      imageSrc: "https://images.unsplash.com/photo-1557803056-3ff8358cbb3f?q=80&w=800&auto=format&fit=crop",
      link: "/technik/smart-home/philips-hue",
      isAffiliate: true,
    },
    {
      title: "Sony WH-1000XM5",
      category: "technik",
      subcategory: "Gadgets",
      description: "Die besten Noise-Cancelling-Kopfhörer mit erstklassigem Klang und langer Akkulaufzeit.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop",
      link: "/technik/gadgets/sony-wh1000xm5",
      isAffiliate: true,
    },
    {
      title: "Blueair Blue Pure 411",
      category: "lifestyle",
      subcategory: "Haushalt",
      description: "Der kompakte Luftreiniger mit hervorragender Filterleistung für kleine bis mittelgroße Räume.",
      rating: 4.5,
      imageSrc: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=800&auto=format&fit=crop",
      link: "/lifestyle/haushalt/blueair-411",
      isAffiliate: true,
    },
  ];

  // Filter recommendations based on active category
  const filteredRecommendations = activeCategory === "all" 
    ? recommendations 
    : recommendations.filter(rec => rec.category === activeCategory);

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(recommendations.map(rec => rec.category)))];

  return (
    <Layout>
      <section className="pt-8 pb-20">
        <div className="container">
          <SectionHeading
            subtitle="Meine Empfehlungen"
            title="Produkte und Services, die ich selbst nutze"
            description="Hier findest du meine persönlich getesteten und für gut befundenen Empfehlungen in verschiedenen Kategorien. Alle Links mit * sind Affiliate-Links."
            align="center"
          />

          <div className="flex justify-center mb-12">
            <Tabs defaultValue="all" className="w-full max-w-4xl">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1 mb-8">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className="capitalize"
                  >
                    {category === "all" ? "Alle" : category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value={activeCategory} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredRecommendations.map((recommendation, index) => (
                    <RecommendationCard
                      key={recommendation.title}
                      title={recommendation.title}
                      category={recommendation.subcategory}
                      description={recommendation.description}
                      rating={recommendation.rating}
                      imageSrc={recommendation.imageSrc}
                      link={recommendation.link}
                      isAffiliate={recommendation.isAffiliate}
                      delay={index}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Recommendations;
