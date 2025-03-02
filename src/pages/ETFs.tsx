
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Globe, Leaf, Banknote, TrendingUp, Info } from "lucide-react";

const ETFs = () => {
  const recommendedETFs = [
    {
      title: "Vanguard FTSE All-World UCITS ETF",
      ticker: "VWCE",
      description: "Mein persönlicher Favorit für eine globale, breit diversifizierte Geldanlage.",
      details: {
        ter: "0,22%",
        type: "Thesaurierend",
        index: "FTSE All-World",
        stocks: "~3.800",
        focus: "Global"
      },
      highlights: [
        "Sehr breite Streuung über fast 4.000 Unternehmen",
        "Entwickelte Märkte (88%) und Schwellenländer (12%)",
        "Geringe Kosten und hohe Liquidität",
        "Von Vanguard, einem der größten ETF-Anbieter weltweit"
      ],
      icon: <Globe />,
      category: "Kern-Investment",
      link: "/finanzen/etfs/vanguard-ftse-all-world"
    },
    {
      title: "iShares Core MSCI World UCITS ETF",
      ticker: "EUNL",
      description: "Der ETF-Klassiker für Anleger, die sich auf Industrieländer konzentrieren möchten.",
      details: {
        ter: "0,20%",
        type: "Thesaurierend",
        index: "MSCI World",
        stocks: "~1.500",
        focus: "Industrieländer"
      },
      highlights: [
        "Fokus auf entwickelte Märkte wie USA, Europa, Japan",
        "Langjährige Erfolgsgeschichte mit stabiler Performance",
        "Sehr liquide mit hohem Handelsvolumen",
        "Ideal als Basis für eine Erweiterung mit Schwellenländer-ETFs"
      ],
      icon: <BarChart3 />,
      category: "Basis-Investment",
      link: "/finanzen/etfs/ishares-msci-world"
    },
    {
      title: "UBS MSCI World Socially Responsible UCITS ETF",
      ticker: "UB39",
      description: "Für nachhaltigkeitsbewusste Anleger, die auf ESG-Kriterien Wert legen.",
      details: {
        ter: "0,25%",
        type: "Thesaurierend",
        index: "MSCI World SRI",
        stocks: "~400",
        focus: "Nachhaltige Unternehmen"
      },
      highlights: [
        "Strenge ESG-Kriterien (Umwelt, Soziales, Unternehmensführung)",
        "Ausschluss kontroverser Branchen wie Waffen, Tabak, Glücksspiel",
        "Fokus auf Unternehmen mit überdurchschnittlichen ESG-Ratings",
        "Geringere Diversifikation, aber ethischere Investments"
      ],
      icon: <Leaf />,
      category: "Nachhaltig",
      link: "/finanzen/etfs/ubs-msci-world-sri"
    }
  ];

  const etfTypes = [
    {
      title: "Aktien-ETFs",
      description: "Die beliebteste ETF-Kategorie, die dir Anteile an hunderten oder tausenden Unternehmen weltweit verschafft.",
      examples: ["MSCI World", "FTSE All-World", "S&P 500"],
      icon: <TrendingUp className="h-8 w-8" />,
      link: "/finanzen/etfs/aktien-etfs"
    },
    {
      title: "Anleihen-ETFs",
      description: "Investieren in Staatsanleihen oder Unternehmensanleihen für regelmäßige Zinserträge und mehr Stabilität.",
      examples: ["Staatsanleihen", "Unternehmensanleihen", "Hochzinsanleihen"],
      icon: <Banknote className="h-8 w-8" />,
      link: "/finanzen/etfs/anleihen-etfs"
    },
    {
      title: "Nachhaltige ETFs",
      description: "ETFs mit Fokus auf Unternehmen, die bestimmte Umwelt-, Sozial- und Governance-Kriterien erfüllen.",
      examples: ["MSCI SRI", "ESG Leaders", "Clean Energy"],
      icon: <Leaf className="h-8 w-8" />,
      link: "/finanzen/etfs/nachhaltige-etfs"
    }
  ];

  return (
    <Layout>
      <Hero
        title="ETF-Investieren leicht gemacht"
        subtitle="Erfahre, welche ETFs (Exchange Traded Funds) ich selbst kaufe und warum sie eine exzellente Wahl für langfristigen Vermögensaufbau sind."
        ctaText="Meine ETF-Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Warum ETFs die ideale Geldanlage sind"
            description="Exchange Traded Funds bieten eine einfache, kostengünstige und effektive Möglichkeit, dein Geld langfristig anzulegen und Vermögen aufzubauen."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              ETFs (Exchange Traded Funds) haben die Welt der Geldanlage revolutioniert. Sie bieten Privatanlegern die Möglichkeit, mit kleinen Beträgen breit diversifiziert in hunderte oder tausende Unternehmen gleichzeitig zu investieren. Anders als aktiv gemanagte Fonds folgen ETFs passiv einem Index und versuchen nicht, den Markt zu schlagen.
            </p>
            <p>
              Die Vorteile von ETFs auf einen Blick:
            </p>
            <ul>
              <li><strong>Niedrige Kosten:</strong> ETFs haben deutlich geringere laufende Kosten als aktiv gemanagte Fonds</li>
              <li><strong>Breite Diversifikation:</strong> Mit einem einzigen ETF investierst du in hunderte oder tausende Unternehmen</li>
              <li><strong>Transparenz:</strong> Die Zusammensetzung eines ETFs ist jederzeit einsehbar</li>
              <li><strong>Flexibilität:</strong> ETFs werden wie Aktien an der Börse gehandelt und können jederzeit gekauft oder verkauft werden</li>
              <li><strong>Einfachheit:</strong> Auch als Einsteiger kannst du mit ETFs langfristig und erfolgreich investieren</li>
            </ul>
            <p>
              Meine persönliche ETF-Strategie ist einfach und fokussiert sich auf global diversifizierte Welt-ETFs. Statt zu versuchen, den Markt zu timen oder einzelne Gewinner-Aktien zu picken, setze ich auf die langfristige Entwicklung der Weltwirtschaft. Diese Strategie ist wissenschaftlich fundiert und hat sich über Jahrzehnte bewährt.
            </p>
          </div>
        </div>
      </section>

      <section id="empfehlungen" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            subtitle="Meine Top-Empfehlungen"
            title="Diese ETFs kaufe ich selbst"
            description="Basierend auf meiner persönlichen Anlagestrategie und jahrelanger Recherche empfehle ich diese ETFs für langfristigen Vermögensaufbau."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {recommendedETFs.map((etf, index) => (
              <Card key={etf.title} className="h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <div className="p-2 bg-primary/10 rounded-md">
                      {etf.icon}
                    </div>
                    <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                      {etf.category}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="flex items-center">{etf.title}</CardTitle>
                    <CardDescription className="text-xs font-medium text-muted-foreground">
                      ISIN/Ticker: {etf.ticker}
                    </CardDescription>
                  </div>
                  <CardDescription className="text-sm mt-2">{etf.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {Object.entries(etf.details).map(([key, value]) => (
                      <div key={key} className="bg-muted rounded-md p-2 flex flex-col">
                        <span className="text-xs text-muted-foreground capitalize">{key}</span>
                        <span className="text-sm font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 mt-4">
                    {etf.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="h-5 w-5 text-primary shrink-0 mt-0.5">
                          <Info className="h-4 w-4" />
                        </div>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Link
                      to={etf.link}
                      className="group flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      <span>Mehr Details</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
            title="ETF-Arten im Überblick"
            description="Es gibt verschiedene Arten von ETFs für unterschiedliche Anlageziele."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {etfTypes.map((type, index) => (
              <Card key={type.title} className="hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    {type.icon}
                  </div>
                  <CardTitle>{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Bekannte Beispiele:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {type.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={type.link}
                    className="group flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    <span>Mehr erfahren</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary/5">
        <div className="container">
          <SectionHeading
            title="ETF-Faustregeln für Einsteiger"
            description="Einfache Grundsätze, die dir beim erfolgreichen ETF-Investieren helfen."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card className="bg-card/80 backdrop-blur-sm hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-4 text-center">1.</div>
                <p className="text-center font-medium mb-2">Breit streuen</p>
                <p className="text-sm text-muted-foreground text-center">
                  Investiere in ETFs, die hunderte oder tausende Unternehmen aus verschiedenen Ländern und Branchen enthalten.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-sm hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-4 text-center">2.</div>
                <p className="text-center font-medium mb-2">Auf Kosten achten</p>
                <p className="text-sm text-muted-foreground text-center">
                  Wähle ETFs mit niedrigen laufenden Kosten (TER). Jeder gesparte Basispunkt erhöht deine langfristige Rendite.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-sm hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-4 text-center">3.</div>
                <p className="text-center font-medium mb-2">Langfristig denken</p>
                <p className="text-sm text-muted-foreground text-center">
                  ETF-Investments sollten langfristig (10+ Jahre) geplant werden. Kurzfristige Schwankungen sind normal.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-sm hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-4 text-center">4.</div>
                <p className="text-center font-medium mb-2">Regelmäßig investieren</p>
                <p className="text-sm text-muted-foreground text-center">
                  Nutze Sparpläne, um regelmäßig und automatisiert zu investieren - unabhängig von kurzfristigen Marktentwicklungen.
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
