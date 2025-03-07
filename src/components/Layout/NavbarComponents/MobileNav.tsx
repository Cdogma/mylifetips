
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import MobileNavItem from "./MobileNavItem";
import { CategoryType, StandardNavLinkType } from "./types";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  mainCategories: CategoryType[];
  standardNavLinks: StandardNavLinkType[];
}

const MobileNav = ({ isOpen, setIsOpen, mainCategories, standardNavLinks }: MobileNavProps) => {
  const location = useLocation();

  // Funktion zur Prüfung, ob Link oder seine Unterkategorien aktiv sind
  const isActiveLink = (href, subcategories?) => {
    const isDirectMatch =
      location.pathname === href || (href !== "/" && location.pathname.startsWith(href));

    // Auch Unterkategorien prüfen
    if (subcategories && !isDirectMatch) {
      return subcategories.some((sub) => location.pathname.startsWith(sub.href));
    }

    return isDirectMatch;
  };

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
                index={index}
                isActive={isActive}
                setIsOpen={setIsOpen}
              />
            );
          })}

          {/* Standardeinträge */}
          {standardNavLinks.map((link, index) => {
            const isActive =
              location.pathname === link.href ||
              (link.href !== "/" && location.pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                to={link.href}
                className={`text-foreground hover:text-primary transition-all py-3 px-4 rounded-md ${
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "hover:bg-muted/50"
                }`}
                style={{
                  animationDelay: `${(mainCategories.length + index) * 50}ms`,
                }}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="ml-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
