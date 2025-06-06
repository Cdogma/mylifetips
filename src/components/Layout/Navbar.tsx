
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glass-navbar shadow-2xl" 
          : "backdrop-blur-md bg-slate-900/20"
      }`}
    >
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0 overflow-hidden rounded-b-3xl">
        <motion.div 
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(16, 185, 129, 0.1) 100%)",
              "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(16, 185, 129, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)",
              "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(16, 185, 129, 0.1) 100%)"
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-2 left-1/4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl float-element"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-2 right-1/3 w-16 h-16 bg-purple-500/10 rounded-full blur-2xl float-element"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="micro-hover"
          >
            <NavLogo />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            {mainCategories.map((category) => {
              const isActive = isActiveLink(category.href, category.subcategories);
              return (
                <motion.div
                  key={category.name}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="micro-hover"
                >
                  <CategoryDropdown 
                    category={category} 
                    isActive={isActive} 
                  />
                </motion.div>
              );
            })}

            {standardNavLinks.map((link) => {
              const isActive = location.pathname === link.href || 
                (link.href !== "/" && location.pathname.startsWith(link.href));
              
              return (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="micro-hover"
                >
                  <NavLink 
                    href={link.href} 
                    name={link.name} 
                    isActive={isActive} 
                  />
                </motion.div>
              );
            })}
          </nav>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 15 }}
              whileTap={{ scale: 0.9 }}
              className="micro-hover"
            >
              <ThemeToggle />
            </motion.div>
            
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-3 rounded-2xl glass-card border border-white/20 hover:border-white/40 micro-hover"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
              </motion.div>
            </motion.button>
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
