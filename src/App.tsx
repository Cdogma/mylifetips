
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

// Hauptseiten
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Kontakt from "./pages/Kontakt";
import Ressourcen from "./pages/Ressourcen";
import UeberMich from "./pages/UeberMich";
import Recommendations from "./pages/Recommendations";
import ProductRecommendations from "./pages/ProductRecommendations";

// Finanzen
import Finance from "./pages/Finance";
import Bankkonten from "./pages/Bankkonten";
import Kreditkarten from "./pages/Kreditkarten";
import Broker from "./pages/Broker";
import ETFs from "./pages/ETFs";
import Versicherungen from "./pages/Versicherungen";
import C24BankAccount from "./pages/C24BankAccount";

// Business
import Business from "./pages/Business";
import Gruendung from "./pages/Gruendung";

// Technik
import Tech from "./pages/Tech";
import SmartHome from "./pages/SmartHome";
import Gadgets from "./pages/Gadgets";

// Lifestyle
import Lifestyle from "./pages/Lifestyle";
import Gesundheit from "./pages/Gesundheit";
import Hobbys from "./pages/Hobbys";
import Reisen from "./pages/Reisen";
import Mode from "./pages/Mode";

// Für zukünftige Routen
// import Marketing from "./pages/Marketing";
// import Steuern from "./pages/Steuern";
// import Software from "./pages/Software";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Hauptseiten */}
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/empfehlungen" element={<Recommendations />} />
            <Route path="/produkt-empfehlungen" element={<ProductRecommendations />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/ressourcen" element={<Ressourcen />} />
            <Route path="/ueber-mich" element={<UeberMich />} />
            
            {/* Finanzen */}
            <Route path="/finanzen" element={<Finance />} />
            <Route path="/finanzen/bankkonten" element={<Bankkonten />} />
            <Route path="/finanzen/bankkonten/c24" element={<C24BankAccount />} />
            <Route path="/finanzen/kreditkarten" element={<Kreditkarten />} />
            <Route path="/finanzen/broker" element={<Broker />} />
            <Route path="/finanzen/etfs" element={<ETFs />} />
            <Route path="/finanzen/versicherungen" element={<Versicherungen />} />
            
            {/* Business */}
            <Route path="/business" element={<Business />} />
            <Route path="/business/gruendung" element={<Gruendung />} />
            {/* Zukünftige Routen */}
            {/* <Route path="/business/marketing" element={<Marketing />} /> */}
            {/* <Route path="/business/steuern" element={<Steuern />} /> */}
            
            {/* Technik */}
            <Route path="/technik" element={<Tech />} />
            <Route path="/technik/smart-home" element={<SmartHome />} />
            <Route path="/technik/gadgets" element={<Gadgets />} />
            {/* Zukünftige Routen */}
            {/* <Route path="/technik/software" element={<Software />} /> */}
            
            {/* Lifestyle */}
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/lifestyle/gesundheit" element={<Gesundheit />} />
            <Route path="/lifestyle/hobbys" element={<Hobbys />} />
            <Route path="/lifestyle/reisen" element={<Reisen />} />
            <Route path="/lifestyle/mode" element={<Mode />} />
            
            {/* 404 - Seite nicht gefunden */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
