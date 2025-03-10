
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryTabs = ({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}: CategoryTabsProps) => {
  return (
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
  );
};

export default CategoryTabs;
