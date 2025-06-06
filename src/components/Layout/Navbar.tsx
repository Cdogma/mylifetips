
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "../UI/ThemeToggle";
import NavLogo from "./Navigation/NavLogo";
import CategoryDropdown from "./Navigation/CategoryDropdown";
import NavLink from "./Navigation/NavLink";
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActiveLink = (href: string, subcategories?: { name: string; href: string }[]) => {
    const isDirectMatch = location.pathname === href || 
      (href !== "/" && location.pathname.startsWith(href));
    
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/30" 
          : "bg-background/90 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLogo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {mainCategories.map((category) => {
              const isActive = isActiveLink(category.href, category.subcategories);
              return (
                <CategoryDropdown 
                  key={category.name} 
                  category={category} 
                  isActive={isActive} 
                />
              );
            })}

            {standardNavLinks.map((link) => {
              const isActive = location.pathname === link.href || 
                (link.href !== "/" && location.pathname.startsWith(link.href));
              
              return (
                <NavLink 
                  key={link.name} 
                  href={link.href} 
                  name={link.name} 
                  isActive={isActive} 
                />
              );
            })}
          </nav>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-muted/50 rounded-xl transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
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
