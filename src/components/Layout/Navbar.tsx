
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Layers, BookOpen, Home, User, Mail, ShoppingBag, BookMarked, FilePen } from "lucide-react";
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
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMegaMenu = (category: string) => {
    setActiveMegaMenu(activeMegaMenu === category ? null : category);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
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

  // Close mobile menu and mega menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveMegaMenu(null);
  }, [location.pathname]);

  // Hauptkategorien mit Unterkategorien - Reihenfolge: Finanzen, Technik, Lifestyle, Business
  const mainCategories = [
    { 
      name: "Finanzen", 
      href: "/finanzen",
      icon: Layers,
      description: "Alles für deine finanzielle Freiheit und smarte Geldanlage.",
      subcategories: [
        { name: "Bankkonten", href: "/finanzen/bankkonten", description: "Die besten Konten im Vergleich" },
        { name: "Kreditkarten", href: "/finanzen/kreditkarten", description: "Welche Karte passt zu dir?" },
        { name: "Broker", href: "/finanzen/broker", description: "Aktien & ETFs clever handeln" },
        { name: "ETFs", href: "/finanzen/etfs", description: "Passive Investmentstrategien" },
        { name: "Versicherungen", href: "/finanzen/versicherungen", description: "Richtig abgesichert sein" }
      ],
      featuredItems: [
        { name: "C24 Bank Test", href: "/finanzen/bankkonten/c24-bank", badge: "Neu" },
        { name: "Die besten ETFs 2023", href: "/finanzen/etfs/beste-etfs", badge: "Beliebt" },
      ]
    },
    { 
      name: "Technik", 
      href: "/technik", 
      icon: BookOpen,
      description: "Von Smart Home bis Mobile - digitale Helfer für deinen Alltag.",
      subcategories: [
        { name: "Smart Home", href: "/technik/smart-home", description: "Dein Zuhause intelligent steuern" },
        { name: "Gadgets", href: "/technik/gadgets", description: "Nützliche technische Helfer" },
        { name: "Software", href: "/technik/software", description: "Apps und Programme im Test" }
      ],
      featuredItems: [
        { name: "Alexa vs. Google Home", href: "/technik/smart-home/sprachassistenten", badge: "Vergleich" },
        { name: "Die besten Smartphones 2023", href: "/technik/gadgets/smartphones", badge: "Top 5" },
      ]
    },
    { 
      name: "Lifestyle", 
      href: "/lifestyle",
      icon: ShoppingBag,
      description: "Besser leben: Von Gesundheit über Reisen bis zu Mode und Hobbys.",
      subcategories: [
        { name: "Gesundheit", href: "/lifestyle/gesundheit", description: "Fitness und Wohlbefinden" },
        { name: "Hobbys", href: "/lifestyle/hobbys", description: "Freizeit sinnvoll gestalten" },
        { name: "Reisen", href: "/lifestyle/reisen", description: "Destinationen und Reisetipps" },
        { name: "Mode", href: "/lifestyle/mode", description: "Nachhaltig und stylisch" }
      ],
      featuredItems: [
        { name: "Fitness-Tracker im Test", href: "/lifestyle/gesundheit/fitness-tracker", badge: "Getestet" },
        { name: "Nachhaltige Mode-Labels", href: "/lifestyle/mode/nachhaltig", badge: "Eco" },
      ]
    },
    { 
      name: "Business", 
      href: "/business",
      icon: FilePen,
      description: "Gründen, wachsen, optimieren - dein Weg zum Erfolg.",
      subcategories: [
        { name: "Gründung", href: "/business/gruendung", description: "Der Start in die Selbstständigkeit" },
        { name: "Marketing", href: "/business/marketing", description: "Strategien für mehr Sichtbarkeit" },
        { name: "Steuern", href: "/business/steuern", description: "Steueroptimierung für Unternehmer" }
      ],
      featuredItems: [
        { name: "Businessplan-Vorlage", href: "/business/gruendung/businessplan", badge: "Kostenlos" },
        { name: "Steuertipps für Freelancer", href: "/business/steuern/freelancer", badge: "Insider" },
      ]
    }
  ];

  // Weitere Haupteinträge, die keine Unterkategorien benötigen
  const standardNavLinks = [
    { name: "Blog", href: "/blog", icon: BookMarked },
    { name: "Empfehlungen", href: "/empfehlungen", icon: ShoppingBag },
    { name: "Ressourcen", href: "/ressourcen", icon: Layers },
    { name: "Über Mich", href: "/ueber-mich", icon: User },
    { name: "Kontakt", href: "/kontakt", icon: Mail },
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
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-background/40 backdrop-blur-md"
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
            {/* Hauptkategorien mit Mega-Menü */}
            {mainCategories.map((category) => {
              const isActive = isActiveLink(category.href, category.subcategories);
              
              return (
                <div key={category.name} className="relative group" onMouseLeave={closeMegaMenu}>
                  <button
                    className={`relative py-5 px-3 text-sm xl:text-base hover:text-primary transition-colors whitespace-nowrap flex items-center gap-1 group ${
                      isActive 
                        ? "text-primary font-medium" 
                        : "text-foreground"
                    }`}
                    onClick={() => toggleMegaMenu(category.name)}
                    onMouseEnter={() => setActiveMegaMenu(category.name)}
                    aria-expanded={activeMegaMenu === category.name}
                  >
                    {category.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeMegaMenu === category.name ? 'rotate-180' : ''}`} />
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                    )}
                  </button>
                  
                  {/* Mega-Menü */}
                  {activeMegaMenu === category.name && (
                    <div 
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-5xl bg-background/95 backdrop-blur-md shadow-lg rounded-b-xl border border-border/40 overflow-hidden z-50 animate-fade-in"
                      onMouseLeave={closeMegaMenu}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
                        {/* Haupt-Info und Bild */}
                        <div className="lg:col-span-1 flex flex-col">
                          <div className="flex items-center gap-2 mb-3 text-primary">
                            <category.icon className="h-5 w-5" />
                            <h3 className="font-bold text-lg">{category.name}</h3>
                          </div>
                          <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                          <Link 
                            to={category.href} 
                            className="bg-primary/10 text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/20 transition-colors mt-auto"
                            onClick={closeMegaMenu}
                          >
                            Alle {category.name} anzeigen
                          </Link>
                        </div>
                        
                        {/* Unterkategorien */}
                        <div className="lg:col-span-2">
                          <h4 className="font-medium text-muted-foreground mb-3 text-sm uppercase tracking-wider">Kategorien</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {category.subcategories.map((subCategory) => (
                              <Link
                                key={subCategory.name}
                                to={subCategory.href}
                                className="group flex flex-col p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                onClick={closeMegaMenu}
                              >
                                <span className="font-medium group-hover:text-primary transition-colors">
                                  {subCategory.name}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                  {subCategory.description}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        {/* Featured Links */}
                        <div className="lg:col-span-1 border-l border-border/30 pl-6">
                          <h4 className="font-medium text-muted-foreground mb-3 text-sm uppercase tracking-wider">Empfohlen</h4>
                          <div className="space-y-3">
                            {category.featuredItems.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="block group"
                                onClick={closeMegaMenu}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-medium group-hover:text-primary transition-colors">{item.name}</span>
                                  {item.badge && (
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary">{item.badge}</span>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Standardeinträge ohne Mega-Menü */}
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
