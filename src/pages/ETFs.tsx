
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const ETFs = () => {
  const etfs = [
    {
      title: "Vanguard FTSE All-World",
      description: "Der perfekte ETF für den Weltportfolio-Ansatz mit über 3.500 Unternehmen aus aller Welt",
      features: [
        "Enthält über 3.500 Unternehmen aus Industrie- und Schwellenländern",
        "Sehr breite Diversifikation über alle Branchen",
        "Niedrige jährliche Gesamtkostenquote von 0,22%",
        "Physisch replizierend (kauft die tatsächlichen Aktien)",
        "Thesaurierend oder ausschüttend verfügbar"
      ],
      isAffiliate: false,
      rating: 4.9,
      link: "/finanzen/etfs/vanguard-ftse-all-world"
    },
    {
      title: "iShares Core MSCI World",
      description: "Der Klassiker für ein Investment in die Industrieländer weltweit",
      features: [
        "Bildet über 1.500 Unternehmen aus 23 Industrieländern ab",
        "Fokus auf entwickelte Märkte mit hoher Stabilität",
        "Sehr niedrige jährliche Gesamtkostenquote von 0,20%",
        "Hohe Liquidität und enge Spreads",
        "Ideal für einen langfristigen Vermögensaufbau"
      ],
      isAffiliate: false,
      rating: 4.7,
      link: "/finanzen/etfs/ishares-core-msci-world"
    },
    {
      title: "Xtrackers MSCI Emerging Markets",
      description: "Der ETF für Anleger, die gezielt in Schwellenländer investieren möchten",
      features: [
        "Investiert in über 800 Unternehmen aus Schwellenländern",
        "Höheres Wachstumspotenzial mit entsprechend höherem Risiko",
        "Jährliche Gesamtkostenquote von 0,18%",
        "Gute Ergänzung zu einem Industrieländer-ETF",
        "Swap-basiert mit Performancevorteil in einigen Märkten"
      ],
      isAffiliate: false,
      rating: 4.4,
      link: "/finanzen/etfs/xtrackers-msci-emerging-markets"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Die besten ETFs 2024"
        subtitle="Meine persönlichen Empfehlungen für langfristigen Vermögensaufbau mit ETFs - breit diversifiziert, kostengünstig und nachhaltig."
        ctaText="Zu den Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Warum ETFs die beste Wahl für die meisten Anleger sind"
            description="Exchange Traded Funds (ETFs) bieten einen kostengünstigen, transparenten und flexiblen Weg, um von der langfristigen Entwicklung der Finanzmärkte zu profitieren."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Als ich vor über 15 Jahren mit dem Investieren begann, waren aktiv gemanagte Fonds noch der Standard. Heute investiere ich fast ausschließlich in ETFs, und das aus gutem Grund: Sie bieten die Möglichkeit, mit einem einzigen Produkt in Hunderte oder Tausende Unternehmen weltweit zu investieren – zu Kosten, die nur einen Bruchteil dessen betragen, was aktiv gemanagte Fonds verlangen.
            </p>
            <p>
              Die wichtigsten Vorteile von ETFs im Überblick:
            </p>
            <ul>
              <li><strong>Breite Diversifikation:</strong> Mit einem ETF investierst du automatisch in viele verschiedene Unternehmen</li>
              <li><strong>Niedrige Kosten:</strong> ETFs haben in der Regel sehr geringe laufende Kosten (TER)</li>
              <li><strong>Hohe Transparenz:</strong> Die Zusammensetzung eines ETFs ist jederzeit einsehbar</li>
              <li><strong>Flexibilität:</strong> ETFs können jederzeit während der Börsenöffnungszeiten gehandelt werden</li>
              <li><strong>Einfachheit:</strong> Auch für Einsteiger leicht verständlich und zugänglich</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="empfehlungen" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            subtitle="Meine Top-Empfehlungen"
            title="Die besten ETFs für langfristigen Vermögensaufbau"
            description="Basierend auf meinen persönlichen Erfahrungen und ausführlichen Analysen empfehle ich diese ETFs für einen langfristigen Anlagehorizont."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {etfs.map((etf, index) => (
              <Card key={etf.title} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{etf.title}{etf.isAffiliate && "*"}</CardTitle>
                      <CardDescription className="mt-2">{etf.description}</CardDescription>
                    </div>
                    <div className="flex items-center bg-primary/10 px-2.5 py-1 rounded-full">
                      <span className="text-primary font-semibold">{etf.rating.toFixed(1)}</span>
                      <span className="text-primary ml-1">/5</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {etf.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      to={etf.link}
                      className="group flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      <span>Zum detaillierten Testbericht</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Häufig gestellte Fragen zu ETFs"
            description="Antworten auf die wichtigsten Fragen rund um ETF-Investments"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Thesaurierend oder ausschüttend - was ist besser?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bei thesaurierenden ETFs werden die Dividenden automatisch reinvestiert, was den Zinseszinseffekt maximiert. Ausschüttende ETFs zahlen die Dividenden regelmäßig aus, was einen passiven Einkommensstrom erzeugt. Die Entscheidung hängt von deinen persönlichen Präferenzen ab - für reinen Vermögensaufbau und maximale Rendite sind thesaurierende ETFs in der Regel die bessere Wahl.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Welt-ETF oder separate ETFs für verschiedene Regionen?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ein Welt-ETF wie der Vanguard FTSE All-World bietet mit einem einzigen Produkt eine globale Diversifikation. Separate ETFs für verschiedene Regionen (z.B. Industrieländer + Schwellenländer) ermöglichen mehr Flexibilität bei der Gewichtung. Für Einsteiger und bei kleineren Anlagebeträgen ist ein Welt-ETF oft die einfachere und kostengünstigere Lösung.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Physisch oder synthetisch replizierende ETFs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Physisch replizierende ETFs kaufen die tatsächlichen Aktien des zugrundeliegenden Index und sind für viele Anleger intuitiver verständlich. Synthetisch replizierende ETFs nutzen Swap-Verträge mit Banken, um die Indexperformance abzubilden, was in bestimmten Märkten Steuer- und Kostenvorteile bieten kann. Beide Ansätze sind legitim, aber für Einsteiger sind physisch replizierende ETFs oft die transparentere Wahl.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wie viele ETFs sollte ich im Depot haben?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Weniger ist oft mehr: Ein breit diversifizierter Welt-ETF kann bereits ausreichen, um ein gut diversifiziertes Portfolio aufzubauen. Mit 2-3 ETFs (z.B. Industrieländer, Schwellenländer und eventuell ein Nischen-ETF) lässt sich bereits eine optimale Diversifikation erreichen. Zu viele ETFs führen oft zu Überschneidungen, höheren Kosten und einer komplizierteren Verwaltung, ohne die Diversifikation wesentlich zu verbessern.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Meine ETF-Strategie"
            description="So investiere ich persönlich in ETFs für langfristigen Vermögensaufbau"
          />

          <div className="bg-card rounded-xl shadow-sm border border-border/40 p-6 md:p-8 mt-8">
            <div className="prose max-w-none">
              <p>
                Nach über 15 Jahren Erfahrung mit verschiedenen Anlagestrategien bin ich zu einem sehr einfachen Ansatz zurückgekehrt: Ich investiere den Großteil meines langfristigen Anlagevermögens (etwa 80%) in einen einzigen, breit diversifizierten Welt-ETF - den Vanguard FTSE All-World.
              </p>
              <p>
                Dieser Ansatz bietet mehrere Vorteile:
              </p>
              <ul>
                <li>Maximale Diversifikation über Regionen, Branchen und Unternehmen</li>
                <li>Minimaler Verwaltungsaufwand</li>
                <li>Niedrige Gesamtkosten</li>
                <li>Keine Notwendigkeit für regelmäßige Anpassungen oder Rebalancing</li>
                <li>Emotionale Ruhe durch Einfachheit und Transparenz</li>
              </ul>
              <p>
                Die restlichen 20% meines Portfolios nutze ich für einzelne Aktien, thematische ETFs und andere Anlageklassen wie Kryptowährungen - hier spielt auch mein persönliches Interesse an bestimmten Unternehmen und Trends eine Rolle.
              </p>
              <p>
                Wichtig ist mir vor allem die Kontinuität: Ich investiere jeden Monat einen festen Betrag per Sparplan, unabhängig von der aktuellen Marktlage. Diese Strategie des "Cost-Averaging" hat sich für mich bewährt und nimmt den Stress aus dem Timing des Marktes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ETFs;
