
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
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
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-border/20" 
          : "bg-background/20 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLogo />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <DesktopNavigation 
              mainCategories={mainCategories} 
              standardNavLinks={standardNavLinks}
              isActiveLink={isActiveLink}
            />
          </div>

          {/* Theme Toggle and Mobile Menu Toggle */}
          <div className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThemeToggle />
            </motion.div>
            
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-muted/50 rounded-xl transition-all duration-300 relative"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-6">
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <Menu size={24} />
                </motion.div>
                <motion.div
                  animate={{ rotate: isOpen ? 0 : -180, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <X size={24} />
                </motion.div>
              </div>
            </motion.button>
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
    </motion.header>
  );
};

export default Navbar;
