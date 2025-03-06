
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import BlogPostCard from "../components/UI/BlogPostCard";
import { Link } from "react-router-dom";

const Mode = () => {
  const featuredPosts = [
    {
      title: "Zeitlose Mode: Investiere in diese Klassiker für deinen Kleiderschrank",
      excerpt: "Welche Kleidungsstücke wirklich zeitlos sind und wie du sie für verschiedene Anlässe kombinieren kannst.",
      date: "8. Mai 2024",
      category: "Mode",
      imageSrc: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
      slug: "zeitlose-mode-klassiker",
    },
    {
      title: "Nachhaltige Mode: Diese Labels setzen auf Fairness und Umweltbewusstsein",
      excerpt: "Entdecke Modemarken, die nicht nur gut aussehen, sondern auch verantwortungsvoll produzieren.",
      date: "25. April 2024",
      category: "Mode",
      imageSrc: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop",
      slug: "nachhaltige-mode-labels",
    },
    {
      title: "Capsule Wardrobe: Mit weniger Kleidung besser angezogen sein",
      excerpt: "Wie du mit einer durchdachten Minimalgarderobe mehr Outfits kreieren und gleichzeitig Zeit und Geld sparen kannst.",
      date: "12. April 2024",
      category: "Mode",
      imageSrc: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop",
      slug: "capsule-wardrobe-guide",
    },
  ];

  return (
    <Layout>
      <Hero
        title="Mode & Stil"
        subtitle="Zeitlose Stilempfehlungen und nachhaltige Mode für jeden Anlass."
        ctaText="Stilberatung entdecken"
        ctaLink="#mode-beratung"
        imageSrc="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Persönlicher Stil"
            description="Mode ist vergänglich, Stil ist zeitlos. Entdecke deinen persönlichen Stil jenseits kurzlebiger Trends."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              In einer Welt, in der Fast Fashion und ständig wechselnde Trends dominieren, kann es schwierig sein, einen eigenen, authentischen Stil zu entwickeln. Dabei geht es bei Mode nicht darum, blind jedem Trend zu folgen, sondern darum, Kleidung zu finden, die zu deiner Persönlichkeit, deinem Lebensstil und deinem Körper passt.
            </p>
            <p>
              Auf dieser Seite teile ich Tipps für zeitlose Eleganz, nachhaltige Modeentscheidungen und die Entwicklung eines persönlichen Stils, der nicht nur gut aussieht, sondern auch gut anfühlt. Es geht nicht um Perfektion oder teure Designer-Teile, sondern um bewusste Entscheidungen, die deinen Alltag bereichern und gleichzeitig Rücksicht auf Umwelt und soziale Aspekte nehmen.
            </p>
          </div>
        </div>
      </section>

      <section id="mode-beratung" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Mode-Themen"
            description="Entdecke verschiedene Aspekte bewusster Modewahl und persönlichen Stils."
            align="center"
          />

          <Tabs defaultValue="basics" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="basics">Stil-Basics</TabsTrigger>
              <TabsTrigger value="capsule">Capsule Wardrobe</TabsTrigger>
              <TabsTrigger value="nachhaltig">Nachhaltige Mode</TabsTrigger>
              <TabsTrigger value="pflege">Kleiderpflege</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basics">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Grundlagen des persönlichen Stils</h3>
                  <div className="space-y-4">
                    <p>Diese Grundprinzipien helfen dir, deinen eigenen Stil zu entwickeln:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Kenne deine Silhouette</strong> - Verstehe, welche Schnitte und Proportionen deiner Körperform schmeicheln. Dies ist wichtiger als kurzlebige Trends.</li>
                      <li><strong>Farbpalette definieren</strong> - Finde heraus, welche Farben zu deinem Hautton, deinen Haaren und Augen passen. Eine stimmige Farbpalette erleichtert das Kombinieren.</li>
                      <li><strong>Qualität vor Quantität</strong> - Investiere lieber in wenige, hochwertige Stücke als in viele billige. Qualitätskleidung hält länger, sieht besser aus und fühlt sich angenehmer an.</li>
                      <li><strong>Anlässe berücksichtigen</strong> - Dein Kleiderschrank sollte deinen Lebensstil widerspiegeln. Berücksichtige, wie du die meiste Zeit verbringst (Arbeit, Freizeit, besondere Anlässe).</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="capsule">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Die Kunst der Capsule Wardrobe</h3>
                  <div className="space-y-4">
                    <p>Eine Capsule Wardrobe ist eine kleine, durchdachte Garderobe aus zeitlosen Stücken, die vielseitig kombinierbar sind:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Bestandsaufnahme</strong> - Beginne mit dem Aussortieren von Kleidung, die du nicht mehr trägst, die nicht passt oder nicht zu deinem Stil gehört.</li>
                      <li><strong>Kernstücke identifizieren</strong> - Wähle etwa 30-40 Teile für eine Saison, die gut miteinander kombinierbar sind und verschiedene Anlässe abdecken.</li>
                      <li><strong>Farbschema festlegen</strong> - Beschränke dich auf eine Palette von 3-4 Hauptfarben und 1-2 Akzentfarben für maximale Kombinierbarkeit.</li>
                      <li><strong>Bewusst ergänzen</strong> - Füge neue Teile nur hinzu, wenn sie bestehende Outfits ergänzen und mit mehreren vorhandenen Stücken kombinierbar sind.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="nachhaltig">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Bewusste Modeentscheidungen</h3>
                  <div className="space-y-4">
                    <p>Nachhaltige Mode berücksichtigt Umweltaspekte, faire Arbeitsbedingungen und langfristige Nutzung:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Materialien kennen</strong> - Naturfasern wie Bio-Baumwolle, Leinen oder Hanf sowie recycelte Materialien sind oft umweltfreundlicher als konventionelle oder synthetische Fasern.</li>
                      <li><strong>Auf Zertifizierungen achten</strong> - Labels wie GOTS, Fair Trade oder OEKO-TEX geben Orientierung bei der Auswahl nachhaltiger Mode.</li>
                      <li><strong>Second Hand und Vintage</strong> - Gebrauchte Kleidung zu kaufen ist eine der nachhaltigsten Optionen und oft auch budgetfreundlich.</li>
                      <li><strong>Slow Fashion unterstützen</strong> - Kleine, lokale Labels und Handwerker bieten oft hochwertige, langlebige Produkte unter fairen Bedingungen.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="pflege">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Richtige Kleiderpflege</h3>
                  <div className="space-y-4">
                    <p>Mit der richtigen Pflege hält deine Kleidung länger und sieht besser aus:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Pflegehinweise beachten</strong> - Die Symbole auf dem Etikett geben wichtige Hinweise zur richtigen Pflege. Kaltes Waschen und Lufttrocknen schont viele Textilien.</li>
                      <li><strong>Seltener waschen</strong> - Nicht jedes getragene Kleidungsstück muss sofort in die Wäsche. Oft reicht es, Kleidung zu lüften oder punktuell zu reinigen.</li>
                      <li><strong>Richtig aufbewahren</strong> - Formstabile Kleiderbügel für Jacken und Hemden, Falten statt Hängen für dehnbare Materialien wie Strick.</li>
                      <li><strong>Kleine Reparaturen selbst vornehmen</strong> - Lerne grundlegende Nähfähigkeiten, um lose Knöpfe, kleine Risse oder offene Säume selbst zu reparieren.</li>
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
            title="Mode-Artikel"
            description="Inspirierende Beiträge und praktische Tipps rund um Mode und Stil"
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
              Alle Mode-Artikel anzeigen
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
                  Stilberatung für deinen persönlichen Look
                </h3>
                <p className="text-muted-foreground">
                  Du möchtest deinen persönlichen Stil definieren oder deinen Kleiderschrank optimieren? Ich biete individuelle Beratung und praktische Tipps.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Beratung anfragen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mode;
