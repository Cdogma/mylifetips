
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { CategoryType } from "./types";

interface MegaMenuProps {
  category: CategoryType;
  isActive: boolean;
}

const MegaMenu = ({ category, isActive }: MegaMenuProps) => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  const toggleMegaMenu = (category: string) => {
    setActiveMegaMenu(activeMegaMenu === category ? null : category);
  };

  return (
    <div className="relative group" onMouseLeave={closeMegaMenu}>
      <button
        className={`relative py-5 px-3 text-sm xl:text-base hover:text-primary transition-colors whitespace-nowrap flex items-center gap-1.5 group ${
          isActive ? "text-primary font-medium" : "text-foreground"
        }`}
        onClick={() => toggleMegaMenu(category.name)}
        onMouseEnter={() => setActiveMegaMenu(category.name)}
        aria-expanded={activeMegaMenu === category.name}
      >
        {category.name}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            activeMegaMenu === category.name ? "rotate-180" : ""
          }`}
        />
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in"></span>
        )}
      </button>

      {/* Mega-Menu Dropdown */}
      {activeMegaMenu === category.name && (
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-5xl bg-background/95 backdrop-blur-xl shadow-lg rounded-xl border border-border/40 overflow-hidden z-50 animate-fade-in"
          onMouseLeave={closeMegaMenu}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
            {/* Main Info and Icon */}
            <div className="lg:col-span-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3 text-primary">
                <category.icon className="h-5 w-5" />
                <h3 className="font-bold text-lg">{category.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {category.description}
              </p>
              <Link
                to={category.href}
                className="bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-primary/10 mt-auto hover:-translate-y-0.5 flex justify-center items-center"
                onClick={closeMegaMenu}
              >
                Alle {category.name} anzeigen
              </Link>
            </div>

            {/* Categories */}
            <div className="lg:col-span-2">
              <h4 className="font-medium text-muted-foreground mb-3 text-sm uppercase tracking-wider">
                Kategorien
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {category.subcategories.map((subCategory) => (
                  <Link
                    key={subCategory.name}
                    to={subCategory.href}
                    className="group flex flex-col p-3 rounded-lg hover:bg-muted/70 transition-all duration-300 ease-in-out hover:shadow-sm border border-transparent hover:border-border/30"
                    onClick={closeMegaMenu}
                  >
                    <span className="font-medium group-hover:text-primary transition-colors group-hover:translate-x-0.5 transform duration-300 inline-block">
                      {subCategory.name}
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                      {subCategory.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Featured Items */}
            <div className="lg:col-span-1 border-l border-border/30 pl-6">
              <h4 className="font-medium text-muted-foreground mb-3 text-sm uppercase tracking-wider">
                Empfohlen
              </h4>
              <div className="space-y-3">
                {category.featuredItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block group"
                    onClick={closeMegaMenu}
                  >
                    <div className="flex items-center justify-between p-2 rounded-md hover:bg-primary/5 transition-all duration-300">
                      <span className="font-medium group-hover:text-primary transition-colors group-hover:translate-x-0.5 transform duration-300 inline-block">
                        {item.name}
                      </span>
                      {item.badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary group-hover:bg-primary/25 transition-colors duration-300">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
