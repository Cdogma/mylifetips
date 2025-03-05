
import { ReactNode } from "react";
import Navbar from "./Navbar";
import ModernFooter from "./ModernFooter";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import CookieConsent from "../UI/CookieConsent";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Use our custom hook to scroll to the top on route changes
  useScrollToTop();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">{children}</main>
      <ModernFooter />
      <CookieConsent />
    </div>
  );
};

export default Layout;
