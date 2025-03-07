
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface NavigationWrapperProps {
  children: ReactNode;
  showSearch?: boolean;
}

const NavigationWrapper = ({ children, showSearch = false }: NavigationWrapperProps) => {
  return (
    <>
      <Navbar showSearch={showSearch} />
      {children}
      <Footer />
    </>
  );
};

export default NavigationWrapper;
