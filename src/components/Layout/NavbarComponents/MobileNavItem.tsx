
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { CategoryType } from "./types";

interface MobileNavItemProps {
  category: CategoryType;
  index: number;
  isActive: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNavItem = ({ category, index, isActive, setIsOpen }: MobileNavItemProps) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(isActive);

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const closeMainMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="border-b border-border/30 pb-2 mb-2">
      <div className="flex justify-between items-center">
        <Link
          to={category.href}
          className={`text-foreground hover:text-primary transition-all py-3 px-4 rounded-md flex-grow ${
            isActive
              ? "bg-primary/10 text-primary font-medium"
              : "hover:bg-muted/50"
          }`}
          onClick={closeMainMenu}
        >
          {category.name}
        </Link>
        <button
          onClick={toggleSubMenu}
          className="p-3 hover:bg-muted/50 rounded-md"
          aria-label="Untermenü umschalten"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isSubMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Unterkategorien */}
      <div
        className={`overflow-hidden transition-all duration-300 pl-4 ${
          isSubMenuOpen ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0"
        }`}
      >
        {category.subcategories.map((subCategory) => (
          <Link
            key={subCategory.name}
            to={subCategory.href}
            className="block py-2 px-4 rounded-md my-1 text-sm hover:bg-muted/30 text-muted-foreground hover:text-foreground"
            onClick={closeMainMenu}
          >
            {subCategory.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavItem;
