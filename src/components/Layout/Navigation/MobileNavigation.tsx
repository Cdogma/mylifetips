
import { useLocation } from "react-router-dom";
import MobileNavItem from "./MobileNavItem";
import MobileNavLink from "./MobileNavLink";
import { CategoryType } from "./CategoryDropdown";

interface MobileNavigationProps {
  isOpen: boolean;
  mainCategories: CategoryType[];
  standardNavLinks: {
    name: string;
    href: string;
  }[];
  isActiveLink: (href: string, subcategories?: { name: string; href: string }[]) => boolean;
  toggleMenu: () => void;
}

const MobileNavigation = ({ 
  isOpen, 
  mainCategories, 
  standardNavLinks, 
  isActiveLink,
  toggleMenu
}: MobileNavigationProps) => {
  const location = useLocation();
  const isHome2 = location.pathname === '/home2';

  // Don't render mobile navigation on Home2 page
  if (isHome2) {
    return null;
  }

  return (
    <div 
      className={`md:hidden bg-background border-t border-border transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col space-y-1">
          {/* Hauptkategorien mit ausklappbaren Unterkategorien */}
          {mainCategories.map((category, index) => {
            const isActive = isActiveLink(category.href, category.subcategories);
            
            return (
              <MobileNavItem 
                key={category.name} 
                category={category} 
                isActive={isActive} 
                index={index} 
                onItemClick={toggleMenu}
              />
            );
          })}
          
          {/* Standardeinträge */}
          {standardNavLinks.map((link, index) => {
            const isActive = location.pathname === link.href || 
              (link.href !== "/" && location.pathname.startsWith(link.href));
            
            return (
              <MobileNavLink 
                key={link.name} 
                link={link} 
                index={mainCategories.length + index} 
                isActive={isActive} 
                onItemClick={toggleMenu}
              />
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigation;
