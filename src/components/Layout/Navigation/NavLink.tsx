
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  name: string;
  isActive: boolean;
}

const NavLink = ({ href, name, isActive }: NavLinkProps) => {
  return (
    <Link 
      to={href}
      className={`group relative py-4 px-4 text-sm xl:text-base transition-all duration-300 ease-out whitespace-nowrap rounded-lg hover:bg-muted/50 ${
        isActive 
          ? "text-primary font-medium bg-primary/5" 
          : "text-foreground hover:text-primary"
      }`}
    >
      <span>{name}</span>
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary rounded-full"
          style={{ x: '-50%' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default NavLink;
