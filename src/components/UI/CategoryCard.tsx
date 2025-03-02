
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  imageSrc?: string;
  link: string;
  delay?: number;
}

const CategoryCard = ({
  title,
  description,
  icon,
  imageSrc,
  link,
  delay = 0,
}: CategoryCardProps) => {
  return (
    <Link
      to={link}
      className="group relative block rounded-xl overflow-hidden shadow-sm border border-border/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in"
      style={{
        animationDelay: `${delay * 0.1}s`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      
      <div className="h-52 relative overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            {icon && <div className="text-primary/70 text-4xl">{icon}</div>}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
        <div className="absolute top-4 right-4 bg-primary/80 text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
          Entdecken
        </div>
      </div>
      
      <div className="p-6 bg-card/80 backdrop-blur-sm relative z-20">
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-primary/80 bg-clip-text text-transparent transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center text-primary font-medium transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
          <span>Mehr entdecken</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
