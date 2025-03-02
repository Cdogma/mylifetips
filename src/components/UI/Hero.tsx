
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
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary/5 via-background to-primary/5 py-16 md:py-24">
      {/* Hintergrund-Elemente */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text-Inhalt */}
          <div className={`max-w-xl transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-block px-4 py-2 mb-6 
                         relative overflow-hidden
                         rounded-lg shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm"></div>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary"></div>
              <span className="relative z-10 text-primary font-medium tracking-wide flex items-center">
                <span className="mr-2 text-yellow-400">✨</span>
                Willkommen bei MyLifeTips
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 
                         bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              {subtitle}
            </p>
            
            <div className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {ctaText && ctaLink && (
                <Link
                  to={ctaLink}
                  className="inline-flex items-center bg-primary text-primary-foreground 
                           px-7 py-3.5 rounded-xl shadow-lg 
                           hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 
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
          
          {/* Bild-Inhalt */}
          <div className={`relative flex justify-center items-start transform transition-all duration-1000 delay-150 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="w-full relative flex items-center">
              {/* Glaseffekt */}
              <div className="absolute -inset-4 bg-white/10 backdrop-blur-xl rounded-2xl -z-10 border border-white/20 shadow-xl"></div>
              
              <img
                src="/lovable-uploads/e20d1a22-a3ff-4bda-9092-5dc8d352f9e9.png"
                alt="Arbeitsplatz mit Laptop, Kaffee und Notizbuch in hellem Ambiente"
                className="w-full object-cover rounded-xl shadow-lg transform transition-all duration-500 hover:scale-[1.02]"
                style={{ minHeight: '350px', maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
