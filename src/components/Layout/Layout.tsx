
import { ReactNode } from "react";
import Navbar from "./Navbar";
import ModernFooter from "./ModernFooter";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import CookieConsent from "../UI/CookieConsent";
import SEOManager from "../SEO/SEOManager";
import Analytics from "../Analytics/Analytics";
import EnvironmentBadge from "../UI/EnvironmentBadge";
import ChatBot from "../AI/ChatBot";
import { getEnvironment } from "@/config/environment";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  // Use our custom hook to scroll to the top on route changes
  useScrollToTop();
  
  const environment = getEnvironment();
  const hasEnvironmentBadge = environment !== 'main';
  
  return (
    <div className="flex flex-col min-h-screen">
      <SEOManager title={title} description={description} />
      <Analytics />
      <EnvironmentBadge />
      <Navbar />
      <main className={`flex-grow ${hasEnvironmentBadge ? 'pt-20 md:pt-24' : 'pt-16 md:pt-20'}`}>
        {children}
      </main>
      <ModernFooter />
      <CookieConsent />
      <ChatBot />
    </div>
  );
};

export default Layout;
