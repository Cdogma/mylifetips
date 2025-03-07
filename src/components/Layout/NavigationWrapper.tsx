
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface NavigationWrapperProps {
  children: ReactNode;
  showSearch?: boolean;
}

const NavigationWrapper = ({ children, showSearch = true }: NavigationWrapperProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar showSearch={showSearch} />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default NavigationWrapper;
