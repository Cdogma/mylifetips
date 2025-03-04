
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { badgeVariants } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, ExternalLink, CreditCard, Wallet, BanknoteIcon, PiggyBank } from "lucide-react";
import { Link } from "react-router-dom";

const C24BankAccount = () => {
  return (
    <Layout>
      <div className="relative py-16 md:py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className={`inline-flex items-center ${badgeVariants({ variant: "outline" })} mb-4 px-3 py-1`}>
                <span className="text-primary font-medium">Empfehlung</span>
                <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">4.8/5</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                C24 Smart Girokonto
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                Das C24 Smart Girokonto ist meine persönliche Empfehlung für ein kostenloses Girokonto mit allen wichtigen Funktionen und einer hervorragenden App für deinen Alltag.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">0€ Kontoführung</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Kostenlose VISA</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Schnelle Eröffnung</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.check24.de/konto-kredit/girokonto/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <span>Zum Anbieter*</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <Button variant="outline">
                  <span>Zum Vergleich</span>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg border border-border/10">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop" 
                  alt="C24 Smart Girokonto" 
                  className="w-full object-cover"
                  style={{ height: "350px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex justify-center">
          <div className="bg-muted/30 rounded-full p-1.5 inline-flex">
            <span className="text-xs font-medium text-muted-foreground px-3 py-1">
              *Affiliate-Link: Bei einem Abschluss über diesen Link erhalte ich eine Provision
            </span>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <Tabs defaultValue="uebersicht" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            <TabsTrigger value="uebersicht">Übersicht</TabsTrigger>
            <TabsTrigger value="erfahrung">Meine Erfahrung</TabsTrigger>
            <TabsTrigger value="vorteile">Vor- & Nachteile</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="uebersicht" className="space-y-12">
            <section>
              <SectionHeading 
                title="Was ist das C24 Smart Girokonto?"
                description="Ein komplett kostenloses Girokonto ohne versteckte Gebühren und mit vielen Extras"
              />
              
              <div className="prose max-w-none">
                <p>
                  Das C24 Smart Girokonto ist ein vollständig kostenloses Girokonto, das von der CHECK24 Bank angeboten wird. Mit der dazugehörigen App bietet es eine moderne und intuitive Banking-Erfahrung, die besonders für digital-affine Nutzer geeignet ist.
                </p>
                <p>
                  Im Gegensatz zu vielen anderen "kostenlosen" Girokonten gibt es hier tatsächlich keine versteckten Gebühren oder Mindestgeldeingang-Anforderungen. Das Konto bleibt ohne Bedingungen gebührenfrei.
                </p>
                <p>
                  Die kostenlose VISA Debitkarte ermöglicht weltweit Bargeldabhebungen und kontaktloses Bezahlen. Sie ist außerdem Apple Pay und Google Pay kompatibel, was mobiles Bezahlen besonders einfach macht.
                </p>
              </div>
            </section>
            
            <section>
              <SectionHeading title="Die wichtigsten Features" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <BanknoteIcon className="h-5 w-5 text-primary" />
                      Kontoführung
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span>Bedingungslos kostenlose Kontoführung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span>Keine Mindesteingangsanforderung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span>Kostenloses Online- und Mobile-Banking</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      Karten & Bezahlen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span>Kostenlose VISA Debitkarte</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span>Apple Pay & Google Pay kompatibel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span>Kontaktloses Bezahlen</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <Wallet className="h-5 w-5 text-primary" />
                      Bargeld & Gebühren
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span>Kostenloses Bargeldabheben an 9.000+ Automaten in DE</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span>Echtzeit-Überweisungen für 0€</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-destructive shrink-0 mt-1" />
                        <span>1,75% Fremdwährungsgebühr außerhalb der EU</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>
          
          <TabsContent value="erfahrung" className="space-y-12">
            <section>
              <SectionHeading 
                title="Meine persönliche Erfahrung"
                description="Ich nutze das C24 Girokonto seit über 2 Jahren als Hauptkonto"
              />
              
              <div className="prose max-w-none">
                <p>
                  Seit 2022 nutze ich das C24 Smart Girokonto als mein Hauptkonto für alle täglichen Finanzen. Zuvor war ich lange bei einer traditionellen Bank, die mir jedoch immer mehr Gebühren berechnet hat, ohne besseren Service zu bieten.
                </p>
                <p>
                  <strong>Die Kontoeröffnung</strong> verlief komplett digital und war innerhalb von etwa 15 Minuten abgeschlossen. Der VideoIdent-Prozess war unkompliziert, und die Karte kam nach wenigen Werktagen an.
                </p>
                <p>
                  <strong>Die App</strong> ist meiner Meinung nach eine der besten Banking-Apps am Markt. Sie ist intuitiv, schnell und übersichtlich gestaltet. Besonders praktisch: Alle Transaktionen werden in Echtzeit angezeigt, und die Kategorisierung der Ausgaben funktioniert sehr zuverlässig.
                </p>
                <p>
                  <strong>Der Kundenservice</strong> war bei den wenigen Anlässen, bei denen ich ihn brauchte, kompetent und schnell. Der Chat ist direkt in der App integriert und die Antwortzeiten liegen meistens unter 5 Minuten.
                </p>
                <p>
                  <strong>Das Bargeldabheben</strong> funktioniert problemlos an allen Automaten mit dem VISA-Logo, wobei in Deutschland die Geldautomaten der Volksbanken, Raiffeisenbanken und Sparda-Banken kostenlos genutzt werden können.
                </p>
                <p>
                  <strong>Mein Fazit:</strong> Das C24 Smart Girokonto hat alle meine Erwartungen erfüllt und ich nutze es mittlerweile für alle meine täglichen Bankgeschäfte. Die Kombination aus kostenloser Kontoführung, guter App und umfangreichen Features macht es zu meiner klaren Empfehlung.
                </p>
              </div>
            </section>
          </TabsContent>
          
          <TabsContent value="vorteile" className="space-y-12">
            <section>
              <SectionHeading title="Vor- und Nachteile im Überblick" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-green-100 bg-green-50/30 dark:bg-green-950/10 dark:border-green-900/30">
                  <CardHeader>
                    <CardTitle className="text-green-700 dark:text-green-400">Vorteile</CardTitle>
                    <CardDescription>Was für das C24 Girokonto spricht</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 shrink-0 mt-0.5" />
                        <span>Dauerhaft kostenlose Kontoführung ohne Bedingungen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 shrink-0 mt-0.5" />
                        <span>Kostenlose VISA Debitkarte mit Apple Pay & Google Pay</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 shrink-0 mt-0.5" />
                        <span>Hervorragende, übersichtliche App mit vielen Features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 shrink-0 mt-0.5" />
                        <span>Kostenlose Echtzeit-Überweisungen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 shrink-0 mt-0.5" />
                        <span>Schnelle Kontoeröffnung innerhalb weniger Minuten</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 shrink-0 mt-0.5" />
                        <span>Gute Einbindung in das CHECK24 Ökosystem</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-red-100 bg-red-50/30 dark:bg-red-950/10 dark:border-red-900/30">
                  <CardHeader>
                    <CardTitle className="text-red-700 dark:text-red-400">Nachteile</CardTitle>
                    <CardDescription>Was gegen das C24 Girokonto spricht</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
                        <span>Keine physischen Filialen für persönliche Beratung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
                        <span>Fremdwährungsgebühr von 1,75% bei Zahlungen außerhalb der EU</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
                        <span>Keine Kreditkarte (nur Debitkarte) verfügbar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
                        <span>Keine Bargeldeinzahlung möglich</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
                        <span>Relativ junge Bank ohne langjährige Tradition</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>
          
          <TabsContent value="faq" className="space-y-12">
            <section>
              <SectionHeading title="Häufig gestellte Fragen" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Wie eröffne ich ein C24 Girokonto?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Die Kontoeröffnung erfolgt komplett digital über die CHECK24 Website oder App. Du benötigst einen gültigen Personalausweis oder Reisepass und durchläufst einen VideoIdent-Prozess zur Identitätsverifikation. Der gesamte Prozess dauert ca. 10-15 Minuten.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Kann ich mit der VISA Karte überall bezahlen?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Ja, die VISA Debitkarte wird weltweit an allen Akzeptanzstellen von VISA akzeptiert. Bei Zahlungen innerhalb der EU fallen keine zusätzlichen Gebühren an. Bei Zahlungen außerhalb der EU wird eine Fremdwährungsgebühr von 1,75% berechnet.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Wie ist das Konto durch die Einlagensicherung geschützt?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Die CHECK24 Bank ist Mitglied im Einlagensicherungsfonds des Bundesverbandes deutscher Banken. Damit sind Einlagen bis zu 100.000 EUR pro Kunde gesetzlich abgesichert, was dem EU-Standard entspricht.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Gibt es einen Dispo-Kredit?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Ja, nach erfolgreicher Bonitätsprüfung kann ein Dispositionskredit mit einem variablen Zinssatz eingerichtet werden. Die Höhe des Dispo-Rahmens ist individuell und richtet sich nach deiner Bonität und deinen regelmäßigen Einkünften.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>
      
      <section className="py-16 bg-muted/30">
        <div className="container">
          <SectionHeading 
            subtitle="Weitere Empfehlungen"
            title="Diese Alternativen könnten dich auch interessieren"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle>DKB-Konto</CardTitle>
                <CardDescription>Das beliebte Direktbank-Konto mit vielen Extras</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Kontoführung</span>
                    <span className="text-sm font-medium">0€</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Karte</span>
                    <span className="text-sm font-medium">VISA Debitkarte (0€)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Geldabheben DE</span>
                    <span className="text-sm font-medium">Kostenlos</span>
                  </div>
                  <Link to="/finanzen/bankkonten/dkb" className="text-primary hover:underline text-sm font-medium flex items-center">
                    <span>Zum Testbericht</span>
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle>N26 Standard</CardTitle>
                <CardDescription>Das mobile Konto mit internationaler Ausrichtung</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Kontoführung</span>
                    <span className="text-sm font-medium">0€</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Karte</span>
                    <span className="text-sm font-medium">Mastercard Debit (0€)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Geldabheben DE</span>
                    <span className="text-sm font-medium">3-5 mal kostenlos/Monat</span>
                  </div>
                  <Link to="/finanzen/bankkonten/n26" className="text-primary hover:underline text-sm font-medium flex items-center">
                    <span>Zum Testbericht</span>
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle>ING Girokonto</CardTitle>
                <CardDescription>Das etablierte Direktkonto mit hervorragendem Service</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Kontoführung</span>
                    <span className="text-sm font-medium">0€ (ab 700€ Geldeingang)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Karte</span>
                    <span className="text-sm font-medium">VISA Debitkarte (0€)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Geldabheben DE</span>
                    <span className="text-sm font-medium">Kostenlos</span>
                  </div>
                  <Link to="/finanzen/bankkonten/ing" className="text-primary hover:underline text-sm font-medium flex items-center">
                    <span>Zum Testbericht</span>
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default C24BankAccount;
