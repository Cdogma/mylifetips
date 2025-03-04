
import Layout from "../components/Layout/Layout";
import { Download, FileText, Book, Link as LinkIcon, ExternalLink } from "lucide-react";
import SectionHeading from "../components/UI/SectionHeading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Link } from "react-router-dom";

const Ressourcen = () => {
  const resources = {
    downloads: [
      {
        title: "Finanzplanungs-Tabelle",
        description: "Eine umfassende Excel-Tabelle zur Planung deiner persönlichen Finanzen, inklusive Budget, Sparplan und Vermögenstracking.",
        category: "Finanzen",
        type: "Excel",
        link: "/downloads/finanzplanung.xlsx",
      },
      {
        title: "Versicherungs-Checkliste",
        description: "Eine übersichtliche Checkliste der wichtigsten Versicherungen je nach Lebenssituation mit Prioritäten und Tipps zur Auswahl.",
        category: "Finanzen",
        type: "PDF",
        link: "/downloads/versicherungs-checkliste.pdf",
      },
      {
        title: "Gründer-Starter-Kit",
        description: "Alle wichtigen Checklisten und Templates für den Start in die Selbstständigkeit: Business-Plan-Vorlage, Kostenplanung und mehr.",
        category: "Business",
        type: "ZIP",
        link: "/downloads/gruender-kit.zip",
      },
      {
        title: "Smart Home Planungs-Guide",
        description: "Ausführlicher Leitfaden zur Planung eines Smart-Home-Systems mit Kompatibilitätsübersicht und Budgetplanung.",
        category: "Technik",
        type: "PDF",
        link: "/downloads/smart-home-guide.pdf",
      }
    ],
    tools: [
      {
        title: "Finanzcheck-Rechner",
        description: "Berechne deine finanzielle Freiheit und finde heraus, wie lange dein Vermögen bei deinen aktuellen Ausgaben reichen würde.",
        category: "Finanzen",
        externalLink: "https://example.com/finanzcheck",
      },
      {
        title: "Rendite-Rechner für ETF-Sparpläne",
        description: "Simuliere die langfristige Entwicklung deiner ETF-Investments mit verschiedenen Sparraten und Rendite-Annahmen.",
        category: "Finanzen",
        externalLink: "https://example.com/etf-rechner",
      },
      {
        title: "Smart Home Kompatibilitäts-Checker",
        description: "Überprüfe, ob deine vorhandenen Smart-Home-Geräte mit neuen Komponenten kompatibel sind.",
        category: "Technik",
        externalLink: "https://example.com/smart-home-check",
      }
    ],
    links: [
      {
        title: "Finanztip",
        description: "Unabhängiger Ratgeber mit fundierten Informationen zu allen Finanzthemen.",
        category: "Finanzen",
        externalLink: "https://www.finanztip.de",
      },
      {
        title: "Gründerplattform",
        description: "Offizielle Plattform des Bundesministeriums für Wirtschaft mit kostenfreien Tools und Informationen für Gründer.",
        category: "Business",
        externalLink: "https://www.gruenderplattform.de",
      },
      {
        title: "Stiftung Warentest",
        description: "Unabhängige Tests und Bewertungen zu Produkten und Dienstleistungen.",
        category: "Allgemein",
        externalLink: "https://www.test.de",
      },
      {
        title: "Justiz-Portal des Bundes",
        description: "Rechtsinformationen und Zugang zu Gesetzen und Verordnungen.",
        category: "Business",
        externalLink: "https://www.justiz.de",
      }
    ],
    books: [
      {
        title: "Der Finanzwesir kehrt zurück",
        author: "Albert Warnecke",
        description: "Ein unterhaltsamer und fundierter Ratgeber für persönliche Finanzen und langfristigen Vermögensaufbau.",
        category: "Finanzen",
        externalLink: "https://amzn.to/example1",
        isAffiliate: true,
      },
      {
        title: "Rich Dad, Poor Dad",
        author: "Robert T. Kiyosaki",
        description: "Ein Klassiker zum Thema finanzielle Bildung und wie man seine Einstellung zu Geld und Vermögen ändern kann.",
        category: "Finanzen",
        externalLink: "https://amzn.to/example2",
        isAffiliate: true,
      },
      {
        title: "The Lean Startup",
        author: "Eric Ries",
        description: "Ein Muss für jeden Gründer: Wie man mit minimalen Ressourcen ein erfolgreiches Unternehmen aufbaut.",
        category: "Business",
        externalLink: "https://amzn.to/example3",
        isAffiliate: true,
      },
      {
        title: "Atomic Habits",
        author: "James Clear",
        description: "Wie kleine Gewohnheitsänderungen zu großen Ergebnissen führen können - relevant für alle Lebensbereiche.",
        category: "Lifestyle",
        externalLink: "https://amzn.to/example4",
        isAffiliate: true,
      }
    ]
  };

  return (
    <Layout>
      <section className="pt-24 pb-12 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Ressourcen & Tools</h1>
            <p className="text-lg text-muted-foreground">
              Hier findest du nützliche Downloads, Tools und Empfehlungen, die dir in verschiedenen Lebensbereichen weiterhelfen können.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <Tabs defaultValue="downloads" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-12">
              <TabsTrigger value="downloads">Downloads</TabsTrigger>
              <TabsTrigger value="tools">Online-Tools</TabsTrigger>
              <TabsTrigger value="links">Nützliche Links</TabsTrigger>
              <TabsTrigger value="books">Buch-Empfehlungen</TabsTrigger>
            </TabsList>
            
            <TabsContent value="downloads">
              <SectionHeading
                title="Kostenlose Downloads"
                description="Praktische Templates, Checklisten und Guides zum Download"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {resources.downloads.map((item, index) => (
                  <Card key={index} className="group hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
                          <CardDescription className="text-muted-foreground text-sm">{item.category} • {item.type}</CardDescription>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                    <CardFooter>
                      <a 
                        href={item.link} 
                        download 
                        className="inline-flex items-center text-sm font-medium text-primary"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="bg-muted/40 p-6 rounded-lg mt-12">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Hinweis zu den Downloads</h3>
                    <p className="mt-2 text-muted-foreground">
                      Alle Downloads sind kostenlos verfügbar und dürfen für den persönlichen Gebrauch verwendet werden. Die kommerzielle Nutzung oder Weitergabe ist jedoch nicht gestattet. Bitte beachte, dass die Downloads möglicherweise an deine persönliche Situation angepasst werden müssen.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tools">
              <SectionHeading
                title="Online-Tools"
                description="Nützliche Rechner und Tools für deine Finanzen und mehr"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {resources.tools.map((item, index) => (
                  <Card key={index} className="group hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-muted-foreground text-sm">{item.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                    <CardFooter>
                      <a 
                        href={item.externalLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-sm font-medium text-primary"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Tool öffnen
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="links">
              <SectionHeading
                title="Nützliche Links"
                description="Sorgfältig ausgewählte externe Ressourcen"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {resources.links.map((item, index) => (
                  <Card key={index} className="group hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
                          <CardDescription className="text-muted-foreground text-sm">{item.category}</CardDescription>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <LinkIcon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                    <CardFooter>
                      <a 
                        href={item.externalLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-sm font-medium text-primary"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Website besuchen
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="books">
              <SectionHeading
                title="Buch-Empfehlungen"
                description="Lesenswerte Bücher, die ich persönlich empfehlen kann"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {resources.books.map((item, index) => (
                  <Card key={index} className="group hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
                          <CardDescription className="text-muted-foreground text-sm">
                            von {item.author} • {item.category}
                            {item.isAffiliate && "*"}
                          </CardDescription>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Book className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                    <CardFooter>
                      <a 
                        href={item.externalLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-sm font-medium text-primary"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Buch ansehen{item.isAffiliate && "*"}
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 text-sm text-muted-foreground">
                <p>* Dies ist ein Affiliate-Link. Wenn du über diesen Link ein Buch kaufst, erhalte ich eine kleine Provision, ohne dass dir zusätzliche Kosten entstehen.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold mb-2">
                  Du hast eine Ressourcen-Empfehlung?
                </h3>
                <p className="text-muted-foreground">
                  Ich freue mich über Vorschläge für nützliche Tools, Bücher oder Websites, die ich hier aufnehmen sollte.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <Link to="/kontakt">
                  <Button>Kontakt aufnehmen</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ressourcen;
