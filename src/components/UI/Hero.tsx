
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
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className={`max-w-xl transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full 
                          bg-gradient-to-r from-primary/20 to-secondary/20 
                          backdrop-blur-md text-primary border border-white/10 shadow-sm">
              ✨ Willkommen bei MyLifeTips
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
                  className="inline-flex items-center bg-primary text-primary-foreground px-7 py-3.5 
                           rounded-xl hover:bg-primary/90 transition-all duration-300 
                           hover:shadow-lg hover:shadow-primary/20 group"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  to={secondaryCtaLink}
                  className="inline-flex items-center backdrop-blur-md bg-white/10 border border-white/20
                           text-foreground px-7 py-3.5 rounded-xl hover:bg-white/20 
                           transition-all duration-300 hover:shadow-md"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </div>
          
          {/* Image content */}
          <div className={`relative flex justify-center items-start transform transition-all duration-1000 delay-150 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="w-full relative flex items-center">
              {/* Glass card effect */}
              <div className="absolute -inset-4 bg-white/10 backdrop-blur-xl rounded-2xl -z-10 border border-white/20 shadow-xl"></div>
              
              <img
                src="/lovable-uploads/e20d1a22-a3ff-4bda-9092-5dc8d352f9e9.png"
                alt="Arbeitsplatz mit Laptop, Kaffee und Notizbuch in hellem Ambiente"
                className="w-full object-cover rounded-xl shadow-lg transform transition-all duration-500 hover:scale-[1.02]"
                style={{ minHeight: '350px', maxHeight: '400px' }}
              />
              
              {/* Decorative elements around image */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/30 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute hidden md:block top-1/4 left-10 w-8 h-8 bg-primary/30 rounded-full animate-pulse"></div>
      <div className="absolute hidden md:block bottom-1/4 right-10 w-12 h-12 bg-secondary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute hidden md:block top-1/2 right-32 w-6 h-6 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Glass orbs */}
      <div className="absolute hidden md:block top-1/3 left-1/4 w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl"></div>
      <div className="absolute hidden md:block bottom-1/4 right-1/5 w-16 h-16 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 shadow-lg"></div>
    </section>
  );
};

export default Hero;
