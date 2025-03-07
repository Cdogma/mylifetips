
import { Link, useLocation } from "react-router-dom";
import { StandardNavLinkType } from "./types";

interface StandardNavLinkProps {
  link: StandardNavLinkType;
}

const StandardNavLink = ({ link }: StandardNavLinkProps) => {
  const location = useLocation();
  
  const isActive = location.pathname === link.href || 
    (link.href !== "/" && location.pathname.startsWith(link.href));
  
  return (
    <Link
      to={link.href}
      className={`relative py-5 px-3 text-sm xl:text-base hover:text-primary transition-colors whitespace-nowrap ${
        isActive 
          ? "text-primary font-medium" 
          : "text-foreground"
      }`}
    >
      {link.name}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in"></span>
      )}
    </Link>
  );
};

export default StandardNavLink;
