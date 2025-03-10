
import { Recommendation } from "@/types/recommendations";
import RecommendationCard from "../UI/RecommendationCard";
import NoResultsFound from "./NoResultsFound";

interface RecommendationsListProps {
  recommendations: Recommendation[];
  handleClearFilters: () => void;
}

const RecommendationsList = ({ 
  recommendations,
  handleClearFilters
}: RecommendationsListProps) => {
  if (recommendations.length === 0) {
    return <NoResultsFound handleClearFilters={handleClearFilters} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recommendations.map((recommendation, index) => (
        <RecommendationCard
          key={recommendation.title}
          title={recommendation.title}
          category={recommendation.subcategory}
          description={recommendation.description}
          rating={recommendation.rating}
          imageSrc={recommendation.imageSrc}
          link={recommendation.link}
          isAffiliate={recommendation.isAffiliate}
          delay={index}
          price={recommendation.price}
          pros={recommendation.pros}
          cons={recommendation.cons}
        />
      ))}
    </div>
  );
};

export default RecommendationsList;
