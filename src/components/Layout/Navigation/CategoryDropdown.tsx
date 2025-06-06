
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
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
          isActive 
            ? "text-primary bg-primary/10" 
            : "text-foreground hover:text-primary hover:bg-muted/50"
        }`}
      >
        {category.name}
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-xl shadow-xl z-50"
          >
            <div className="p-2">
              <Link 
                to={category.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div>
                  <div className="font-medium text-foreground group-hover:text-primary">
                    Alle {category.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Komplette Übersicht
                  </div>
                </div>
              </Link>
              
              <div className="h-px bg-border my-2" />
              
              {category.subcategories.map((sub) => (
                <Link 
                  key={sub.name}
                  to={sub.href}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
                  {sub.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryDropdown;
