
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
          ? "backdrop-blur-xl bg-white/10 dark:bg-black/10 shadow-2xl border-b border-white/20" 
          : "backdrop-blur-md bg-white/5 dark:bg-black/5"
      }`}
      style={{
        backdropFilter: "blur(20px)",
        boxShadow: scrolled ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)" : "none"
      }}
    >
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(16, 185, 129, 0.1) 100%)",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ backgroundSize: "200% 200%" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLogo />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {mainCategories.map((category) => {
              const isActive = isActiveLink(category.href, category.subcategories);
              return (
                <motion.div
                  key={category.name}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
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
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
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
          <div className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <ThemeToggle />
            </motion.div>
            
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-xl transition-all duration-300 glass-card border border-white/20 hover:border-white/40"
              style={{
                backdropFilter: "blur(20px)",
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
              }}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
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
