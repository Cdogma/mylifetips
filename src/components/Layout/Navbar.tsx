
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useMouseTracker } from "./Navigation/MouseTracker";
import AuroraBackground from "./Navigation/AuroraBackground";
import NavbarContent from "./Navigation/NavbarContent";
import MobileNavigation from "./Navigation/MobileNavigation";
import { mainCategories, standardNavLinks } from "./Navigation/NavData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mousePosition = useMouseTracker();
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "backdrop-blur-3xl" 
          : "backdrop-blur-2xl"
      }`}
      style={{
        background: scrolled 
          ? "rgba(15, 23, 42, 0.85)"
          : "rgba(15, 23, 42, 0.75)"
      }}
    >
      {/* Aurora Background Effects */}
      <AuroraBackground mousePosition={mousePosition} scrolled={scrolled} />
      
      <NavbarContent 
        mainCategories={mainCategories}
        standardNavLinks={standardNavLinks}
        isActiveLink={isActiveLink}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        location={location}
      />

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
