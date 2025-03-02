
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, ShieldCheck, ShieldAlert, ShieldQuestion, Check, X } from "lucide-react";

const Versicherungen = () => {
  const essentialInsurances = [
    {
      title: "Private Haftpflichtversicherung",
      description: "Der absolute Grundschutz, den jeder haben sollte",
      importance: "Unverzichtbar",
      monthlyPrice: "5-10€",
      benefits: [
        "Schützt vor existenzbedrohenden Schadenersatzforderungen",
        "Deckt Personen-, Sach- und Vermögensschäden ab",
        "Verteidigt gegen unberechtigte Ansprüche",
        "Sehr günstiger Schutz im Verhältnis zum abgedeckten Risiko"
      ],
      icon: <ShieldCheck className="h-8 w-8" />,
      isAffiliate: true,
      link: "/finanzen/versicherungen/haftpflicht"
    },
    {
      title: "Berufsunfähigkeitsversicherung",
      description: "Sichert dein Einkommen bei Krankheit oder Unfall",
      importance: "Sehr wichtig",
      monthlyPrice: "50-150€",
      benefits: [
        "Monatliche Rente bei Berufsunfähigkeit",
        "Sichert deinen Lebensstandard",
        "Schließt die Lücke zur staatlichen Absicherung",
        "Idealerweise früh abschließen, solange du gesund bist"
      ],
      icon: <Shield className="h-8 w-8" />,
      isAffiliate: true,
      link: "/finanzen/versicherungen/berufsunfaehigkeit"
    },
    {
      title: "Krankenversicherung (PKV/GKV)",
      description: "Für medizinische Behandlungen und Vorsorge",
      importance: "Gesetzlich vorgeschrieben",
      monthlyPrice: "Abhängig vom Einkommen",
      benefits: [
        "Grundversorgung für alle medizinischen Bedürfnisse",
        "Bei PKV: Wahlfreiheit bei Ärzten und Behandlungen",
        "Bei GKV: Solidarprinzip ohne Gesundheitsprüfung",
        "Zusatzversicherungen können sinnvoll ergänzen"
      ],
      icon: <ShieldCheck className="h-8 w-8" />,
      isAffiliate: false,
      link: "/finanzen/versicherungen/krankenversicherung"
    }
  ];

  const optionalInsurances = [
    {
      title: "Rechtsschutzversicherung",
      importance: "Sinnvoll",
      description: "Trägt Kosten für Rechtsstreitigkeiten und juristische Auseinandersetzungen",
      recommendation: true,
      link: "/finanzen/versicherungen/rechtsschutz"
    },
    {
      title: "Hausratversicherung",
      importance: "Sinnvoll",
      description: "Schützt dein Eigentum in der Wohnung gegen Einbruch, Feuer, Leitungswasser etc.",
      recommendation: true,
      link: "/finanzen/versicherungen/hausrat"
    },
    {
      title: "Private Unfallversicherung",
      importance: "Optional",
      description: "Zahlt bei dauerhaften Schäden durch Unfälle, egal ob in Freizeit oder Beruf",
      recommendation: true,
      link: "/finanzen/versicherungen/unfallversicherung"
    },
    {
      title: "Wohngebäudeversicherung",
      importance: "Für Eigentümer wichtig",
      description: "Schützt die eigene Immobilie vor Schäden durch Feuer, Sturm, Hagel etc.",
      recommendation: true,
      link: "/finanzen/versicherungen/wohngebaeude"
    },
    {
      title: "Risikolebensversicherung",
      importance: "Für Familien wichtig",
      description: "Finanzielle Absicherung für Hinterbliebene im Todesfall",
      recommendation: true,
      link: "/finanzen/versicherungen/risikoleben"
    },
    {
      title: "Handy-/Elektronikversicherung",
      importance: "Unnötig",
      description: "Teurer Schutz für leicht ersetzbare Gegenstände mit vielen Ausschlüssen",
      recommendation: false,
      link: "/finanzen/versicherungen/elektronik"
    },
    {
      title: "Reisegepäckversicherung",
      importance: "Unnötig",
      description: "Meist bereits durch andere Policen abgedeckt oder mit zu vielen Einschränkungen",
      recommendation: false,
      link: "/finanzen/versicherungen/reisegepaeck"
    },
    {
      title: "Krankenhaustagegeldversicherung",
      importance: "Selten sinnvoll",
      description: "Zahlt festen Betrag pro Tag im Krankenhaus, meist durch andere Versicherungen abgedeckt",
      recommendation: false,
      link: "/finanzen/versicherungen/krankenhaustage"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Versicherungen: Was du wirklich brauchst"
        subtitle="Eine unabhängige Übersicht der wichtigsten Versicherungen und welche du wirklich benötigst - ohne unnötige Ausgaben für überflüssigen Schutz."
        ctaText="Zu den Empfehlungen"
        ctaLink="#essentials"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Versicherungen richtig verstehen"
            description="Versicherungen sind wichtig, aber nicht alle sind für jeden sinnvoll. Hier erfährst du, wie du klug entscheidest."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Versicherungen können ein komplexes und oft verwirrendes Thema sein. Die Versicherungsbranche ist groß und nicht immer transparent, was es schwierig macht, die richtigen Entscheidungen zu treffen. Ich helfe dir, durch den Dschungel der Angebote zu navigieren und zu erkennen, welche Versicherungen du wirklich brauchst und auf welche du getrost verzichten kannst.
            </p>
            <p>
              Mein Grundprinzip bei Versicherungen ist einfach:
            </p>
            <blockquote>
              Versichere nur existenzbedrohende Risiken oder solche, die du nicht aus eigener Kraft bewältigen kannst.
            </blockquote>
            <p>
              Das bedeutet konkret: Eine Privathaftpflichtversicherung ist unverzichtbar, denn ein verursachter Personenschaden kann schnell in die Millionen gehen. Eine Handyversicherung hingegen ist meist rausgeworfenes Geld, da du die Kosten für ein neues Smartphone im Notfall selbst tragen kannst.
            </p>
            <p>
              Bei meinen Bewertungen achte ich besonders auf:
            </p>
            <ul>
              <li><strong>Preis-Leistungs-Verhältnis:</strong> Stehen die Kosten in einem vernünftigen Verhältnis zum abgesicherten Risiko?</li>
              <li><strong>Bedingungen:</strong> Wie umfassend ist der Schutz? Gibt es wichtige Ausschlüsse?</li>
              <li><strong>Regulierungspraxis:</strong> Wie kundenfreundlich verhält sich der Versicherer im Schadensfall?</li>
              <li><strong>Notwendigkeit:</strong> Ist dieses Risiko wirklich versicherungswürdig oder kannst du es selbst tragen?</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="essentials" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            subtitle="Die wichtigsten Policen"
            title="Diese Versicherungen sind wirklich wichtig"
            description="Meine Empfehlungen für die Basis-Absicherung, die jeder haben sollte."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {essentialInsurances.map((insurance, index) => (
              <Card key={insurance.title} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {insurance.icon}
                    </div>
                    <span className="inline-block bg-primary/80 text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                      {insurance.importance}
                    </span>
                  </div>
                  <CardTitle>{insurance.title}{insurance.isAffiliate && "*"}</CardTitle>
                  <CardDescription className="mt-2">{insurance.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="p-3 bg-muted rounded-lg mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Typische monatliche Kosten</p>
                    <p className="font-semibold">{insurance.monthlyPrice}</p>
                  </div>
                  <p className="text-sm font-medium mb-2">Warum wichtig:</p>
                  <ul className="space-y-2">
                    {insurance.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="border-t pt-6">
                  <Link
                    to={insurance.link}
                    className="group flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    <span>Mehr Details & Empfehlungen</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
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
            title="Weitere Versicherungen im Überblick"
            description="Welche weiteren Versicherungen sinnvoll sein können und auf welche du verzichten solltest."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {optionalInsurances.map((insurance, index) => (
              <Card 
                key={insurance.title} 
                className={`hover:shadow-sm transition-shadow duration-300 border ${insurance.recommendation ? 'border-primary/20' : 'border-destructive/20'}`}
              >
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle className="text-lg">{insurance.title}</CardTitle>
                    <CardDescription className="mt-1">
                      <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${insurance.recommendation ? 'bg-primary/10 text-primary' : 'bg-destructive/10 text-destructive'}`}>
                        {insurance.importance}
                      </span>
                    </CardDescription>
                  </div>
                  <div className={`p-2 rounded-full ${insurance.recommendation ? 'bg-primary/10' : 'bg-destructive/10'}`}>
                    {insurance.recommendation ? 
                      <ShieldCheck className={`h-5 w-5 ${insurance.recommendation ? 'text-primary' : 'text-destructive'}`} /> : 
                      <ShieldAlert className={`h-5 w-5 ${insurance.recommendation ? 'text-primary' : 'text-destructive'}`} />
                    }
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{insurance.description}</p>
                  <div className="flex mt-4">
                    <Link
                      to={insurance.link}
                      className="text-sm text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      Mehr erfahren
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary/5">
        <div className="container">
          <SectionHeading
            title="Die größten Versicherungs-Irrtümer"
            description="Weitverbreitete Missverständnisse über Versicherungen aufgeklärt"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <X className="h-5 w-5 text-destructive" />
                  <CardTitle className="text-lg">Irrtum: "Je mehr Versicherungen, desto besser geschützt"</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mehr Versicherungen bedeuten nicht automatisch mehr Schutz, sondern oft nur höhere Kosten. Konzentriere dich auf die wirklich wichtigen Policen, die existenzbedrohende Risiken abdecken. Bei kleinen Risiken ist es häufig wirtschaftlicher, selbst vorzusorgen, statt teure Policen abzuschließen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <X className="h-5 w-5 text-destructive" />
                  <CardTitle className="text-lg">Irrtum: "Beamte brauchen keine Berufsunfähigkeitsversicherung"</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Auch Beamte sollten eine BU-Versicherung in Betracht ziehen. Die staatliche Dienstunfähigkeitsversorgung greift oft erst nach mehreren Jahren im Dienst vollständig und deckt auch dann häufig nicht das volle Gehalt ab. Bei jungen Beamten kann die Lücke besonders groß sein.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <X className="h-5 w-5 text-destructive" />
                  <CardTitle className="text-lg">Irrtum: "Lebensversicherungen sind gute Geldanlagen"</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kapitalbildende Lebensversicherungen und Rentenversicherungen sind in erster Linie Versicherungsprodukte und keine optimalen Geldanlagen. Die hohen Kosten für Provision und Verwaltung schmälern die Rendite erheblich. Trenne besser Versicherung und Geldanlage: Eine Risikolebensversicherung für den Todesfallschutz und ETFs für den Vermögensaufbau sind meist die bessere Wahl.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <X className="h-5 w-5 text-destructive" />
                  <CardTitle className="text-lg">Irrtum: "Die gesetzliche Krankenversicherung reicht völlig aus"</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Die gesetzliche Krankenversicherung bietet eine solide Grundversorgung, aber in einigen Bereichen kann eine Zusatzversicherung sinnvoll sein. Besonders für Zahnersatz, Sehhilfen oder Heilpraktikerbehandlungen, die von der GKV nicht oder nur teilweise übernommen werden. Auch bei längeren Auslandsaufenthalten kann eine zusätzliche Reisekrankenversicherung wichtig sein.
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
