
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
      className={`group relative py-4 px-8 text-sm xl:text-base transition-all duration-500 ease-out whitespace-nowrap rounded-2xl border ${
        isActive 
          ? "text-white font-semibold bg-gradient-to-r from-purple-600/90 to-blue-600/90 border-white/30 shadow-xl" 
          : "text-gray-200 hover:text-white border-white/10 hover:border-white/30"
      } nav-link`}
      style={{
        backdropFilter: "blur(24px)",
        background: isActive 
          ? "linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3))" 
          : "rgba(255, 255, 255, 0.05)",
        boxShadow: isActive 
          ? "0 10px 40px rgba(168, 85, 247, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
          : "0 4px 20px rgba(0, 0, 0, 0.1)"
      }}
    >
      <motion.span
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative z-10"
      >
        {name}
      </motion.span>
      
      {/* Enhanced hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(168, 85, 247, 0.15))",
          boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)"
        }}
      />
      
      {/* Active indicator with animation */}
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute bottom-1 left-1/2 w-3 h-3 bg-white rounded-full opacity-90 shadow-lg"
          style={{ x: '-50%' }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.9, 1, 0.9],
          }}
          animate-transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
          transform: "translateX(-100%)"
        }}
        animate={{
          transform: ["translateX(-100%)", "translateX(100%)"]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut"
        }}
      />
    </Link>
  );
};

export default NavLink;
