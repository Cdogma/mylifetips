
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
    const handleMouseMove = (e: MouseEvent) => {
      const rect = e.currentTarget?.getBoundingClientRect?.() || { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
      setMousePosition({
        x: ((e.clientX - rect.left) / window.innerWidth) * 100,
        y: ((e.clientY - rect.top) / 100) * 100
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(255, 154, 0, 0.15) 0%, 
                rgba(255, 105, 180, 0.12) 25%, 
                rgba(0, 255, 255, 0.08) 50%, 
                transparent 70%
              ),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
                rgba(138, 43, 226, 0.15) 0%, 
                rgba(255, 20, 147, 0.12) 30%, 
                transparent 60%
              )
            `,
          }}
        />
        
        {/* Floating Aurora Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-radial from-orange-400/20 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.3, 0.6, 0.2, 0.4],
            x: [0, 50, -25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-radial from-cyan-400/20 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [0.8, 1.4, 1, 0.9],
            opacity: [0.2, 0.5, 0.3, 0.4],
            x: [0, -40, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <NavLogo />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {mainCategories.map((category, index) => {
              const isActive = isActiveLink(category.href, category.subcategories);
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <CategoryDropdown 
                    category={category} 
                    isActive={isActive} 
                  />
                </motion.div>
              );
            })}

            {standardNavLinks.map((link, index) => {
              const isActive = location.pathname === link.href || 
                (link.href !== "/" && location.pathname.startsWith(link.href));
              
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (mainCategories.length + index) * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
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
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ThemeToggle />
            </motion.div>
            
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-3 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              }}
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
