
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const ETFs = () => {
  const recommendedEtfs = [
    {
      title: "Vanguard FTSE All-World UCITS ETF",
      description: "Der perfekte ETF für Einsteiger mit weltweiter Streuung und günstiger TER",
      features: [
        "Über 3.500 Unternehmen aus Industrie- und Schwellenländern",
        "Sehr niedrige Gesamtkostenquote (TER) von 0,22%",
        "Physisch replizierend mit vollständiger Replikation",
        "Thesaurierend oder ausschüttend erhältlich",
        "Hohe Liquidität und geringe Tracking Difference"
      ],
      isAffiliate: true,
      rating: 4.9,
      link: "/finanzen/etfs/vanguard-ftse-all-world"
    },
    {
      title: "iShares Core MSCI World UCITS ETF",
      description: "Solider ETF für Industrieländer mit hoher Marktkapitalisierung und niedrigen Kosten",
      features: [
        "Über 1.500 Unternehmen aus Industrieländern",
        "Sehr günstige Gesamtkostenquote (TER) von 0,20%",
        "Physisch replizierend mit optimierter Stichprobenbildung",
        "Thesaurierend, ideal für langfristigen Vermögensaufbau",
        "Sehr hohes Fondsvolumen mit über 40 Mrd. EUR"
      ],
      isAffiliate: true,
      rating: 4.7,
      link: "/finanzen/etfs/ishares-core-msci-world"
    },
    {
      title: "Xtrackers MSCI USA UCITS ETF",
      description: "Fokussierter ETF auf den US-Markt für höhere Renditechancen",
      features: [
        "Über 600 US-amerikanische Unternehmen",
        "Attraktive Gesamtkostenquote (TER) von 0,12%",
        "Physisch replizierend für optimale Indexabbildung",
        "Überdurchschnittliche historische Renditen",
        "Ideal für Anleger mit Schwerpunkt auf US-Markt"
      ],
      isAffiliate: false,
      rating: 4.6,
      link: "/finanzen/etfs/xtrackers-msci-usa"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Die besten ETFs für langfristigen Vermögensaufbau"
        subtitle="Meine persönlichen Empfehlungen für kostengünstige ETFs mit breiter Diversifikation - ideal für Einsteiger und langfristig orientierte Anleger."
        ctaText="Zu den Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Warum ETFs die beste Wahl für die meisten Anleger sind"
            description="ETFs (Exchange Traded Funds) bieten eine kostengünstige und einfache Möglichkeit, in breit gestreute Aktienkörbe zu investieren."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              ETFs haben in den letzten Jahren die Welt der Geldanlage revolutioniert. Sie ermöglichen auch Kleinanlegern mit geringem Budget, von den Renditen des Aktienmarktes zu profitieren und dabei breit diversifiziert zu sein.
            </p>
            <p>
              Die wichtigsten Vorteile von ETFs sind:
            </p>
            <ul>
              <li><strong>Niedrige Kosten:</strong> ETFs haben deutlich geringere Gebühren als aktiv gemanagte Fonds</li>
              <li><strong>Breite Diversifikation:</strong> Mit einem einzigen ETF kannst du in Hunderte oder Tausende von Unternehmen investieren</li>
              <li><strong>Transparenz:</strong> Die Zusammensetzung von ETFs ist jederzeit einsehbar</li>
              <li><strong>Flexibilität:</strong> ETFs können jederzeit zum aktuellen Kurs gehandelt werden</li>
              <li><strong>Einfachheit:</strong> Keine komplexen Anlageentscheidungen notwendig</li>
            </ul>
            <p>
              Bei der Auswahl des richtigen ETFs solltest du besonders auf folgende Faktoren achten:
            </p>
            <ul>
              <li><strong>Kosten (TER):</strong> Je niedriger, desto besser für deine langfristige Rendite</li>
              <li><strong>Indexauswahl:</strong> Weltweite Streuung oder gezielter Fokus je nach Anlagestrategie</li>
              <li><strong>Replikationsmethode:</strong> Physisch ist meist vorzuziehen gegenüber synthetisch</li>
              <li><strong>Fondsvolumen:</strong> Größere ETFs bieten mehr Sicherheit und Liquidität</li>
              <li><strong>Ausschüttungsart:</strong> Thesaurierend für Vermögensaufbau, ausschüttend für Einkommen</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="empfehlungen" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            subtitle="Meine Top-Empfehlungen"
            title="Die besten ETFs im Vergleich"
            description="Basierend auf meinen persönlichen Erfahrungen und ausführlichen Analysen empfehle ich diese ETFs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedEtfs.map((etf, index) => (
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
                      <span>Zum Testbericht</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-card rounded-lg p-6 border border-border/50 shadow-sm">
            <p className="text-sm text-muted-foreground">
              <strong>Hinweis:</strong> Mit * gekennzeichnete Links sind Affiliate-Links. Wenn du über diese Links ein Produkt kaufst oder einen Dienst abonnierst, erhalte ich eine kleine Provision. Für dich entstehen dabei keine zusätzlichen Kosten. Diese Provisionen helfen mir, diese Website zu betreiben und weiterhin kostenlose Inhalte zu erstellen.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="ETF-Strategien für verschiedene Anlegertypen"
            description="Je nach deinen persönlichen Zielen und deiner Risikobereitschaft gibt es unterschiedliche ETF-Strategien"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Für Einsteiger: Der All-World ETF</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ein einzelner global diversifizierter ETF wie der Vanguard FTSE All-World ist die perfekte Lösung für Einsteiger. Du investierst mit einem einzigen Produkt in über 3.500 Unternehmen weltweit und musst dich um nichts weiter kümmern.
                </p>
                <p className="text-muted-foreground">
                  Diese Strategie ist extrem einfach, kostengünstig und hat historisch solide Renditen von etwa 7-8% pro Jahr geliefert.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Für Fortgeschrittene: Core-Satellite</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Bei der Core-Satellite-Strategie bildest du mit einem breit gestreuten Welt-ETF den Kern (Core) deines Portfolios, z.B. mit 70% deines Kapitals. Die restlichen 30% investierst du in Satelliten-ETFs für spezielle Länder, Branchen oder Themen.
                </p>
                <p className="text-muted-foreground">
                  So kannst du deine persönlichen Überzeugungen abbilden, ohne das Gesamtrisiko zu stark zu erhöhen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Für Risikoaverse: Mit Anleihen-ETFs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Wenn dir das Risiko von 100% Aktien zu hoch ist, kannst du einen Teil deines Portfolios in Anleihen-ETFs investieren. Eine klassische Aufteilung wäre z.B. 60% Aktien-ETFs und 40% Anleihen-ETFs.
                </p>
                <p className="text-muted-foreground">
                  Diese Strategie reduziert die Schwankungen deines Portfolios, allerdings auf Kosten der langfristigen Rendite.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Häufig gestellte Fragen"
            description="Antworten auf die wichtigsten Fragen rund um ETFs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Wie viel Rendite kann ich mit ETFs erwarten?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Historisch betrachtet haben globale Aktien-ETFs langfristig (15+ Jahre) eine durchschnittliche jährliche Rendite von etwa a7-8% erzielt. Diese Rendite ist jedoch nicht garantiert und kann von Jahr zu Jahr stark schwanken. Es gab Phasen mit deutlich höheren Renditen, aber auch Jahre mit negativen Ergebnissen. ETFs sind daher vor allem für langfristige Anlagezeiträume geeignet.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Thesaurierend oder ausschüttend wählen?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Thesaurierende ETFs reinvestieren die Dividenden automatisch, was den Zinseszinseffekt verstärkt und steuerlich effizienter ist. Ausschüttende ETFs zahlen die Dividenden regelmäßig aus, was für Anleger interessant sein kann, die regelmäßige Einnahmen wünschen. Für den langfristigen Vermögensaufbau sind thesaurierende ETFs in der Regel die bessere Wahl, es sei denn, du möchtest den Freibetrag von 1.000€ pro Jahr ausnutzen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Was ist der ideale Sparplan-Rhythmus?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Aus Kostensicht ist ein monatlicher Sparrhythmus in der Regel optimal, da viele Broker kostenlose monatliche Ausführungen anbieten. Aus Rendite-Sicht haben Studien gezeigt, dass die Unterschiede zwischen monatlichen, vierteljährlichen oder jährlichen Sparplänen langfristig minimal sind. Wichtiger als der Rhythmus ist die Regelmäßigkeit und Disziplin beim Sparen. Wähle daher den Rhythmus, der am besten zu deinem Einkommensfluss und deiner persönlichen Präferenz passt.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wie hoch sollte meine ETF-Sparrate sein?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Als Faustregel gilt: Versuche mindestens 10-15% deines Nettoeinkommens zu investieren. Starter können mit kleineren Beträgen beginnen und ihre Sparrate im Laufe der Zeit steigern. Wichtig ist, dass deine Sparrate zu deiner finanziellen Situation passt und du sie langfristig durchhalten kannst. Selbst kleine Beträge können dank des Zinseszinseffekts über Jahrzehnte zu beachtlichen Summen anwachsen. Bei den meisten Brokern kannst du bereits ab 25€ monatlich in ETFs investieren.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ETFs;
