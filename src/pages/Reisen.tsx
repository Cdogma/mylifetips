
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import BlogPostCard from "../components/UI/BlogPostCard";
import { Link } from "react-router-dom";

const Reisen = () => {
  const featuredPosts = [
    {
      title: "Nachhaltig reisen: So geht umweltbewusster Tourismus",
      excerpt: "Tipps für umweltfreundlicheres Reisen ohne auf besondere Erlebnisse verzichten zu müssen.",
      date: "5. Mai 2024",
      category: "Reisen",
      imageSrc: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=800&auto=format&fit=crop",
      slug: "nachhaltig-reisen",
    },
    {
      title: "Günstig verreisen: Die besten Spartipps für deinen nächsten Urlaub",
      excerpt: "Wie du auch mit kleinem Budget unvergessliche Reiseerlebnisse haben kannst.",
      date: "28. April 2024",
      category: "Reisen",
      imageSrc: "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=800&auto=format&fit=crop",
      slug: "guenstig-verreisen-spartipps",
    },
    {
      title: "Unterkünfte abseits der Touristenpfade: Authentisch reisen",
      excerpt: "Entdecke besondere Unterkünfte, die dir authentische Einblicke in die lokale Kultur ermöglichen.",
      date: "15. April 2024",
      category: "Reisen",
      imageSrc: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
      slug: "unterkuenfte-abseits-touristenpfade",
    },
  ];

  return (
    <Layout>
      <Hero
        title="Reisen & Abenteuer"
        subtitle="Inspiration, Tipps und Erfahrungsberichte für unvergessliche Reiseerlebnisse."
        ctaText="Reisetipps entdecken"
        ctaLink="#reise-tipps"
        imageSrc="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Die Welt entdecken"
            description="Reisen erweitert unseren Horizont, schafft unvergessliche Erinnerungen und lässt uns die Welt mit anderen Augen sehen."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Reisen ist mehr als nur Ortsveränderung – es ist eine Form der Bildung, eine Quelle der Inspiration und oft der Beginn persönlicher Transformation. Ob Wochenendtrip ins Nachbarland oder mehrmonatige Weltreise, ob Luxusurlaub oder Backpacking-Abenteuer – jede Reise bietet die Chance, neue Perspektiven zu gewinnen und den eigenen Horizont zu erweitern.
            </p>
            <p>
              Auf dieser Seite teile ich meine Reiseerfahrungen, praktische Tipps für verschiedene Reisearten und -ziele sowie Inspirationen für dein nächstes Abenteuer. Dabei lege ich Wert auf einen ausgewogenen Mix aus Erholung, Erlebnis und kulturellem Austausch – und versuche stets, auch nachhaltige Aspekte des Reisens zu berücksichtigen.
            </p>
          </div>
        </div>
      </section>

      <section id="reise-tipps" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Reise-Kategorien"
            description="Entdecke verschiedene Arten des Reisens und finde deinen persönlichen Reisestil."
            align="center"
          />

          <Tabs defaultValue="planung" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="planung">Reiseplanung</TabsTrigger>
              <TabsTrigger value="reiseziele">Top Reiseziele</TabsTrigger>
              <TabsTrigger value="budget">Budget-Reisen</TabsTrigger>
              <TabsTrigger value="nachhaltig">Nachhaltiges Reisen</TabsTrigger>
            </TabsList>
            
            <TabsContent value="planung">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Effektive Reiseplanung</h3>
                  <div className="space-y-4">
                    <p>Eine gute Planung ist der Schlüssel zu einer gelungenen Reise. Hier sind meine wichtigsten Tipps:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Frühzeitig buchen</strong> - Besonders Flüge und beliebte Unterkünfte solltest du möglichst früh reservieren, um die besten Preise zu sichern.</li>
                      <li><strong>Flexible Daten</strong> - Wenn möglich, sei flexibel bei deinen Reisedaten. Oft kannst du durch Reisen in der Nebensaison oder an Wochentagen viel Geld sparen.</li>
                      <li><strong>Reisedokumente</strong> - Überprüfe rechtzeitig die Gültigkeit deiner Dokumente und informiere dich über Einreisebestimmungen und eventuell notwendige Visa.</li>
                      <li><strong>Balance in der Planung</strong> - Plane genug, um Stress zu vermeiden, aber lasse auch Raum für Spontaneität und unerwartete Entdeckungen.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reiseziele">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Empfehlenswerte Reiseziele</h3>
                  <div className="space-y-4">
                    <p>Diese Destinationen bieten ein besonderes Reiseerlebnis:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Portugal</strong> - Mit seiner vielfältigen Landschaft, dem angenehmen Klima, der reichen Kultur und dem hervorragenden Essen ist Portugal ein Ziel, das für jeden etwas bietet.</li>
                      <li><strong>Japan</strong> - Ein faszinierender Mix aus Tradition und Moderne, mit atemberaubender Natur, einzigartiger Kultur und exzellenter Küche.</li>
                      <li><strong>Slowenien</strong> - Der Geheimtipp in Europa überzeugt mit unberührter Natur, charmanten Städten und einer exzellenten lokalen Küche.</li>
                      <li><strong>Costa Rica</strong> - Ein Paradies für Naturliebhaber mit üppigen Regenwäldern, aktiven Vulkanen, traumhaften Stränden und einer beeindruckenden Artenvielfalt.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="budget">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Reisen mit kleinem Budget</h3>
                  <div className="space-y-4">
                    <p>So kannst du auch mit begrenzten Mitteln die Welt entdecken:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Alternative Unterkünfte</strong> - Hostels, Couchsurfing, Homestays oder Wohnungstausch können die Übernachtungskosten drastisch senken.</li>
                      <li><strong>Lokale Transportmittel</strong> - Nutze öffentliche Verkehrsmittel statt Taxis oder Mietwagen und erkunde Städte zu Fuß oder mit dem Fahrrad.</li>
                      <li><strong>Selbst kochen</strong> - Wähle eine Unterkunft mit Küche und kaufe auf lokalen Märkten ein. So sparst du nicht nur Geld, sondern lernst auch die lokale Küche kennen.</li>
                      <li><strong>Kostenlose Attraktionen</strong> - Viele Städte bieten kostenlose Museumseintritte an bestimmten Tagen, Free Walking Tours oder Naturattraktionen ohne Eintrittsgebühren.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="nachhaltig">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Umweltbewusstes Reisen</h3>
                  <div className="space-y-4">
                    <p>Mit diesen Tipps kannst du den ökologischen Fußabdruck deiner Reisen reduzieren:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Klimafreundliche Transportmittel</strong> - Wann immer möglich, nutze Zug oder Bus statt Flugzeug. Bei unvermeidbaren Flügen kannst du die Emissionen kompensieren.</li>
                      <li><strong>Länger an einem Ort</strong> - Statt viele Orte kurz zu besuchen, bleib lieber länger an einem Ort. Das reduziert nicht nur deinen CO2-Fußabdruck, sondern ermöglicht auch tiefere Einblicke in die lokale Kultur.</li>
                      <li><strong>Lokale Unternehmen unterstützen</strong> - Wähle lokale Unterkünfte, Restaurants und Tourenanbieter, um die lokale Wirtschaft zu stärken.</li>
                      <li><strong>Ressourcen schonen</strong> - Spare Wasser und Energie, vermeide Einwegplastik und respektiere die Natur und Tierwelt.</li>
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
            title="Reise-Artikel"
            description="Inspirierende Beiträge und praktische Tipps für deine nächste Reise"
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
              Alle Reiseartikel anzeigen
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
                  Reisefragen oder Tipps?
                </h3>
                <p className="text-muted-foreground">
                  Du planst eine Reise und hast spezifische Fragen? Oder du möchtest deine eigenen Reisetipps teilen? Ich freue mich über deine Nachricht.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reisen;
