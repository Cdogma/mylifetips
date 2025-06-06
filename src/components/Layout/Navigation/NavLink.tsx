
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
      className={`group relative py-3 px-6 text-sm xl:text-base transition-all duration-300 ease-out whitespace-nowrap rounded-2xl border ${
        isActive 
          ? "text-white font-medium bg-gradient-to-r from-purple-600/80 to-blue-600/80 border-white/20 shadow-lg" 
          : "text-foreground hover:text-white border-white/10 hover:border-white/20"
      }`}
      style={{
        backdropFilter: "blur(20px)",
        background: isActive 
          ? "rgba(168, 85, 247, 0.2)" 
          : "rgba(255, 255, 255, 0.05)",
        boxShadow: isActive 
          ? "0 8px 32px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          : "0 4px 16px rgba(0, 0, 0, 0.1)"
      }}
    >
      <motion.span
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {name}
      </motion.span>
      
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))",
          boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)"
        }}
      />
      
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute bottom-1 left-1/2 w-2 h-2 bg-white rounded-full opacity-80"
          style={{ x: '-50%' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default NavLink;
