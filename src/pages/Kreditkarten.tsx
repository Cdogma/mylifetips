
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Check, CreditCard, Gem, Plane, Shield } from "lucide-react";

const Kreditkarten = () => {
  const creditCards = [
    {
      title: "American Express Platinum",
      description: "Die ultimative Premium-Kreditkarte mit exklusiven Vorteilen",
      annualFee: "660€",
      category: "Premium",
      benefits: [
        "Umfassender Reiseschutz inkl. Reiserücktrittsversicherung",
        "Zugang zu 1.400+ Airport Lounges weltweit",
        "Membership Rewards Programm mit wertvollen Punkten",
        "Concierge-Service rund um die Uhr",
        "Hotel- und Mietwagenstatusvorteile"
      ],
      icon: <Gem className="h-8 w-8" />,
      isAffiliate: true,
      rating: 4.8,
      link: "/finanzen/kreditkarten/amex-platinum"
    },
    {
      title: "DKB Visa Debitkarte",
      description: "Die kostenlose Karte für preisbewusste Weltenbummler",
      annualFee: "0€",
      category: "Standard",
      benefits: [
        "Gebührenfreies Abheben weltweit",
        "Keine Fremdwährungsgebühren",
        "Einfache Integration mit Apple Pay & Google Pay",
        "Echtzeit-Überweisungen",
        "Kostenlose Kontoführung"
      ],
      icon: <CreditCard className="h-8 w-8" />,
      isAffiliate: false,
      rating: 4.5,
      link: "/finanzen/kreditkarten/dkb-visa"
    },
    {
      title: "Lufthansa Miles & More Credit Card",
      description: "Die ideale Kreditkarte für Vielflieger und Meilensammler",
      annualFee: "110€",
      category: "Travel",
      benefits: [
        "Automatisches Meilensammeln bei jedem Einkauf",
        "2.000 Willkommensmeilen",
        "Verlängerte Gültigkeit der Meilen",
        "Zusätzliche Versicherungsleistungen",
        "Status-Benefits bei Partnern"
      ],
      icon: <Plane className="h-8 w-8" />,
      isAffiliate: true,
      rating: 4.3,
      link: "/finanzen/kreditkarten/miles-and-more"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Kreditkarten für jeden Bedarf"
        subtitle="Von kostenlosen Basis-Kreditkarten bis zu Premium-Karten mit exklusiven Vorteilen - finde die perfekte Kreditkarte für deine Bedürfnisse."
        ctaText="Zu den Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Die richtige Kreditkarte finden"
            description="Eine Kreditkarte sollte zu deinem Lebensstil und deinen finanziellen Bedürfnissen passen. Hier erfährst du, worauf es ankommt."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Die Welt der Kreditkarten ist vielfältig und oft unübersichtlich. Von kostenlosen Basiskarten bis hin zu teuren Premium-Karten mit umfangreichen Zusatzleistungen gibt es für jeden Bedarf das passende Produkt. Doch welche Kreditkarte ist für dich die richtige?
            </p>
            <p>
              In meinen Tests bewerte ich Kreditkarten nach diesen Kriterien:
            </p>
            <ul>
              <li><strong>Kosten:</strong> Jahresgebühr, Auslandseinsatzgebühren, Fremdwährungsgebühren</li>
              <li><strong>Zusatzleistungen:</strong> Versicherungen, Bonusprogramme, Rabatte, Status-Vorteile</li>
              <li><strong>Reisevorteile:</strong> Lounge-Zugang, Reiseversicherungen, Mietwagen-Benefits</li>
              <li><strong>Alltägliche Nutzbarkeit:</strong> Akzeptanz, Gebühren, App-Integration</li>
              <li><strong>Kundenservice:</strong> Erreichbarkeit, Problemlösung, Kommunikationswege</li>
            </ul>
            <p>
              Besonders wertvoll können Kreditkarten für Vielreisende sein, da sie oft umfassende Reiseversicherungen und Zusatzleistungen bieten, die die Jahresgebühr mehr als kompensieren können. Für den Alltag in Deutschland reicht hingegen oft eine kostenlose Debitkarte völlig aus.
            </p>
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
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {card.icon}
                    </div>
                    <span className="inline-block bg-primary/80 text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                      {card.category}{card.isAffiliate && "*"}
                    </span>
                  </div>
                  <CardTitle>{card.title}{card.isAffiliate && "*"}</CardTitle>
                  <CardDescription className="mt-2">{card.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex justify-between items-center mb-4 p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Jahresgebühr</span>
                    <span className="font-bold">{card.annualFee}</span>
                  </div>
                  <p className="text-sm font-medium mb-2">Top Vorteile:</p>
                  <ul className="space-y-2">
                    {card.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="border-t pt-6">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-primary mr-1.5" />
                      <span className="text-sm text-muted-foreground">Bewertung: {card.rating.toFixed(1)}/5.0</span>
                    </div>
                    <Link
                      to={card.link}
                      className="group flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      <span>Details</span>
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
            title="Kreditkarten Wissen"
            description="Wichtige Informationen, die dir bei der Auswahl der richtigen Kreditkarte helfen"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Kreditkarte vs. Debitkarte - Was ist der Unterschied?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bei einer echten Kreditkarte erhältst du einen Kredit bis zur Abbuchung am Monatsende. Bei einer Debitkarte wird dein Konto hingegen sofort belastet. Debitkarten werden heute oft als "Kreditkarten" vermarktet, bieten aber nicht den gleichen Zahlungsaufschub. Dafür sind sie meist kostenlos, während echte Kreditkarten oft eine Jahresgebühr haben.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wann lohnt sich eine Premium-Kreditkarte?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Premium-Kreditkarten mit hohen Jahresgebühren lohnen sich vor allem für Vielreisende und Menschen, die regelmäßig die enthaltenen Vorteile nutzen. Wenn du oft fliegst, Hotels buchst und die inkludierten Versicherungen und Lounge-Zugänge nutzt, kann eine Premium-Karte trotz hoher Gebühr ein gutes Angebot sein. Rechne genau nach, ob sich die Vorteile für dich auszahlen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Die wichtigsten Versicherungsleistungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Viele Kreditkarten bieten Versicherungsleistungen, die besonders auf Reisen wertvoll sein können. Zu den wichtigsten gehören: Auslandsreisekrankenversicherung, Reiserücktrittsversicherung, Mietwagen-Vollkaskoversicherung und Reisegepäckversicherung. Achte jedoch immer auf die genauen Bedingungen - oft gilt der Versicherungsschutz nur, wenn du die Reise mit der Karte bezahlt hast.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bonusprogramme effektiv nutzen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Viele Kreditkarten bieten Punkte- oder Meilen-Programme, bei denen du für jeden Einkauf Bonuspunkte sammelst. Diese können für Flüge, Hotels oder andere Prämien eingelöst werden. Um das Maximum herauszuholen, konzentriere deine Ausgaben auf eine Karte statt auf mehrere, achte auf Bonuskategorien mit höheren Punkteraten und nutze Willkommensangebote.
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
