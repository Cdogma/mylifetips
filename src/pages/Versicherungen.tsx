
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";

const Versicherungen = () => {
  const importantInsurances = [
    {
      title: "Private Haftpflichtversicherung",
      description: "Der absolute Grundschutz für jeden - schützt dich vor existenzbedrohenden Schadenersatzforderungen",
      provider: "HUK24 Privathaftpflicht Premium",
      features: [
        "50 Millionen € Deckungssumme pauschal für Personen- und Sachschäden",
        "Sehr günstige Jahresprämie ab 45€",
        "Inklusive Schlüsselverlust und Mietsachschäden",
        "Forderungsausfalldeckung ohne Mindestschadenhöhe",
        "Besonders kundenfreundliche Schadenregulierung"
      ],
      priority: "Sehr hoch",
      isAffiliate: true,
      rating: 4.9,
      link: "/finanzen/versicherungen/private-haftpflicht"
    },
    {
      title: "Berufsunfähigkeitsversicherung",
      description: "Schutz deines Einkommens bei Krankheit oder Unfall - eine der wichtigsten Versicherungen im Berufsleben",
      provider: "Allianz BU Invest Plus",
      features: [
        "Absicherung von bis zu 80% deines Nettoeinkommens",
        "Abstrakte Verweisung ausgeschlossen",
        "Nachversicherungsgarantie ohne erneute Gesundheitsprüfung",
        "Infektionsklausel für medizinische Berufe",
        "Weltweiter Schutz ohne zeitliche Begrenzung"
      ],
      priority: "Hoch",
      isAffiliate: true,
      rating: 4.8,
      link: "/finanzen/versicherungen/berufsunfaehigkeit"
    },
    {
      title: "Rechtsschutzversicherung",
      description: "Schutz vor hohen Anwalts- und Gerichtskosten in rechtlichen Auseinandersetzungen",
      provider: "ARAG Rechtsschutz Aktiv",
      features: [
        "Umfassender Schutz für Privat, Beruf und Verkehr",
        "Mediation und außergerichtliche Konfliktlösung inklusive",
        "Online-Rechtsberatung und telefonische Erstberatung",
        "Weltweiter Schutz mit angemessenen Deckungssummen",
        "Flexible Selbstbeteiligung wählbar"
      ],
      priority: "Mittel",
      isAffiliate: false,
      rating: 4.6,
      link: "/finanzen/versicherungen/rechtsschutz"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Die wichtigsten Versicherungen im Überblick"
        subtitle="Welche Versicherungen du wirklich brauchst und welche du dir sparen kannst - meine unabhängigen Empfehlungen für optimalen Versicherungsschutz."
        ctaText="Zu den Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Warum der richtige Versicherungsschutz wichtig ist"
            description="Ein durchdachtes Versicherungskonzept schützt dich vor existenzbedrohenden Risiken, ohne dass du für unnötige Policen zu viel bezahlst."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Viele Menschen sind entweder über- oder unterversichert. Sie haben Policen, die sie nicht brauchen, während echte Risiken ungeschützt bleiben. Mein Ansatz ist es, nur die wirklich notwendigen Versicherungen zu empfehlen und dabei auf ein optimales Preis-Leistungs-Verhältnis zu achten.
            </p>
            <p>
              Bei der Auswahl deiner Versicherungen solltest du folgende Prinzipien beachten:
            </p>
            <ul>
              <li><strong>Existenzbedrohende Risiken zuerst absichern:</strong> Fokussiere dich auf Versicherungen, die dich vor finanziellen Katastrophen schützen</li>
              <li><strong>Kleine Schäden selbst tragen:</strong> Versichere keine Bagatellschäden, die du aus eigener Tasche bezahlen könntest</li>
              <li><strong>Auf ausreichende Deckungssummen achten:</strong> Gerade bei Haftpflichtversicherungen sind hohe Deckungssummen wichtig</li>
              <li><strong>Selbstbeteiligungen nutzen:</strong> Mit Selbstbeteiligung kannst du die Prämien oft deutlich senken</li>
              <li><strong>Regelmäßig Policen überprüfen:</strong> Überprüfe deine Versicherungen alle 2-3 Jahre auf bessere Konditionen</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="empfehlungen" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            subtitle="Meine Top-Empfehlungen"
            title="Diese Versicherungen brauchst du wirklich"
            description="Basierend auf meinen persönlichen Erfahrungen und ausführlichen Analysen empfehle ich diese Versicherungen."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {importantInsurances.map((insurance, index) => (
              <Card key={insurance.title} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm font-medium text-primary">Priorität: {insurance.priority}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{insurance.title}</CardTitle>
                      <CardDescription className="mt-2">{insurance.description}</CardDescription>
                    </div>
                    <div className="flex items-center bg-primary/10 px-2.5 py-1 rounded-full">
                      <span className="text-primary font-semibold">{insurance.rating.toFixed(1)}</span>
                      <span className="text-primary ml-1">/5</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm font-medium mb-3">Top-Anbieter: {insurance.provider}{insurance.isAffiliate && "*"}</p>
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
            title="Versicherungen nach Lebensphasen"
            description="Je nach Lebensphase verändern sich deine Versicherungsbedürfnisse"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Berufseinsteiger & Singles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span><strong>Private Haftpflicht:</strong> Absolutes Muss</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span><strong>Berufsunfähigkeitsversicherung:</strong> Jetzt günstig abschließen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span><strong>Hausratversicherung:</strong> Bei wertvollem Inventar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span><strong>Auslandskrankenversicherung:</strong> Für Reisen</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Familien mit Kindern</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span><strong>Familien-Haftpflicht:</strong> Mit Kinderschutz</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span><strong>Berufsunfähigkeitsversicherung:</strong> Für Hauptverdiener</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span><strong>Risikolebensversicherung:</strong> Für finanzielle Absicherung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span><strong>Rechtsschutzversicherung:</strong> Mit Familientarif</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Immobilienbesitzer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span><strong>Wohngebäudeversicherung:</strong> Mit Elementarschadenschutz</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span><strong>Haus- und Grundbesitzerhaftpflicht:</strong> Bei vermieteten Objekten</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span><strong>Bauherrenhaftpflicht:</strong> Bei Bauvorhaben</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span><strong>Erweiterte Rechtsschutzversicherung:</strong> Mit Grundstücksrecht</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Häufig gestellte Fragen"
            description="Antworten auf die wichtigsten Fragen rund um Versicherungen"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Kann ich doppelt versichert sein?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bei Schadenversicherungen wie Haftpflicht oder Hausrat gilt das Bereicherungsverbot: Du kannst keinen Schaden mehrfach erstattet bekommen. Bei Personenversicherungen wie Berufsunfähigkeit oder Unfallversicherung kannst du hingegen mehrere Policen haben und im Leistungsfall auch mehrfach Leistungen erhalten. Prüfe also genau, ob du bestimmte Versicherungen wirklich doppelt benötigst.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sollte ich Selbstbeteiligung wählen?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In den meisten Fällen lohnt sich eine Selbstbeteiligung. Durch den Verzicht auf die Erstattung kleiner Schäden kannst du die Prämie oft deutlich senken. Bei einer Hausratversicherung kann eine Selbstbeteiligung von 150-300€ die Prämie um 10-20% reduzieren. Auch bei der Rechtsschutzversicherung führt eine Selbstbeteiligung von 150-300€ zu erheblich günstigeren Beiträgen. Bei der Haftpflichtversicherung ist die Ersparnis durch eine Selbstbeteiligung hingegen oft gering.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Online-Versicherung oder lokaler Makler?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Online-Versicherungen bieten oft günstigere Prämien und moderne digitale Services. Ein guter lokaler Makler bietet hingegen persönliche Beratung und Unterstützung im Schadenfall. Bei komplexen Versicherungen wie BU oder Krankenversicherung kann persönliche Beratung wertvoll sein. Bei Standardprodukten wie Haftpflicht oder Hausrat fahren Preisbewusste mit Online-Anbietern meist besser. Ein Kompromiss sind Online-Makler, die günstige Tarife und grundlegende Beratung kombinieren.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wie oft sollte ich Versicherungen vergleichen?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ein regelmäßiger Versicherungs-Check alle 2-3 Jahre ist sinnvoll. Der Versicherungsmarkt entwickelt sich ständig weiter: Neue Tarife bieten bessere Leistungen zu günstigeren Preisen, während ältere Verträge oft teurer werden. Besonders bei Sachversicherungen wie Hausrat, Kfz und Rechtsschutz lohnt ein Vergleich. Bei langfristigen Verträgen wie BU oder privater Krankenversicherung ist ein Wechsel komplizierter und sollte gut durchdacht sein. Nutze Vergleichsportale oder unabhängige Berater für einen neutralen Überblick.
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
