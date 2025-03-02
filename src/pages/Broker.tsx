
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const Broker = () => {
  const brokers = [
    {
      title: "Scalable Capital",
      description: "Der moderne Broker mit 0€ Ordergebühren und großer ETF-Auswahl",
      features: [
        "Kostenloses Depot mit 0€ Ordergebühr bei ETF-Sparplänen",
        "Über 2.000 kostenlose ETF-Sparpläne",
        "Prime+ Flatrate für unbegrenzt kostenlose Trades für 4,99€/Monat",
        "Einfache und intuitive App",
        "Schnelle Depoteröffnung vollständig digital"
      ],
      isAffiliate: true,
      rating: 4.7,
      link: "/finanzen/broker/scalable-capital"
    },
    {
      title: "Trade Republic",
      description: "Der Smartphone-Broker mit minimalen Gebühren für Einsteiger und Fortgeschrittene",
      features: [
        "Kostenlose Depotführung ohne Mindesteinlage",
        "1€ Fremdkostenpauschale pro Trade",
        "Über 4.000 kostenlose ETF-Sparpläne",
        "Handel mit Aktien, ETFs, Derivaten und Kryptowährungen",
        "Tagesgeldkonto mit attraktiven Zinsen"
      ],
      isAffiliate: true,
      rating: 4.6,
      link: "/finanzen/broker/trade-republic"
    },
    {
      title: "ING",
      description: "Der zuverlässige Allrounder mit umfangreichem Informationsangebot",
      features: [
        "Kostenloses Depot ab 0€ für Neukunden",
        "Kostenlose ETF-Sparpläne",
        "Umfangreiche Analysetools und Marktdaten",
        "Breites Angebot an handelbaren Wertpapieren",
        "Zuverlässiger Kundenservice"
      ],
      isAffiliate: false,
      rating: 4.3,
      link: "/finanzen/broker/ing"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Die besten Broker 2024"
        subtitle="Meine persönlichen Erfahrungen und Empfehlungen für deinen optimalen Broker - mit fairen Gebühren, intuitivem Interface und breitem Angebot."
        ctaText="Zu den Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Warum der richtige Broker wichtig ist"
            description="Ein guter Broker sollte deine Anlagestrategie unterstützen und dir mit fairen Gebühren, einer benutzerfreundlichen Oberfläche und einem breiten Angebot den Einstieg in die Welt der Geldanlage erleichtern."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Der Markt für Online-Broker hat sich in den letzten Jahren stark verändert. Während traditionelle Banken oft noch hohe Gebühren für Wertpapiertransaktionen verlangen, gibt es mittlerweile zahlreiche günstige Neo-Broker, die den Einstieg in die Welt der Aktien und ETFs deutlich erleichtern.
            </p>
            <p>
              Bei der Auswahl des richtigen Brokers solltest du besonders auf folgende Faktoren achten:
            </p>
            <ul>
              <li><strong>Gebührenstruktur:</strong> Depotführungsgebühren, Ordergebühren, Sparpläne</li>
              <li><strong>Handelsplätze:</strong> Verfügbare Börsen und Handelsplätze</li>
              <li><strong>Produktangebot:</strong> Aktien, ETFs, Anleihen, Fonds, Derivate, Kryptowährungen</li>
              <li><strong>Benutzerfreundlichkeit:</strong> Webplattform und mobile App</li>
              <li><strong>Sicherheit:</strong> Einlagensicherung, Regulierung, Schutz vor Insolvenz</li>
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
            description="Antworten auf die wichtigsten Fragen rund um Broker"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Was ist besser: Filialbank oder Online-Broker?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Online-Broker bieten in der Regel deutlich günstigere Konditionen für den Wertpapierhandel als traditionelle Filialbanken. Wenn du Wert auf persönliche Beratung legst, könnte eine Filialbank die bessere Wahl sein - allerdings zu höheren Kosten. Für die meisten selbstständigen Anleger bieten Online-Broker das beste Preis-Leistungs-Verhältnis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wie sicher sind Neo-Broker?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In Deutschland tätige Neo-Broker unterliegen der strengen Regulierung durch die BaFin. Deine Wertpapiere sind zudem Sondervermögen - bei einer Insolvenz des Brokers bleiben sie dein Eigentum. Guthaben auf dem Verrechnungskonto ist bis zu 100.000€ durch die gesetzliche Einlagensicherung geschützt. Achte darauf, dass dein Broker in Deutschland oder der EU reguliert ist.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Welche Gebühren fallen bei Brokern an?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Typische Gebühren sind: Depotführungsgebühren, Order- bzw. Transaktionsgebühren, Sparplandurchführungsgebühren, Fremdkostenpauschalen und ggf. Premium-Gebühren für erweiterte Funktionen. Neo-Broker verzichten meist auf Depotführungsgebühren und bieten kostenlose ETF-Sparpläne an. Beachte auch mögliche Nebenkosten wie Handelsplatzgebühren oder Kosten für spezielle Ordertypen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kann ich mehrere Depots gleichzeitig haben?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ja, du kannst problemlos mehrere Depots bei verschiedenen Brokern führen. Dies kann sinnvoll sein, um von unterschiedlichen Angeboten zu profitieren, z.B. kostenlose ETF-Sparpläne bei einem Broker und günstige Einzelaktienorders bei einem anderen. Beachte jedoch, dass mehrere Depots auch den Überblick erschweren und die Steuererklärung komplizierter machen können.
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
