
import { motion } from "framer-motion";
import BrandSection from "./Footer/BrandSection";
import LegalSection from "./Footer/LegalSection";
import InteractiveSection from "./Footer/InteractiveSection";
import BackgroundEffects from "./Footer/BackgroundEffects";
import ScrollToTopButton from "./Footer/ScrollToTopButton";

const ModernFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <div className="relative overflow-hidden footer-glass">
        <BackgroundEffects />
        
        <footer className="relative z-10 section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
              <BrandSection />
              <LegalSection />
              <InteractiveSection />
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-10 border-t border-white/10 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="text-gray-400 text-lg">
                © {currentYear} <span className="gradient-text font-bold">MyLifeTips</span>. Made with ❤️ in Germany.
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
      
      <ScrollToTopButton />
    </>
  );
};

export default ModernFooter;
