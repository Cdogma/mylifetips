
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import CategoryCard from "../components/UI/CategoryCard";
import RecommendationCard from "../components/UI/RecommendationCard";

const Lifestyle = () => {
  const subcategories = [
    {
      title: "Haushalt",
      description: "Produkte und Tipps für einen effizienten, nachhaltigen und smarten Haushalt.",
      link: "/lifestyle/haushalt",
      imageSrc: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Reisen",
      description: "Reiseziele, Packtipps und die besten Apps und Gadgets für unterwegs.",
      link: "/lifestyle/reisen",
      imageSrc: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Mobilität",
      description: "Von E-Scootern über E-Bikes bis hin zu Carsharing - moderne Fortbewegungsmittel im Test.",
      link: "/lifestyle/mobilitaet",
      imageSrc: "https://images.unsplash.com/photo-1556380319-776d65fc9b05?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Fashion",
      description: "Meine Empfehlungen für nachhaltige und qualitativ hochwertige Mode und Accessoires.",
      link: "/lifestyle/fashion",
      imageSrc: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Familie",
      description: "Produkte, Apps und Services, die das Familienleben erleichtern und bereichern.",
      link: "/lifestyle/familie",
      imageSrc: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const topRecommendations = [
    {
      title: "Dyson V12 Detect Slim",
      category: "Haushalt",
      description: "Der beste kabellose Staubsauger mit beeindruckender Saugleistung, langer Akkulaufzeit und intelligentem Lasersensor.",
      rating: 4.9,
      imageSrc: "https://images.unsplash.com/photo-1584792286853-232ff27dfa79?q=80&w=800&auto=format&fit=crop",
      link: "/lifestyle/haushalt/dyson-v12",
      isAffiliate: true,
    },
    {
      title: "Away The Carry-On",
      category: "Reisen",
      description: "Der perfekte Handgepäck-Koffer mit durchdachtem Design, integriertem Akku und lebenslanger Garantie.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1565431228183-0863df220068?q=80&w=800&auto=format&fit=crop",
      link: "/lifestyle/reisen/away-carry-on",
      isAffiliate: true,
    },
    {
      title: "VanMoof S3",
      category: "Mobilität",
      description: "Das Premium-E-Bike mit elegantem Design, intelligenten Funktionen und hervorragendem Fahrgefühl.",
      rating: 4.8,
      imageSrc: "https://images.unsplash.com/photo-1556380319-776d65fc9b05?q=80&w=800&auto=format&fit=crop",
      link: "/lifestyle/mobilitaet/vanmoof-s3",
      isAffiliate: true,
    },
  ];

  return (
    <Layout>
      <Hero
        title="Lifestyle & Alltag"
        subtitle="Entdecke meine persönlichen Erfahrungen und Empfehlungen zu Haushalt, Reisen, Mobilität, Fashion und Familie für ein besseres und einfacheres Leben."
        ctaText="Top-Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Für ein besseres Alltagsleben"
            description="In diesem Bereich teile ich meine persönlichen Erfahrungen und Empfehlungen zu Produkten und Dienstleistungen, die mir geholfen haben, meinen Alltag zu vereinfachen, zu verbessern und zu bereichern."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Unser Alltag ist geprägt von unzähligen kleinen Entscheidungen und Routinen. Die richtigen Produkte und Dienstleistungen können dabei einen großen Unterschied machen und dazu beitragen, dass wir mehr Zeit und Energie für die wirklich wichtigen Dinge im Leben haben.
            </p>
            <p>
              Von Haushaltsgeräten, die die täglichen Aufgaben erleichtern, über smarte Reiselösungen bis hin zu nachhaltiger Mobilität - ich teste verschiedene Lifestyle-Produkte und teile meine ehrlichen Erfahrungen, damit du informierte Entscheidungen treffen kannst.
            </p>
            <p>
              <strong>Wichtiger Hinweis:</strong> Bei einigen der vorgestellten Produkte handelt es sich um Affiliate-Links. Das bedeutet, dass ich eine kleine Provision erhalte, wenn du über meinen Link ein Produkt kaufst - für dich entstehen dabei keine zusätzlichen Kosten. Diese Provisionen helfen mir, diese Website zu betreiben und weiterhin qualitativ hochwertige Inhalte zu erstellen. Ich empfehle ausschließlich Produkte, die ich selbst nutze und von denen ich überzeugt bin.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Lifestyle-Kategorien"
            description="Entdecke alle Bereiche rund um Lifestyle und Alltag."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            title="Diese Lifestyle-Produkte nutze ich täglich"
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
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold mb-2">
                  Du suchst Tipps für einen besseren Alltag?
                </h3>
                <p className="text-muted-foreground">
                  Kontaktiere mich gerne, wenn du spezifische Fragen zu bestimmten Lifestyle-Produkten hast oder Empfehlungen für deinen Alltag benötigst.
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

export default Lifestyle;
