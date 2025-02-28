
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
      className="block bg-card hover:bg-card/80 transition-colors rounded-lg overflow-hidden shadow-sm border border-border"
      style={{
        animationDelay: `${delay * 0.1}s`,
      }}
    >
      <div className="h-48 relative overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            {icon && <div className="text-primary/70">{icon}</div>}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center text-primary font-medium">
          <span>Mehr erfahren</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
