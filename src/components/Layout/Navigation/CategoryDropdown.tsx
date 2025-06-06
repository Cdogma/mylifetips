
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
        className={`flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-2xl transition-all duration-300 border ${
          isActive 
            ? "text-white bg-gradient-to-r from-purple-600/80 to-blue-600/80 border-white/20 shadow-lg" 
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
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {category.name}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
        
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))",
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)"
          }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-3 w-80 rounded-2xl border border-white/20 shadow-2xl z-50 overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(30px)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            }}
          >
            <div className="p-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to={category.href}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/10 group"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 group-hover:scale-125 transition-transform" />
                  <div>
                    <div className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                      Alle {category.name}
                    </div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                      Komplette Übersicht
                    </div>
                  </div>
                </Link>
              </motion.div>
              
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-2" />
              
              <div className="space-y-1">
                {category.subcategories.map((sub, index) => (
                  <motion.div
                    key={sub.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Link 
                      to={sub.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 text-sm text-gray-300 hover:text-white group"
                    >
                      <div className="w-2 h-2 rounded-full bg-gray-500 group-hover:bg-purple-400 transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {sub.name}
                      </span>
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
