
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
}

const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
}: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Kurze Verzögerung hinzufügen, um die Animation nach dem ersten Rendering zu starten
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary/20 via-background to-primary/10 py-20 md:py-28">
      {/* Hintergrund-Elemente */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text-Inhalt mit Glaseffekt */}
          <div className={`max-w-xl transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-block px-4 py-2 mb-6 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full border border-white/20 dark:border-white/10 shadow-sm">
              <span className="text-primary font-medium">✨ Willkommen bei MyLifeTips</span>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 dark:bg-black/10 p-8 rounded-2xl border border-white/20 dark:border-white/5 shadow-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 
                          bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
                {title}
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/90 mb-8">
                {subtitle}
              </p>
              
              <div className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {ctaText && ctaLink && (
                  <Link
                    to={ctaLink}
                    className="inline-flex items-center bg-primary text-primary-foreground 
                            px-7 py-3.5 rounded-xl shadow-lg 
                            hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 
                            border border-primary/20 relative overflow-hidden group scale-100 hover:scale-105"
                  >
                    <span className="relative z-10">{ctaText}</span>
                    <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                  </Link>
                )}
                {secondaryCtaText && secondaryCtaLink && (
                  <Link
                    to={secondaryCtaLink}
                    className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/40
                            text-foreground px-7 py-3.5 rounded-xl shadow-md
                            hover:bg-white/30 relative overflow-hidden
                            transition-all duration-300 group hover:shadow-lg scale-100 hover:scale-105"
                  >
                    <span className="relative z-10">{secondaryCtaText}</span>
                    <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                )}
              </div>
            </div>
          </div>
          
          {/* Bild-Inhalt mit schwebenden Elementen */}
          <div className={`relative transform transition-all duration-1000 delay-150 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 transition-all duration-500 hover:shadow-primary/10 hover:scale-[1.01]">
              <img
                src="/lovable-uploads/e20d1a22-a3ff-4bda-9092-5dc8d352f9e9.png"
                alt="Arbeitsplatz mit Laptop, Kaffee und Notizbuch in hellem Ambiente"
                className="w-full object-cover rounded-2xl"
                style={{ minHeight: '400px', maxHeight: '450px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
