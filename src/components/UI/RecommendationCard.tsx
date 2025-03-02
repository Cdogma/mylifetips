
import { Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface RecommendationCardProps {
  title: string;
  category: string;
  description: string;
  rating: number;
  imageSrc?: string;
  link: string;
  isAffiliate?: boolean;
  delay?: number;
}

const RecommendationCard = ({
  title,
  category,
  description,
  rating,
  imageSrc,
  link,
  isAffiliate = false,
  delay = 0,
}: RecommendationCardProps) => {
  return (
    <div 
      className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-scale-in"
      style={{
        animationDelay: `${delay * 0.1}s`,
      }}
    >
      <div className="h-52 relative overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Kein Bild verfügbar</span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
            {category}
          </span>
        </div>
        {isAffiliate && (
          <div className="absolute top-3 right-3">
            <span className="inline-block text-xs font-medium text-foreground/70 bg-background/60 backdrop-blur-sm px-1.5 py-0.5 rounded border border-border/30 shadow-sm">
              *Affiliate
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-primary/80 bg-clip-text text-transparent transition-colors duration-300">{title}</h3>
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground/30"
              } transition-colors duration-300`}
            />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">
            {rating.toFixed(1)}/5
          </span>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-5">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center bg-primary/10 hover:bg-primary/15 text-primary font-medium px-4 py-2 rounded-lg text-sm transition-all duration-300 group-hover:translate-x-0.5"
        >
          <span>Details anzeigen</span>
          <ExternalLink className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default RecommendationCard;
