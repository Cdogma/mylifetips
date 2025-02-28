
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {
      name: "Finanzen",
      path: "/finanzen",
      submenu: [
        { name: "Bankkonten", path: "/finanzen/bankkonten" },
        { name: "Kreditkarten", path: "/finanzen/kreditkarten" },
        { name: "Broker", path: "/finanzen/broker" },
        { name: "ETFs", path: "/finanzen/etfs" },
        { name: "Versicherungen", path: "/finanzen/versicherungen" },
      ],
    },
    {
      name: "Business",
      path: "/business",
      submenu: [
        { name: "Gründungs-Tipps", path: "/business/gruendung" },
        { name: "Buchhaltung", path: "/business/buchhaltung" },
        { name: "Konten", path: "/business/konten" },
        { name: "Projektmanagement", path: "/business/projektmanagement" },
      ],
    },
    {
      name: "Technik",
      path: "/technik",
      submenu: [
        { name: "Smartphones", path: "/technik/smartphones" },
        { name: "Smart Home", path: "/technik/smart-home" },
        { name: "Wearables", path: "/technik/wearables" },
        { name: "Computer", path: "/technik/computer" },
        { name: "Software", path: "/technik/software" },
      ],
    },
    {
      name: "Lifestyle",
      path: "/lifestyle",
      submenu: [
        { name: "Haushalt", path: "/lifestyle/haushalt" },
        { name: "Reisen", path: "/lifestyle/reisen" },
        { name: "Mobilität", path: "/lifestyle/mobilitaet" },
        { name: "Fashion", path: "/lifestyle/fashion" },
        { name: "Familie", path: "/lifestyle/familie" },
      ],
    },
    { name: "Empfehlungen", path: "/empfehlungen" },
    { name: "Blog", path: "/blog" },
    { name: "Über mich", path: "/ueber-mich" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            MyLifeTips
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  to={item.path}
                  className="text-foreground/90 hover:text-primary transition-colors flex items-center"
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
                  )}
                </Link>

                {item.submenu && hoveredMenu === item.name && (
                  <div className="absolute left-0 mt-2 w-56 glass rounded-md overflow-hidden animate-fade-in shadow-md z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm hover:bg-primary/10 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-background z-40 animate-fade-in">
            <div className="container py-6 px-4 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <div key={item.name} className="py-2 border-b border-border">
                  <Link
                    to={item.path}
                    className="text-lg font-medium"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="mt-2 ml-4 flex flex-col space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          onClick={toggleMenu}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
