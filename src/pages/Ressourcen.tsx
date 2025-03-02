
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpenIcon, FileTextIcon, GlobeIcon, PlayCircleIcon, DownloadIcon, FilePlusIcon } from "lucide-react";

const Ressourcen = () => {
  const ebooks = [
    {
      title: "Finanzen für Einsteiger",
      description: "Lerne die Grundlagen der persönlichen Finanzen und beginne deine Reise zur finanziellen Unabhängigkeit.",
      pages: 45,
      category: "Finanzen",
      image: "/placeholder.svg",
    },
    {
      title: "Produktivitätstechniken für den Alltag",
      description: "Entdecke bewährte Methoden zur Steigerung deiner täglichen Produktivität und Effizienz.",
      pages: 35,
      category: "Produktivität",
      image: "/placeholder.svg",
    },
    {
      title: "Digital Detox Guide",
      description: "Ein umfassender Leitfaden, wie du deine Beziehung zu digitalen Geräten gesünder gestalten kannst.",
      pages: 28,
      category: "Lifestyle",
      image: "/placeholder.svg",
    },
    {
      title: "Nachhaltig leben - Schritt für Schritt",
      description: "Praktische Tipps für einen nachhaltigeren Lebensstil ohne Verzicht auf Lebensqualität.",
      pages: 52,
      category: "Nachhaltigkeit",
      image: "/placeholder.svg",
    }
  ];

  const checklists = [
    {
      title: "Umzugs-Checkliste",
      description: "Alles, was du für einen stressfreien Umzug benötigst, übersichtlich zusammengefasst.",
      items: 56,
      category: "Organisation",
    },
    {
      title: "Startup-Gründung",
      description: "Schritt-für-Schritt-Anleitung für die Gründung deines eigenen Unternehmens.",
      items: 42,
      category: "Business",
    },
    {
      title: "Heimarbeit optimieren",
      description: "So richtest du deinen perfekten Home-Office-Arbeitsplatz ein.",
      items: 28,
      category: "Produktivität",
    },
    {
      title: "Reisevorbereitung",
      description: "Die ultimative Packliste für jeden Reisetyp und jede Destination.",
      items: 35,
      category: "Reisen",
    }
  ];

  const webinars = [
    {
      title: "Investieren für Anfänger",
      description: "Lerne, wie du mit kleinen Beträgen in den Aktienmarkt einsteigen kannst.",
      duration: "45 Minuten",
      instructor: "Maria Schmidt",
      date: "15. Juni 2023",
    },
    {
      title: "Zeitmanagement-Hacks",
      description: "Effektive Strategien zur besseren Nutzung deiner Zeit im Alltag und Beruf.",
      duration: "60 Minuten",
      instructor: "Thomas Weber",
      date: "22. Juli 2023",
    },
    {
      title: "Digital Marketing Grundlagen",
      description: "Einführung in SEO, Social Media Marketing und Content-Strategie.",
      duration: "90 Minuten",
      instructor: "Sarah Müller",
      date: "10. August 2023",
    },
    {
      title: "Gesunde Gewohnheiten entwickeln",
      description: "Wie du nachhaltige Gewohnheiten aufbauen und beibehalten kannst.",
      duration: "55 Minuten",
      instructor: "Michael Hoffmann",
      date: "5. September 2023",
    }
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Ressourcen-Center"
            description="Kostenlose Materialien und Werkzeuge für deine persönliche und berufliche Entwicklung"
            align="center"
          />

          <div className="max-w-4xl mx-auto my-12 text-center">
            <p className="text-lg text-muted-foreground">
              Entdecke unsere Sammlung an hochwertigen Ressourcen, die dir dabei helfen, 
              deine Ziele zu erreichen und dein Wissen in verschiedenen Lebensbereichen zu vertiefen.
            </p>
          </div>

          <Tabs defaultValue="ebooks" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="ebooks" className="flex items-center gap-2">
                <BookOpenIcon className="h-4 w-4" /> E-Books
              </TabsTrigger>
              <TabsTrigger value="checklists" className="flex items-center gap-2">
                <FileTextIcon className="h-4 w-4" /> Checklisten
              </TabsTrigger>
              <TabsTrigger value="webinars" className="flex items-center gap-2">
                <PlayCircleIcon className="h-4 w-4" /> Webinare
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="ebooks">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ebooks.map((ebook, index) => (
                  <Card key={index} className="overflow-hidden bg-card/60 backdrop-blur-sm border border-border/10 shadow-sm group hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative overflow-hidden">
                        <img 
                          src={ebook.image} 
                          alt={ebook.title} 
                          className="h-full w-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-50"></div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="mb-2">
                          <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                            {ebook.category}
                          </span>
                          <span className="ml-2 text-xs text-muted-foreground">
                            {ebook.pages} Seiten
                          </span>
                        </div>
                        <CardTitle className="mb-2 text-xl">{ebook.title}</CardTitle>
                        <CardDescription className="mb-4">{ebook.description}</CardDescription>
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                          <DownloadIcon className="h-4 w-4" /> Kostenlos herunterladen
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="checklists">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {checklists.map((checklist, index) => (
                  <Card key={index} className="bg-card/60 backdrop-blur-sm border border-border/10 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="mb-2">
                            <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                              {checklist.category}
                            </span>
                            <span className="ml-2 text-xs text-muted-foreground">
                              {checklist.items} Punkte
                            </span>
                          </div>
                          <CardTitle className="mb-2">{checklist.title}</CardTitle>
                          <CardDescription>{checklist.description}</CardDescription>
                        </div>
                        <div className="bg-secondary/10 p-2 rounded-full">
                          <FilePlusIcon className="h-5 w-5 text-secondary" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <DownloadIcon className="h-4 w-4" /> Als PDF herunterladen
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="webinars">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {webinars.map((webinar, index) => (
                  <Card key={index} className="bg-card/60 backdrop-blur-sm border border-border/10 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="mb-2">{webinar.title}</CardTitle>
                          <CardDescription>{webinar.description}</CardDescription>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-full">
                          <PlayCircleIcon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                        <div>
                          <p className="text-xs text-muted-foreground">Dauer</p>
                          <p className="font-medium">{webinar.duration}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Referent</p>
                          <p className="font-medium">{webinar.instructor}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Datum</p>
                          <p className="font-medium">{webinar.date}</p>
                        </div>
                      </div>
                      <Button className="w-full flex items-center justify-center gap-2">
                        <GlobeIcon className="h-4 w-4" /> Aufzeichnung ansehen
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Newsletter CTA */}
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 mt-16 text-center max-w-4xl mx-auto border border-border/10 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Bleib auf dem Laufenden</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Abonniere unseren Newsletter und erhalte regelmäßig neue Ressourcen, Tipps und exklusive Inhalte direkt in dein Postfach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Deine E-Mail-Adresse" 
                className="px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-96"
              />
              <Button>Abonnieren</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ressourcen;
