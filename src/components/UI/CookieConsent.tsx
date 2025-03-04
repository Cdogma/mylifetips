
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, Check, X, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      // Show consent banner after a small delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setShowConsent(false);
    toast({
      title: "Cookies akzeptiert",
      description: "Vielen Dank für Ihre Zustimmung zur Verwendung aller Cookies.",
      duration: 3000,
    });
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    setShowConsent(false);
    toast({
      title: "Nur essentielle Cookies akzeptiert",
      description: "Es werden nur notwendige Cookies verwendet.",
      duration: 3000,
    });
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "none");
    setShowConsent(false);
    toast({
      title: "Cookies abgelehnt",
      description: "Es werden keine Cookies gesetzt, die nicht technisch notwendig sind.",
      duration: 3000,
    });
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Cookie className="h-6 w-6 text-primary flex-shrink-0" />
            <h3 className="text-lg font-medium">Cookie-Einstellungen</h3>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
              Einige Cookies sind notwendig für den Betrieb der Website, während andere uns helfen, 
              unsere Website zu verbessern und Ihnen ein besseres Nutzungserlebnis zu bieten.
            </p>
            <p className="mt-2">
              Weitere Informationen finden Sie in unserer{" "}
              <Link to="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </Link>.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-end mt-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={reject}
              className="flex items-center gap-1.5"
            >
              <X size={16} />
              Ablehnen
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={acceptEssential}
              className="flex items-center gap-1.5"
            >
              <Info size={16} />
              Nur essentielle
            </Button>
            <Button 
              size="sm" 
              onClick={acceptAll}
              className="flex items-center gap-1.5"
            >
              <Check size={16} />
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
