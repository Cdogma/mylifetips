
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 group relative">
      {/* Holographic glow background */}
      <motion.div 
        className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, rgba(255, 154, 0, 0.1), rgba(255, 105, 180, 0.1), rgba(0, 255, 255, 0.1))",
          boxShadow: "0 0 30px rgba(255, 105, 180, 0.3)"
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.span 
        className="text-2xl md:text-3xl font-black transition-all duration-500 ease-in-out relative z-10"
        style={{
          background: "linear-gradient(135deg, #ff9a00, #ff69b4, #00ffff, #8a2be2)",
          backgroundSize: "300% 300%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 20px rgba(255, 105, 180, 0.5))"
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{
          scale: 1.05,
          filter: "drop-shadow(0 0 30px rgba(255, 105, 180, 0.8))"
        }}
      >
        MyLifeTips
        
        {/* Quantum particles around logo */}
        <motion.div 
          className="absolute -top-2 -right-2 w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.span>
    </Link>
  );
};

export default NavLogo;
