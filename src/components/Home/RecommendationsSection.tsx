
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../UI/SectionHeading";
import RecommendationCard from "../UI/RecommendationCard";

const RecommendationsSection = () => {
  const recommendations = [
    {
      title: "C24 Smart Girokonto",
      category: "Bankkonten",
      description: "Das beste kostenlose Girokonto mit allen wichtigen Funktionen und einer tollen App für deinen Alltag.",
      rating: 4.8,
      imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
      link: "/finanzen/bankkonten/c24",
      isAffiliate: true,
    },
    {
      title: "American Express Platinum",
      category: "Kreditkarten",
      description: "Die Premium-Kreditkarte mit exzellenten Versicherungsleistungen und attraktiven Bonusprogrammen.",
      rating: 4.5,
      imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
      link: "/finanzen/kreditkarten/amex-platinum",
      isAffiliate: true,
    },
    {
      title: "Scalable Capital",
      category: "Broker",
      description: "Der nutzerfreundliche Broker mit 0€ Ordergebühren und großer ETF-Auswahl für deine Investments.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
      link: "/finanzen/broker/scalable-capital",
      isAffiliate: true,
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        <SectionHeading
          subtitle="Das Beste für dich"
          title="Meine aktuellen Empfehlungen"
          description="Diese Produkte und Services nutze ich selbst täglich und kann sie daher aus voller Überzeugung empfehlen."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((recommendation, index) => (
            <RecommendationCard
              key={recommendation.title}
              title={recommendation.title}
              category={recommendation.category}
              description={recommendation.description}
              rating={recommendation.rating}
              imageSrc={recommendation.imageSrc}
              link={recommendation.link}
              isAffiliate={recommendation.isAffiliate}
              delay={index}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/empfehlungen"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors group"
          >
            Alle Empfehlungen ansehen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
