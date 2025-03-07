
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { CategoryType } from "./types";

interface MegaMenuProps {
  category: CategoryType;
  isActive: boolean;
}

const MegaMenu = ({ category, isActive }: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  // Beim Routenwechsel Menü schließen
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  // Klicks außerhalb des Menüs behandeln
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  
  // Desktop: Menü auf Hover öffnen/schließen
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };
  
  // Menü umschalten (hauptsächlich für Mobile)
  const toggleMenu = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };
  
  // Menü schließen
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div 
      ref={menuRef} 
      className="relative" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Menü-Trigger-Button */}
      <button
        onClick={toggleMenu}
        className={`relative py-5 px-3 text-sm xl:text-base transition-colors whitespace-nowrap flex items-center gap-1.5 ${
          isActive ? "text-primary font-medium" : "text-foreground hover:text-primary"
        }`}
        aria-expanded={isOpen}
      >
        {category.name}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in"></span>
        )}
      </button>

      {/* Dropdown-Inhalt */}
      <div 
        className={`absolute top-full left-0 w-screen max-w-5xl bg-background shadow-lg rounded-xl border border-border/40 z-50 transition-all duration-300 ${
          isOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
          {/* Hauptkategorie-Info */}
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
              className="bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ease-in-out mt-auto hover:shadow-md flex justify-center items-center"
              onClick={closeMenu}
            >
              Alle {category.name} anzeigen
            </Link>
          </div>

          {/* Unterkategorien */}
          <div className="lg:col-span-2">
            <h4 className="font-medium text-muted-foreground mb-3 text-sm uppercase tracking-wider">
              Kategorien
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {category.subcategories.map((subCategory) => (
                <Link
                  key={subCategory.name}
                  to={subCategory.href}
                  className="group flex flex-col p-3 rounded-lg hover:bg-muted/70 transition-all duration-300 ease-in-out border border-transparent hover:border-border/30"
                  onClick={closeMenu}
                >
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {subCategory.name}
                  </span>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors">
                    {subCategory.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Empfohlene Einträge */}
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
                  onClick={closeMenu}
                >
                  <div className="flex items-center justify-between p-2 rounded-md hover:bg-primary/5 transition-all duration-300">
                    <span className="font-medium group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary group-hover:bg-primary/25 transition-colors">
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
    </div>
  );
};

export default MegaMenu;
