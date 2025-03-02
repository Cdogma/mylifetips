
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const Bankkonten = () => {
  const bankAccounts = [
    {
      title: "C24 Smart Girokonto",
      description: "Das kostenlose Girokonto mit innovativer App und hervorragendem Kundenservice",
      features: [
        "Komplett kostenlos ohne versteckte Gebühren",
        "Bis zu 2,5% Cashback bei Partnern",
        "Intuitive App mit vielen Zusatzfunktionen",
        "Weltweit kostenlos Geld abheben",
        "Apple Pay & Google Pay kompatibel"
      ],
      isAffiliate: true,
      rating: 4.8,
      link: "/finanzen/bankkonten/c24"
    },
    {
      title: "N26 Standard",
      description: "Das digitale Konto für ein modernes Banking-Erlebnis",
      features: [
        "100% digitales Banking",
        "Echtzeit-Benachrichtigungen",
        "Ausgaben in Kategorien organisieren",
        "Kostenlose Zahlungen in jeder Währung",
        "Bis zu 3 kostenlose Abhebungen pro Monat"
      ],
      isAffiliate: true,
      rating: 4.5,
      link: "/finanzen/bankkonten/n26"
    },
    {
      title: "DKB-Cash",
      description: "Das solide Girokonto mit Debitkarte für Preisbewusste",
      features: [
        "Kostenlose Kontoführung bei monatlichem Geldeingang",
        "Weltweit kostenlos Geld abheben",
        "Kostenlose Visa-Debitkarte",
        "Kostenloses Tagesgeldkonto inklusive",
        "Solides Online-Banking"
      ],
      isAffiliate: false,
      rating: 4.3,
      link: "/finanzen/bankkonten/dkb"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Die besten Bankkonten 2024"
        subtitle="Meine persönlichen Erfahrungen und Empfehlungen für dein optimales Bankkonto - komplett kostenlos, mit top Funktionen und erstklassigem Service."
        ctaText="Zu den Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Warum das richtige Bankkonto wichtig ist"
            description="Ein gutes Bankkonto sollte heute viel mehr können als nur Geld aufbewahren. Es sollte dich dabei unterstützen, deine Finanzen besser zu verwalten und im Idealfall komplett kostenfrei sein."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              In den letzten Jahren hat sich im Bankensektor enorm viel verändert. Während traditionelle Banken oft noch Kontoführungsgebühren verlangen oder veraltete Online-Banking-Systeme anbieten, gibt es mittlerweile hervorragende kostenlose Alternativen mit innovativen Features.
            </p>
            <p>
              Ich habe in den letzten Jahren zahlreiche Bankkonten getestet und teile hier meine Erfahrungen mit den besten Angeboten am Markt. Bei meiner Bewertung achte ich besonders auf:
            </p>
            <ul>
              <li><strong>Kosten:</strong> Kontoführungsgebühren, Kartengebühren, Kosten für Geldabhebungen</li>
              <li><strong>App & Online-Banking:</strong> Benutzerfreundlichkeit, Features, Sicherheit</li>
              <li><strong>Zusatzleistungen:</strong> Cashback, Bonusprogramme, Versicherungen</li>
              <li><strong>Kundensupport:</strong> Erreichbarkeit, Kompetenz, Reaktionsgeschwindigkeit</li>
              <li><strong>Alltagstauglichkeit:</strong> Akzeptanz der Karten, Integration mit Apple/Google Pay</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="empfehlungen" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            subtitle="Meine Top-Empfehlungen"
            title="Die besten Bankkonten im Vergleich"
            description="Basierend auf meinen persönlichen Erfahrungen und ausführlichen Tests empfehle ich diese Bankkonten."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bankAccounts.map((account, index) => (
              <Card key={account.title} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{account.title}{account.isAffiliate && "*"}</CardTitle>
                      <CardDescription className="mt-2">{account.description}</CardDescription>
                    </div>
                    <div className="flex items-center bg-primary/10 px-2.5 py-1 rounded-full">
                      <span className="text-primary font-semibold">{account.rating.toFixed(1)}</span>
                      <span className="text-primary ml-1">/5</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {account.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      to={account.link}
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
            description="Antworten auf die wichtigsten Fragen rund um Bankkonten"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Sollte ich mehr als ein Bankkonto haben?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Es kann tatsächlich sinnvoll sein, mehrere Bankkonten für unterschiedliche Zwecke zu nutzen. Zum Beispiel ein Hauptkonto für Gehalt und regelmäßige Ausgaben, ein separates Sparkonto und eventuell ein spezielles Konto für Reisen. So behältst du einen besseren Überblick über deine Finanzen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wie sicher sind Online-Banken?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seriöse Online-Banken sind genauso sicher wie traditionelle Filialbanken. Alle deutschen Online-Banken unterliegen denselben gesetzlichen Bestimmungen und deine Einlagen sind bis zu 100.000€ durch die gesetzliche Einlagensicherung geschützt. Viele Online-Banken bieten zudem moderne Sicherheitsfeatures wie Zwei-Faktor-Authentifizierung.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Welche versteckten Gebühren sollte ich beachten?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Achte besonders auf: Gebühren für Bargeldabhebungen im In- und Ausland, Fremdwährungsgebühren, Gebühren für Kontoauszüge auf Papier, Dispozinsen bei Überziehung und eventuelle Bedingungen für kostenlose Kontoführung (z.B. regelmäßiger Mindestgeldeingang).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wie wechsle ich am besten mein Bankkonto?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seit 2016 gilt das Zahlungskontengesetz, das den Kontowechsel vereinfacht. Deine neue Bank übernimmt für dich die meiste Arbeit: Sie informiert Zahlungspartner, überträgt Daueraufträge und Lastschriften. Eröffne erst das neue Konto, bevor du das alte kündigst, und behalte das alte für ein paar Monate parallel, um einen reibungslosen Übergang zu gewährleisten.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bankkonten;
