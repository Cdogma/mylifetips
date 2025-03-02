
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Check, CircleDollarSign, BadgePercent } from "lucide-react";

const Broker = () => {
  const brokers = [
    {
      title: "Scalable Capital",
      description: "Der Allrounder mit Top-App und günstigen Konditionen",
      monthlyCost: "0€ oder 2,99€ (PRIME)",
      tradingFees: "Ab 0€ pro Order",
      specialFeatures: [
        "Sehr benutzerfreundliche App und Desktop-Version",
        "Große ETF-Auswahl (2.000+) und viele Sparpläne kostenlos",
        "Trading mit Derivaten und Kryptowährungen möglich",
        "Kostenlose VISA-Debitkarte mit Cashback",
        "Ab 2,99€/Monat PRIME mit weiteren Vorteilen"
      ],
      icon: <BarChart3 className="h-8 w-8" />,
      isAffiliate: true,
      rating: 4.8,
      link: "/finanzen/broker/scalable-capital"
    },
    {
      title: "Trade Republic",
      description: "Der Smartphone-Broker mit Niedrigpreisen",
      monthlyCost: "0€",
      tradingFees: "1€ pro Order",
      specialFeatures: [
        "Sehr einfache Nutzung für Einsteiger",
        "Mehr als 4.000 kostenlose ETF-Sparpläne",
        "Aktien, Derivate und Kryptowährungen handelbar",
        "Attraktive Zinsen auf Einlagen (aktuell 2-4%)",
        "Nur als App verfügbar (kein Desktop)"
      ],
      icon: <CircleDollarSign className="h-8 w-8" />,
      isAffiliate: true,
      rating: 4.7,
      link: "/finanzen/broker/trade-republic"
    },
    {
      title: "Smartbroker+",
      description: "Der Broker mit großem Handelsplatzangebot",
      monthlyCost: "0€",
      tradingFees: "Ab 0€ pro Order",
      specialFeatures: [
        "Umfangreiches Angebot an Handelsplätzen",
        "Niedrige Ordergebühren (0€ ab 500€ an gettex/LS)",
        "Große Auswahl an kostenlosen ETF-Sparplänen",
        "Zugang zu ausländischen Börsen",
        "Derivate-Handel und Fonds zu günstigen Konditionen"
      ],
      icon: <BadgePercent className="h-8 w-8" />,
      isAffiliate: false,
      rating: 4.5,
      link: "/finanzen/broker/smartbroker"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Die besten Broker für deine Investments"
        subtitle="Günstige Ordergebühren, umfangreiche Handelsplätze und benutzerfreundliche Apps - finde den perfekten Broker für deine Anlagestrategie."
        ctaText="Zu den Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Warum der richtige Broker entscheidend ist"
            description="Ein guter Broker kann den Unterschied zwischen einer erfolgreichen und einer teuren Anlagestrategie ausmachen."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Die Wahl des richtigen Brokers ist ein entscheidender Schritt für jeden Anleger. Nicht nur die Kosten, sondern auch die verfügbaren Produkte, die Benutzerfreundlichkeit und der Kundenservice spielen eine wichtige Rolle. In den letzten Jahren hat der Wettbewerb unter Brokern zu einer erheblichen Verbesserung der Angebote geführt - viele Neobroker bieten heute komplett kostenlose Depots und sehr günstige Ordergebühren an.
            </p>
            <p>
              Bei meinen Tests bewerte ich Broker nach folgenden Kriterien:
            </p>
            <ul>
              <li><strong>Kosten:</strong> Depotgebühren, Ordergebühren, Sparpläne, versteckte Kosten</li>
              <li><strong>Produktangebot:</strong> Verfügbare Wertpapiere, ETFs, Fonds, Derivate, Kryptowährungen</li>
              <li><strong>Handelsplätze:</strong> Auswahl an Börsen und außerbörslichen Handelsplätzen</li>
              <li><strong>Benutzerfreundlichkeit:</strong> App-Qualität, Desktop-Erfahrung, Übersichtlichkeit</li>
              <li><strong>Extras:</strong> Zinsen auf Einlagen, Kreditkarten, Cashback-Programme</li>
            </ul>
            <p>
              Je nach deiner persönlichen Anlagestrategie können unterschiedliche Broker die beste Wahl sein. Für Einsteiger und Langzeitanleger ist oft ein Broker mit einfacher Bedienung und kostenlosen ETF-Sparplänen optimal. Für aktive Trader sind hingegen niedrige Ordergebühren und eine umfassende Chartanalyse wichtiger.
            </p>
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
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {broker.icon}
                    </div>
                  </div>
                  <CardTitle>{broker.title}{broker.isAffiliate && "*"}</CardTitle>
                  <CardDescription className="mt-2">{broker.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Monatliche Kosten</p>
                      <p className="font-semibold">{broker.monthlyCost}</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Ordergebühren</p>
                      <p className="font-semibold">{broker.tradingFees}</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium mb-2">Besondere Vorteile:</p>
                  <ul className="space-y-2">
                    {broker.specialFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="border-t pt-6">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center">
                      <span className="text-sm text-muted-foreground">Bewertung: {broker.rating.toFixed(1)}/5.0</span>
                    </div>
                    <Link
                      to={broker.link}
                      className="group flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      <span>Zum Testbericht</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </CardFooter>
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
            title="Tipps für die Broker-Wahl"
            description="Worauf du bei der Auswahl eines Brokers achten solltest"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Was ist wichtiger: Niedrige Kosten oder mehr Service?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Diese Frage hängt stark von deiner Anlagestrategie ab. Für langfristige ETF-Sparer, die nur wenige Transaktionen durchführen, sind niedrige laufende Kosten entscheidend. Für aktive Trader können zusätzliche Analysetools und schnelle Order-Ausführung den Aufpreis wert sein. Beachte auch, dass günstige Broker oft nur begrenzte Handelsplätze anbieten, was zu schlechteren Kursen führen kann.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Neobroker vs. traditionelle Banken - was ist besser?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Neobroker wie Trade Republic oder Scalable Capital bieten in der Regel deutlich günstigere Konditionen als traditionelle Banken. Allerdings ist ihr Angebot oft eingeschränkter, und sie bieten meist keinen persönlichen Kundenservice. Direktbanken wie ING oder comdirect liegen preislich dazwischen und bieten sowohl digitale Lösungen als auch mehr Service. Die beste Wahl hängt von deinen individuellen Bedürfnissen ab.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Worauf bei ETF-Sparplänen achten?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Wenn du regelmäßig in ETFs investieren möchtest, achte nicht nur darauf, ob Sparpläne kostenlos angeboten werden, sondern auch auf die Auswahl. Wichtig ist, dass die bekanntesten und beliebtesten ETFs (z.B. MSCI World, FTSE All-World) als kostenlose Sparpläne verfügbar sind. Achte auch auf die möglichen Sparintervalle und Mindestbeträge, die zu deinen finanziellen Möglichkeiten passen sollten.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wie sicher sind Online-Broker?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In Deutschland unterliegen alle Broker strengen Regulierungen und Aufsichten. Deine Wertpapiere sind Sondervermögen und im Falle einer Insolvenz des Brokers geschützt. Zusätzlich greift die gesetzliche Einlagensicherung bis zu 100.000€ für Bargeldguthaben. Achte jedoch darauf, dass dein Broker eine deutsche Banklizenz hat oder unter EU-Regulierung steht. Bei seriösen deutschen Brokern musst du dir grundsätzlich keine Sorgen um die Sicherheit deiner Anlagen machen.
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
