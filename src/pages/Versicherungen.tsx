
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";

const Versicherungen = () => {
  const essentialInsurances = [
    {
      title: "Private Haftpflichtversicherung",
      description: "Der absolute Grundschutz, den jeder haben sollte",
      features: [
        "Schützt vor existenzbedrohenden Schadenersatzforderungen",
        "Deckungssumme von mindestens 10 Millionen Euro empfehlenswert",
        "Kostet nur etwa 50-60€ pro Jahr",
        "Single-Tarife bereits ab ca. 30€ jährlich",
        "Hohe Schadensummen bei Personenschäden möglich"
      ],
      isAffiliate: false,
      rating: 4.9,
      priority: "Sehr hoch",
      link: "/finanzen/versicherungen/haftpflicht"
    },
    {
      title: "Berufsunfähigkeitsversicherung",
      description: "Existenzieller Schutz für deine Arbeitskraft",
      features: [
        "Sichert dein Einkommen bei Krankheit oder Unfall",
        "Idealerweise 70-80% deines Nettoeinkommens absichern",
        "Früher Abschluss spart erheblich Beiträge",
        "Besonders wichtig für Berufstätige ohne Vermögen",
        "Genaue Prüfung der Bedingungen wichtig"
      ],
      isAffiliate: true,
      rating: 4.8,
      priority: "Hoch",
      link: "/finanzen/versicherungen/berufsunfaehigkeit"
    },
    {
      title: "Hausratversicherung",
      description: "Schutz für dein persönliches Eigentum",
      features: [
        "Absicherung deines gesamten beweglichen Eigentums",
        "Schutz bei Einbruch, Feuer, Leitungswasser, Sturm",
        "Neuwerterstattung bei Schäden",
        "Glasversicherung oft inkludierbar",
        "Fahrraddiebstahl als sinnvolle Zusatzoption"
      ],
      isAffiliate: true,
      rating: 4.5,
      priority: "Mittel",
      link: "/finanzen/versicherungen/hausrat"
    }
  ];

  const optionalInsurances = [
    {
      title: "Rechtsschutzversicherung",
      description: "Für kostspielige rechtliche Auseinandersetzungen",
      features: [
        "Übernahme von Anwalts- und Gerichtskosten",
        "Verschiedene Bausteine wählbar (z.B. Verkehr, Beruf, Privat)",
        "Selbstbeteiligung senkt die Prämie deutlich",
        "Wartezeiten bei Neuabschluss beachten",
        "Sinnvoll für streitbare Charaktere"
      ],
      priority: "Individuell",
      link: "/finanzen/versicherungen/rechtsschutz"
    },
    {
      title: "Wohngebäudeversicherung",
      description: "Nur für Immobilienbesitzer relevant",
      features: [
        "Pflicht bei finanzierten Immobilien",
        "Schutz vor Feuer-, Leitungswasser- und Sturmschäden",
        "Elementarschadenversicherung als wichtige Ergänzung",
        "Regelmäßige Anpassung an Baupreisindex empfehlenswert",
        "Grobe Fahrlässigkeit sollte mitversichert sein"
      ],
      priority: "Hoch (für Eigentümer)",
      link: "/finanzen/versicherungen/wohngebaeude"
    }
  ];

  const unnecessaryInsurances = [
    {
      title: "Handy- und Elektronikversicherungen",
      description: "Meist überteuert und mit vielen Ausschlüssen",
      recommendation: "Lieber monatlich für Neuanschaffungen sparen"
    },
    {
      title: "Reisegepäckversicherung",
      description: "Geringe Leistungen bei vielen Ausschlüssen",
      recommendation: "Wertvolle Gegenstände sind oft bereits in der Hausratversicherung abgedeckt"
    },
    {
      title: "Krankenzusatzversicherung für Brillen",
      description: "Hohe Prämien im Verhältnis zur Leistung",
      recommendation: "Besser selbst für eine neue Brille alle paar Jahre ansparen"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Versicherungen – Was du wirklich brauchst"
        subtitle="Meine unabhängigen Empfehlungen zu sinnvollen und überflüssigen Versicherungen - ohne Verkaufsabsicht, dafür mit klaren Prioritäten."
        ctaText="Zu den Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Mein Ansatz zu Versicherungen"
            description="Versicherungen sollen existenzielle Risiken absichern - und nicht jeden kleinen Schaden decken. Mit diesem Prinzip sparst du Geld und bist trotzdem optimal geschützt."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Versicherungen sind wichtig, aber nicht jede angebotene Police ist sinnvoll. Ich verfolge einen minimalistischen Ansatz: Absicherung existenzieller Risiken hat Priorität, alles andere ist optional oder sogar überflüssig.
            </p>
            <p>
              Meine Empfehlungen basieren auf folgenden Grundsätzen:
            </p>
            <ul>
              <li><strong>Existenzielle Risiken absichern:</strong> Ereignisse, die dich finanziell ruinieren könnten, müssen unbedingt versichert werden</li>
              <li><strong>Kleine Schäden selbst tragen:</strong> Für überschaubare Kosten brauchst du keine Versicherung - spare lieber dafür</li>
              <li><strong>Doppelte Absicherungen vermeiden:</strong> Prüfe, was bereits durch andere Policen oder gesetzliche Versicherungen abgedeckt ist</li>
              <li><strong>Bedingungen statt Preis vergleichen:</strong> Bei wichtigen Versicherungen sind die Leistungen und Bedingungen entscheidender als der Preis</li>
              <li><strong>Regelmäßig überprüfen:</strong> Lebenssituationen ändern sich - und damit auch dein Versicherungsbedarf</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="empfehlungen" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            subtitle="Die wichtigsten Policen"
            title="Diese Versicherungen sollte jeder haben"
            description="Die folgenden Versicherungen bilden die Basis eines vernünftigen Versicherungsschutzes für die meisten Menschen."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {essentialInsurances.map((insurance, index) => (
              <Card key={insurance.title} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full mr-2">
                          Priorität: {insurance.priority}
                        </span>
                      </div>
                      <CardTitle>{insurance.title}{insurance.isAffiliate && "*"}</CardTitle>
                      <CardDescription className="mt-2">{insurance.description}</CardDescription>
                    </div>
                    <div className="flex items-center bg-primary/10 px-2.5 py-1 rounded-full">
                      <span className="text-primary font-semibold">{insurance.rating.toFixed(1)}</span>
                      <span className="text-primary ml-1">/5</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {insurance.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      to={insurance.link}
                      className="group flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      <span>Mehr erfahren</span>
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
            subtitle="Individuell prüfen"
            title="Diese Versicherungen können sinnvoll sein"
            description="Je nach Lebenssituation können folgende Versicherungen eine sinnvolle Ergänzung darstellen."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {optionalInsurances.map((insurance, index) => (
              <Card key={insurance.title} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mr-2">
                          Priorität: {insurance.priority}
                        </span>
                      </div>
                      <CardTitle>{insurance.title}</CardTitle>
                      <CardDescription className="mt-2">{insurance.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {insurance.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-600 shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      to={insurance.link}
                      className="group flex items-center text-amber-700 hover:text-amber-600 font-medium"
                    >
                      <span>Mehr erfahren</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            subtitle="Geldverschwendung vermeiden"
            title="Diese Versicherungen brauchst du nicht"
            description="Meine Erfahrung zeigt: Folgende Versicherungen haben ein schlechtes Preis-Leistungs-Verhältnis und sind für die meisten Menschen überflüssig."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {unnecessaryInsurances.map((insurance, index) => (
              <Card key={insurance.title} className="h-full hover:bg-red-50/30 transition-colors duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full mr-2">
                      Nicht empfohlen
                    </span>
                  </div>
                  <CardTitle className="text-xl">{insurance.title}</CardTitle>
                  <CardDescription>{insurance.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-red-500 shrink-0 mr-2 mt-0.5" />
                    <span className="text-sm font-medium text-red-800">{insurance.recommendation}</span>
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
            title="Häufig gestellte Fragen"
            description="Antworten auf die wichtigsten Fragen zum Thema Versicherungen"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Wie finde ich den besten Versicherungstarif?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Vergleichsportale bieten einen guten ersten Überblick, zeigen aber nicht alle Anbieter. Für wichtige Versicherungen wie die Berufsunfähigkeitsversicherung empfehle ich einen Honorarberater, der unabhängig und nicht provisionsgetrieben berät. Bei einfacheren Produkten wie Haftpflicht oder Hausrat reicht oft ein Online-Vergleich. Achte neben dem Preis vor allem auf die Bedingungen und Leistungen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sollte ich alle Versicherungen bei einem Anbieter bündeln?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bündelrabatte sind verlockend, aber selten der beste Weg. Jeder Versicherer hat Stärken und Schwächen in verschiedenen Sparten. Besser ist es, für jede wichtige Versicherung den individuell besten Anbieter zu wählen. Bei zusammenhängenden Versicherungen wie Privathaftpflicht und Hausrat kann eine Bündelung jedoch sinnvoll sein, um Deckungslücken oder Doppelversicherungen zu vermeiden.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wann sollte ich meine Versicherungen überprüfen?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Überprüfe deine Versicherungen mindestens alle zwei bis drei Jahre oder bei wichtigen Lebensereignissen wie Heirat, Geburt eines Kindes, Hauskauf oder Berufswechsel. Diese Änderungen können neuen Versicherungsbedarf auslösen oder bestehende Policen überflüssig machen. Auch bei deutlichen Beitragserhöhungen lohnt sich ein Vergleich.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wie kündige ich eine Versicherung richtig?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Die meisten Versicherungen haben eine Kündigungsfrist von drei Monaten zum Jahresende. Prüfe das genaue Datum in deiner Police. Die Kündigung sollte immer schriftlich per Einschreiben erfolgen und deine Versicherungsnummer enthalten. Wichtig: Kündige existenzielle Versicherungen wie die Haftpflicht oder Berufsunfähigkeitsversicherung nie, bevor du einen neuen, besseren Vertrag sicher abgeschlossen hast.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Versicherungen;
