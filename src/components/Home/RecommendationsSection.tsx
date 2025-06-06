
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../UI/SectionHeading";
import RecommendationCard from "../UI/RecommendationCard";
import AnimatedSection from "../UI/AnimatedSection";
import MicroInteractions from "../UI/MicroInteractions";

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
        <AnimatedSection direction="up" delay={0.1}>
          <SectionHeading
            subtitle="Das Beste für dich"
            title="Meine aktuellen Empfehlungen"
            description="Diese Produkte und Services nutze ich selbst täglich und kann sie daher aus voller Überzeugung empfehlen."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((recommendation, index) => (
            <AnimatedSection key={recommendation.title} direction="up" delay={0.2 + index * 0.1}>
              <MicroInteractions type="hover">
                <RecommendationCard
                  title={recommendation.title}
                  category={recommendation.category}
                  description={recommendation.description}
                  rating={recommendation.rating}
                  imageSrc={recommendation.imageSrc}
                  link={recommendation.link}
                  isAffiliate={recommendation.isAffiliate}
                />
              </MicroInteractions>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="up" delay={0.5}>
          <div className="mt-12 text-center">
            <MicroInteractions type="pulse">
              <Link
                to="/empfehlungen"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors group"
              >
                Alle Empfehlungen ansehen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </MicroInteractions>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RecommendationsSection;
