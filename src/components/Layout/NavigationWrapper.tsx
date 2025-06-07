
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalSearch from "../UI/GlobalSearch";

interface NavigationWrapperProps {
  children: ReactNode;
}

const NavigationWrapper = ({ children }: NavigationWrapperProps) => {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-end px-4 py-3 bg-muted/10 backdrop-blur-sm border-b border-border/20"
      >
        <div className="w-full max-w-md ml-auto">
          <GlobalSearch />
        </div>
      </motion.div>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default NavigationWrapper;
