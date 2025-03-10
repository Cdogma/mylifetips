import { Link } from "react-router-dom";
import SectionHeading from "../UI/SectionHeading";
import { Recommendation } from "@/types/recommendations";
import RecommendationCard from "../UI/RecommendationCard";
import Disclaimer from "../UI/Disclaimer";

interface RecommendationsSectionProps {
  title: string;
  description: string;
  recommendations: Recommendation[];
  viewAllLink?: string;
  viewAllLabel?: string;
}

const RecommendationsSection = ({
  title,
  description,
  recommendations,
  viewAllLink,
  viewAllLabel,
}: RecommendationsSectionProps) => {
  const hasAffiliateLinks = recommendations.some((rec) => rec.isAffiliate);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={title}
          description={description}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {recommendations.map((recommendation, index) => (
            <RecommendationCard
              key={recommendation.title}
              title={recommendation.title}
              category={recommendation.subcategory || recommendation.category}
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

        {viewAllLink && viewAllLabel && (
          <div className="mt-12 text-center">
            <Link to={viewAllLink} className="inline-flex items-center bg-primary/10 hover:bg-primary/15 text-primary font-medium px-6 py-3 rounded-lg transition-all duration-300">
              {viewAllLabel}
            </Link>
          </div>
        )}
      </div>

      {hasAffiliateLinks && (
        <div className="mt-12">
          <Disclaimer 
            variant="affiliate"
            text="Mit * gekennzeichnete Links sind Affiliate-Links. Wenn du über diese Links ein Produkt kaufst oder einen Dienst abonnierst, erhalte ich eine kleine Provision. Für dich entstehen dabei keine zusätzlichen Kosten. Diese Provisionen helfen mir, diese Website zu betreiben und weiterhin kostenlose Inhalte zu erstellen."
          />
        </div>
      )}
    </section>
  );
};

export default RecommendationsSection;
