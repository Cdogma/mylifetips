
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, BookOpen, Building, FileCheck, LightbulbIcon, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Gruendung = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Unternehmensgründung"
            description="Vom ersten Schritt bis zum erfolgreichen Geschäft – Tipps und Tools für Gründer"
          />

          <div className="max-w-3xl mx-auto mb-16 text-muted-foreground">
            <p className="text-lg mb-6">
              Die Gründung eines eigenen Unternehmens ist ein aufregender Schritt, der sowohl Chancen als auch 
              Herausforderungen mit sich bringt. Hier findest du wichtige Informationen und Ressourcen, die 
              dir dabei helfen, dein Business erfolgreich aufzubauen.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
              <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
                <LightbulbIcon className="h-5 w-5 text-primary" />
                Tipp für Gründer
              </h3>
              <p>
                Nutze die ersten Monate, um dein Geschäftsmodell zu validieren und Feedback von echten Kunden 
                zu sammeln. Sei bereit, deine Strategie anzupassen, bevor du große Investitionen tätigst.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            <Card>
              <CardHeader>
                <FileCheck className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Rechtliche Grundlagen</CardTitle>
                <CardDescription>Rechtsformen, Anmeldung, Steuern</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Informiere dich über verschiedene Rechtsformen wie Einzelunternehmen, GmbH oder UG und wähle 
                  die passende für dein Vorhaben. Beachte steuerliche Pflichten und notwendige Anmeldungen.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.existenzgruender.de/DE/Gruendung-vorbereiten/Rechtsformen/inhalt.html" target="_blank" rel="noopener noreferrer">
                    Mehr erfahren
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Geschäftsplan</CardTitle>
                <CardDescription>Strategie, Finanzierung, Planung</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ein durchdachter Businessplan ist der Grundstein für deinen Erfolg. Er hilft dir nicht nur bei 
                  der Finanzierung, sondern gibt dir auch eine klare Richtung für dein Unternehmen.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.bmwk.de/Redaktion/DE/Downloads/B/businessplan.html" target="_blank" rel="noopener noreferrer">
                    Business-Plan-Vorlage
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Building className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Fördermittel</CardTitle>
                <CardDescription>Zuschüsse, Darlehen, Programme</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Es gibt zahlreiche Förderprogramme für Gründer – von zinsgünstigen Darlehen über Zuschüsse bis 
                  hin zu Gründungsstipendien. Prüfe, welche für dein Vorhaben in Frage kommen.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.foerderdatenbank.de" target="_blank" rel="noopener noreferrer">
                    Förderdatenbank
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Netzwerke</CardTitle>
                <CardDescription>Communities, Mentoring, Events</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tausche dich mit anderen Gründern aus, finde Mentoren und erweitere dein Netzwerk. Der Austausch 
                  mit erfahrenen Unternehmern kann dir wertvolle Einblicke und Kontakte vermitteln.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.xing.com/communities/groups/gruender-und-selbststaendige-1004118" target="_blank" rel="noopener noreferrer">
                    Communities entdecken
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Weiterbildung</CardTitle>
                <CardDescription>Kurse, Workshops, Webinare</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Investiere in deine Fähigkeiten als Unternehmer. Ob Marketing, Finanzen oder Führung – 
                  kontinuierliches Lernen ist ein wichtiger Erfolgsfaktor für dein Business.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.ihk.de/gruendung" target="_blank" rel="noopener noreferrer">
                    IHK-Seminare
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Finanzplanung</CardTitle>
                <CardDescription>Buchhaltung, Steuern, Controlling</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Eine solide Finanzplanung und -kontrolle ist entscheidend für den langfristigen Erfolg. 
                  Setze von Anfang an auf professionelle Buchhaltung und regelmäßiges Controlling.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/finanzen">
                    Finanztipps
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Häufige Fragen zur Unternehmensgründung
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Welche Rechtsform ist die beste für mein Unternehmen?
                </h3>
                <p>
                  Die Wahl der Rechtsform hängt von vielen Faktoren ab: Haftungsrisiken, Steuern, Kapitalaufwand, 
                  Anzahl der Gründer und zukünftige Pläne. Für Einzelgründer mit geringem Kapitalbedarf ist oft 
                  ein Einzelunternehmen praktisch, während eine GmbH oder UG mehr Sicherheit bei höherem 
                  Haftungsrisiko bietet.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Wie viel Startkapital benötige ich?
                </h3>
                <p>
                  Der Kapitalbedarf variiert stark je nach Branche und Geschäftsmodell. Erstelle eine detaillierte 
                  Kalkulation deiner anfänglichen Investitionen und laufenden Kosten. Plane auch eine Reserve für 
                  unvorhergesehene Ausgaben ein und bedenke, dass es meist länger dauert als erwartet, bis ein 
                  positiver Cashflow erreicht wird.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Welche Versicherungen sind für Gründer wichtig?
                </h3>
                <p>
                  Neben einer Berufshaftpflichtversicherung solltest du je nach Branche über folgende Versicherungen 
                  nachdenken: Betriebshaftpflicht, Rechtsschutzversicherung, Geschäftsinhaltsversicherung und 
                  Krankenversicherung. Als Selbstständiger bist du zudem für deine Altersvorsorge selbst verantwortlich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gruendung;
