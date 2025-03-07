
import { useLocation } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import StandardNavLink from "./StandardNavLink";
import { CategoryType, StandardNavLinkType } from "./types";

interface DesktopNavProps {
  mainCategories: CategoryType[];
  standardNavLinks: StandardNavLinkType[];
}

const DesktopNav = ({ mainCategories, standardNavLinks }: DesktopNavProps) => {
  const location = useLocation();

  // Function to check if a link or its subcategories are active
  const isActiveLink = (href: string, subcategories?: { href: string }[]) => {
    const isDirectMatch =
      location.pathname === href || (href !== "/" && location.pathname.startsWith(href));

    // Also check subcategories
    if (subcategories && !isDirectMatch) {
      return subcategories.some((sub) => location.pathname.startsWith(sub.href));
    }

    return isDirectMatch;
  };

  return (
    <nav className="hidden md:flex space-x-1 xl:space-x-2 overflow-x-auto">
      {/* Main categories with mega menu */}
      {mainCategories.map((category) => {
        const isActive = isActiveLink(category.href, category.subcategories);
        return <MegaMenu key={category.name} category={category} isActive={isActive} />;
      })}

      {/* Standard links without mega menu */}
      {standardNavLinks.map((link) => (
        <StandardNavLink key={link.name} link={link} />
      ))}
    </nav>
  );
};

export default DesktopNav;
