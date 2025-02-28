
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import CategoryCard from "../components/UI/CategoryCard";
import RecommendationCard from "../components/UI/RecommendationCard";

const Finance = () => {
  const subcategories = [
    {
      title: "Bankkonten",
      description: "Girokonto, Tagesgeld, Festgeld und mehr - hier findest du meine Erfahrungen und Empfehlungen.",
      link: "/finanzen/bankkonten",
      imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Kreditkarten",
      description: "Von Standard bis Premium - entdecke die besten Kreditkarten für deine Bedürfnisse.",
      link: "/finanzen/kreditkarten",
      imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Broker",
      description: "Die besten Plattformen für Aktien, ETFs und andere Investments mit fairen Gebühren.",
      link: "/finanzen/broker",
      imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "ETFs",
      description: "Welche ETFs ich selbst kaufe und für langfristigen Vermögensaufbau empfehle.",
      link: "/finanzen/etfs",
      imageSrc: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Versicherungen",
      description: "Die wichtigsten Versicherungen im Überblick - was du wirklich brauchst und was nicht.",
      link: "/finanzen/versicherungen",
      imageSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const topRecommendations = [
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
    <Layout>
      <Hero
        title="Finanzen & Investitionen"
        subtitle="Entdecke meine persönlichen Erfahrungen und Empfehlungen zu Bankkonten, Kreditkarten, Brokern, ETFs und Versicherungen für deine finanzielle Freiheit."
        ctaText="Top-Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Finanzielle Freiheit beginnt hier"
            description="Meine Leidenschaft für Finanzen begann vor über 10 Jahren. Seitdem teste ich kontinuierlich verschiedene Finanzprodukte und teile meine ehrlichen Erfahrungen, um dir zu helfen, die besten Entscheidungen für deine Finanzen zu treffen."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              In diesem Bereich teile ich meine persönlichen Erfahrungen mit verschiedenen Finanzprodukten und -dienstleistungen, die ich selbst über die Jahre getestet habe. Mein Ziel ist es, dir einen transparenten Überblick zu verschaffen und dir zu helfen, informierte Entscheidungen zu treffen.
            </p>
            <p>
              Warum ist das wichtig? Weil die richtige Wahl bei Finanzprodukten einen erheblichen Unterschied in deinem Leben machen kann. Ob es um die Auswahl des richtigen Girokontos, der passenden Kreditkarte oder der optimalen Anlagestrategie geht - ich teile meine Erfahrungen, damit du von meinen Tests profitieren kannst.
            </p>
            <p>
              <strong>Wichtiger Hinweis:</strong> Bei einigen der vorgestellten Produkte handelt es sich um Affiliate-Links. Das bedeutet, dass ich eine kleine Provision erhalte, wenn du über meinen Link ein Produkt abschließt - für dich entstehen dabei keine zusätzlichen Kosten. Diese Provisionen helfen mir, diese Website zu betreiben und weiterhin qualitativ hochwertige Inhalte zu erstellen. Ich empfehle ausschließlich Produkte, die ich selbst nutze und von denen ich überzeugt bin.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Finanz-Kategorien"
            description="Entdecke alle Bereiche rund um Finanzen und Investitionen."
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
            title="Diese Finanzprodukte nutze ich selbst"
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
                  Hast du Fragen zu Finanzthemen?
                </h3>
                <p className="text-muted-foreground">
                  Kontaktiere mich gerne, wenn du spezifische Fragen zu bestimmten Finanzprodukten hast oder Hilfe bei deinen Finanzentscheidungen benötigst.
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

export default Finance;
