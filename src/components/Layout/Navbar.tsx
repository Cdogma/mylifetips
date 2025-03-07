
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../UI/ThemeToggle";
import NavLogo from "./Navigation/NavLogo";
import DesktopNavigation from "./Navigation/DesktopNavigation";
import MobileNavigation from "./Navigation/MobileNavigation";
import { mainCategories, standardNavLinks } from "./Navigation/NavData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/60 backdrop-blur-lg shadow-sm" : "bg-background/40 backdrop-blur-md"
      } border-b border-border/30`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLogo />

          {/* Desktop Navigation */}
          <DesktopNavigation 
            mainCategories={mainCategories} 
            standardNavLinks={standardNavLinks}
            isActiveLink={isActiveLink}
          />

          {/* Theme Toggle and Mobile Menu Toggle */}
          <div className="flex items-center space-x-2">
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
