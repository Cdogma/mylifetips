
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalSearch from "../UI/GlobalSearch";

interface NavigationWrapperProps {
  children: ReactNode;
}

const NavigationWrapper = ({ children }: NavigationWrapperProps) => {
  return (
    <>
      <div className="flex justify-end px-4 py-2 bg-muted/20 border-b border-border">
        <div className="w-full max-w-md ml-auto">
          <GlobalSearch />
        </div>
      </div>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default NavigationWrapper;
