
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import ThemeToggle from "../UI/ThemeToggle";
import NavLogo from "./Navigation/NavLogo";
import { Input } from "../ui/input";
import { mainCategories, standardNavLinks } from "./Navigation/NavData";
import { Link } from "react-router-dom";

interface NavbarProps {
  showSearch?: boolean;
}

const Navbar = ({ showSearch = true }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
      // navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const isActiveLink = (href) => {
    return location.pathname === href || 
      (href !== "/" && location.pathname.startsWith(href));
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-sm" : "bg-background/40 backdrop-blur-md"
      } border-b border-border/30`}
    >
      {/* Top Navigation Bar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLogo />
          </div>
          
          {/* Search Bar - Always visible */}
          <div className="hidden md:flex flex-grow mx-4 max-w-md">
            <form onSubmit={handleSubmit} className="w-full relative">
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Suchen..."
                className="w-full pl-4 pr-10 py-2 rounded-md"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label="Suche starten"
              >
                <Search size={16} className="text-muted-foreground" />
              </button>
            </form>
          </div>
          
          {/* Theme Toggle */}
          <div className="hidden md:flex items-center">
            <ThemeToggle />
          </div>
          
          {/* Mobile: Search and Menu Toggle */}
          <div className="md:hidden flex items-center ml-auto">
            {showSearch && (
              <form onSubmit={handleSubmit} className="mr-2">
                <Input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Suchen..."
                  className="w-32 h-9 text-sm py-1 px-3"
                />
              </form>
            )}
            
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation - Always visible on desktop */}
      <div className="hidden md:block bg-background/95 border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-1 overflow-x-auto py-1 no-scrollbar">
            {/* Main Categories */}
            {mainCategories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className={`px-3 py-2 text-sm whitespace-nowrap hover:text-primary transition-colors ${
                  isActiveLink(category.href) 
                    ? "text-primary font-medium" 
                    : "text-foreground"
                }`}
              >
                {category.name}
              </Link>
            ))}
            
            {/* Standard Nav Links */}
            {standardNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-2 text-sm whitespace-nowrap hover:text-primary transition-colors ${
                  isActiveLink(link.href) 
                    ? "text-primary font-medium" 
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
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
            {/* All Categories in Mobile Menu */}
            {mainCategories.map((category, index) => (
              <div key={category.name} className="border-b border-border/30 pb-2 mb-2">
                <Link
                  to={category.href}
                  className={`block py-3 px-4 rounded-md ${
                    isActiveLink(category.href) 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "hover:bg-muted/50 text-foreground"
                  }`}
                  onClick={toggleMenu}
                >
                  {category.name}
                </Link>
                
                <div className="pl-4 mt-1 space-y-1">
                  {category.subcategories.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.href}
                      className={`block py-2 px-4 text-sm rounded-md ${
                        isActiveLink(sub.href) 
                          ? "bg-primary/5 text-primary font-medium" 
                          : "hover:bg-muted/30 text-muted-foreground"
                      }`}
                      onClick={toggleMenu}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Standard Nav Links in Mobile Menu */}
            {standardNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`py-3 px-4 rounded-md ${
                  isActiveLink(link.href) 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "hover:bg-muted/50 text-foreground"
                }`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
