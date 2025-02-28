
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link to="/" className="text-2xl font-bold text-primary mb-4 inline-block">
              MyLifeTips
            </Link>
            <p className="text-muted-foreground mb-6">
              Meine persönlichen Erfahrungen, Empfehlungen und Tipps in verschiedenen Lebensbereichen - 
              ehrlich, transparent und auf eigenen Tests basierend.
            </p>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
              <a href="mailto:kontakt@mylifetips.de" className="text-muted-foreground hover:text-primary transition-colors">
                kontakt@mylifetips.de
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-medium text-lg mb-4">Kategorien</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/finanzen" className="text-muted-foreground hover:text-primary transition-colors">
                  Finanzen
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-muted-foreground hover:text-primary transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/technik" className="text-muted-foreground hover:text-primary transition-colors">
                  Technik
                </Link>
              </li>
              <li>
                <Link to="/lifestyle" className="text-muted-foreground hover:text-primary transition-colors">
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-medium text-lg mb-4">Seiten</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/empfehlungen" className="text-muted-foreground hover:text-primary transition-colors">
                  Empfehlungen
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/ueber-mich" className="text-muted-foreground hover:text-primary transition-colors">
                  Über mich
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-medium text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Erhalte meine neuesten Empfehlungen und Tipps direkt in dein Postfach.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="flex-1 px-4 py-2 bg-background border border-input rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                Abonnieren
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MyLifeTips. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Datenschutz
              </Link>
              <Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Affiliate-Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
