
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">MyLifeTips</h3>
            <p className="text-muted-foreground mb-4">
              Ehrliche Tipps und Empfehlungen für ein besseres Leben.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4 bg-gradient-to-r from-primary/90 to-primary/60 text-transparent bg-clip-text">Kategorien</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/finanzen" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Finanzen
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/technik" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Technik
                </Link>
              </li>
              <li>
                <Link to="/lifestyle" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4 bg-gradient-to-r from-primary/90 to-primary/60 text-transparent bg-clip-text">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Folge mir section - hidden but preserved in the code */}
          <div className="hidden">
            <h4 className="text-md font-medium mb-4">Folge mir</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© {currentYear} MyLifeTips. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
