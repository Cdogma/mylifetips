
import { useLocation } from "react-router-dom";
import CategoryDropdown, { CategoryType } from "./CategoryDropdown";
import NavLink from "./NavLink";

interface DesktopNavigationProps {
  mainCategories: CategoryType[];
  standardNavLinks: {
    name: string;
    href: string;
  }[];
  isActiveLink: (href: string, subcategories?: { name: string; href: string }[]) => boolean;
}

const DesktopNavigation = ({ 
  mainCategories, 
  standardNavLinks, 
  isActiveLink 
}: DesktopNavigationProps) => {
  const location = useLocation();

  return (
    <nav className="hidden md:flex space-x-1 xl:space-x-2 overflow-x-auto">
      {/* Hauptkategorien mit Dropdown */}
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

      {/* Standardeinträge ohne Dropdown */}
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
  );
};

export default DesktopNavigation;
