
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
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/60 backdrop-blur-lg shadow-sm" : "bg-background/40 backdrop-blur-md"
      } border-b border-border/30`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-xl md:text-2xl font-bold transition-all duration-500 ease-in-out
              bg-gradient-to-r from-primary via-primary/90 to-primary/70 
              dark:from-primary dark:via-primary/90 dark:to-sky-400
              bg-clip-text text-transparent 
              group-hover:tracking-wider group-hover:bg-gradient-to-r group-hover:from-primary/90 group-hover:via-primary group-hover:to-blue-500
              relative overflow-hidden">
              MyLife
              <span className="relative z-10 bg-gradient-to-br from-primary to-blue-500 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-primary">Tips</span>
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
                  className={`relative py-5 text-sm xl:text-base hover:text-primary transition-colors whitespace-nowrap ${
                    isActive 
                      ? "text-primary font-medium" 
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in"></span>
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
              className="md:hidden p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Now with animation */}
      <div 
        className={`md:hidden bg-background border-t border-border transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.href || 
                (link.href !== "/" && location.pathname.startsWith(link.href));
              
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-foreground hover:text-primary transition-all py-3 px-4 rounded-md ${
                    isActive 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "hover:bg-muted/50"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center">
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="ml-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
