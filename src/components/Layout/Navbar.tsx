
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import ThemeToggle from "../UI/ThemeToggle";
import NavLogo from "./Navigation/NavLogo";
import DesktopNavigation from "./Navigation/DesktopNavigation";
import MobileNavigation from "./Navigation/MobileNavigation";
import { mainCategories, standardNavLinks } from "./Navigation/NavData";

interface NavbarProps {
  showSearch?: boolean;
}

const Navbar = ({ showSearch = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setShowSearchInput(!showSearchInput);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setShowSearchInput(false);
  }, [location.pathname]);

  // Funktion zur Prüfung, ob Link oder seine Unterkategorien aktiv sind
  const isActiveLink = (href, subcategories) => {
    const isDirectMatch = location.pathname === href || 
      (href !== "/" && location.pathname.startsWith(href));
    
    // Auch Unterkategorien prüfen
    if (subcategories && !isDirectMatch) {
      return subcategories.some(sub => location.pathname.startsWith(sub.href));
    }
    
    return isDirectMatch;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here - for now just log the search term
    console.log("Searching for:", searchTerm);
    setShowSearchInput(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-sm" : "bg-background/40 backdrop-blur-md"
      } border-b border-border/30`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLogo />

          {/* Desktop Navigation with Search */}
          <div className="hidden md:flex flex-grow items-center justify-between ml-6">
            <DesktopNavigation 
              mainCategories={mainCategories} 
              standardNavLinks={standardNavLinks}
              isActiveLink={isActiveLink}
            />
            
            {showSearch && (
              <div className="relative ml-4">
                {showSearchInput ? (
                  <form onSubmit={handleSubmit} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Suchen..."
                      className="w-64 px-4 py-2 rounded-full border border-border bg-background/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      autoFocus
                    />
                  </form>
                ) : (
                  <button 
                    onClick={toggleSearch}
                    className="p-2 hover:bg-muted rounded-full transition-colors flex items-center gap-1.5"
                    aria-label="Suche"
                  >
                    <Search size={18} />
                    <span className="text-sm">Suche</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Theme Toggle and Mobile Menu Toggle */}
          <div className="flex items-center space-x-2">
            {showSearch && (
              <button
                onClick={toggleSearch}
                className="md:hidden p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Suche"
              >
                <Search size={24} />
              </button>
            )}
            
            <ThemeToggle />
            
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Input */}
      {showSearch && showSearchInput && (
        <div className="md:hidden bg-background/95 border-b border-border/30 py-3 px-4">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Suchen..."
              className="w-full px-4 py-2 pr-10 rounded-full border border-border bg-background/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
              autoFocus
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <Search size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      <MobileNavigation 
        isOpen={isOpen}
        mainCategories={mainCategories}
        standardNavLinks={standardNavLinks}
        isActiveLink={isActiveLink}
        toggleMenu={toggleMenu}
      />
    </header>
  );
};

export default Navbar;
