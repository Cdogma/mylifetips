
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import ArticleSection from "../components/Lifestyle/ArticleSection";
import ContactBanner from "../components/Lifestyle/ContactBanner";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import SectionHeading from "../components/UI/SectionHeading";
import RecommendationCard from "../components/UI/RecommendationCard";

const Hobbys = () => {
  const featuredPosts = [
    {
      title: "Die 10 besten Hobbys für mehr Entspannung im Alltag",
      excerpt: "Entdecke kreative und entspannende Hobbys, die dir helfen, dem Alltagsstress zu entfliehen.",
      date: "10. Mai 2024",
      category: "Lifestyle",
      imageSrc: "https://images.unsplash.com/photo-1606787364406-a3cdf06c6d0c?q=80&w=800&auto=format&fit=crop",
      slug: "beste-hobbys-entspannung-alltag",
    },
    {
      title: "Kreative Hobbys: Warum du jetzt mit Handlettering beginnen solltest",
      excerpt: "Handlettering als kreatives Hobby für Einsteiger - mit diesen Tipps gelingt der Start garantiert.",
      date: "28. April 2024",
      category: "Lifestyle",
      imageSrc: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop",
      slug: "handlettering-fuer-anfaenger",
    },
    {
      title: "Gartenarbeit als Hobby: So gelingt der grüne Daumen",
      excerpt: "Mit diesen Tipps wird dein Garten oder Balkon zur persönlichen Wohlfühloase.",
      date: "15. April 2024",
      category: "Lifestyle",
      imageSrc: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
      slug: "gartenarbeit-als-hobby",
    },
  ];

  const hobbyRecommendations = [
    {
      title: "Aquarell-Starter-Set für Einsteiger",
      category: "Kreative Hobbys",
      description: "Hochwertiges Aquarell-Set mit allem, was du für deine ersten Schritte in der Aquarellmalerei brauchst.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
      link: "/empfehlungen/aquarell-starter-set",
      isAffiliate: true,
    },
    {
      title: "Yoga-Matte Premium",
      category: "Sport & Fitness",
      description: "Rutschfeste, umweltfreundliche Yoga-Matte für optimalen Halt bei allen Yoga-Übungen.",
      rating: 4.9,
      imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
      link: "/empfehlungen/yoga-matte-premium",
      isAffiliate: true,
    },
    {
      title: "Einsteiger-Kochbuch: Einfache Rezepte",
      category: "Kochen & Backen",
      description: "Über 100 einfache Rezepte für Anfänger - perfekt für den Einstieg ins Kochen als Hobby.",
      rating: 4.5,
      imageSrc: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
      link: "/empfehlungen/einsteiger-kochbuch",
      isAffiliate: true,
    }
  ];

  const breadcrumbs = [
    { label: "Lifestyle", link: "/lifestyle" },
    { label: "Hobbys & Freizeit" }
  ];

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      
      <Hero
        title="Hobbys & Freizeit"
        subtitle="Entdecke inspirierende Hobbys und sinnvolle Freizeitgestaltung für mehr Ausgleich und Lebensfreude."
        ctaText="Hobby-Ideen entdecken"
        ctaLink="#hobby-ideen"
        imageSrc="https://images.unsplash.com/photo-1511649475669-e288648b2339?q=80&w=800&auto=format&fit=crop"
      />

      <section className="py-16 bg-muted/30" id="hobby-ideen">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Hobby-Ideen für jeden Geschmack"
            description="Von kreativen Tätigkeiten bis hin zu sportlichen Aktivitäten – hier findest du Inspiration für deine Freizeit"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Kreative Hobbys</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Malen & Zeichnen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Handlettering & Kalligrafie</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Fotografie</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>DIY & Upcycling</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Nähen & Stricken</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Aktive Hobbys</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Wandern & Trekking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Radfahren</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Yoga & Meditation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Tanzen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Gärtnern</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Lernende Hobbys</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Sprachen lernen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Programmieren</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Kochen & Backen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Musik & Instrumente</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Schreiben</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Empfohlene Produkte für deine Hobbys"
            description="Qualitativ hochwertige Produkte, die ich persönlich getestet habe"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {hobbyRecommendations.map((recommendation, index) => (
              <RecommendationCard 
                key={recommendation.title}
                {...recommendation}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <ArticleSection 
        title="Artikel zum Thema Hobbys"
        description="Tipps und Inspiration für eine erfüllte Freizeit"
        articles={featuredPosts}
        viewAllLabel="Alle Hobby-Artikel anzeigen"
      />

      <ContactBanner 
        title="Fragen zu Hobbys und Freizeitgestaltung?"
        description="Du suchst nach einem passenden Hobby oder hast Fragen zu bestimmten Freizeitaktivitäten? Ich helfe dir gerne weiter!"
        buttonText="Kontakt aufnehmen"
      />
    </Layout>
  );
};

export default Hobbys;
