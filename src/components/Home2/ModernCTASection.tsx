
import { motion } from "framer-motion";
import { Heart, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const ModernCTASection = () => {
  return (
    <motion.section className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative p-20 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-blue-600/20"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ backgroundSize: "200% 200%" }}
          />
          
          <div className="relative z-10">
            <motion.div 
              className="flex justify-center mb-12"
              whileHover={{ scale: 1.1, rotateY: 15 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6 bg-gradient-to-r from-pink-500 to-violet-600 rounded-3xl shadow-2xl">
                <Heart className="w-16 h-16 text-white" />
              </div>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-500 to-blue-500">
                Bereit zu starten?
              </span>
            </h2>
            
            <p className="text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Entdecke eine Welt voller Möglichkeiten und treffe Entscheidungen, 
              die dein Leben nachhaltig verbessern werden.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link
                to="/empfehlungen"
                className="group px-16 py-6 text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white rounded-2xl inline-flex items-center transition-all duration-500 hover:scale-110 relative overflow-hidden shadow-2xl"
              >
                <span className="relative z-10">Jetzt starten</span>
                <Rocket className="ml-4 w-7 h-7 group-hover:rotate-12 transition-transform duration-500 relative z-10" />
              </Link>
              
              <Link
                to="/kontakt"
                className="px-16 py-6 text-xl font-semibold bg-white/10 backdrop-blur-xl border-2 border-white/20 hover:border-white/40 text-white rounded-2xl inline-flex items-center transition-all duration-500 hover:scale-105"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ModernCTASection;
