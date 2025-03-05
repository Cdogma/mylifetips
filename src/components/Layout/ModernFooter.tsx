
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowUp, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

const ModernFooter = () => {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      <div className="footer-container bg-[#0F172A] dark:bg-[#020617] relative overflow-hidden text-[#F1F5F9] dark:text-[#E2E8F0]">
        {/* Animated background elements */}
        <div className="footer-backdrop absolute top-0 left-0 w-full h-full bg-[#020617] dark:bg-[#010511] z-[1]"></div>
        <div className="footer-blur blur-1 absolute w-[40%] h-[80%] rounded-full blur-[80px] opacity-15 z-[2] animate-color-shift bg-primary top-[-20%] left-[-10%]"></div>
        <div className="footer-blur blur-2 absolute w-[40%] h-[80%] rounded-full blur-[80px] opacity-15 z-[2] animate-color-shift animation-delay-5000 bg-[#10B981] bottom-[-30%] right-[-10%]"></div>
        <div className="footer-blur blur-3 absolute w-[25%] h-[60%] rounded-full blur-[80px] opacity-15 z-[2] animate-color-shift animation-delay-10000 bg-destructive top-[40%] right-[25%]"></div>
        
        <footer className="relative z-[5] py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {/* Brand Section */}
            <div className="footer-brand flex flex-col gap-5 animate-fade-in-up">
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text mb-1 inline-block">MyLifeTips</div>
                <p className="text-[#94A3B8] dark:text-[#94A3B8] text-[15px] max-w-xs mb-5">
                  Ehrliche Tipps und Empfehlungen für ein besseres Leben, von Finanzen bis Lifestyle.
                </p>
              </div>
              
              <div className="footer-newsletter mt-4">
                <div className="text-base font-semibold mb-4">Bleiben Sie auf dem Laufenden</div>
                <div className="newsletter-form relative flex max-w-xs">
                  <input 
                    type="email" 
                    className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-[#F1F5F9] w-full text-sm focus:border-white/20 focus:bg-white/[0.07] transition-all outline-none" 
                    placeholder="Ihre E-Mail-Adresse"
                  />
                  <button className="absolute right-1 top-1 bottom-1 border-none bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg px-4 font-medium cursor-pointer text-sm transition-all hover:opacity-90 hover:-translate-y-0.5">
                    Anmelden
                  </button>
                </div>
              </div>
              
              {/* Theme Switch */}
              <div className="theme-switch flex items-center mt-5 cursor-pointer" onClick={toggleTheme}>
                <div className={`relative w-[50px] h-[26px] rounded-[13px] bg-white/[0.06] transition-all ${theme === 'dark' ? 'bg-primary' : ''}`}>
                  <div className={`absolute w-[20px] h-[20px] rounded-full bg-primary top-[3px] left-[3px] transition-all ${theme === 'dark' ? 'transform translate-x-[24px] bg-[#0F172A]' : ''}`}></div>
                </div>
                <span className="text-[#94A3B8] text-[14px] ml-[10px]">Dark Mode</span>
              </div>
            </div>
            
            {/* Legal Section */}
            <div className="footer-section flex flex-col gap-5 animate-fade-in-up animation-delay-200">
              <h3 className="footer-heading text-lg font-semibold mb-1 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[3px] after:w-10 after:bg-gradient-to-r after:from-primary after:to-primary/80 after:rounded-sm">
                Rechtliches
              </h3>
              <ul className="footer-links list-none flex flex-col gap-3">
                <li className="transition-all hover:translate-x-1">
                  <Link to="/impressum" className="text-[#94A3B8] no-underline text-[15px] transition-all flex items-center gap-2 hover:text-[#F1F5F9]">
                    Impressum
                  </Link>
                </li>
                <li className="transition-all hover:translate-x-1">
                  <Link to="/datenschutz" className="text-[#94A3B8] no-underline text-[15px] transition-all flex items-center gap-2 hover:text-[#F1F5F9]">
                    Datenschutz
                  </Link>
                </li>
                <li className="transition-all hover:translate-x-1">
                  <Link to="/kontakt" className="text-[#94A3B8] no-underline text-[15px] transition-all flex items-center gap-2 hover:text-[#F1F5F9]">
                    Kontakt
                  </Link>
                </li>
                <li className="transition-all hover:translate-x-1">
                  <Link to="/ueber-mich" className="text-[#94A3B8] no-underline text-[15px] transition-all flex items-center gap-2 hover:text-[#F1F5F9]">
                    Über mich
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Section */}
            <div className="footer-section flex flex-col gap-5 animate-fade-in-up animation-delay-300">
              <h3 className="footer-heading text-lg font-semibold mb-1 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[3px] after:w-10 after:bg-gradient-to-r after:from-primary after:to-primary/80 after:rounded-sm">
                Kontakt
              </h3>
              
              <div className="contact-item flex items-start gap-3 mb-3">
                <div className="contact-icon bg-white/[0.06] w-9 h-9 rounded-full flex items-center justify-center text-sm text-primary flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="contact-info text-[15px] text-[#94A3B8]">
                  Berlin, Deutschland
                </div>
              </div>
              
              <div className="contact-item flex items-center gap-3 mb-3">
                <div className="contact-icon bg-white/[0.06] w-9 h-9 rounded-full flex items-center justify-center text-sm text-primary flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="contact-info text-[15px] text-[#94A3B8]">
                  <a href="mailto:info@mylifetips.de" className="text-[#94A3B8] no-underline transition-all hover:text-[#F1F5F9]">
                    info@mylifetips.de
                  </a>
                </div>
              </div>
              
              <div className="contact-item flex items-center gap-3 mb-3">
                <div className="contact-icon bg-white/[0.06] w-9 h-9 rounded-full flex items-center justify-center text-sm text-primary flex-shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="contact-info text-[15px] text-[#94A3B8]">
                  <a href="tel:+491234567890" className="text-[#94A3B8] no-underline transition-all hover:text-[#F1F5F9]">
                    +49 (0) 123 456 7890
                  </a>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="social-links flex gap-3 mt-3">
                <a href="#" className="social-link flex items-center justify-center w-[38px] h-[38px] rounded-lg bg-white/5 text-[#F1F5F9] no-underline transition-all hover:-translate-y-1 hover:bg-primary hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="social-link flex items-center justify-center w-[38px] h-[38px] rounded-lg bg-white/5 text-[#F1F5F9] no-underline transition-all hover:-translate-y-1 hover:bg-primary hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="social-link flex items-center justify-center w-[38px] h-[38px] rounded-lg bg-white/5 text-[#F1F5F9] no-underline transition-all hover:-translate-y-1 hover:bg-primary hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="social-link flex items-center justify-center w-[38px] h-[38px] rounded-lg bg-white/5 text-[#F1F5F9] no-underline transition-all hover:-translate-y-1 hover:bg-primary hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom flex items-center justify-between pt-8 border-t border-white/10 flex-wrap gap-5">
            <div className="copyright text-[#94A3B8] text-sm">
              © {currentYear} <span className="text-primary">MyLifeTips</span>. Alle Rechte vorbehalten.
            </div>
            
            {/* Affiliate Notice */}
            <div className="affiliate-notice text-[#94A3B8] text-sm">
              * Einige Links auf dieser Seite sind Affiliate-Links. Wir erhalten möglicherweise eine Provision, wenn Sie über diese Links etwas kaufen.
            </div>
            
            <div className="legal-links flex gap-6 flex-wrap">
              <Link to="/datenschutz" className="text-[#94A3B8] no-underline text-sm transition-all hover:text-[#F1F5F9]">
                Datenschutz
              </Link>
              <Link to="/impressum" className="text-[#94A3B8] no-underline text-sm transition-all hover:text-[#F1F5F9]">
                Impressum
              </Link>
              <Link to="/kontakt" className="text-[#94A3B8] no-underline text-sm transition-all hover:text-[#F1F5F9]">
                Kontakt
              </Link>
            </div>
          </div>
        </footer>
      </div>
      
      {/* Scroll to top button */}
      <div 
        className={`scroll-top fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full flex items-center justify-center cursor-pointer z-50 shadow-lg shadow-primary/30 transition-all ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-5 w-5" />
      </div>
    </>
  );
};

export default ModernFooter;
