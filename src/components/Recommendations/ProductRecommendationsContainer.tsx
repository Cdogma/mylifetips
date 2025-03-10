
import { Tabs, TabsContent } from "@/components/ui/tabs";
import SectionHeading from "../UI/SectionHeading";
import Breadcrumbs from "../UI/Breadcrumbs";
import FilterSection from "./FilterSection";
import SortDropdown from "./SortDropdown";
import { recommendationsData } from "../../data/recommendationsData";
import { useRecommendationFilters } from "@/hooks/useRecommendationFilters";
import RecommendationsList from "./RecommendationsList";
import CategoryTabs from "./CategoryTabs";

const ProductRecommendationsContainer = () => {
  // Use the custom hook for all filtering logic
  const {
    activeCategory,
    setActiveCategory,
    minRating,
    setMinRating,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    sortDirection,
    setSortDirection,
    filteredRecommendations,
    showFilters,
    setShowFilters,
    categories,
    handleClearFilters
  } = useRecommendationFilters(recommendationsData);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Empfehlungen" }
  ];

  return (
    <section className="pt-8 pb-20">
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
        
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
            <CategoryTabs 
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            
            <TabsContent value={activeCategory} className="mt-0">
              <RecommendationsList 
                recommendations={filteredRecommendations}
                handleClearFilters={handleClearFilters}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProductRecommendationsContainer;
