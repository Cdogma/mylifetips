
import { useState, useEffect } from "react";
import { Recommendation } from "@/types/recommendations";

export const useRecommendationFilters = (allRecommendations: Recommendation[]) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [minRating, setMinRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"rating" | "title" | "none">("none");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [filteredRecommendations, setFilteredRecommendations] = useState<Recommendation[]>([]);
  const [showFilters, setShowFilters] = useState(false);

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
  }, [activeCategory, minRating, searchQuery, sortBy, sortDirection, allRecommendations]);

  const handleClearFilters = () => {
    setActiveCategory("all");
    setMinRating(0);
    setSearchQuery("");
    setSortBy("none");
    setSortDirection("desc");
  };

  return {
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
    subcategories,
    handleClearFilters
  };
};
