
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface CategoryType {
  name: string;
  href: string;
  subcategories: { name: string; href: string }[];
}

interface CategoryDropdownProps {
  category: CategoryType;
  isActive: boolean;
}

const CategoryDropdown = ({ category, isActive }: CategoryDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        className={`flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-2xl transition-all duration-300 border overflow-hidden ${
          isActive 
            ? "text-white border-white/20 shadow-xl" 
            : "text-foreground hover:text-white border-white/10 hover:border-white/20"
        }`}
        style={{
          backdropFilter: "blur(24px)",
          background: isActive 
            ? "linear-gradient(135deg, rgba(255, 154, 0, 0.2), rgba(255, 105, 180, 0.2), rgba(0, 255, 255, 0.2))" 
            : "rgba(255, 255, 255, 0.05)",
          boxShadow: isActive 
            ? "0 15px 40px rgba(255, 105, 180, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            : "0 4px 16px rgba(0, 0, 0, 0.1)"
        }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">{category.name}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-10"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
        
        {/* Holographic hover glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, rgba(255, 154, 0, 0.1), rgba(255, 105, 180, 0.1), rgba(0, 255, 255, 0.1))",
            boxShadow: "0 0 25px rgba(255, 105, 180, 0.2)"
          }}
        />
        
        {/* Quantum particles */}
        {isActive && (
          <motion.div 
            className="absolute top-1 right-1 w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 mt-3 w-80 rounded-3xl border border-white/20 shadow-2xl z-50 overflow-hidden"
            style={{
              background: "rgba(15, 23, 42, 0.9)",
              backdropFilter: "blur(40px)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 50px rgba(255, 105, 180, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            }}
          >
            {/* Aurora background */}
            <div className="absolute inset-0 opacity-30">
              <motion.div 
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 154, 0, 0.1), rgba(255, 105, 180, 0.1), rgba(0, 255, 255, 0.1))",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            <div className="p-4 relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to={category.href}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/10 group relative overflow-hidden"
                >
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 group-hover:scale-125 transition-transform"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <div>
                    <div className="font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:via-pink-300 group-hover:to-cyan-300 transition-all duration-500">
                      Alle {category.name}
                    </div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                      Komplette Übersicht
                    </div>
                  </div>
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                      transform: "translateX(-100%)"
                    }}
                    animate={{
                      transform: ["translateX(-100%)", "translateX(100%)"]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut"
                    }}
                  />
                </Link>
              </motion.div>
              
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-3" />
              
              <div className="space-y-1">
                {category.subcategories.map((sub, index) => (
                  <motion.div
                    key={sub.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 8 }}
                  >
                    <Link 
                      to={sub.href}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 text-sm text-gray-300 hover:text-white group relative overflow-hidden"
                    >
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-gray-500 group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-300"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {sub.name}
                      </span>
                      
                      {/* Subtle glow on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          boxShadow: "0 0 20px rgba(255, 105, 180, 0.1)"
                        }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryDropdown;
