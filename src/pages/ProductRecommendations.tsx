
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import RecommendationCard from "../components/UI/RecommendationCard";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import { Filter, Star, SlidersHorizontal, Search, X, ArrowUpDown } from "lucide-react";

interface Recommendation {
  title: string;
  category: string;
  subcategory: string;
  description: string;
  rating: number;
  imageSrc?: string;
  link: string;
  isAffiliate?: boolean;
  price?: string;
  pros?: string[];
  cons?: string[];
}

const ProductRecommendations = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [minRating, setMinRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"rating" | "title" | "none">("none");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [filteredRecommendations, setFilteredRecommendations] = useState<Recommendation[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const allRecommendations: Recommendation[] = [
    {
      title: "C24 Smart Girokonto",
      category: "finanzen",
      subcategory: "Bankkonten",
      description: "Das beste kostenlose Girokonto mit allen wichtigen Funktionen und einer tollen App für deinen Alltag.",
      rating: 4.8,
      imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
      link: "/finanzen/bankkonten/c24",
      isAffiliate: true,
      price: "0€/Monat",
      pros: ["Kostenlose Kontoführung", "Gute mobile App", "Kostenlose Kreditkarte"],
      cons: ["Wenig Filialen", "Eingeschränkter Kundenservice"],
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
      price: "60€/Monat",
      pros: ["Umfangreiche Reiseversicherungen", "Airport Lounges", "Concierge Service"],
      cons: ["Hohe Jahresgebühr", "Nicht überall akzeptiert"],
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
      price: "0€ - 3€/Monat",
      pros: ["Große ETF-Auswahl", "Niedrige Gebühren", "Intuitive Oberfläche"],
      cons: ["Eingeschränkte Ordertypen", "Begrenzte Handelsplätze"],
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
      price: "0,2% TER",
      pros: ["Breite Streuung", "Niedrige Kosten", "Hohe Liquidität"],
      cons: ["Keine Schwellenländer", "US-Übergewichtung"],
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
      price: "0€ - 8€/Monat",
      pros: ["Anpassbar", "Vielseitig", "Teamfunktionen"],
      cons: ["Steile Lernkurve", "Offline-Einschränkungen"],
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
      price: "Ab 99€",
      pros: ["Einfache Einrichtung", "Großes Ökosystem", "Zuverlässigkeit"],
      cons: ["Relativ teuer", "Bridge erforderlich"],
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
      price: "Ab 329€",
      pros: ["Hervorragendes Noise-Cancelling", "Lange Akkulaufzeit", "Bequem"],
      cons: ["Hoher Preis", "Nicht faltbar"],
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
      price: "Ab 129€",
      pros: ["Leiser Betrieb", "Niedriger Stromverbrauch", "Kompakt"],
      cons: ["Nur für kleine Räume", "Filter-Folgekosten"],
    },
    {
      title: "Mind Journal - Das Achtsamkeits-Tagebuch",
      category: "lifestyle",
      subcategory: "Wellness",
      description: "Dieses strukturierte Tagebuch unterstützt dich dabei, mehr Achtsamkeit und Dankbarkeit in deinen Alltag zu integrieren.",
      rating: 4.8,
      imageSrc: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
      link: "/lifestyle/wellness/mind-journal",
      isAffiliate: true,
      price: "Ab 24,95€",
      pros: ["Strukturierte Prompts", "Hochwertige Verarbeitung", "Wissenschaftlicher Ansatz"],
      cons: ["Relativ teuer für ein Notizbuch", "Fester Zeitraum (90 Tage)"],
    },
    {
      title: "Minimalistischer Wochenplaner",
      category: "lifestyle",
      subcategory: "Organisation",
      description: "Dieser schlichte, aber effektive Wochenplaner hilft dir, den Überblick zu behalten ohne dich zu überfordern.",
      rating: 4.6,
      imageSrc: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=800&auto=format&fit=crop",
      link: "/lifestyle/organisation/planner",
      isAffiliate: true,
      price: "Ab 19,95€",
      pros: ["Einfache Struktur", "Qualitatives Papier", "Übersichtliches Layout"],
      cons: ["Wenig Anpassungsmöglichkeiten", "Keine digitale Version"],
    },
    {
      title: "Nachhaltiges Starter-Set",
      category: "lifestyle",
      subcategory: "Nachhaltigkeit",
      description: "Das perfekte Set für alle, die ihren Alltag umweltfreundlicher gestalten möchten, mit wiederverwendbaren Basics.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1610024062303-e355e94e6483?q=80&w=800&auto=format&fit=crop",
      link: "/lifestyle/nachhaltigkeit/starter-set",
      isAffiliate: true,
      price: "Ab 49,95€",
      pros: ["Hochwertige Materialien", "Langlebig", "Praktisch im Alltag"],
      cons: ["Relativ hohe Anfangsinvestition", "Gewöhnungsbedürftig"],
    },
  ];

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(allRecommendations.map(rec => rec.category)))];
  
  // Get unique subcategories
  const subcategories = Array.from(new Set(allRecommendations.map(rec => rec.subcategory)));

  // Filter recommendations based on active filters
  useEffect(() => {
    let filtered = [...allRecommendations];
    
    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(rec => rec.category === activeCategory);
    }
    
    // Filter by minimum rating
    if (minRating > 0) {
      filtered = filtered.filter(rec => rec.rating >= minRating);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(rec => 
        rec.title.toLowerCase().includes(query) || 
        rec.description.toLowerCase().includes(query) ||
        rec.subcategory.toLowerCase().includes(query)
      );
    }
    
    // Sort by selected criteria
    if (sortBy !== "none") {
      filtered.sort((a, b) => {
        if (sortBy === "rating") {
          return sortDirection === "asc" ? a.rating - b.rating : b.rating - a.rating;
        } else if (sortBy === "title") {
          return sortDirection === "asc" 
            ? a.title.localeCompare(b.title) 
            : b.title.localeCompare(a.title);
        }
        return 0;
      });
    }
    
    setFilteredRecommendations(filtered);
  }, [activeCategory, minRating, searchQuery, sortBy, sortDirection]);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Empfehlungen" }
  ];

  const handleClearFilters = () => {
    setActiveCategory("all");
    setMinRating(0);
    setSearchQuery("");
    setSortBy("none");
    setSortDirection("desc");
  };

  const renderRatingFilter = () => {
    return (
      <div className="mt-2">
        <p className="text-sm font-medium mb-1">Mindestbewertung: {minRating} ★</p>
        <div className="flex items-center gap-2">
          {[0, 3, 3.5, 4, 4.5].map((rating) => (
            <Button
              key={rating}
              size="sm"
              variant={minRating === rating ? "default" : "outline"}
              onClick={() => setMinRating(rating)}
              className="flex items-center gap-1"
            >
              {rating > 0 ? (
                <>
                  {rating}
                  <Star className="h-3 w-3 fill-current" />
                </>
              ) : (
                "Alle"
              )}
            </Button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      
      <section className="pt-8 pb-20">
        <div className="container">
          <SectionHeading
            subtitle="Produktempfehlungen"
            title="Meine getesteten und empfohlenen Produkte"
            description="Hier findest du alle meine persönlich getesteten und für gut befundenen Empfehlungen - gefiltert nach deinen Wünschen. Alle mit * gekennzeichneten Links sind Affiliate-Links."
            align="center"
          />

          <div className="flex flex-col items-stretch max-w-6xl mx-auto">
            {/* Search and filter controls */}
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Nach Produkten suchen..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex gap-1 items-center"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4" />
                  <span className="hidden sm:inline">Filter</span>
                  {(activeCategory !== "all" || minRating > 0) && (
                    <span className="bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center ml-1">
                      {(activeCategory !== "all" ? 1 : 0) + (minRating > 0 ? 1 : 0)}
                    </span>
                  )}
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex gap-1 items-center">
                      <ArrowUpDown className="h-4 w-4" />
                      <span className="hidden sm:inline">Sortieren</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => { setSortBy("rating"); setSortDirection("desc"); }}>
                      Höchste Bewertung
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { setSortBy("rating"); setSortDirection("asc"); }}>
                      Niedrigste Bewertung
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { setSortBy("title"); setSortDirection("asc"); }}>
                      A-Z
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { setSortBy("title"); setSortDirection("desc"); }}>
                      Z-A
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                {(activeCategory !== "all" || minRating > 0 || searchQuery || sortBy !== "none") && (
                  <Button 
                    variant="ghost" 
                    onClick={handleClearFilters}
                    className="flex gap-1 items-center"
                  >
                    <X className="h-4 w-4" />
                    <span className="hidden sm:inline">Zurücksetzen</span>
                  </Button>
                )}
              </div>
            </div>
            
            {/* Filter expansion panel */}
            {showFilters && (
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <p className="text-sm font-medium mb-2">Kategorien</p>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <Button
                            key={category}
                            size="sm"
                            variant={activeCategory === category ? "default" : "outline"}
                            onClick={() => setActiveCategory(category)}
                            className="capitalize"
                          >
                            {category === "all" ? "Alle" : category}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:w-1/2">
                      {renderRatingFilter()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Category tabs */}
            <Tabs defaultValue="all" value={activeCategory} className="w-full">
              <TabsList className="hidden lg:grid lg:grid-cols-5 gap-2 p-1 mb-8">
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
                {filteredRecommendations.length > 0 ? (
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
                ) : (
                  <div className="text-center py-12">
                    <SlidersHorizontal className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">Keine Ergebnisse gefunden</h3>
                    <p className="text-muted-foreground mb-6">
                      Versuche andere Filtereinstellungen oder Suchbegriffe.
                    </p>
                    <Button onClick={handleClearFilters}>
                      Filter zurücksetzen
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductRecommendations;
