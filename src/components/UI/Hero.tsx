
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              {ctaText && ctaLink && (
                <Link
                  to={ctaLink}
                  className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  to={secondaryCtaLink}
                  className="inline-flex items-center bg-secondary text-secondary-foreground px-6 py-3 rounded-md hover:bg-secondary/80 transition-colors"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </div>
          <div className="relative animate-scale-in">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="Hero illustration"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            ) : (
              <div className="aspect-video w-full bg-gradient-to-tr from-primary/10 to-primary/30 rounded-lg shadow-xl"></div>
            )}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-secondary/50 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
