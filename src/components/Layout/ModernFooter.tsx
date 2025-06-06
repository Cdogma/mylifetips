import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowUp, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getFeatureFlags } from "@/config/environment";

const ModernFooter = () => {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const flags = getFeatureFlags();
  
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
      <div className="footer-container">
        {/* Animated background elements with improved effects */}
        <div className="footer-backdrop"></div>
        <div className="footer-blur blur-1"></div>
        <div className="footer-blur blur-2"></div>
        <div className="footer-blur blur-3"></div>
        
        <footer className="relative z-[5] py-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            {/* Brand Section with enhanced animations */}
            <div className="md:col-span-6 footer-brand flex flex-col gap-5 animate-fade-in-up">
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-blue-500 text-transparent bg-clip-text mb-3 inline-block text-shimmer">
                  MyLifeTips
                </div>
                <p className={`${theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#475569]'} text-[15px] max-w-md mb-4 leading-relaxed`}>
                  Ehrliche Tipps und Empfehlungen für ein besseres Leben – mit Fokus auf Finanzen, Business, Technik und Lifestyle.
                </p>
                <p className={`${theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#475569]'} text-[14px] max-w-md mb-5 italic border-l-2 border-primary/30 pl-3 glass-card p-3 rounded-lg`}>
                  * Transparenzhinweis: Einige Links auf dieser Seite sind Affiliate-Links. Wenn du über sie kaufst, erhalte ich eine kleine Provision – für dich bleibt der Preis gleich. Damit unterstützt du meine Arbeit und hilfst, die Seite weiter auszubauen. Vielen Dank!<span className="not-italic"> 😊</span>
                </p>
              </div>
            </div>
            
            {/* Legal Section with micro-interactions */}
            <div className="md:col-span-3 footer-section animate-fade-in-up animation-delay-200 flex flex-col items-start justify-center">
              <div className="glass-card p-6 rounded-2xl w-full">
                <h3 className="footer-heading text-lg font-semibold mb-5 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[3px] after:w-10 after:bg-gradient-to-r after:from-primary after:to-primary/80 after:rounded-sm">
                  Rechtliches
                </h3>
                <div className="flex flex-col gap-y-3 w-full">
                  <div className="micro-hover">
                    <Link to="/impressum" className={`${theme === 'dark' ? 'text-[#94A3B8] hover:text-[#F1F5F9]' : 'text-[#475569] hover:text-[#0F172A]'} no-underline text-[15px] transition-all flex items-center gap-2 link-underline p-2 rounded-lg hover:bg-white/5`}>
                      Impressum
                    </Link>
                  </div>
                  <div className="micro-hover">
                    <Link to="/datenschutz" className={`${theme === 'dark' ? 'text-[#94A3B8] hover:text-[#F1F5F9]' : 'text-[#475569] hover:text-[#0F172A]'} no-underline text-[15px] transition-all flex items-center gap-2 link-underline p-2 rounded-lg hover:bg-white/5`}>
                      Datenschutz
                    </Link>
                  </div>
                  <div className="micro-hover">
                    <Link to="/kontakt" className={`${theme === 'dark' ? 'text-[#94A3B8] hover:text-[#F1F5F9]' : 'text-[#475569] hover:text-[#0F172A]'} no-underline text-[15px] transition-all flex items-center gap-2 link-underline p-2 rounded-lg hover:bg-white/5`}>
                      Kontakt
                    </Link>
                  </div>
                  <div className="micro-hover">
                    <Link to="/ueber-mich" className={`${theme === 'dark' ? 'text-[#94A3B8] hover:text-[#F1F5F9]' : 'text-[#475569] hover:text-[#0F172A]'} no-underline text-[15px] transition-all flex items-center gap-2 link-underline p-2 rounded-lg hover:bg-white/5`}>
                      Über mich
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Newsletter and Social Media Section with enhanced glass effects */}
            <div className="md:col-span-3 footer-section animate-fade-in-up animation-delay-300">
              <div className="glass-card p-6 rounded-2xl">
                {flags.showNewsletterSignup && (
                  <div className="newsletter-form flex flex-col space-y-3 mb-6">
                    <div className="text-base font-semibold">Bleiben Sie auf dem Laufenden</div>
                    <div className="relative flex">
                      <input 
                        type="email" 
                        className="glass-card border-white/20 text-foreground focus:border-primary/50 focus:bg-white/10 py-3 px-4 w-full text-sm transition-all outline-none micro-hover" 
                        placeholder="Ihre E-Mail-Adresse"
                      />
                      <button className="absolute right-1 top-1 bottom-1 border-none bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg px-4 font-medium cursor-pointer text-sm transition-all hover:opacity-90 hover:-translate-y-0.5 micro-click btn-magnetic">
                        Anmelden
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Social Links with enhanced animations */}
                {flags.showSocialMedia && (
                  <div className="social-links flex gap-3 mb-4">
                    {flags.showFacebookLink && (
                      <a href="#" className="social-link">
                        <Facebook className="h-5 w-5" />
                      </a>
                    )}
                    <a href="#" className="social-link">
                      <Twitter className="h-5 w-5" />
                    </a>
                    {flags.showInstagramLink && (
                      <a href="#" className="social-link">
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                    <a href="#" className="social-link">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                )}
                
                {/* Enhanced Theme Switch */}
                <div className="theme-switch flex items-center cursor-pointer mt-4 micro-hover p-3 rounded-xl glass-card" onClick={toggleTheme}>
                  <div className={`relative w-[50px] h-[26px] rounded-[13px] ${theme === 'dark' ? 'bg-primary' : 'bg-black/10'} transition-all duration-300`}>
                    <div className={`absolute w-[20px] h-[20px] rounded-full ${theme === 'dark' ? 'bg-[#0F172A] translate-x-[24px]' : 'bg-primary translate-x-[3px]'} top-[3px] transition-all duration-300 shadow-lg`}></div>
                  </div>
                  <span className={`${theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#475569]'} text-[14px] ml-[10px] font-medium`}>
                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`footer-bottom flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} gap-5`}>
            <div className={`copyright ${theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#475569]'} text-sm`}>
              © {currentYear} <span className="text-primary font-semibold">MyLifeTips</span>. Alle Rechte vorbehalten.
            </div>
          </div>
        </footer>
      </div>
      
      {/* Enhanced Scroll to top button */}
      <div 
        className={`scroll-top ${
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
