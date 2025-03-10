
import { X, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface FilterSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  categories: string[];
  handleClearFilters: () => void;
}

const FilterSection = ({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  minRating,
  setMinRating,
  showFilters,
  setShowFilters,
  categories,
  handleClearFilters
}: FilterSectionProps) => {
  return (
    <>
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
          
          {(activeCategory !== "all" || minRating > 0 || searchQuery) && (
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
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FilterSection;
