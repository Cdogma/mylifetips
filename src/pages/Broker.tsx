
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const Broker = () => {
  const brokers = [
    {
      title: "Trade Republic",
      description: "Der günstige Broker für Einsteiger mit intuitiver App und breitem Anlageuniversum",
      features: [
        "Keine Grundgebühr & nur 1€ pro Trade",
        "ETF-Sparpläne kostenlos besparbar",
        "Einfache und intuitive App",
        "Schnelle Kontoeröffnung per Video-Ident",
        "Jetzt auch mit Tagesgeld zu 4% p.a."
      ],
      isAffiliate: true,
      rating: 4.8,
      link: "/finanzen/broker/trade-republic"
    },
    {
      title: "Scalable Capital",
      description: "Der flexible Allrounder mit großer ETF-Auswahl und attraktiven Sparplänen",
      features: [
        "Über 2.000 ETFs kostenlos besparbar",
        "PRIME-Flat für unbegrenzte Trades ab 2,99€ mtl.",
        "Desktop- und Mobile-Version",
        "Diverse Ordertypen für Fortgeschrittene",
        "Einbindung von Realtime-Kursen möglich"
      ],
      isAffiliate: true,
      rating: 4.7,
      link: "/finanzen/broker/scalable-capital"
    },
    {
      title: "ING",
      description: "Der bewährte Broker einer etablierten Bank mit umfangreichem Serviceangebot",
      features: [
        "Kostenloser Aktien- und ETF-Handel für Neukunden",
        "Große Auswahl an Handelsplätzen",
        "Umfangreiches Informations- und Analyseangebot",
        "Direkter Kontakt per Telefon und Filiale möglich",
        "Integriertes Banking mit einem der besten Girokonten"
      ],
      isAffiliate: false,
      rating: 4.5,
      link: "/finanzen/broker/ing"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Die besten Broker für deine Geldanlage"
        subtitle="Meine persönlichen Erfahrungen und Empfehlungen für zuverlässige und kostengünstige Broker - perfekt für Einsteiger und erfahrene Anleger."
        ctaText="Zu den Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Worauf es bei der Brokerwahl ankommt"
            description="Die Wahl des richtigen Brokers kann einen erheblichen Einfluss auf deine Rendite und Anlageerfahrung haben."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Ein guter Broker sollte nicht nur günstig sein, sondern auch eine breite Auswahl an Anlagemöglichkeiten, eine benutzerfreundliche Plattform und zuverlässigen Service bieten. Besonders für Einsteiger ist die Einfachheit der Plattform ein wichtiger Faktor.
            </p>
            <p>
              Bei meiner Bewertung der verschiedenen Broker achte ich besonders auf:
            </p>
            <ul>
              <li><strong>Kosten:</strong> Grundgebühren, Orderkosten, Depotgebühren, Sparpläne</li>
              <li><strong>Anlageangebot:</strong> Aktien, ETFs, Fonds, Anleihen, Zertifikate, Kryptowährungen</li>
              <li><strong>Benutzerfreundlichkeit:</strong> App, Webplattform, Ordermaske, Übersichtlichkeit</li>
              <li><strong>Service:</strong> Erreichbarkeit, Hilfestellungen, Bildungsangebote, Informationen</li>
              <li><strong>Sicherheit:</strong> Einlagensicherung, Regulierung, Transparenz</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="empfehlungen" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            subtitle="Meine Top-Empfehlungen"
            title="Die besten Broker im Vergleich"
            description="Basierend auf meinen persönlichen Erfahrungen und ausführlichen Tests empfehle ich diese Broker."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brokers.map((broker, index) => (
              <Card key={broker.title} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{broker.title}{broker.isAffiliate && "*"}</CardTitle>
                      <CardDescription className="mt-2">{broker.description}</CardDescription>
                    </div>
                    <div className="flex items-center bg-primary/10 px-2.5 py-1 rounded-full">
                      <span className="text-primary font-semibold">{broker.rating.toFixed(1)}</span>
                      <span className="text-primary ml-1">/5</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {broker.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      to={broker.link}
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
            title="Häufig gestellte Fragen"
            description="Antworten auf die wichtigsten Fragen rund um Broker und Depots"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Wie sicher sind Online-Broker?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In Deutschland regulierte Broker unterliegen strengen Sicherheitsstandards. Deine Wertpapiere sind Sondervermögen und bei einer Insolvenz des Brokers geschützt. Zusätzlich gibt es für Geldeinlagen auf dem Verrechnungskonto die gesetzliche Einlagensicherung bis 100.000€ sowie häufig freiwillige Einlagensicherungssysteme, die darüber hinausgehen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Muss ich versteuern, wenn ich wechsle?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nein, bei einem Depotwechsel werden deine Wertpapiere in der Regel übertragen und nicht verkauft, daher fallen keine Steuern an. Dies nennt man Depotübertrag. Es ist wichtig, dass du dabei die korrekten Einstandswerte (Anschaffungskosten) übermittelst, damit deine Steuerberechnung bei späteren Verkäufen korrekt ist.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kann ich mehrere Depots haben?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ja, du kannst problemlos mehrere Depots bei verschiedenen Brokern führen. Dies kann sinnvoll sein, um verschiedene Vorteile zu nutzen (z.B. kostenlose ETF-Sparpläne bei einem Broker, günstige Einzelaktien-Trades bei einem anderen). Beachte aber, dass dies die Verwaltung deiner Anlagen komplexer macht und du den Überblick behalten musst.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Neo-Broker vs. traditionelle Banken?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Neo-Broker wie Trade Republic oder Scalable Capital bieten meist deutlich günstigere Konditionen und moderne, intuitive Apps, während traditionelle Banken oft ein breiteres Angebot an Produkten, persönliche Beratung und mehr Handelsplätze bieten. Für Einsteiger und preisbewusste Anleger sind Neo-Broker meist die bessere Wahl, erfahrene Anleger mit speziellen Bedürfnissen können von den erweiterten Optionen traditioneller Anbieter profitieren.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Broker;
