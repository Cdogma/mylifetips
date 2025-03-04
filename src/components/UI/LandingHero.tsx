
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface LandingHeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
}

const LandingHero = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
}: LandingHeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      {/* Hintergrund-Elemente */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Dekorative Kreise im Hintergrund */}
      <div className="absolute top-40 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-secondary/5 blur-3xl"></div>
      <div className="absolute top-20 left-[20%] w-20 h-20 rounded-full bg-primary/10 animate-pulse"></div>
      <div className="absolute bottom-32 right-[15%] w-16 h-16 rounded-full bg-secondary/10 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Banner mit Auszeichnung */}
          <div 
            className={`inline-block mb-8 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <div className="px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 shadow-sm">
              <span className="text-primary font-medium">✨ Ehrliche Tipps für ein besseres Leben</span>
            </div>
          </div>
          
          {/* Haupttitel mit Hervorhebung */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transform transition-all duration-1000 delay-100 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              MyLifeTips
            </span>
            <span className="block mt-3">Empfehlungen mit Mehrwert</span>
          </h1>
          
          {/* Untertitel */}
          <p 
            className={`text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            {subtitle}
          </p>
          
          {/* CTA-Buttons */}
          <div 
            className={`flex flex-wrap justify-center gap-4 transform transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {ctaText && ctaLink && (
              <Link
                to={ctaLink}
                className="inline-flex items-center bg-primary text-primary-foreground 
                      px-8 py-4 rounded-xl shadow-lg 
                      hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 
                      border border-primary/20 relative overflow-hidden group"
              >
                <span className="relative z-10 text-lg font-medium">{ctaText}</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
                <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            )}
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                to={secondaryCtaLink}
                className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/40
                      text-foreground px-8 py-4 rounded-xl shadow-md
                      hover:bg-white/30 relative overflow-hidden
                      transition-all duration-300 group hover:shadow-lg"
              >
                <span className="relative z-10 text-lg font-medium">{secondaryCtaText}</span>
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            )}
          </div>
          
          {/* Bildbereich unter den Buttons */}
          {imageSrc && (
            <div 
              className={`mt-16 transform transition-all duration-1000 delay-400 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-500 hover:shadow-primary/10 group">
                <img
                  src={imageSrc}
                  alt="MyLifeTips Highlights"
                  className="w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  style={{ maxHeight: '500px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
