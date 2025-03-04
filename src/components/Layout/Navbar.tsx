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
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">MyLifeTips</span>
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
