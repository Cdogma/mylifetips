
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout/Layout";
import Index from "./pages/Index";
import Home2 from "./pages/Home2";
import Finance from "./pages/Finance";
import ETFs from "./pages/ETFs";
import Broker from "./pages/Broker";
import Kreditkarten from "./pages/Kreditkarten";
import Bankkonten from "./pages/Bankkonten";
import Versicherungen from "./pages/Versicherungen";
import Tech from "./pages/Tech";
import SmartHome from "./pages/SmartHome";
import Gadgets from "./pages/Gadgets";
import Lifestyle from "./pages/Lifestyle";
import Mode from "./pages/Mode";
import Gesundheit from "./pages/Gesundheit";
import Hobbys from "./pages/Hobbys";
import Reisen from "./pages/Reisen";
import Business from "./pages/Business";
import Gruendung from "./pages/Gruendung";
import Recommendations from "./pages/Recommendations";
import ProductRecommendations from "./pages/ProductRecommendations";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import UeberMich from "./pages/UeberMich";
import Kontakt from "./pages/Kontakt";
import Ressourcen from "./pages/Ressourcen";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";
import C24BankAccount from "./pages/C24BankAccount";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/home2" element={<Layout><Home2 /></Layout>} />
            <Route path="/finanzen" element={<Layout><Finance /></Layout>} />
            <Route path="/finanzen/etfs" element={<Layout><ETFs /></Layout>} />
            <Route path="/finanzen/broker" element={<Layout><Broker /></Layout>} />
            <Route path="/finanzen/kreditkarten" element={<Layout><Kreditkarten /></Layout>} />
            <Route path="/finanzen/bankkonten" element={<Layout><Bankkonten /></Layout>} />
            <Route path="/finanzen/bankkonten/c24" element={<Layout><C24BankAccount /></Layout>} />
            <Route path="/finanzen/versicherungen" element={<Layout><Versicherungen /></Layout>} />
            <Route path="/tech" element={<Layout><Tech /></Layout>} />
            <Route path="/tech/smart-home" element={<Layout><SmartHome /></Layout>} />
            <Route path="/tech/gadgets" element={<Layout><Gadgets /></Layout>} />
            <Route path="/lifestyle" element={<Layout><Lifestyle /></Layout>} />
            <Route path="/lifestyle/mode" element={<Layout><Mode /></Layout>} />
            <Route path="/lifestyle/gesundheit" element={<Layout><Gesundheit /></Layout>} />
            <Route path="/lifestyle/hobbys" element={<Layout><Hobbys /></Layout>} />
            <Route path="/lifestyle/reisen" element={<Layout><Reisen /></Layout>} />
            <Route path="/business" element={<Layout><Business /></Layout>} />
            <Route path="/business/gruendung" element={<Layout><Gruendung /></Layout>} />
            <Route path="/empfehlungen" element={<Layout><Recommendations /></Layout>} />
            <Route path="/empfehlungen/:category" element={<Layout><ProductRecommendations /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
            <Route path="/ueber-mich" element={<Layout><UeberMich /></Layout>} />
            <Route path="/kontakt" element={<Layout><Kontakt /></Layout>} />
            <Route path="/ressourcen" element={<Layout><Ressourcen /></Layout>} />
            <Route path="/impressum" element={<Layout><Impressum /></Layout>} />
            <Route path="/datenschutz" element={<Layout><Datenschutz /></Layout>} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
