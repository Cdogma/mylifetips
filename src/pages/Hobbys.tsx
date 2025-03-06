
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import BlogPostCard from "../components/UI/BlogPostCard";
import { Link } from "react-router-dom";

const Hobbys = () => {
  const featuredPosts = [
    {
      title: "Hobbys mit Mehrwert: Diese Freizeitaktivitäten fördern deine Entwicklung",
      excerpt: "Entdecke Hobbys, die nicht nur Spaß machen, sondern auch deine persönlichen und beruflichen Fähigkeiten erweitern.",
      date: "10. Mai 2024",
      category: "Hobbys",
      imageSrc: "https://images.unsplash.com/photo-1493118669564-dfa8adf5a5d4?q=80&w=800&auto=format&fit=crop",
      slug: "hobbys-mit-mehrwert",
    },
    {
      title: "Kreative Hobbys für Einsteiger: So findest du deine künstlerische Ader",
      excerpt: "Von Handlettering bis Fotografie - diese kreativen Hobbys sind auch für Anfänger geeignet und brauchen kein großes Budget.",
      date: "28. April 2024",
      category: "Hobbys",
      imageSrc: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
      slug: "kreative-hobbys-einsteiger",
    },
    {
      title: "Outdoor-Aktivitäten für jede Jahreszeit",
      excerpt: "Wie du auch bei schlechtem Wetter aktiv bleiben und die Natur genießen kannst - mit Tipps für jede Jahreszeit.",
      date: "15. April 2024",
      category: "Hobbys",
      imageSrc: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
      slug: "outdoor-aktivitaeten-jahreszeiten",
    },
  ];

  return (
    <Layout>
      <Hero
        title="Hobbys & Freizeit"
        subtitle="Inspirationen für eine sinnvolle Freizeitgestaltung und persönliche Interessen."
        ctaText="Hobby-Ideen entdecken"
        ctaLink="#hobby-ideen"
        imageSrc="https://images.unsplash.com/photo-1511649475669-e288648b2339?q=80&w=800&auto=format&fit=crop"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Freizeit mit Sinn"
            description="Hobbys sind mehr als nur Zeitvertreib. Sie bereichern unser Leben, fördern unsere Entwicklung und schenken uns Ausgleich zum Alltag."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              In einer Zeit, in der wir oft zwischen Arbeit, Verpflichtungen und digitaler Ablenkung hin- und hergerissen sind, ist es wichtiger denn je, bewusst Zeit für Aktivitäten einzuplanen, die uns wirklich erfüllen. Hobbys bieten nicht nur Entspannung und Freude, sondern helfen uns auch, neue Fähigkeiten zu entwickeln, Kreativität zu entfalten und soziale Kontakte zu knüpfen.
            </p>
            <p>
              Auf dieser Seite findest du Inspirationen für verschiedene Hobbys und Freizeitaktivitäten - von kreativen Beschäftigungen über Sport und Outdoor-Aktivitäten bis hin zu intellektuellen Herausforderungen. Vielleicht entdeckst du hier deine neue Leidenschaft oder findest frische Ideen für ein bestehendes Hobby.
            </p>
          </div>
        </div>
      </section>

      <section id="hobby-ideen" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Hobby-Kategorien"
            description="Entdecke verschiedene Bereiche für deine Freizeitgestaltung."
            align="center"
          />

          <Tabs defaultValue="kreativ" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="kreativ">Kreative Hobbys</TabsTrigger>
              <TabsTrigger value="aktiv">Aktive Hobbys</TabsTrigger>
              <TabsTrigger value="entspannend">Entspannende Hobbys</TabsTrigger>
              <TabsTrigger value="lernend">Lernende Hobbys</TabsTrigger>
            </TabsList>
            
            <TabsContent value="kreativ">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Kreative Hobbys</h3>
                  <div className="space-y-4">
                    <p>Kreative Hobbys fördern deine Ausdrucksfähigkeit und können ein wundervoller Ausgleich zum Alltag sein:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Zeichnen & Malen</strong> - Von klassischen Techniken bis digitale Kunst - das Zeichnen und Malen bietet unendliche Möglichkeiten. Besonders für Anfänger eignen sich Bullet Journaling oder Handlettering als Einstieg.</li>
                      <li><strong>Fotografie</strong> - Mit Smartphone oder Kamera kannst du die Welt aus neuen Perspektiven entdecken. Online-Kurse bieten einen guten Einstieg in die Grundlagen.</li>
                      <li><strong>Handarbeit & DIY</strong> - Nähen, Stricken, Makramee oder Upcycling alter Möbel - handwerkliche Projekte verbinden Kreativität mit praktischem Nutzen.</li>
                      <li><strong>Musik</strong> - Ein Instrument lernen, singen oder eigene Beats produzieren - Musik ist eine der erfüllendsten kreativen Ausdrucksformen.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="aktiv">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Aktive Hobbys</h3>
                  <div className="space-y-4">
                    <p>Aktive Hobbys halten nicht nur fit, sondern machen auch Spaß und bieten oft soziale Komponenten:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Tanzen</strong> - Ob Gesellschaftstanz, Hip Hop oder Ballett - Tanzen verbindet Bewegung mit Musik und sozialen Kontakten.</li>
                      <li><strong>Outdoor-Aktivitäten</strong> - Wandern, Radfahren, Klettern oder Kajakfahren bringen dich in die Natur und fördern körperliche Fitness und mentale Erholung.</li>
                      <li><strong>Teamsport</strong> - Fußball, Volleyball, Basketball und Co. bieten nicht nur körperliche Aktivität, sondern auch Teamgeist und regelmäßige soziale Interaktion.</li>
                      <li><strong>Yoga & Pilates</strong> - Diese Aktivitäten verbinden Körper und Geist und eignen sich für alle Altersgruppen und Fitnesslevel.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="entspannend">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Entspannende Hobbys</h3>
                  <div className="space-y-4">
                    <p>Diese Hobbys helfen dir, abzuschalten und Stress abzubauen:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Gärtnern</strong> - Ob Balkonkästen, Zimmerpflanzen oder ein eigener Garten - die Pflege von Pflanzen wirkt beruhigend und erfüllend.</li>
                      <li><strong>Lesen</strong> - Tauche ein in andere Welten, erweitere deinen Horizont und entspanne dabei. Lesegruppen können zusätzlich soziale Kontakte fördern.</li>
                      <li><strong>Kochen & Backen</strong> - Kreativität in der Küche macht nicht nur Spaß, sondern verwöhnt auch deine Sinne und die Menschen um dich herum.</li>
                      <li><strong>Meditation & Achtsamkeit</strong> - Diese Praktiken helfen dir, im Hier und Jetzt zu leben und innere Ruhe zu finden.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="lernend">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Lernende Hobbys</h3>
                  <div className="space-y-4">
                    <p>Diese Hobbys fordern dein Gehirn und erweitern deinen Horizont:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Sprachen lernen</strong> - Eine neue Sprache zu lernen öffnet Türen zu anderen Kulturen und hält das Gehirn fit.</li>
                      <li><strong>Schach & Strategiespiele</strong> - Fördern logisches Denken, Konzentration und strategische Planung.</li>
                      <li><strong>Programmieren</strong> - In der digitalen Welt ist Programmieren eine nützliche Fähigkeit, die auch kreatives Problemlösen fördert.</li>
                      <li><strong>Geschichtsforschung</strong> - Tauche ein in historische Epochen, lokale Geschichte oder Familienforschung.</li>
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
            title="Hobby-Artikel"
            description="Inspirierende Beiträge zum Thema Hobbys & Freizeit"
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
              Alle Hobby-Artikel anzeigen
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
                  Welches Hobby passt zu dir?
                </h3>
                <p className="text-muted-foreground">
                  Unsicher, welches Hobby zu deinen Interessen und deinem Lebensstil passt? Ich helfe dir gerne bei der Auswahl.
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

export default Hobbys;
