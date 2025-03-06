
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "../UI/ThemeToggle";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

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

  // Hauptkategorien mit Unterkategorien
  const mainCategories = [
    { 
      name: "Finanzen", 
      href: "/finanzen",
      subcategories: [
        { name: "Bankkonten", href: "/finanzen/bankkonten" },
        { name: "Kreditkarten", href: "/finanzen/kreditkarten" },
        { name: "Broker", href: "/finanzen/broker" },
        { name: "ETFs", href: "/finanzen/etfs" },
        { name: "Versicherungen", href: "/finanzen/versicherungen" }
      ]
    },
    { 
      name: "Business", 
      href: "/business",
      subcategories: [
        { name: "Gründung", href: "/business/gruendung" },
        { name: "Marketing", href: "/business/marketing" },
        { name: "Steuern", href: "/business/steuern" }
      ]
    },
    { 
      name: "Technik", 
      href: "/technik", 
      subcategories: [
        { name: "Smart Home", href: "/technik/smart-home" },
        { name: "Gadgets", href: "/technik/gadgets" },
        { name: "Software", href: "/technik/software" }
      ]
    },
    { 
      name: "Lifestyle", 
      href: "/lifestyle",
      subcategories: [
        { name: "Gesundheit", href: "/lifestyle/gesundheit" },
        { name: "Hobbys", href: "/lifestyle/hobbys" },
        { name: "Reisen", href: "/lifestyle/reisen" },
        { name: "Mode", href: "/lifestyle/mode" }
      ]
    }
  ];

  // Weitere Haupteinträge, die keine Unterkategorien benötigen
  const standardNavLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Empfehlungen", href: "/empfehlungen" },
    { name: "Ressourcen", href: "/ressourcen" },
    { name: "Über Mich", href: "/ueber-mich" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  // Funktion zur Prüfung, ob Link oder seine Unterkategorien aktiv sind
  const isActiveLink = (href, subcategories) => {
    const isDirectMatch = location.pathname === href || 
      (href !== "/" && location.pathname.startsWith(href));
    
    // Auch Unterkategorien prüfen
    if (subcategories && !isDirectMatch) {
      return subcategories.some(sub => location.pathname.startsWith(sub.href));
    }
    
    return isDirectMatch;
  };

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
          <nav className="hidden md:flex space-x-1 xl:space-x-2 overflow-x-auto">
            {/* Hauptkategorien mit Dropdown */}
            {mainCategories.map((category) => {
              const isActive = isActiveLink(category.href, category.subcategories);
              
              return (
                <DropdownMenu key={category.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`relative py-5 px-3 text-sm xl:text-base hover:text-primary transition-colors whitespace-nowrap flex items-center gap-1 group ${
                        isActive 
                          ? "text-primary font-medium" 
                          : "text-foreground"
                      }`}
                    >
                      {category.name}
                      <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                      )}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link 
                        to={category.href}
                        className="w-full px-2 py-1.5 cursor-pointer flex justify-start"
                      >
                        <span className="font-medium">Alle {category.name}</span>
                      </Link>
                    </DropdownMenuItem>
                    {category.subcategories.map((subCategory) => (
                      <DropdownMenuItem key={subCategory.name} asChild>
                        <Link 
                          to={subCategory.href}
                          className={`w-full px-2 py-1.5 cursor-pointer flex justify-start ${
                            location.pathname === subCategory.href ? "text-primary font-medium" : ""
                          }`}
                        >
                          {subCategory.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })}

            {/* Standardeinträge ohne Dropdown */}
            {standardNavLinks.map((link) => {
              const isActive = location.pathname === link.href || 
                (link.href !== "/" && location.pathname.startsWith(link.href));
              
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative py-5 px-3 text-sm xl:text-base hover:text-primary transition-colors whitespace-nowrap ${
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

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden bg-background border-t border-border transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-1">
            {/* Hauptkategorien mit ausklappbaren Unterkategorien */}
            {mainCategories.map((category, index) => {
              const isActive = isActiveLink(category.href, category.subcategories);
              const [isSubMenuOpen, setIsSubMenuOpen] = useState(isActive);
              
              return (
                <div key={category.name} className="border-b border-border/30 pb-2 mb-2">
                  <div className="flex justify-between items-center">
                    <Link
                      to={category.href}
                      className={`text-foreground hover:text-primary transition-all py-3 px-4 rounded-md flex-grow ${
                        location.pathname === category.href
                          ? "bg-primary/10 text-primary font-medium" 
                          : "hover:bg-muted/50"
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      {category.name}
                    </Link>
                    <button
                      onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                      className="p-3 hover:bg-muted/50 rounded-md"
                    >
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isSubMenuOpen ? "rotate-180" : ""
                        }`} 
                      />
                    </button>
                  </div>
                  
                  {/* Unterkategorien */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 pl-4 ${
                      isSubMenuOpen ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0"
                    }`}
                  >
                    {category.subcategories.map((subCategory, subIndex) => {
                      const isSubActive = location.pathname === subCategory.href;
                      
                      return (
                        <Link
                          key={subCategory.name}
                          to={subCategory.href}
                          className={`block py-2 px-4 rounded-md my-1 text-sm ${
                            isSubActive
                              ? "bg-primary/5 text-primary font-medium" 
                              : "hover:bg-muted/30 text-muted-foreground hover:text-foreground"
                          }`}
                          style={{
                            animationDelay: `${(index * 50) + (subIndex * 30)}ms`,
                          }}
                        >
                          {subCategory.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            
            {/* Standardeinträge */}
            {standardNavLinks.map((link, index) => {
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
                    animationDelay: `${(mainCategories.length + index) * 50}ms`,
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
