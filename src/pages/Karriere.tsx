
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseIcon, GraduationCapIcon, TrendingUpIcon, HeartIcon, MapPinIcon, BadgeEuroIcon } from "lucide-react";

const Karriere = () => {
  const jobPositions = [
    {
      title: "Senior Frontend Entwickler (m/w/d)",
      location: "Berlin oder Remote",
      type: "Vollzeit",
      department: "Technologie",
      salary: "70.000€ - 90.000€",
      description: "Als Senior Frontend Entwickler gestaltest du innovative Benutzererfahrungen und führst ein Team von Entwicklern bei der Umsetzung komplexer Webapplikationen.",
      requirements: [
        "Min. 5 Jahre Erfahrung mit modernen JavaScript-Frameworks (React, Vue)",
        "Fundierte Kenntnisse in TypeScript und modernen CSS-Frameworks",
        "Erfahrung mit CI/CD-Pipelines und Testautomatisierung",
        "Teamleitungserfahrung ist von Vorteil"
      ]
    },
    {
      title: "Content Manager (m/w/d)",
      location: "Hamburg oder Remote",
      type: "Vollzeit/Teilzeit möglich",
      department: "Marketing",
      salary: "45.000€ - 55.000€",
      description: "Du erstellst und kuratierst qualitativ hochwertige Inhalte für unsere verschiedenen Plattformen und arbeitest eng mit unserem SEO-Team zusammen.",
      requirements: [
        "Ausgezeichnete Schreibfähigkeiten und Kreativität",
        "Erfahrung mit Content-Management-Systemen",
        "Grundverständnis von SEO-Prinzipien",
        "Organisationstalent und Fähigkeit, Deadlines einzuhalten"
      ]
    },
    {
      title: "Business Development Manager (m/w/d)",
      location: "München",
      type: "Vollzeit",
      department: "Vertrieb",
      salary: "60.000€ - 75.000€ plus Boni",
      description: "Als Business Development Manager identifizierst du neue Geschäftsmöglichkeiten, baust strategische Partnerschaften auf und trägst zum Wachstum unseres Unternehmens bei.",
      requirements: [
        "Nachweisliche Erfahrung im B2B-Vertrieb und Partnerschaftsmanagement",
        "Ausgezeichnete Verhandlungs- und Präsentationsfähigkeiten",
        "Unternehmerisches Denken und analytische Fähigkeiten",
        "Bereitschaft zu reisen (20-30%)"
      ]
    }
  ];

  const benefits = [
    {
      icon: <BadgeEuroIcon className="h-12 w-12 text-primary" />,
      title: "Wettbewerbsfähiges Gehalt",
      description: "Wir bieten faire und attraktive Vergütung für deine Expertise und deinen Beitrag."
    },
    {
      icon: <TrendingUpIcon className="h-12 w-12 text-primary" />,
      title: "Karriereentwicklung",
      description: "Individuelle Entwicklungspfade und regelmäßige Weiterbildungsmöglichkeiten."
    },
    {
      icon: <GraduationCapIcon className="h-12 w-12 text-primary" />,
      title: "Lernbudget",
      description: "Jährliches Budget für Konferenzen, Kurse oder Bücher deiner Wahl."
    },
    {
      icon: <HeartIcon className="h-12 w-12 text-primary" />,
      title: "Gesundheitsvorteile",
      description: "Umfassende Krankenversicherung und Zugang zu Gesundheits- und Wellnessprogrammen."
    }
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Karriere bei MyLifeTips"
            description="Werde Teil unseres Teams und gestalte mit uns die Zukunft des digitalen Lifestyles."
            align="center"
          />

          {/* Einleitungstext */}
          <div className="max-w-4xl mx-auto my-12 text-center">
            <p className="text-lg text-muted-foreground">
              Bei MyLifeTips arbeiten wir täglich daran, unseren Nutzern wertvolle Tipps und Einblicke für ein besseres Leben zu bieten. 
              Wir suchen leidenschaftliche Talente, die unsere Vision teilen und mit ihren einzigartigen Fähigkeiten unser Team bereichern.
            </p>
          </div>

          {/* Vorteile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border border-border/10 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Offene Stellen */}
          <SectionHeading
            title="Offene Stellen"
            description="Entdecke deine Karrieremöglichkeiten bei uns"
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
            {jobPositions.map((job, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border border-border/10 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-semibold mb-2">{job.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPinIcon className="h-4 w-4" /> {job.location} • {job.type}
                      </CardDescription>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-full">
                      <BriefcaseIcon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Abteilung</p>
                    <p>{job.department}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Gehaltsspanne</p>
                    <p>{job.salary}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Beschreibung</p>
                    <p className="text-sm">{job.description}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Anforderungen</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Jetzt bewerben</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Bewerben CTA */}
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12 mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Keine passende Stelle gefunden?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Wir sind immer auf der Suche nach talentierten Menschen. Schick uns eine Initiativbewerbung und erzähle uns, wie du unser Team verstärken könntest.
            </p>
            <Button size="lg">Initiativbewerbung senden</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Karriere;
