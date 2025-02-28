
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import CategoryCard from "../components/UI/CategoryCard";
import RecommendationCard from "../components/UI/RecommendationCard";

const Business = () => {
  const subcategories = [
    {
      title: "Gründungs-Tipps",
      description: "Alles was du für einen erfolgreichen Start in die Selbstständigkeit wissen musst.",
      link: "/business/gruendung",
      imageSrc: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Buchhaltung",
      description: "Tools und Services für eine einfache und effiziente Buchhaltung im Unternehmen.",
      link: "/business/buchhaltung",
      imageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Geschäftskonten",
      description: "Die besten Konten für Selbstständige und Unternehmer mit fairen Konditionen.",
      link: "/business/konten",
      imageSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Projektmanagement",
      description: "Tools und Methoden für effizientes Projektmanagement in deinem Business.",
      link: "/business/projektmanagement",
      imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const topRecommendations = [
    {
      title: "Lexoffice",
      category: "Buchhaltung",
      description: "Die intuitive Buchhaltungssoftware für Selbstständige und kleine Unternehmen - einfach, effizient und GoBD-konform.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
      link: "/business/buchhaltung/lexoffice",
      isAffiliate: true,
    },
    {
      title: "N26 Business",
      category: "Geschäftskonten",
      description: "Das digitale Geschäftskonto ohne monatliche Grundgebühr mit 0,1% Cashback auf alle Ausgaben.",
      rating: 4.5,
      imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
      link: "/business/konten/n26-business",
      isAffiliate: true,
    },
    {
      title: "Notion",
      category: "Projektmanagement",
      description: "Das All-in-One-Workspace-Tool für Notizen, Aufgaben, Wikis und Datenbanken - perfekt für Teams und Einzelpersonen.",
      rating: 4.9,
      imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
      link: "/business/projektmanagement/notion",
      isAffiliate: true,
    },
  ];

  return (
    <Layout>
      <Hero
        title="Business & Unternehmertum"
        subtitle="Entdecke meine Tipps und Empfehlungen für Gründung, Buchhaltung, Geschäftskonten und Projektmanagement-Tools für dein erfolgreiches Business."
        ctaText="Top-Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Für Selbstständige und Unternehmer"
            description="Als Unternehmer weiß ich, wie wichtig die richtigen Tools und Dienste sind, um ein Business effizient zu führen. Hier teile ich meine Erfahrungen und Empfehlungen aus über 8 Jahren Selbstständigkeit."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Der Weg in die Selbstständigkeit ist aufregend, aber auch voller Herausforderungen. Welche Rechtsform ist die richtige? Welche Tools benötigst du für deine Buchhaltung? Wie verwaltest du deine Projekte effizient? In diesem Bereich teile ich meine persönlichen Erfahrungen und Erkenntnisse, die ich auf meinem eigenen Weg als Unternehmer gesammelt habe.
            </p>
            <p>
              Mein Ziel ist es, dir wertvolle Einblicke zu geben und dir dabei zu helfen, informierte Entscheidungen für dein Business zu treffen. Ich stelle dir die Tools und Dienste vor, die ich selbst nutze und die mir geholfen haben, mein Unternehmen aufzubauen und zu skalieren.
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
            title="Business-Kategorien"
            description="Entdecke alle Bereiche rund um Business und Unternehmertum."
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
            title="Diese Business-Tools nutze ich täglich"
            description="Basierend auf meinen persönlichen Erfahrungen und ausführlichen Tests kann ich diese Produkte und Services uneingeschränkt empfehlen."
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
                  Du möchtest dich selbstständig machen?
                </h3>
                <p className="text-muted-foreground">
                  Kontaktiere mich gerne, wenn du spezifische Fragen zu Gründungsthemen hast oder Hilfe bei der Auswahl der richtigen Business-Tools benötigst.
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

export default Business;
