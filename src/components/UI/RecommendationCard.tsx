
import { Star, ExternalLink, ThumbsUp, ThumbsDown, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface RecommendationCardProps {
  title: string;
  category: string;
  description: string;
  rating: number;
  imageSrc?: string;
  link: string;
  isAffiliate?: boolean;
  delay?: number;
  price?: string;
  pros?: string[];
  cons?: string[];
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
  price,
  pros,
  cons,
}: RecommendationCardProps) => {
  const [expanded, setExpanded] = useState(false);
  
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
        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <span className="inline-block bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
            {category}{isAffiliate && "*"}
          </span>
          {price && (
            <span className="inline-block bg-black/60 text-white backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
              {price}
            </span>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-primary/80 bg-clip-text text-transparent transition-colors duration-300">
          {title}{isAffiliate && "*"}
        </h3>
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating) 
                  ? "text-yellow-500 fill-yellow-500" 
                  : i < rating 
                    ? "text-yellow-500 fill-yellow-500 opacity-50" 
                    : "text-muted-foreground/30"
              } transition-colors duration-300`}
            />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">
            {rating.toFixed(1)}/5
          </span>
        </div>
        <p className={`text-muted-foreground text-sm ${expanded ? "" : "line-clamp-3"} mb-5`}>{description}</p>
        
        {(pros || cons) && (
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="text-sm text-primary flex items-center gap-1 hover:underline mb-4"
          >
            <PlusCircle className="h-3.5 w-3.5" />
            {expanded ? "Weniger anzeigen" : "Mehr Details"}
          </button>
        )}
        
        {expanded && (pros || cons) && (
          <div className="space-y-3 mb-5 bg-muted/30 p-3 rounded-lg">
            {pros && pros.length > 0 && (
              <div>
                <h4 className="text-sm font-medium flex items-center gap-1.5 mb-1.5 text-green-600">
                  <ThumbsUp className="h-3.5 w-3.5" />
                  Vorteile
                </h4>
                <ul className="space-y-1">
                  {pros.map((pro, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-1.5">
                      <span className="text-green-500 mt-0.5">•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {cons && cons.length > 0 && (
              <div>
                <h4 className="text-sm font-medium flex items-center gap-1.5 mb-1.5 text-red-600">
                  <ThumbsDown className="h-3.5 w-3.5" />
                  Nachteile
                </h4>
                <ul className="space-y-1">
                  {cons.map((con, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-1.5">
                      <span className="text-red-500 mt-0.5">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
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
