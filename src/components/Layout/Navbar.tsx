
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../UI/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Finanzen", href: "/finanzen" },
    { name: "Business", href: "/business" },
    { name: "Technik", href: "/technik" },
    { name: "Lifestyle", href: "/lifestyle" },
    { name: "Blog", href: "/blog" },
    { name: "Ressourcen", href: "/ressourcen" },
    { name: "Über Mich", href: "/ueber-mich" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? "bg-background/60 backdrop-blur-lg shadow-sm" : "bg-background/40 backdrop-blur-md"
    } border-b border-border/30`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-xl md:text-2xl font-bold relative transition-all duration-500 ease-in-out
              bg-gradient-to-r from-primary via-primary/90 to-primary/70 
              dark:from-primary dark:via-primary/90 dark:to-sky-400
              bg-clip-text text-transparent 
              group-hover:tracking-wider group-hover:bg-gradient-to-r group-hover:from-primary/90 group-hover:via-primary group-hover:to-blue-500
              relative overflow-hidden
              drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]
              dark:drop-shadow-[0_1.2px_1.2px_rgba(150,150,255,0.2)]">
              <span className="relative inline-block transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                MyLife
              </span>
              <span className="relative z-10 inline-block bg-gradient-to-br from-primary to-blue-500 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-primary transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                Tips
              </span>
              
              {/* Glaseffekt-Hintergrund (nur sichtbar bei Hover) */}
              <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm shadow-[0_8px_16px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_16px_rgba(0,0,0,0.2),0_4px_6px_rgba(0,0,0,0.1)] scale-105 transition-all duration-300"></span>
              
              {/* Subtile Reflexion/Glanz-Effekt */}
              <span className="absolute inset-0 -z-5 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 dark:from-white/0 dark:via-white/10 dark:to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></span>
              
              {/* Animierter Unterstrich */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 xl:space-x-6 overflow-x-auto">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || 
                (link.href !== "/" && location.pathname.startsWith(link.href));
              
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative py-5 text-foreground hover:text-primary transition-colors text-sm whitespace-nowrap ${
                    isActive ? "text-primary font-medium" : ""
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle and Mobile Menu Toggle */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            <button
              onClick={toggleMenu}
              className="md:hidden text-foreground p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || 
                  (link.href !== "/" && location.pathname.startsWith(link.href));
                
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-foreground hover:text-primary transition-colors py-3 px-4 rounded-md ${
                      isActive 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-muted/50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
