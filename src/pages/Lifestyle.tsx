
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import LifestyleOverview from "../components/Lifestyle/LifestyleOverview";
import LifestyleTips from "../components/Lifestyle/LifestyleTips";
import ArticleSection from "../components/Lifestyle/ArticleSection";
import ContactBanner from "../components/Lifestyle/ContactBanner";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import SectionHeading from "../components/UI/SectionHeading";
import CategoryCard from "../components/UI/CategoryCard";

const Lifestyle = () => {
  const featuredPosts = [
    {
      title: "Minimalismus im Alltag: Wie weniger mehr sein kann",
      excerpt: "Entdecke, wie ein minimalistischer Lebensstil zu mehr Zufriedenheit, weniger Stress und mehr Freiheit führen kann.",
      date: "12. Mai 2024",
      category: "Lifestyle",
      imageSrc: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop",
      slug: "minimalismus-im-alltag",
    },
    {
      title: "Work-Life-Balance: 7 Strategien für mehr Ausgeglichenheit",
      excerpt: "Praktische Tipps, wie du Beruf und Privatleben besser in Einklang bringen und mehr Zeit für die wichtigen Dinge im Leben finden kannst.",
      date: "3. Mai 2024",
      category: "Lifestyle",
      imageSrc: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=800&auto=format&fit=crop",
      slug: "work-life-balance-strategien",
    },
    {
      title: "Nachhaltig leben: Kleine Veränderungen mit großer Wirkung",
      excerpt: "So kannst du mit einfachen Veränderungen im Alltag nachhaltiger leben und die Umwelt schonen.",
      date: "20. April 2024",
      category: "Lifestyle",
      imageSrc: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
      slug: "nachhaltig-leben-kleine-veraenderungen",
    },
  ];

  const subcategories = [
    {
      title: "Gesundheit & Wellness",
      description: "Tipps für ein gesundes und ausgewogenes Leben, Fitness und mentales Wohlbefinden.",
      link: "/lifestyle/gesundheit",
      imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Hobbys & Freizeit",
      description: "Inspirationen für sinnvolle Freizeitgestaltung und persönliche Interessen.",
      link: "/lifestyle/hobbys",
      imageSrc: "https://images.unsplash.com/photo-1511649475669-e288648b2339?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Reisen & Abenteuer",
      description: "Reiseziele, Tipps und Erfahrungsberichte für unvergessliche Erlebnisse.",
      link: "/lifestyle/reisen",
      imageSrc: "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Mode & Stil",
      description: "Zeitlose Stilempfehlungen und nachhaltige Mode für jeden Anlass.",
      link: "/lifestyle/mode",
      imageSrc: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const breadcrumbs = [
    { label: "Lifestyle" }
  ];

  const lifestyleRecommendations = [
    {
      title: "Mind Journal - Das Achtsamkeits-Tagebuch",
      category: "Wellness",
      description: "Dieses strukturierte Tagebuch unterstützt dich dabei, mehr Achtsamkeit und Dankbarkeit in deinen Alltag zu integrieren.",
      rating: 4.8,
      imageSrc: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
      link: "/empfehlungen/achtsamkeits-tagebuch",
      isAffiliate: true,
    },
    {
      title: "Minimalistischer Wochenplaner",
      category: "Organisation",
      description: "Dieser schlichte, aber effektive Wochenplaner hilft dir, den Überblick zu behalten ohne dich zu überfordern.",
      rating: 4.6,
      imageSrc: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=800&auto=format&fit=crop",
      link: "/empfehlungen/minimalistischer-planer",
      isAffiliate: true,
    },
    {
      title: "Nachhaltiges Starter-Set",
      category: "Nachhaltigkeit",
      description: "Das perfekte Set für alle, die ihren Alltag umweltfreundlicher gestalten möchten, mit wiederverwendbaren Basics.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1610024062303-e355e94e6483?q=80&w=800&auto=format&fit=crop",
      link: "/empfehlungen/nachhaltiges-set",
      isAffiliate: true,
    }
  ];

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      
      <Hero
        title="Lifestyle"
        subtitle="Inspiration und praktische Tipps für ein bewussteres, ausgewogeneres und erfüllteres Leben."
        ctaText="Entdecke meine Tipps"
        ctaLink="#lifestyle-tipps"
        imageSrc="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
      />

      <LifestyleOverview />
      
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Lifestyle-Kategorien"
            description="Entdecke alle Bereiche rund um moderne Lebensgestaltung"
            align="center"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
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
      
      <LifestyleTips />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Empfohlene Produkte für deinen Lifestyle"
            description="Qualitativ hochwertige Produkte, die ich persönlich getestet habe"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {lifestyleRecommendations.map((recommendation, index) => (
              <div 
                key={recommendation.title}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
                style={{
                  animation: "fadeIn 0.5s ease-out forwards",
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={recommendation.imageSrc} 
                    alt={recommendation.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                      {recommendation.category}
                    </span>
                    <div className="flex items-center">
                      <span className="text-amber-500 mr-1">★</span>
                      <span className="text-sm">{recommendation.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{recommendation.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{recommendation.description}</p>
                  <a 
                    href={recommendation.link} 
                    className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Mehr erfahren
                    {recommendation.isAffiliate && <span className="ml-1 text-xs">*</span>}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ArticleSection 
        title="Aktuelle Lifestyle-Artikel"
        description="Inspirierende Beiträge und praktische Tipps für eine bessere Lebensqualität"
        articles={featuredPosts}
        viewAllLabel="Alle Lifestyle-Artikel anzeigen"
      />
      
      <ContactBanner />
    </Layout>
  );
};

export default Lifestyle;
