
import { ReactNode, useEffect } from "react";
import CookieConsent from "../UI/CookieConsent";
import NavigationWrapper from "./NavigationWrapper";

interface LayoutProps {
  children: ReactNode;
}

const LayoutWithSearch = ({ children }: LayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationWrapper>
        <main className="flex-grow pt-16 md:pt-20">
          {children}
        </main>
      </NavigationWrapper>
      <CookieConsent />
    </div>
  );
};

export default LayoutWithSearch;
