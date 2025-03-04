
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";

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
      <Footer />
    </div>
  );
};

export default Layout;
