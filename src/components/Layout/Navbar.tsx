
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../UI/ThemeToggle";
import Logo from "./NavbarComponents/Logo";
import DesktopNav from "./NavbarComponents/DesktopNav";
import MobileNav from "./NavbarComponents/MobileNav";
import { mainCategories, standardNavLinks } from "./NavbarComponents/NavData";

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-background/40 backdrop-blur-md"
      } border-b border-border/30`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav 
            mainCategories={mainCategories} 
            standardNavLinks={standardNavLinks} 
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
      <MobileNav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        mainCategories={mainCategories}
        standardNavLinks={standardNavLinks}
      />
    </header>
  );
};

export default Navbar;
