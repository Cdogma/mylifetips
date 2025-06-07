
import { motion } from "framer-motion";
import { Heart, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import MicroInteractions from "../UI/MicroInteractions";

const CTASection = () => {
  return (
    <motion.section className="relative py-32 px-4 z-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="relative p-20 glass-card rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(30px)",
            boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          }}
        >
          {/* Animated background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20"
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
              <div className="p-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl shadow-2xl"
                style={{
                  boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.5)"
                }}
              >
                <Heart className="w-16 h-16 text-white" />
              </div>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">
                Bereit für das Unmögliche?
              </span>
            </h2>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Werde Teil einer Elite-Community, die die Zukunft nicht nur erlebt, 
              sondern sie erschafft. Deine digitale Evolution beginnt jetzt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <MicroInteractions type="magnetic" intensity="strong">
                <Link
                  to="/empfehlungen"
                  className="group px-16 py-6 text-xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white rounded-2xl inline-flex items-center transition-all duration-500 hover:scale-110 hover:rotate-1 relative overflow-hidden"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.5)"
                  }}
                >
                  <span className="relative z-10">Transformation starten</span>
                  <Rocket className="ml-4 w-7 h-7 group-hover:rotate-12 transition-transform duration-500 relative z-10" />
                </Link>
              </MicroInteractions>
              
              <MicroInteractions type="tilt" intensity="normal">
                <Link
                  to="/kontakt"
                  className="px-16 py-6 text-xl font-semibold glass-card border-2 border-white/30 hover:border-white/50 text-white rounded-2xl inline-flex items-center transition-all duration-500 hover:scale-105"
                  style={{
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  Persönliche Beratung
                </Link>
              </MicroInteractions>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;
