
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
}

const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaLink = "/",
  secondaryCtaText,
  secondaryCtaLink = "/",
  imageSrc,
  imageAlt = "Hero Image",
  align = "left",
  size = "md",
  theme = "dark",
}: HeroProps) => {
  // Calculate classes based on props
  const containerClasses = {
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
  };

  const textAlignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
  };

  const colorClasses = {
    light: "bg-background text-foreground",
    dark: "bg-gradient-to-br from-background to-background/95 text-primary-foreground",
  };

  return (
    <div className={`relative ${colorClasses[theme]} overflow-hidden`}>
      {/* Background overlay/pattern if needed */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Hero content */}
      <div className={`relative ${containerClasses[size]}`}>
        <div className="container px-4">
          <div className={`max-w-3xl ${textAlignClasses[align]}`}>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-6 leading-tight break-words">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed break-words">
              {subtitle}
            </p>
            
            {(ctaText || secondaryCtaText) && (
              <div className="flex flex-wrap gap-4 mt-8">
                {ctaText && (
                  <Link
                    to={ctaLink}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    {ctaText}
                  </Link>
                )}
                
                {secondaryCtaText && (
                  <Link
                    to={secondaryCtaLink}
                    className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    {secondaryCtaText}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
