
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
          {/* Text-Inhalt mit Glaseffekt */}
          <div className={`max-w-xl transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-block px-4 py-2 mb-6 backdrop-blur-sm bg-white/10 border-l border-primary/50 rounded-r-md">
              <span className="text-primary font-medium">✨ Willkommen bei MyLifeTips</span>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 
                          bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
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
          </div>
          
          {/* Bild-Inhalt ohne extra Rahmen */}
          <div className={`relative flex justify-center items-start transform transition-all duration-1000 delay-150 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <img
              src="/lovable-uploads/e20d1a22-a3ff-4bda-9092-5dc8d352f9e9.png"
              alt="Arbeitsplatz mit Laptop, Kaffee und Notizbuch in hellem Ambiente"
              className="w-full object-cover rounded-xl shadow-lg transform transition-all duration-500 hover:scale-[1.02]"
              style={{ minHeight: '350px', maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
