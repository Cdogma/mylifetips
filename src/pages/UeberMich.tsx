
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { CalendarDays, Briefcase, GraduationCap, Heart, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const UeberMich = () => {
  return (
    <Layout>
      <section className="pt-24 pb-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-border/10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop" 
                  alt="Max Müller" 
                  className="w-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h1 className="text-3xl font-bold text-white mb-2">Max Müller</h1>
                  <p className="text-white/90">Finanz- & Technikblogger</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Über mich</h2>
                  <p className="text-muted-foreground text-lg">
                    Hey, ich bin Max – 34 Jahre alt, selbstständiger Unternehmer und leidenschaftlicher Blogger. Auf MyLifeTips teile ich meine Erfahrungen und Tipps zu Finanzen, Business, Technik und Lifestyle.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-muted-foreground">
                    <CalendarDays className="mr-2 h-5 w-5 text-primary" />
                    <span>34 Jahre</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Briefcase className="mr-2 h-5 w-5 text-primary" />
                    <span>Selbstständig seit 2016</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                    <span>M.Sc. Wirtschaftsinformatik</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground">
                  Was als kleiner persönlicher Blog begann, ist heute zu einer Plattform gewachsen, auf der ich mein Wissen und meine Erfahrungen teile. Ich bin kein Finanzberater oder Technikexperte – ich bin jemand, der seine eigenen Erfahrungen macht und darüber berichtet, was funktioniert und was nicht.
                </p>
                
                <div className="pt-4">
                  <Link to="/kontakt">
                    <Button className="flex items-center">
                      <Mail className="mr-2 h-5 w-5" />
                      Kontakt aufnehmen
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-muted/30">
        <div className="container">
          <Tabs defaultValue="story" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger value="story">Meine Geschichte</TabsTrigger>
                <TabsTrigger value="mission">Meine Mission</TabsTrigger>
                <TabsTrigger value="expertise">Fachgebiete</TabsTrigger>
                <TabsTrigger value="values">Werte</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="story">
              <Card>
                <CardContent className="p-8">
                  <div className="max-w-3xl mx-auto">
                    <SectionHeading
                      title="Meine Geschichte"
                      description="Vom Angestellten zum Unternehmer und Blogger"
                      align="center"
                    />
                    
                    <div className="prose max-w-none mt-8">
                      <p>
                        Nach meinem Studium der Wirtschaftsinformatik startete ich wie viele andere auch in einem klassischen Angestelltenverhältnis in einer Beratungsfirma. Der Job war spannend und gut bezahlt, aber nach einigen Jahren merkte ich, dass mir die Freiheit fehlte, meine eigenen Ideen umzusetzen.
                      </p>
                      
                      <p>
                        2016 wagte ich dann den Schritt in die Selbstständigkeit und gründete mein eigenes Unternehmen im Bereich Digitale Transformation. Es folgten Höhen und Tiefen – von euphorischen Erfolgen bis hin zu schlaflosen Nächten, wenn Projekte nicht wie geplant liefen.
                      </p>
                      
                      <p>
                        Parallel dazu begann ich, mich intensiv mit meinen persönlichen Finanzen zu beschäftigen. Ich investierte viel Zeit in Bücher, Podcasts und Kurse, um Strategien für langfristigen Vermögensaufbau zu verstehen. Was als Hobby begann, wurde schnell zu einer Leidenschaft.
                      </p>
                      
                      <p>
                        2020 startete ich diesen Blog, um meine Erfahrungen und Learnings zu teilen. Anfangs nur für Freunde und Familie gedacht, erreiche ich heute tausende Leser monatlich, die nach praktischen Tipps zu Finanzen, Business, Technik und Lifestyle suchen.
                      </p>
                      
                      <p>
                        Mein Ziel ist es, komplexe Themen einfach zu erklären und praktische Tipps zu geben, die jeder umsetzen kann. Dabei bin ich immer transparent und teile sowohl Erfolge als auch Misserfolge – denn aus beiden kann man lernen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="mission">
              <Card>
                <CardContent className="p-8">
                  <div className="max-w-3xl mx-auto">
                    <SectionHeading
                      title="Meine Mission"
                      description="Warum ich diesen Blog betreibe"
                      align="center"
                    />
                    
                    <div className="prose max-w-none mt-8">
                      <p>
                        <strong>Komplexe Themen einfach erklären</strong> - Ob Finanzen, Technologie oder Business: Viele wichtige Themen werden unnötig kompliziert dargestellt. Ich möchte diese Themen auf den Punkt bringen und so erklären, dass sie jeder verstehen kann.
                      </p>
                      
                      <p>
                        <strong>Praktische Tipps statt Theorie</strong> - Mir geht es nicht um abstrakte Theorien, sondern um konkrete Handlungsempfehlungen, die du direkt umsetzen kannst. Ich teste selbst, was funktioniert, und teile meine Erfahrungen.
                      </p>
                      
                      <p>
                        <strong>Ehrlichkeit und Transparenz</strong> - Im Internet gibt es viele "Experten", die schnellen Reichtum oder sofortigen Erfolg versprechen. Ich glaube an nachhaltige Strategien und bin transparent, auch bei Themen wie Affiliate-Links.
                      </p>
                      
                      <p>
                        <strong>Gemeinschaft aufbauen</strong> - Dieser Blog soll nicht nur ein Monolog sein, sondern ein Ort des Austauschs. Ich freue mich über Feedback, Fragen und Anregungen von Lesern, die mich und den Blog weiterbringen.
                      </p>
                      
                      <p>
                        <strong>Kontinuierliches Lernen fördern</strong> - Ich bin selbst ständig am Lernen und möchte diese Neugier auch bei meinen Lesern fördern. In einer sich schnell verändernden Welt ist lebenslanges Lernen der Schlüssel zum Erfolg.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="expertise">
              <Card>
                <CardContent className="p-8">
                  <div className="max-w-3xl mx-auto">
                    <SectionHeading
                      title="Meine Fachgebiete"
                      description="Diese Themen beschäftigen mich besonders"
                      align="center"
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                      <div className="bg-card p-6 rounded-lg border border-border">
                        <h3 className="text-xl font-semibold mb-4">Finanzen & Investieren</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• ETF-Sparpläne & passives Investieren</li>
                          <li>• Optimierung von Bankprodukten</li>
                          <li>• Strategien für finanzielle Freiheit</li>
                          <li>• Steuern optimieren</li>
                          <li>• Altersvorsorge</li>
                        </ul>
                      </div>
                      
                      <div className="bg-card p-6 rounded-lg border border-border">
                        <h3 className="text-xl font-semibold mb-4">Business & Unternehmertum</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Selbstständigkeit & Gründung</li>
                          <li>• Digitales Marketing</li>
                          <li>• Produktivitätsstrategien</li>
                          <li>• Tools für Unternehmer</li>
                          <li>• Kundenbindung & -gewinnung</li>
                        </ul>
                      </div>
                      
                      <div className="bg-card p-6 rounded-lg border border-border">
                        <h3 className="text-xl font-semibold mb-4">Technik & Digitales</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Smart Home & Vernetzung</li>
                          <li>• Produktivitäts-Apps & Tools</li>
                          <li>• Digitale Sicherheit</li>
                          <li>• Hardware-Empfehlungen</li>
                          <li>• Zukunftstechnologien</li>
                        </ul>
                      </div>
                      
                      <div className="bg-card p-6 rounded-lg border border-border">
                        <h3 className="text-xl font-semibold mb-4">Lifestyle & Persönliches</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Work-Life-Balance</li>
                          <li>• Minimalismus & Fokussierung</li>
                          <li>• Nachhaltiger Konsum</li>
                          <li>• Persönliche Entwicklung</li>
                          <li>• Gesundheit & Wohlbefinden</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="values">
              <Card>
                <CardContent className="p-8">
                  <div className="max-w-3xl mx-auto">
                    <SectionHeading
                      title="Meine Werte"
                      description="Diese Prinzipien leiten mich und meinen Blog"
                      align="center"
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                      <div className="bg-card p-6 rounded-lg border border-border">
                        <div className="flex items-center mb-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                            <Heart className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold">Ehrlichkeit</h3>
                        </div>
                        <p className="text-muted-foreground">
                          Ich verspreche keine Wunder oder schnellen Reichtum. Stattdessen teile ich realistische Strategien und bin transparent, auch wenn etwas nicht funktioniert hat.
                        </p>
                      </div>
                      
                      <div className="bg-card p-6 rounded-lg border border-border">
                        <div className="flex items-center mb-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                            <Heart className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold">Unabhängigkeit</h3>
                        </div>
                        <p className="text-muted-foreground">
                          Ich bin keinem Unternehmen oder Anbieter verpflichtet und empfehle nur Produkte und Dienstleistungen, die ich selbst nutze oder von denen ich überzeugt bin.
                        </p>
                      </div>
                      
                      <div className="bg-card p-6 rounded-lg border border-border">
                        <div className="flex items-center mb-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                            <Heart className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold">Qualität</h3>
                        </div>
                        <p className="text-muted-foreground">
                          Ich strebe nach hochwertigen, gut recherchierten Inhalten. Lieber weniger, aber bessere Artikel als eine Flut von oberflächlichen Beiträgen.
                        </p>
                      </div>
                      
                      <div className="bg-card p-6 rounded-lg border border-border">
                        <div className="flex items-center mb-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                            <Heart className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold">Respekt</h3>
                        </div>
                        <p className="text-muted-foreground">
                          Ich respektiere unterschiedliche Meinungen und Lebenssituationen. Nicht jeder Tipp passt zu jedem - ich möchte Optionen aufzeigen, nicht vorschreiben.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              title="Schön, dass du hier bist!"
              description="Ich freue mich, wenn meine Inhalte dir weiterhelfen. Hast du Fragen, Anregungen oder Feedback? Ich freue mich über deine Nachricht."
              align="center"
            />
            
            <div className="mt-8">
              <Link to="/kontakt">
                <Button size="lg" className="px-8">
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UeberMich;
