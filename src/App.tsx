import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from "@/components/ui/sonner";
import InteractiveGradient from "./components/UI/InteractiveGradient";
import EnvironmentBadge from "./components/UI/EnvironmentBadge";
import Layout from "./components/Layout/Layout";
import Home3 from "@/pages/Home3";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Finance from "@/pages/Finance";
import Tech from "@/pages/Tech";
import Lifestyle from "@/pages/Lifestyle";
import Business from "@/pages/Business";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import ProductRecommendations from "@/pages/ProductRecommendations";
import Recommendations from "@/pages/Recommendations";
import Ressourcen from "@/pages/Ressourcen";
import UeberMich from "@/pages/UeberMich";
import Kontakt from "@/pages/Kontakt";
import Bankkonten from "@/pages/Bankkonten";
import Kreditkarten from "@/pages/Kreditkarten";
import Broker from "@/pages/Broker";
import ETFs from "@/pages/ETFs";
import Versicherungen from "@/pages/Versicherungen";
import SmartHome from "@/pages/SmartHome";
import Gadgets from "@/pages/Gadgets";
import Gesundheit from "@/pages/Gesundheit";
import Hobbys from "@/pages/Hobbys";
import Reisen from "@/pages/Reisen";
import Mode from "@/pages/Mode";
import Gruendung from "@/pages/Gruendung";
import Home2 from "@/pages/Home2";
import C24BankAccount from "@/pages/C24BankAccount";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <InteractiveGradient />
          <EnvironmentBadge />
          <Routes>
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/home3" element={<Home3 />} />
            
            {/* Finance routes */}
            <Route path="/finanzen" element={<Layout><Finance /></Layout>} />
            <Route path="/finanzen/bankkonten" element={<Layout><Bankkonten /></Layout>} />
            <Route path="/finanzen/kreditkarten" element={<Layout><Kreditkarten /></Layout>} />
            <Route path="/finanzen/broker" element={<Layout><Broker /></Layout>} />
            <Route path="/finanzen/etfs" element={<Layout><ETFs /></Layout>} />
            <Route path="/finanzen/versicherungen" element={<Layout><Versicherungen /></Layout>} />
            <Route path="/finanzen/bankkonten/c24" element={<Layout><C24BankAccount /></Layout>} />
            
            {/* Tech routes */}
            <Route path="/technik" element={<Layout><Tech /></Layout>} />
            <Route path="/technik/smart-home" element={<Layout><SmartHome /></Layout>} />
            <Route path="/technik/gadgets" element={<Layout><Gadgets /></Layout>} />
            
            {/* Lifestyle routes */}
            <Route path="/lifestyle" element={<Layout><Lifestyle /></Layout>} />
            <Route path="/lifestyle/gesundheit" element={<Layout><Gesundheit /></Layout>} />
            <Route path="/lifestyle/hobbys" element={<Layout><Hobbys /></Layout>} />
            <Route path="/lifestyle/reisen" element={<Layout><Reisen /></Layout>} />
            <Route path="/lifestyle/mode" element={<Layout><Mode /></Layout>} />
            
            {/* Business routes */}
            <Route path="/business" element={<Layout><Business /></Layout>} />
            <Route path="/business/gruendung" element={<Layout><Gruendung /></Layout>} />
            
            {/* Other routes */}
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/empfehlungen" element={<Layout><ProductRecommendations /></Layout>} />
            <Route path="/recommendations" element={<Layout><Recommendations /></Layout>} />
            <Route path="/ressourcen" element={<Layout><Ressourcen /></Layout>} />
            <Route path="/ueber-mich" element={<Layout><UeberMich /></Layout>} />
            <Route path="/kontakt" element={<Layout><Kontakt /></Layout>} />
            
            {/* Legal routes */}
            <Route path="/impressum" element={<Layout><Impressum /></Layout>} />
            <Route path="/datenschutz" element={<Layout><Datenschutz /></Layout>} />
            
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
          <Toaster />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
