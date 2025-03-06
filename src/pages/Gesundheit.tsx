
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import BlogPostCard from "../components/UI/BlogPostCard";
import { Link } from "react-router-dom";
import ContactBanner from "../components/Lifestyle/ContactBanner";

const Gesundheit = () => {
  const featuredPosts = [
    {
      title: "Mentale Gesundheit: Wie du dein Wohlbefinden stärkst",
      excerpt: "Praktische Übungen und Routinen für den Alltag, die deine mentale Gesundheit verbessern können.",
      date: "15. Mai 2024",
      category: "Gesundheit",
      imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
      slug: "mentale-gesundheit-staerken",
    },
    {
      title: "Die besten Entspannungstechniken für den stressigen Alltag",
      excerpt: "Einfache Methoden, um Stress abzubauen und mehr Gelassenheit in deinen Alltag zu bringen.",
      date: "2. Mai 2024",
      category: "Gesundheit",
      imageSrc: "https://images.unsplash.com/photo-1506126279646-a697353d3166?q=80&w=800&auto=format&fit=crop",
      slug: "entspannungstechniken-stressiger-alltag",
    },
    {
      title: "Ausgewogene Ernährung ohne Verzicht: So geht's",
      excerpt: "Wie du dich gesund ernähren kannst, ohne auf Genuss zu verzichten - mit praktischen Tipps und leckeren Rezeptideen.",
      date: "20. April 2024",
      category: "Gesundheit",
      imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
      slug: "ausgewogene-ernaehrung-ohne-verzicht",
    },
  ];

  return (
    <Layout>
      <Hero
        title="Gesundheit & Wellness"
        subtitle="Tipps für ein gesundes und ausgewogenes Leben, Fitness und mentales Wohlbefinden."
        ctaText="Zu den Tipps"
        ctaLink="#gesundheits-tipps"
        imageSrc="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Ganzheitliche Gesundheit"
            description="Gesundheit ist mehr als nur die Abwesenheit von Krankheit. Es geht um körperliches, mentales und emotionales Wohlbefinden."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              In unserem hektischen Alltag vergessen wir oft, auf unsere Gesundheit zu achten. Dabei ist sie unser wertvollstes Gut. Auf dieser Seite findest du praktische Tipps und Informationen zu verschiedenen Gesundheitsthemen - von Ernährung und Bewegung bis hin zu Stressmanagement und mentaler Gesundheit.
            </p>
            <p>
              Mein Ziel ist es, dir Wege zu zeigen, wie du mit kleinen Veränderungen große Wirkung erzielen kannst. Es geht nicht um perfekte Fitness oder strenge Diäten, sondern um nachhaltige Gewohnheiten, die zu deinem Lebensstil passen und dir langfristig guttun.
            </p>
          </div>
        </div>
      </section>

      <section id="gesundheits-tipps" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Gesundheitsbereiche"
            description="Entdecke verschiedene Aspekte eines gesunden Lebensstils."
            align="center"
          />

          <Tabs defaultValue="ernaehrung" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="ernaehrung">Ernährung</TabsTrigger>
              <TabsTrigger value="bewegung">Bewegung</TabsTrigger>
              <TabsTrigger value="mental">Mentale Gesundheit</TabsTrigger>
              <TabsTrigger value="schlaf">Schlaf & Erholung</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ernaehrung">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Bewusste Ernährung</h3>
                  <div className="space-y-4">
                    <p>Eine ausgewogene Ernährung ist die Basis für Gesundheit und Wohlbefinden. Hier sind einige Grundprinzipien:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Vielseitigkeit</strong> - Je bunter dein Teller, desto mehr verschiedene Nährstoffe nimmst du auf.</li>
                      <li><strong>Unverarbeitete Lebensmittel</strong> - Frische, natürliche Lebensmittel enthalten mehr Nährstoffe und weniger unerwünschte Zusatzstoffe.</li>
                      <li><strong>Pflanzenbetont</strong> - Gemüse, Obst, Hülsenfrüchte, Nüsse und Vollkornprodukte sollten die Basis deiner Ernährung bilden.</li>
                      <li><strong>Achtsames Essen</strong> - Nimm dir Zeit zum Essen, kaue bewusst und genieße jeden Bissen.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="bewegung">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Regelmäßige Bewegung</h3>
                  <div className="space-y-4">
                    <p>Bewegung muss nicht kompliziert sein. Das Wichtigste ist, dass du regelmäßig aktiv bist und Spaß daran hast:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Alltagsbewegung</strong> - Treppe statt Aufzug, zu Fuß oder mit dem Rad zur Arbeit, kurze Gehpausen im Büro.</li>
                      <li><strong>Krafttraining</strong> - 2-3 Mal pro Woche für starke Muskeln und Knochen, mehr Energie und einen effizienteren Stoffwechsel.</li>
                      <li><strong>Ausdauertraining</strong> - Walken, Joggen, Schwimmen oder Radfahren für ein gesundes Herz-Kreislauf-System.</li>
                      <li><strong>Beweglichkeit</strong> - Yoga, Pilates oder einfache Dehnübungen für mehr Beweglichkeit und weniger Verspannungen.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="mental">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Mentale Gesundheit</h3>
                  <div className="space-y-4">
                    <p>Deine mentale Gesundheit ist genauso wichtig wie deine körperliche. Diese Praktiken können dein psychisches Wohlbefinden stärken:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Achtsamkeit</strong> - Regelmäßige Meditation oder bewusstes Atmen kann Stress reduzieren und die emotionale Belastbarkeit verbessern.</li>
                      <li><strong>Soziale Verbindungen</strong> - Pflege deine Beziehungen zu Familie und Freunden. Soziale Kontakte sind ein wichtiger Schutzfaktor für die psychische Gesundheit.</li>
                      <li><strong>Grenzen setzen</strong> - Lerne, "Nein" zu sagen und deine Bedürfnisse zu kommunizieren.</li>
                      <li><strong>Hilfe suchen</strong> - Bei anhaltenden psychischen Belastungen ist es wichtig, professionelle Hilfe in Anspruch zu nehmen.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="schlaf">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Erholsamer Schlaf</h3>
                  <div className="space-y-4">
                    <p>Guter Schlaf ist entscheidend für Regeneration und Gesundheit. Diese Tipps können deine Schlafqualität verbessern:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Regelmäßiger Rhythmus</strong> - Gehe jeden Tag zur gleichen Zeit ins Bett und stehe zur gleichen Zeit auf, auch am Wochenende.</li>
                      <li><strong>Schlaffördernde Umgebung</strong> - Dunkel, kühl und ruhig sollte dein Schlafzimmer sein. Investiere in eine gute Matratze und bequeme Kissen.</li>
                      <li><strong>Abendroutine</strong> - Entwickle Rituale, die deinen Körper auf den Schlaf vorbereiten, wie ein warmes Bad, Lesen oder Entspannungsübungen.</li>
                      <li><strong>Digitale Auszeit</strong> - Vermeide Bildschirme (Handy, Tablet, TV) mindestens eine Stunde vor dem Schlafengehen.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Gesundheits-Artikel"
            description="Aktuelle Beiträge zum Thema Gesundheit & Wellness"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
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
            <Link to="/blog" className="inline-flex items-center bg-primary/10 hover:bg-primary/15 text-primary font-medium px-6 py-3 rounded-lg transition-all duration-300">
              Alle Gesundheitsartikel anzeigen
            </Link>
          </div>
        </div>
      </section>

      <ContactBanner 
        title="Fragen zu Gesundheitsthemen?"
        description="Ich freue mich über deine Nachricht und beantworte gerne deine Fragen zum Thema Gesundheit."
      />
    </Layout>
  );
};

export default Gesundheit;
