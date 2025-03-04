
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import BlogPostCard from "../components/UI/BlogPostCard";
import { Link } from "react-router-dom";

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

  return (
    <Layout>
      <Hero
        title="Lifestyle"
        subtitle="Inspiration und praktische Tipps für ein bewussteres, ausgewogeneres und erfüllteres Leben."
        ctaText="Entdecke meine Tipps"
        ctaLink="#lifestyle-tipps"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Bewusster leben"
            description="In unserem hektischen Alltag ist es oft schwer, Zeit für uns selbst zu finden und bewusste Entscheidungen zu treffen. Hier teile ich meine Erfahrungen und Tipps für einen ausgewogeneren Lebensstil."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Lifestyle umfasst all die Aspekte, die unser tägliches Leben ausmachen: von Ernährung und Gesundheit über Wohnen und Einrichtung bis hin zu Reisen und persönlicher Entwicklung. In diesem Bereich teile ich meine Gedanken und Erfahrungen zu verschiedenen Lifestyle-Themen, die mir am Herzen liegen.
            </p>
            <p>
              Mir ist wichtig, dass meine Empfehlungen praktisch umsetzbar sind und einen echten Mehrwert für dein Leben bieten. Es geht nicht um perfekte Instagram-Momente, sondern um nachhaltige Veränderungen, die zu einem erfüllteren und bewussteren Leben führen können.
            </p>
          </div>
        </div>
      </section>

      <section id="lifestyle-tipps" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Meine Lifestyle-Tipps"
            description="Entdecke Tipps zu verschiedenen Bereichen des täglichen Lebens."
            align="center"
          />

          <Tabs defaultValue="gesundheit" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="gesundheit">Gesundheit & Wellness</TabsTrigger>
              <TabsTrigger value="produktivitaet">Produktivität</TabsTrigger>
              <TabsTrigger value="nachhaltigkeit">Nachhaltigkeit</TabsTrigger>
              <TabsTrigger value="minimalismus">Minimalismus</TabsTrigger>
            </TabsList>
            
            <TabsContent value="gesundheit">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Gesundheit & Wellness</h3>
                  <div className="space-y-4">
                    <p>Gesundheit ist mehr als nur die Abwesenheit von Krankheit. Es geht um ganzheitliches Wohlbefinden, das Körper, Geist und Seele umfasst. Hier sind einige meiner wichtigsten Tipps:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Bewegung in den Alltag integrieren</strong> - Es muss nicht immer das Fitnessstudio sein. Schon kleine Veränderungen wie Treppensteigen statt Aufzugfahren oder kurze Spaziergänge in der Mittagspause können einen großen Unterschied machen.</li>
                      <li><strong>Ausreichend Schlaf</strong> - 7-8 Stunden qualitativ hochwertiger Schlaf ist entscheidend für Regeneration und Gesundheit. Eine regelmäßige Schlafenszeit und ein ruhiges Schlafumfeld können die Schlafqualität deutlich verbessern.</li>
                      <li><strong>Achtsamkeit praktizieren</strong> - Regelmäßige Meditation oder bewusstes Atmen kann Stress reduzieren und das allgemeine Wohlbefinden steigern.</li>
                      <li><strong>Digital Detox</strong> - Regelmäßige Auszeiten von digitalen Geräten können Stress reduzieren und die Konzentrationsfähigkeit verbessern.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="produktivitaet">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Produktivität & Fokus</h3>
                  <div className="space-y-4">
                    <p>In einer Welt voller Ablenkungen ist es eine Herausforderung, fokussiert und produktiv zu bleiben. Diese Strategien helfen mir, meine Ziele effizienter zu erreichen:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Pomodoro-Technik</strong> - 25 Minuten fokussiertes Arbeiten, gefolgt von 5 Minuten Pause, kann die Produktivität erheblich steigern.</li>
                      <li><strong>Wichtige Aufgaben zuerst</strong> - Die anspruchsvollsten Aufgaben am Morgen erledigen, wenn die Energie und Konzentration am höchsten sind.</li>
                      <li><strong>Klare Tagesplanung</strong> - Jeden Tag mit einer klaren Liste von 3-5 Prioritäten beginnen, die unbedingt erledigt werden müssen.</li>
                      <li><strong>Ablenkungen minimieren</strong> - Benachrichtigungen deaktivieren und feste Zeiten für E-Mails und Social Media festlegen.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="nachhaltigkeit">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Nachhaltiger Lebensstil</h3>
                  <div className="space-y-4">
                    <p>Nachhaltigkeit beginnt im Alltag mit kleinen, aber konsequenten Entscheidungen. Diese Tipps können dir helfen, umweltbewusster zu leben:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Mehrwegprodukte nutzen</strong> - Von Einkaufstaschen über Kaffeebecher bis hin zu Wasserflaschen: Einwegplastik lässt sich oft leicht vermeiden.</li>
                      <li><strong>Bewusst konsumieren</strong> - Vor jedem Kauf überlegen: Brauche ich das wirklich? Qualität statt Quantität wählen und auf langlebige Produkte setzen.</li>
                      <li><strong>Regionale und saisonale Lebensmittel</strong> - Kurze Transportwege und weniger Ressourcenverbrauch bei der Produktion schonen die Umwelt.</li>
                      <li><strong>Strom und Wasser sparen</strong> - Kleine Gewohnheitsänderungen wie das Ausschalten ungenutzter Geräte oder kürzeres Duschen summieren sich.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="minimalismus">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Minimalismus im Alltag</h3>
                  <div className="space-y-4">
                    <p>Minimalismus bedeutet nicht, in einem leeren Raum zu leben. Es geht darum, sich auf das Wesentliche zu konzentrieren und bewusste Entscheidungen zu treffen:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Regelmäßiges Ausmisten</strong> - Die 6-Monats-Regel anwenden: Was in den letzten 6 Monaten nicht benutzt wurde, wird wahrscheinlich auch in Zukunft nicht gebraucht.</li>
                      <li><strong>Ein Gegenstand rein, einer raus</strong> - Bei jedem Neukauf einen ähnlichen Gegenstand aussortieren, um Anhäufungen zu vermeiden.</li>
                      <li><strong>Digitales Aufräumen</strong> - Auch digitaler Ballast wie ungenutzte Apps, alte E-Mails oder überflüssige Dateien kann Stress verursachen.</li>
                      <li><strong>Bewusster Medienkonsum</strong> - Qualität statt Quantität: Lieber ein gutes Buch gründlich lesen als durch endlose Social-Media-Feeds scrollen.</li>
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
            title="Lifestyle-Artikel"
            description="Ausgewählte Beiträge zu verschiedenen Lifestyle-Themen"
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
              Alle Artikel anzeigen
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
                  Hast du Fragen zu einem bestimmten Lifestyle-Thema?
                </h3>
                <p className="text-muted-foreground">
                  Ich freue mich über deine Nachricht und beantworte gerne deine Fragen oder gebe individuelle Empfehlungen.
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
