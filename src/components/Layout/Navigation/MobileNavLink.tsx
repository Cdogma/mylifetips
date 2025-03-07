
import { Link } from "react-router-dom";

interface MobileNavLinkProps {
  link: {
    name: string;
    href: string;
  };
  index: number;
  isActive: boolean;
  onItemClick?: () => void;
}

const MobileNavLink = ({ link, index, isActive, onItemClick }: MobileNavLinkProps) => {
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
        animationDelay: `${index * 50}ms`,
      }}
      onClick={onItemClick}
    >
      <div className="flex items-center">
        <span>{link.name}</span>
        {isActive && (
          <span className="ml-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
        )}
      </div>
    </Link>
  );
};

export default MobileNavLink;
