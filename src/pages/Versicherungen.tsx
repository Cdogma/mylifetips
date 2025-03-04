
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import RecommendationCard from "../components/UI/RecommendationCard";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const Versicherungen = () => {
  const topRecommendations = [
    {
      title: "Haftpflichtversicherung",
      category: "Basisschutz",
      description: "Eine private Haftpflichtversicherung ist ein absolutes Muss für jeden. Sie schützt dich vor finanziellen Folgen, wenn du versehentlich jemandem Schaden zufügst.",
      rating: 4.9,
      imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
      link: "/finanzen/versicherungen/haftpflicht",
      isAffiliate: true,
    },
    {
      title: "Berufsunfähigkeitsversicherung",
      category: "Existenzschutz",
      description: "Die Berufsunfähigkeitsversicherung sichert deinen Lebensunterhalt, falls du aus gesundheitlichen Gründen nicht mehr arbeiten kannst - ein wichtiger Baustein für finanzielle Sicherheit.",
      rating: 4.8,
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      link: "/finanzen/versicherungen/berufsunfaehigkeit",
      isAffiliate: true,
    },
    {
      title: "Rechtsschutzversicherung",
      category: "Rechtssicherheit",
      description: "Eine Rechtsschutzversicherung übernimmt Anwalts- und Gerichtskosten bei rechtlichen Auseinandersetzungen - ideal für alle, die ihre Rechte durchsetzen wollen, ohne Kostenrisiken einzugehen.",
      rating: 4.6,
      imageSrc: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=800&auto=format&fit=crop",
      link: "/finanzen/versicherungen/rechtsschutz",
      isAffiliate: true,
    },
  ];

  const faqItems = [
    {
      question: "Welche Versicherungen brauche ich unbedingt?",
      answer: "Die private Haftpflichtversicherung ist ein absolutes Muss für jeden, da sie existenzbedrohende Schäden abdeckt. Für Berufstätige ist zudem eine Berufsunfähigkeitsversicherung essentiell. Je nach persönlicher Situation können auch Hausrat-, Rechtsschutz- und Unfallversicherung sinnvoll sein."
    },
    {
      question: "Lohnt sich eine Rechtsschutzversicherung wirklich?",
      answer: "Eine Rechtsschutzversicherung lohnt sich besonders für Menschen, die ein erhöhtes Risiko für rechtliche Auseinandersetzungen haben, beispielsweise Vermieter, Personen in besonders verantwortungsvollen Berufen oder im Straßenverkehr. Die Kosten für Rechtsstreitigkeiten können schnell in die Tausende gehen, was die jährliche Prämie von 200-300€ relativiert."
    },
    {
      question: "Ab wann sollte ich eine Berufsunfähigkeitsversicherung abschließen?",
      answer: "Eine Berufsunfähigkeitsversicherung solltest du idealerweise so früh wie möglich abschließen – am besten direkt beim Berufseinstieg oder sogar während der Ausbildung oder des Studiums. Je jünger und gesünder du bist, desto günstiger sind die Beiträge und desto wahrscheinlicher ist eine Annahme ohne Ausschlüsse oder Risikozuschläge."
    },
    {
      question: "Wie finde ich den besten Versicherungstarif?",
      answer: "Den besten Versicherungstarif findest du durch einen sorgfältigen Vergleich der Leistungen und nicht nur der Preise. Nutze Vergleichsportale als ersten Überblick, lass dich aber anschließend unabhängig beraten. Achte besonders auf die genauen Leistungsbedingungen, Ausschlüsse und Deckungssummen. Ein günstiger Tarif kann im Schadensfall teuer werden, wenn wichtige Leistungen fehlen."
    }
  ];

  return (
    <Layout>
      <Hero
        title="Versicherungen"
        subtitle="Wichtiger Schutz für alle Lebenslagen: Versicherungen richtig verstehen und optimal absichern."
        ctaText="Top-Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Richtig versichert sein"
            description="Erfahre, welche Versicherungen du wirklich brauchst und wie du unnötige Kosten vermeidest."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Das Thema Versicherungen ist komplex und oft verwirrend. Viele Menschen sind entweder über- oder unterversichert. Auf dieser Seite helfe ich dir zu verstehen, welche Versicherungen wirklich wichtig sind und welche du getrost ignorieren kannst.
            </p>
            <p>
              Ich analysiere regelmäßig Versicherungstarife und teile meine Erkenntnisse hier mit dir. Dabei lege ich besonderen Wert auf:
            </p>
            <ul>
              <li><strong>Bedarfsgerechten Schutz</strong> - nicht jeder braucht jede Versicherung</li>
              <li><strong>Optimales Preis-Leistungs-Verhältnis</strong> - guter Schutz muss nicht teuer sein</li>
              <li><strong>Transparente Bedingungen</strong> - damit du im Schadensfall nicht böse Überraschungen erlebst</li>
              <li><strong>Servicequalität</strong> - wie schnell und unkompliziert werden Schäden reguliert?</li>
            </ul>
            <p>
              <strong>Hinweis:</strong> Bei einigen der vorgestellten Produkte handelt es sich um Affiliate-Links, erkennbar am *-Symbol. Das bedeutet, dass ich eine kleine Provision erhalte, wenn du über meinen Link eine Versicherung abschließt - für dich entstehen dabei keine zusätzlichen Kosten. Ich empfehle ausschließlich Produkte, die ich selbst nutzen würde oder bereits nutze.
            </p>
          </div>
        </div>
      </section>

      <section id="empfehlungen" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            subtitle="Meine Top-Empfehlungen"
            title="Diese Versicherungen brauchst du wirklich"
            description="Basierend auf meinen Recherchen und Erfahrungen kann ich diese Versicherungen uneingeschränkt empfehlen."
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

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Versicherungs-Check"
                description="So überprüfst du deinen bestehenden Versicherungsschutz"
              />
              
              <div className="space-y-6 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Bestandsaufnahme machen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Liste alle deine bestehenden Versicherungen auf, inklusive monatlicher Kosten, Versicherungssummen und wichtiger Ausschlüsse. Oft haben Menschen Versicherungen, von denen sie gar nicht mehr wissen oder die sich überschneiden.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>2. Lebenssituation analysieren</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Überlege, welche Risiken für dich tatsächlich relevant sind. Eine Eigenheimversicherung ist für Mieter unnötig, während Familien mit Kindern andere Absicherungsbedürfnisse haben als Singles.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>3. Prioritäten setzen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Teile Versicherungen in drei Kategorien ein: Muss-Versicherungen (z.B. Haftpflicht), Kann-Versicherungen (z.B. Hausrat) und unnötige Versicherungen (z.B. Handyversicherung). Beginne mit dem notwendigen Schutz, bevor du Extras abschließt.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>4. Tarife vergleichen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Vergleiche nicht nur die Preise, sondern vor allem die Leistungen. Ein günstiger Tarif kann teuer werden, wenn im Schadensfall wichtige Leistungen fehlen. Nutze Vergleichsportale, aber lass dich anschließend unabhängig beraten.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Häufig gestellte Fragen"
                description="Antworten auf wichtige Versicherungsfragen"
              />
              
              <div className="mt-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold mb-2">
                  Brauchst du Hilfe bei deinem Versicherungsschutz?
                </h3>
                <p className="text-muted-foreground">
                  Ich helfe dir gerne dabei, deinen Versicherungsschutz zu optimieren. Kontaktiere mich für eine individuelle Beratung.
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

export default Versicherungen;
