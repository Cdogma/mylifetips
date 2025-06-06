import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from "@/components/ui/sonner";
import InteractiveGradient from "./components/UI/InteractiveGradient";
import EnvironmentBadge from "./components/UI/EnvironmentBadge";
import ModernLayout from "./components/Layout/ModernLayout";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import NotFoundPage from "./pages/NotFoundPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ImpressumPage from "./pages/ImpressumPage";
import UeberMichPage from "./pages/UeberMichPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import Home3 from "@/pages/Home3";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <InteractiveGradient />
          <EnvironmentBadge />
          <Routes>
            <Route path="/" element={<ModernLayout><HomePage /></ModernLayout>} />
            <Route path="/pricing" element={<ModernLayout><PricingPage /></ModernLayout>} />
            <Route path="/blog" element={<ModernLayout><BlogPage /></ModernLayout>} />
            <Route path="/blog/:id" element={<ModernLayout><BlogPostPage /></ModernLayout>} />
            <Route path="/contact" element={<ModernLayout><ContactPage /></ModernLayout>} />
            <Route path="/about-us" element={<ModernLayout><AboutUsPage /></ModernLayout>} />
            <Route path="/coming-soon" element={<ModernLayout><ComingSoonPage /></ModernLayout>} />
            <Route path="/terms-of-service" element={<ModernLayout><TermsOfServicePage /></ModernLayout>} />
            <Route path="/privacy-policy" element={<ModernLayout><PrivacyPolicyPage /></ModernLayout>} />
            <Route path="/impressum" element={<ModernLayout><ImpressumPage /></ModernLayout>} />
            <Route path="/ueber-mich" element={<ModernLayout><UeberMichPage /></ModernLayout>} />
            <Route path="/login" element={<ModernLayout><LoginPage /></ModernLayout>} />
            <Route path="/register" element={<ModernLayout><RegisterPage /></ModernLayout>} />
            <Route path="*" element={<ModernLayout><NotFoundPage /></ModernLayout>} />
            <Route path="/home3" element={<Home3 />} />
          </Routes>
          <Toaster />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
