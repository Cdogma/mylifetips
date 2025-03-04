
import { Link } from "react-router-dom";
import { ArrowUpRight, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background to-neutral-50/95 dark:from-neutral-950 dark:to-neutral-900/95 border-t border-neutral-200/50 dark:border-neutral-800/50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="group inline-flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
                MyLifeTips
              </span>
              <Heart className="h-4 w-4 text-primary/70 transition-transform group-hover:scale-110" />
            </div>
            
            <p className="text-muted-foreground text-sm max-w-md">
              Ehrliche Tipps und Empfehlungen für ein besseres Leben – mit Fokus auf Finanzen, Business, Technik und Lifestyle.
            </p>
            
            <div className="pt-2">
              <p className="text-xs text-muted-foreground">
                * Bei gekennzeichneten Links handelt es sich um Affiliate-Links. Wenn du darüber etwas kaufst, erhalte ich möglicherweise eine kleine Provision – für dich entstehen keine zusätzlichen Kosten.
              </p>
            </div>
          </div>
          
          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold mb-4 flex items-center text-foreground/80">
              <span className="inline-block h-6 border-l-2 border-primary mr-2"></span>
              Kategorien
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Finanzen", path: "/finanzen" },
                { label: "Business", path: "/business" },
                { label: "Technik", path: "/technik" },
                { label: "Lifestyle", path: "/lifestyle" }
              ].map((item, index) => (
                <li key={index} className="group">
                  <Link 
                    to={item.path} 
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 flex items-center group-hover:translate-x-0.5 transform transition-transform"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold mb-4 flex items-center text-foreground/80">
              <span className="inline-block h-6 border-l-2 border-primary mr-2"></span>
              Empfehlungen
            </h4>
            <ul className="space-y-3">
              {[
                { label: "ETFs", path: "/etfs" },
                { label: "Bankkonten", path: "/bankkonten" },
                { label: "Broker", path: "/broker" },
                { label: "Kreditkarten", path: "/kreditkarten" }
              ].map((item, index) => (
                <li key={index} className="group">
                  <Link 
                    to={item.path} 
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 flex items-center group-hover:translate-x-0.5 transform transition-transform"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold mb-4 flex items-center text-foreground/80">
              <span className="inline-block h-6 border-l-2 border-primary mr-2"></span>
              Rechtliches
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Impressum", path: "/impressum" },
                { label: "Datenschutz", path: "/datenschutz" },
                { label: "Kontakt", path: "/kontakt" }
              ].map((item, index) => (
                <li key={index} className="group">
                  <Link 
                    to={item.path} 
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 flex items-center group-hover:translate-x-0.5 transform transition-transform"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-16 pt-8 border-t border-neutral-200/30 dark:border-neutral-800/30 text-muted-foreground/70 text-sm">
          <p className="mb-4 sm:mb-0">© {currentYear} MyLifeTips. Alle Rechte vorbehalten.</p>
          
          <div className="flex space-x-6">
            <Link to="#" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} className="text-xs text-muted-foreground/60 hover:text-primary transition-colors duration-300">
              Nach oben scrollen ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
