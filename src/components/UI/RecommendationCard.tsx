
import { Star } from "lucide-react";
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
      className="bg-card rounded-lg overflow-hidden shadow-sm border border-border"
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
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Kein Bild verfügbar</span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-medium px-2 py-1 rounded">
            {category}
          </span>
        </div>
        {isAffiliate && (
          <div className="absolute top-3 right-3">
            <span className="inline-block bg-muted/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded">
              Affiliate
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">
            {rating.toFixed(1)}/5
          </span>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{description}</p>
        <Link
          to={link}
          className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded text-sm font-medium hover:bg-secondary/80 transition-colors"
        >
          Details anzeigen
        </Link>
      </div>
    </div>
  );
};

export default RecommendationCard;
