
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  name: string;
  isActive: boolean;
}

const NavLink = ({ href, name, isActive }: NavLinkProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <Link 
        to={href}
        className={`group relative py-3 px-6 text-sm xl:text-base transition-all duration-500 ease-out whitespace-nowrap rounded-2xl border overflow-hidden ${
          isActive 
            ? "text-white font-semibold border-white/30 shadow-xl" 
            : "text-gray-200 hover:text-white border-white/10 hover:border-white/30"
        }`}
        style={{
          backdropFilter: "blur(24px)",
          background: isActive 
            ? "linear-gradient(135deg, rgba(255, 154, 0, 0.2), rgba(255, 105, 180, 0.2), rgba(0, 255, 255, 0.2))" 
            : "rgba(255, 255, 255, 0.05)",
          boxShadow: isActive 
            ? "0 15px 40px rgba(255, 105, 180, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
            : "0 4px 20px rgba(0, 0, 0, 0.1)"
        }}
      >
        <motion.span
          className="relative z-10"
          whileHover={{ y: -1 }}
          transition={{ duration: 0.2 }}
        >
          {name}
        </motion.span>
        
        {/* Holographic hover effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, rgba(255, 154, 0, 0.15), rgba(255, 105, 180, 0.15), rgba(0, 255, 255, 0.15))",
            boxShadow: "0 0 30px rgba(255, 105, 180, 0.3)"
          }}
        />
        
        {/* Quantum glow for active state */}
        {isActive && (
          <>
            <motion.div
              className="absolute bottom-1 left-1/2 w-4 h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 rounded-full opacity-90 shadow-lg"
              style={{ x: '-50%' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Particle effects */}
            <motion.div 
              className="absolute top-1 right-1 w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
                rotate: [0, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}
        
        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
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
    </motion.div>
  );
};

export default NavLink;
