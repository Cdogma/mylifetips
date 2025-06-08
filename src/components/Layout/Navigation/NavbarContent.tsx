
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import ThemeToggle from "../../UI/ThemeToggle";
import LanguageSwitcher from "../../UI/LanguageSwitcher";
import NavLogo from "./NavLogo";
import CategoryDropdown from "./CategoryDropdown";
import NavLink from "./NavLink";
import { CategoryType } from "./CategoryDropdown";

interface NavbarContentProps {
  mainCategories: CategoryType[];
  standardNavLinks: { name: string; href: string }[];
  isActiveLink: (href: string, subcategories?: { name: string; href: string }[]) => boolean;
  isOpen: boolean;
  toggleMenu: () => void;
  location: { pathname: string };
}

const NavbarContent = ({ 
  mainCategories, 
  standardNavLinks, 
  isActiveLink, 
  isOpen, 
  toggleMenu, 
  location 
}: NavbarContentProps) => {
  const currentLocation = useLocation();
  const isHome2 = currentLocation.pathname === '/home2';

  return (
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
            
            if (isHome2) {
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <Link 
                    to={category.href}
                    className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                      isActive 
                        ? "text-white bg-white/10 border border-white/20" 
                        : "text-white/90 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {category.name}
                  </Link>
                </motion.div>
              );
            }
            
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
            
            if (isHome2) {
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (mainCategories.length + index) * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <Link 
                    to={link.href}
                    className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                      isActive 
                        ? "text-white bg-white/10 border border-white/20" 
                        : "text-white/90 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            }
            
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

        {/* Right side controls */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <LanguageSwitcher />
          </motion.div>

          {/* Theme Toggle */}
          <motion.div
            whileHover={{ scale: 1.1, rotateY: 15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ThemeToggle />
          </motion.div>
          
          {/* Mobile Menu Button */}
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
  );
};

export default NavbarContent;
