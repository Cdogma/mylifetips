
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import RecommendationCard from "../components/UI/RecommendationCard";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const SmartHome = () => {
  const topRecommendations = [
    {
      title: "Philips Hue Starter Set",
      category: "Beleuchtung",
      description: "Das Philips Hue Starter-Set mit Bridge und farbigen Lampen - der ideale Einstieg in die smarte Beleuchtung mit einfacher Einrichtung und guter App.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1558002038-bb0401c95e8c?q=80&w=800&auto=format&fit=crop",
      link: "/technik/smart-home/philips-hue",
      isAffiliate: true,
    },
    {
      title: "Amazon Echo (4. Generation)",
      category: "Smart Speaker",
      description: "Der Amazon Echo mit guter Klangqualität und Alexa als zentraler Sprachassistent für dein Smart Home - perfekt zur Steuerung von Geräten verschiedener Hersteller.",
      rating: 4.6,
      imageSrc: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop",
      link: "/technik/smart-home/amazon-echo",
      isAffiliate: true,
    },
    {
      title: "Homematic IP Starter Set",
      category: "Heizung",
      description: "Das Homematic IP Starter-Set für intelligente Heizungssteuerung mit einfacher Installation, zuverlässiger Funktion und deutlichem Energiesparpotenzial.",
      rating: 4.5,
      imageSrc: "https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?q=80&w=800&auto=format&fit=crop",
      link: "/technik/smart-home/homematic-ip",
      isAffiliate: true,
    },
  ];

  const faqItems = [
    {
      question: "Welches Smart-Home-System eignet sich für Einsteiger?",
      answer: "Für Einsteiger empfehle ich ein System mit einfacher Installation und breiter Kompatibilität. Philips Hue für Beleuchtung oder Amazon Echo/Google Home als Sprachassistent sind ideale Einstiegspunkte. Diese Systeme sind benutzerfreundlich, haben eine gute App-Unterstützung und lassen sich später mit weiteren Komponenten erweitern."
    },
    {
      question: "Wie viel kann ich mit smarter Heizungssteuerung sparen?",
      answer: "Mit smarter Heizungssteuerung kannst du je nach Wohnsituation und bisherigem Heizverhalten etwa 10-30% Energiekosten einsparen. Systeme wie Homematic IP, tado° oder Netatmo ermöglichen präzise zeitgesteuerte Heizpläne, automatisches Absenken bei geöffneten Fenstern und Fernsteuerung. Die Investition amortisiert sich typischerweise innerhalb von 1-3 Jahren."
    },
    {
      question: "Brauche ich für jedes Smart-Home-System eine separate App?",
      answer: "Nicht zwingend. Zwar hat jeder Hersteller seine eigene App, aber es gibt übergreifende Plattformen zur zentralen Steuerung verschiedener Systeme. Mit Apple HomeKit, Google Home, Amazon Alexa oder Samsung SmartThings kannst du viele kompatible Geräte in einer einzigen App zusammenführen. Achte beim Kauf auf die entsprechenden Kompatibilitätsangaben."
    },
    {
      question: "Wie steht es um die Datensicherheit bei Smart-Home-Geräten?",
      answer: "Die Datensicherheit variiert stark zwischen verschiedenen Herstellern. Achte auf Produkte etablierter Marken, die regelmäßige Sicherheitsupdates anbieten und transparente Datenschutzrichtlinien haben. Einige Systeme wie Homematic IP oder Philips Hue bieten lokale Steuerungsmöglichkeiten ohne ständige Cloud-Verbindung. Sichere auch dein WLAN mit einem starken Passwort und halte deine Router-Firmware aktuell."
    }
  ];

  return (
    <Layout>
      <Hero
        title="Smart Home"
        subtitle="Intelligente Heimvernetzung: Beleuchtung, Heizung, Sicherheit und mehr für dein smarter Zuhause."
        ctaText="Top-Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Dein intelligentes Zuhause"
            description="Smart-Home-Systeme machen das Leben komfortabler, sparen Energie und erhöhen die Sicherheit. Hier erfährst du, welche Lösungen sich für dich lohnen."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Der Markt für Smart-Home-Produkte ist riesig und oft unübersichtlich. Von vernetzter Beleuchtung über smarte Heizungsthermostate bis hin zu Sicherheitskameras und Sprachassistenten – die Auswahl an Geräten und Systemen ist immens.
            </p>
            <p>
              Ich teste regelmäßig Smart-Home-Produkte und helfe dir, die besten Lösungen für deine Bedürfnisse zu finden. Dabei achte ich besonders auf:
            </p>
            <ul>
              <li><strong>Einfache Installation und Bedienung</strong> - auch ohne technisches Fachwissen</li>
              <li><strong>Zuverlässigkeit im Alltag</strong> - denn Smart Home sollte das Leben einfacher machen, nicht komplizierter</li>
              <li><strong>Datenschutz und Sicherheit</strong> - damit deine persönlichen Daten geschützt bleiben</li>
              <li><strong>Kompatibilität mit anderen Systemen</strong> - für ein nahtloses Zusammenspiel aller Komponenten</li>
              <li><strong>Preis-Leistungs-Verhältnis</strong> - damit sich die Investition für dich lohnt</li>
            </ul>
            <p>
              <strong>Hinweis:</strong> Bei einigen der vorgestellten Produkte handelt es sich um Affiliate-Links. Das bedeutet, dass ich eine kleine Provision erhalte, wenn du über meinen Link ein Produkt kaufst - für dich entstehen keine zusätzlichen Kosten.
            </p>
          </div>
        </div>
      </section>

      <section id="empfehlungen" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            subtitle="Meine Top-Empfehlungen"
            title="Diese Smart-Home-Produkte nutze ich selbst"
            description="Basierend auf meinen eigenen Erfahrungen und ausführlichen Tests kann ich diese Produkte uneingeschränkt empfehlen."
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

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Mehr detaillierte Produkttests und Erfahrungsberichte zu den einzelnen Smart-Home-Kategorien folgen in Kürze.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Häufig gestellte Fragen"
            description="Antworten auf die wichtigsten Fragen rund um Smart Home."
          />

          <div className="mt-8 max-w-3xl mx-auto">
            <Tabs defaultValue="faq-1" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="faq-1">Einstieg</TabsTrigger>
                <TabsTrigger value="faq-2">Heizung</TabsTrigger>
                <TabsTrigger value="faq-3">Apps</TabsTrigger>
                <TabsTrigger value="faq-4">Sicherheit</TabsTrigger>
              </TabsList>
              
              {faqItems.map((faq, index) => (
                <TabsContent key={`faq-${index + 1}`} value={`faq-${index + 1}`}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{faq.answer}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold mb-2">
                  Brauchst du Hilfe bei der Smart-Home-Planung?
                </h3>
                <p className="text-muted-foreground">
                  Ob Produktempfehlungen für deine speziellen Anforderungen oder Unterstützung bei der Einrichtung - kontaktiere mich gerne für individuelle Beratung.
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

export default SmartHome;
