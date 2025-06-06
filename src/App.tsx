
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
            <Route path="/home3" element={<Home3 />} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
          <Toaster />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
