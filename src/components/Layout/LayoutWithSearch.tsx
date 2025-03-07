
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
    <>
      <NavigationWrapper showSearch={true}>
        <main>
          {children}
        </main>
      </NavigationWrapper>
      <CookieConsent />
    </>
  );
};

export default LayoutWithSearch;
