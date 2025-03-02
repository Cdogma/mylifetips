
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const Kreditkarten = () => {
  const creditCards = [
    {
      title: "Hanseatic Bank GenialCard",
      description: "Eine kostenlose Kreditkarte mit attraktivem Cashback-Programm und flexiblen Zahlungsoptionen",
      features: [
        "Dauerhaft keine Jahresgebühr",
        "Bis zu 3% Cashback in ausgewählten Kategorien",
        "Flexible Teilzahlungsfunktion mit fairen Zinsen",
        "Kostenloses Abheben an Automaten weltweit",
        "Apple Pay & Google Pay kompatibel"
      ],
      isAffiliate: true,
      rating: 4.7,
      link: "/finanzen/kreditkarten/genialcard"
    },
    {
      title: "American Express Payback",
      description: "Sammle PAYBACK Punkte bei jedem Einkauf und profitiere von exklusiven Amex-Angeboten",
      features: [
        "Sammle bis zu 3x mehr PAYBACK Punkte",
        "Umfangreiche Versicherungsleistungen inklusive",
        "Exklusive American Express Angebote",
        "Weltweit Bargeld abheben",
        "Kontaktloses Bezahlen und Wallet-Integration"
      ],
      isAffiliate: true,
      rating: 4.5,
      link: "/finanzen/kreditkarten/amex-payback"
    },
    {
      title: "DKB Visa Debitkarte",
      description: "Die solide Debitkarte für Preisbewusste mit weltweiten Vorteilen",
      features: [
        "Kostenlose Kontoführung bei aktivem Kontomodell",
        "Weltweit kostenlos Geld abheben",
        "Echtzeit-Überweisungen direkt vom Konto",
        "Volle Kontrolle durch Echtzeit-Abbuchungen",
        "Umfangreiche Sicherheitsfeatures"
      ],
      isAffiliate: false,
      rating: 4.3,
      link: "/finanzen/kreditkarten/dkb-visa"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Die besten Kreditkarten 2024"
        subtitle="Meine persönlichen Erfahrungen und Empfehlungen für optimale Kreditkarten - mit Cashback, ohne Jahresgebühr und mit zahlreichen Zusatzleistungen."
        ctaText="Zu den Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Warum die richtige Kreditkarte wichtig ist"
            description="Eine gute Kreditkarte sollte zu deinem Ausgabeverhalten passen und dir im Idealfall zusätzliche Vorteile wie Cashback, Versicherungen oder Reisevorteile bieten."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Kreditkarten haben sich in den letzten Jahren stark weiterentwickelt. Statt teurer Jahresgebühren bieten viele Anbieter heute kostenlose Karten mit attraktiven Zusatzleistungen an.
            </p>
            <p>
              Bei der Auswahl der richtigen Kreditkarte solltest du besonders auf folgende Faktoren achten:
            </p>
            <ul>
              <li><strong>Kosten:</strong> Jahresgebühr, Fremdwährungsgebühren, Abhebungsgebühren</li>
              <li><strong>Cashback & Bonusprogramme:</strong> Rückvergütungen, Punktesysteme, Rabatte</li>
              <li><strong>Versicherungsleistungen:</strong> Reiseversicherungen, Einkaufsschutz, Mietwagenschutz</li>
              <li><strong>Zahlungsflexibilität:</strong> Teilzahlungsoption, Verfügungsrahmen, Zahlungsziele</li>
              <li><strong>Mobile Payment:</strong> Kompatibilität mit Apple Pay, Google Pay, Samsung Pay</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="empfehlungen" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            subtitle="Meine Top-Empfehlungen"
            title="Die besten Kreditkarten im Vergleich"
            description="Basierend auf meinen persönlichen Erfahrungen und ausführlichen Tests empfehle ich diese Kreditkarten."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creditCards.map((card, index) => (
              <Card key={card.title} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{card.title}{card.isAffiliate && "*"}</CardTitle>
                      <CardDescription className="mt-2">{card.description}</CardDescription>
                    </div>
                    <div className="flex items-center bg-primary/10 px-2.5 py-1 rounded-full">
                      <span className="text-primary font-semibold">{card.rating.toFixed(1)}</span>
                      <span className="text-primary ml-1">/5</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      to={card.link}
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
            description="Antworten auf die wichtigsten Fragen rund um Kreditkarten"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Unterschied zwischen Debit- und Kreditkarte?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bei einer Debitkarte wird dein Konto sofort oder sehr zeitnah belastet, während eine Kreditkarte dir einen Zahlungsaufschub bis zur monatlichen Abrechnung gewährt. Echte Kreditkarten bieten zudem meistens Teilzahlungsoptionen, bessere Versicherungsleistungen und oft attraktivere Bonusprogramme.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Beeinflussen Kreditkarten meine Schufa?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ja, Kreditkarten werden in der Schufa vermerkt. Ein hoher ungenutzter Kreditrahmen kann sich sogar negativ auf deine Bonität auswirken. Wenn du viele Kreditkartenanträge in kurzer Zeit stellst, kann das deinen Score ebenfalls negativ beeinflussen. Wichtig ist, dass du deine Kreditkartenrechnungen immer pünktlich bezahlst.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wie schütze ich mich vor Kreditkartenbetrug?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Aktiviere Benachrichtigungen für jede Transaktion, nutze starke unterschiedliche Passwörter für Online-Banking, überprüfe regelmäßig deine Abrechnungen, gib deine Kartendaten nur auf sicheren Websites ein (https), aktiviere 2-Faktor-Authentifizierung und schütze deine PIN beim Eingeben. Die meisten modernen Kreditkarten bieten zudem einen Käuferschutz.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lohnt sich eine Kreditkarte mit Jahresgebühr?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Das hängt von deinem Nutzungsverhalten ab. Premium-Kreditkarten mit Jahresgebühr bieten oft umfangreiche Versicherungspakete, Lounge-Zugang, bessere Cashback-Raten oder Reisegutschriften. Wenn du diese Vorteile regelmäßig nutzt und ihr Wert die Jahresgebühr übersteigt, kann sich eine kostenpflichtige Karte durchaus lohnen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kreditkarten;
