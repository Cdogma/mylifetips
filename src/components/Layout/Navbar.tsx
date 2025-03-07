
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
  }, [location.pathname]);

  // Function to check if link or its subcategories are active
  const isActiveLink = (href, subcategories) => {
    const isDirectMatch = location.pathname === href || 
      (href !== "/" && location.pathname.startsWith(href));
    
    // Also check subcategories
    if (subcategories && !isDirectMatch) {
      return subcategories.some(sub => location.pathname.startsWith(sub.href));
    }
    
    return isDirectMatch;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // In a real application, you would navigate to search results
      console.log("Searching for:", searchTerm);
      // Example: navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-sm" : "bg-background/40 backdrop-blur-md"
      } border-b border-border/30`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 mr-4">
            <NavLogo />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-grow items-center">
            <DesktopNavigation 
              mainCategories={mainCategories} 
              standardNavLinks={standardNavLinks}
              isActiveLink={isActiveLink}
            />
          </div>
          
          {/* Search Bar (always visible on desktop, similar to appgefahren.de) */}
          {showSearch && (
            <div className="hidden md:block ml-auto mr-4">
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Suchen..."
                  className="w-64 px-4 py-2 rounded-full border border-border bg-background/90 focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm"
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  aria-label="Suche starten"
                >
                  <Search size={16} className="text-muted-foreground" />
                </button>
              </form>
            </div>
          )}
          
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Mobile: Search button and Menu Toggle */}
          <div className="md:hidden flex items-center ml-auto">
            {showSearch && (
              <form onSubmit={handleSubmit} className="relative mr-2">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Suchen..."
                  className="w-full px-3 py-1.5 rounded-full border border-border bg-background/90 focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  aria-label="Suche starten"
                >
                  <Search size={14} className="text-muted-foreground" />
                </button>
              </form>
            )}
            
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

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
