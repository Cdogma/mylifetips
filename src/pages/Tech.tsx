
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import CategoryCard from "../components/UI/CategoryCard";
import RecommendationCard from "../components/UI/RecommendationCard";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Tech = () => {
  const subcategories = [
    {
      title: "Smart Home",
      description: "Vernetzte Geräte und intelligente Systeme für dein Zuhause.",
      link: "/technik/smart-home",
      imageSrc: "https://images.unsplash.com/photo-1558002038-bb0401c95e8c?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Gadgets",
      description: "Die neuesten und besten technischen Gadgets und Zubehör.",
      link: "/technik/gadgets",
      imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Software & Apps",
      description: "Nützliche Programme und Apps für mehr Produktivität.",
      link: "/technik/software",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Technik-Tipps",
      description: "Praktische Tipps und Tricks rund um moderne Technologie.",
      link: "/technik/tipps",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const topRecommendations = [
    {
      title: "MacBook Air M2",
      category: "Laptops",
      description: "Das MacBook Air mit M2-Chip bietet beeindruckende Performance, lange Akkulaufzeit und ein schlankes Design - ideal für Kreative und mobile Arbeiter.",
      rating: 4.8,
      imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop",
      link: "/technik/laptops/macbook-air-m2",
      isAffiliate: true,
    },
    {
      title: "Sony WH-1000XM5",
      category: "Kopfhörer",
      description: "Die Sony WH-1000XM5 überzeugen mit herausragender Geräuschunterdrückung, exzellentem Klang und verbessertem Tragekomfort für lange Sessions.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop",
      link: "/technik/kopfhoerer/sony-wh-1000xm5",
      isAffiliate: true,
    },
    {
      title: "Logitech MX Master 3S",
      category: "Computer-Zubehör",
      description: "Die Logitech MX Master 3S ist eine hochpräzise, ergonomische Maus mit leisen Klicks, Magnetscroll-Rad und Unterstützung für mehrere Geräte.",
      rating: 4.6,
      imageSrc: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop",
      link: "/technik/zubehoer/logitech-mx-master-3s",
      isAffiliate: true,
    },
  ];

  return (
    <Layout>
      <Hero
        title="Technik"
        subtitle="Entdecke meine Empfehlungen rund um Smart Home, Gadgets, Software und mehr für ein modernes digitales Leben."
        ctaText="Top-Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Meine Tech-Empfehlungen"
            description="Als Tech-Enthusiast teste ich regelmäßig die neuesten Geräte und Software-Tools. Hier teile ich meine ehrlichen Bewertungen und Empfehlungen."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              In der schnelllebigen Welt der Technologie ist es nicht leicht, den Überblick zu behalten. Welches Smartphone bietet das beste Preis-Leistungs-Verhältnis? Welche Smart-Home-Geräte sind wirklich nützlich? Und welche Software-Tools sparen tatsächlich Zeit?
            </p>
            <p>
              Auf dieser Seite teile ich meine Erfahrungen mit verschiedenen technischen Geräten und digitalen Tools. Ich teste diese Produkte ausführlich im Alltag und gebe dir meine ehrliche Meinung dazu. Mein Ziel ist es, dir zu helfen, informierte Entscheidungen zu treffen und die richtigen Produkte für deine Bedürfnisse zu finden.
            </p>
            <p>
              <strong>Hinweis:</strong> Bei einigen der vorgestellten Produkte handelt es sich um Affiliate-Links, erkennbar am *-Symbol. Das bedeutet, dass ich eine kleine Provision erhalte, wenn du über meinen Link ein Produkt kaufst - für dich entstehen keine zusätzlichen Kosten.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Tech-Kategorien"
            description="Entdecke alle Bereiche rund um Technik und Digitales."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subcategories.map((category, index) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                imageSrc={category.imageSrc}
                link={category.link}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="empfehlungen" className="section-padding">
        <div className="container">
          <SectionHeading
            subtitle="Meine Top-Empfehlungen"
            title="Diese Tech-Produkte nutze ich täglich"
            description="Basierend auf meinen persönlichen Erfahrungen und ausführlichen Tests kann ich diese Produkte uneingeschränkt empfehlen."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topRecommendations.map((recommendation, index) => (
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
            <Link to="/technik/gadgets">
              <Button variant="outline" className="group">
                Gadget Empfehlungen anzeigen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold mb-2">
                  Du brauchst Hilfe bei der Auswahl von Tech-Produkten?
                </h3>
                <p className="text-muted-foreground">
                  Kontaktiere mich gerne, wenn du spezifische Fragen zu bestimmten Produkten hast oder eine individuelle Empfehlung benötigst.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <a
                  href="/kontakt"
                  className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tech;
