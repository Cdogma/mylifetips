
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import Finance from "./pages/Finance";
import Blog from "./pages/Blog";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";
import Ressourcen from "./pages/Ressourcen";
import UeberMich from "./pages/UeberMich";
import Bankkonten from "./pages/Bankkonten";
import Kreditkarten from "./pages/Kreditkarten";
import Broker from "./pages/Broker";
import ETFs from "./pages/ETFs";
import Versicherungen from "./pages/Versicherungen";
import Business from "./pages/Business";
import Tech from "./pages/Tech";
import Lifestyle from "./pages/Lifestyle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/finanzen" element={<Finance />} />
            <Route path="/finanzen/bankkonten" element={<Bankkonten />} />
            <Route path="/finanzen/kreditkarten" element={<Kreditkarten />} />
            <Route path="/finanzen/broker" element={<Broker />} />
            <Route path="/finanzen/etfs" element={<ETFs />} />
            <Route path="/finanzen/versicherungen" element={<Versicherungen />} />
            <Route path="/business" element={<Business />} />
            <Route path="/technik" element={<Tech />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/ressourcen" element={<Ressourcen />} />
            <Route path="/ueber-mich" element={<UeberMich />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
