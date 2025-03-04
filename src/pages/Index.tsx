
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import CategoryCard from "../components/UI/CategoryCard";
import RecommendationCard from "../components/UI/RecommendationCard";
import BlogPostCard from "../components/UI/BlogPostCard";
import SectionHeading from "../components/UI/SectionHeading";
import LandingHero from "../components/UI/LandingHero";
import { ArrowRight, BookOpen, Heart, ScrollText, ShieldCheck } from "lucide-react";

const Index = () => {
  const categories = [
    {
      title: "Finanzen & Investitionen",
      description: "Bankkonten, Kreditkarten, Broker, ETFs und mehr für deine finanzielle Freiheit.",
      link: "/finanzen",
      imageSrc: "/lovable-uploads/32cc1446-9ced-4253-8ce3-7716b72254a9.png", // Aktualisiert auf das hellere Bild mit Pflanze und Münzen
    },
    {
      title: "Business & Unternehmertum",
      description: "Gründungs-Tipps, Buchhaltung, Konten und Projektmanagement-Tools für dein Business.",
      link: "/business",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Technik & Gadgets",
      description: "Smartphones, Smart Home, Wearables, Computer und Software für deinen digitalen Alltag.",
      link: "/technik",
      imageSrc: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Lifestyle & Alltag",
      description: "Haushalt, Reisen, Mobilität und mehr für ein besseres und einfacheres Leben.",
      link: "/lifestyle",
      imageSrc: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=800&auto=format&fit=crop",
    },
  ];

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

  const blogPosts = [
    {
      title: "Die 5 besten ETFs für Einsteiger in 2023",
      excerpt: "Ein umfassender Leitfaden zu den besten ETFs für Anfänger, die gerade erst mit dem Investieren beginnen möchten.",
      date: "15. Mai 2023",
      category: "Finanzen",
      imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
      slug: "beste-etfs-fuer-einsteiger-2023",
    },
    {
      title: "Smart Home für Anfänger: So startest du richtig",
      excerpt: "Ein Einsteigerguide für alle, die ihr Zuhause mit Smart-Home-Technologie ausstatten möchten.",
      date: "3. Juni 2023",
      category: "Technik",
      imageSrc: "https://images.unsplash.com/photo-1558002038-bb0401c95e8c?q=80&w=800&auto=format&fit=crop",
      slug: "smart-home-fuer-anfaenger",
    },
    {
      title: "Projektmanagement-Tools im Vergleich: Asana, Trello und Notion",
      excerpt: "Eine detaillierte Analyse der beliebtesten Projektmanagement-Tools mit Vor- und Nachteilen.",
      date: "21. Juni 2023",
      category: "Business",
      imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
      slug: "projektmanagement-tools-vergleich",
    },
  ];

  return (
    <Layout>
      <LandingHero
        title="Dein Leben. Bessere Entscheidungen."
        subtitle="Willkommen bei MyLifeTips – deinem Portal für ehrliche Produkt- und Serviceempfehlungen basierend auf persönlichen Erfahrungen."
        ctaText="Empfehlungen entdecken"
        ctaLink="/empfehlungen"
        secondaryCtaText="Mehr über mich"
        secondaryCtaLink="/ueber-mich"
        imageSrc="/lovable-uploads/e20d1a22-a3ff-4bda-9092-5dc8d352f9e9.png"
      />

      {/* Features-Bereich mit verbessertem Layout und Animation */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-2 animate-fade-in">
              Was macht MyLifeTips besonders?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Ehrliche Empfehlungen für dein Leben
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Bei uns findest du ausschließlich Empfehlungen, die wir selbst getestet und für gut befunden haben. Kein Marketing-Sprech, sondern ehrliche Erfahrungen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Persönlich getestet</h3>
              <p className="text-muted-foreground">Wir empfehlen nur Produkte und Services, die wir selbst nutzen und lieben.</p>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <ShieldCheck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Unabhängige Bewertungen</h3>
              <p className="text-muted-foreground">Unsere Bewertungen sind ehrlich und basieren auf realen Erfahrungen.</p>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <BookOpen className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tiefgehende Analysen</h3>
              <p className="text-muted-foreground">Wir testen gründlich und berichten detailliert über Vor- und Nachteile.</p>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <ScrollText className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Aktuelle Inhalte</h3>
              <p className="text-muted-foreground">Wir aktualisieren unsere Empfehlungen regelmäßig, um immer auf dem neuesten Stand zu sein.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Themenbereiche-Sektion mit verbessertem visuellen Effekt */}
      <section className="section-padding bg-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative z-10">
          <SectionHeading
            title="Entdecke meine Themenbereiche"
            description="Von Finanzen über Technik bis hin zu Lifestyle – hier findest du meine ehrlichen Erfahrungen und Empfehlungen in verschiedenen Lebensbereichen."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
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

      {/* Empfehlungen mit verbessertem visuellen Design */}
      <section className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl"></div>
        
        <div className="container relative z-10">
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

          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
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

      {/* Rest des Codes bleibt gleich */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            subtitle="Blog & News"
            title="Aktuelle Artikel"
            description="Entdecke meine neuesten Artikel zu Finanzen, Business, Technik und Lifestyle."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                imageSrc={post.imageSrc}
                slug={post.slug}
                delay={index}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-md hover:bg-secondary/80 transition-colors group"
            >
              Zum Blog
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter-Bereich mit verbesserten Effekten */}
      <section className="bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/5 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-2 animate-fade-in">
              Newsletter
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Bleibe auf dem Laufenden
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Abonniere meinen Newsletter und erhalte regelmäßig meine neuesten Tipps,
              Empfehlungen und exklusive Angebote direkt in dein Postfach.
            </p>
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="flex-1 px-4 py-3 rounded-l-md sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-r-md sm:rounded-l-none hover:bg-primary/90 transition-colors">
                Abonnieren
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Ich respektiere deine Privatsphäre. Du kannst dich jederzeit abmelden.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
