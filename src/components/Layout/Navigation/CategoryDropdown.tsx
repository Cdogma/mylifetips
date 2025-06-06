
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface CategoryType {
  name: string;
  href: string;
  subcategories: { name: string; href: string }[];
}

interface CategoryDropdownProps {
  category: CategoryType;
  isActive: boolean;
}

const CategoryDropdown = ({ category, isActive }: CategoryDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`group relative py-4 px-4 text-sm xl:text-base transition-all duration-300 ease-out whitespace-nowrap flex items-center gap-2 rounded-lg hover:bg-muted/50 ${
          isActive 
            ? "text-primary font-medium bg-primary/5" 
            : "text-foreground hover:text-primary"
        }`}
      >
        <span>{category.name}</span>
        <ChevronDown 
          className={`h-4 w-4 transition-all duration-300 ${
            isOpen ? 'rotate-180 text-primary' : 'group-hover:text-primary'
          }`} 
        />
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary rounded-full"
            style={{ x: '-50%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 z-50"
          >
            <div className="bg-background/95 backdrop-blur-xl border border-border/20 rounded-2xl shadow-2xl shadow-black/10 p-2">
              <div className="space-y-1">
                <Link 
                  to={category.href}
                  className="group flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-200"
                >
                  <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors duration-200" />
                  <div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                      Alle {category.name}
                    </span>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Übersicht aller Kategorien
                    </p>
                  </div>
                </Link>
                
                <div className="h-px bg-border/50 my-2" />
                
                {category.subcategories.map((subCategory, index) => (
                  <Link 
                    key={subCategory.name}
                    to={subCategory.href}
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all duration-200"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors duration-200" />
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors duration-200">
                      {subCategory.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryDropdown;
