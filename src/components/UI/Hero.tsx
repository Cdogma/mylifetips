
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
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary/20 to-background py-16 md:py-24">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`max-w-xl transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              ✨ Willkommen bei MyLifeTips
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              {subtitle}
            </p>
            <div className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {ctaText && ctaLink && (
                <Link
                  to={ctaLink}
                  className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors hover:shadow-lg group"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  to={secondaryCtaLink}
                  className="inline-flex items-center bg-secondary text-secondary-foreground px-6 py-3 rounded-md hover:bg-secondary/80 transition-colors hover:shadow-md"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </div>
          <div className={`relative flex justify-center items-start transform transition-all duration-1000 delay-150 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="w-full relative flex items-center">
              <img
                src="/lovable-uploads/e20d1a22-a3ff-4bda-9092-5dc8d352f9e9.png"
                alt="Arbeitsplatz mit Laptop, Kaffee und Notizbuch in hellem Ambiente"
                className="w-full object-cover rounded-lg shadow-xl"
                style={{ minHeight: '350px', maxHeight: '400px' }}
              />
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-secondary/50 rounded-lg -z-10 transform transition-all duration-500 hover:scale-105"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute hidden md:block top-20 left-10 w-8 h-8 bg-primary/20 rounded-full"></div>
      <div className="absolute hidden md:block bottom-20 right-10 w-12 h-12 bg-primary/10 rounded-full"></div>
      <div className="absolute hidden md:block top-1/2 right-32 w-4 h-4 bg-primary/30 rounded-full"></div>
    </section>
  );
};

export default Hero;
