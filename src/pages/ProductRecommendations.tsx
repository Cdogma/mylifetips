
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import RecommendationCard from "../components/UI/RecommendationCard";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import FilterSection from "../components/Recommendations/FilterSection";
import SortDropdown from "../components/Recommendations/SortDropdown";
import NoResultsFound from "../components/Recommendations/NoResultsFound";
import { recommendationsData } from "../data/recommendationsData";

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

  // Use demo data or replace with your actual data
  const allRecommendations = recommendationsData;

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
            {/* Filter and Search Section */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <FilterSection 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                minRating={minRating}
                setMinRating={setMinRating}
                showFilters={showFilters}
                setShowFilters={setShowFilters}
                categories={categories}
                handleClearFilters={handleClearFilters}
              />
              
              <SortDropdown 
                setSortBy={setSortBy}
                setSortDirection={setSortDirection}
              />
            </div>

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
                        price={recommendation.price}
                        pros={recommendation.pros}
                        cons={recommendation.cons}
                      />
                    ))}
                  </div>
                ) : (
                  <NoResultsFound handleClearFilters={handleClearFilters} />
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
