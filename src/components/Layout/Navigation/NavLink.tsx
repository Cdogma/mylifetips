
import { Link } from "react-router-dom";

interface NavLinkProps {
  href: string;
  name: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, name, isActive, onClick }: NavLinkProps) => {
  return (
    <Link
      to={href}
      className={`relative py-5 px-3 text-sm xl:text-base hover:text-primary transition-colors whitespace-nowrap ${
        isActive 
          ? "text-primary font-medium" 
          : "text-foreground"
      }`}
      onClick={onClick}
    >
      {name}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in"></span>
      )}
    </Link>
  );
};

export default NavLink;
