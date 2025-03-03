
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeartIcon, AwardIcon, TargetIcon, CheckCircle2Icon } from "lucide-react";

const UeberMich = () => {
  const milestones = [
    {
      year: "2018",
      title: "Gründung von MyLifeTips",
      description: "Ich startete MyLifeTips als persönlichen Blog mit Fokus auf Produktivitätstipps."
    },
    {
      year: "2019",
      title: "Erweiterung des Themenspektrums",
      description: "Ausweitung auf die Bereiche Finanzen und Technologie. Die monatlichen Besucherzahlen stiegen auf über 50.000."
    },
    {
      year: "2020",
      title: "Erste Kooperationen",
      description: "Beginn der Zusammenarbeit mit verschiedenen Marken und Experten. Launch des wöchentlichen Newsletters mit über 10.000 Abonnenten."
    },
    {
      year: "2021",
      title: "Relaunch der Website",
      description: "Komplette Überarbeitung des Webauftritts und Einführung der Business- und Lifestyle-Kategorien."
    },
    {
      year: "2022",
      title: "1 Million monatliche Besucher",
      description: "MyLifeTips erreicht einen wichtigen Meilenstein mit 1 Million monatlichen Besuchern und einem erweiterten Angebot um kostenlose E-Books."
    },
    {
      year: "2023",
      title: "Launch der Community-Plattform",
      description: "Start einer interaktiven Community-Plattform für den Austausch zwischen Lesern und Experten."
    }
  ];

  const values = [
    {
      icon: <CheckCircle2Icon className="h-12 w-12 text-primary" />,
      title: "Qualität",
      description: "Ich recherchiere gründlich und biete nur Informationen, die einen echten Mehrwert bieten."
    },
    {
      icon: <HeartIcon className="h-12 w-12 text-primary" />,
      title: "Authentizität",
      description: "Ich teile ehrliche Erfahrungen und praktische Tipps, die im echten Leben funktionieren."
    },
    {
      icon: <TargetIcon className="h-12 w-12 text-primary" />,
      title: "Relevanz",
      description: "Ich konzentriere mich auf Themen, die einen echten Unterschied im Leben meiner Leser machen."
    }
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Über Mich"
            description="Erfahre mehr über die Person hinter MyLifeTips"
            align="center"
          />

          {/* Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 title-with-bar">Meine Mission</h3>
              <p className="text-lg mb-6 text-muted-foreground">
                Bei MyLifeTips habe ich es mir zur Aufgabe gemacht, komplexe Themen aus den Bereichen Finanzen, 
                Business, Technologie und Lifestyle verständlich zu erklären und praktische Tipps zu liefern, 
                die meinen Lesern helfen, fundierte Entscheidungen zu treffen und ihr Leben zu verbessern.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Ich glaube daran, dass Wissen allen zugänglich sein sollte. Daher bemühe ich mich, 
                hochwertige Inhalte zu erstellen, die informativ, praktisch und leicht verständlich sind.
              </p>
              <p className="text-lg text-muted-foreground">
                Mein Ziel ist es, eine vertrauenswürdige Quelle für hilfreiche Informationen und Tipps 
                zu sein, die meinen Lesern dabei helfen, in verschiedenen Lebensbereichen erfolgreicher zu sein.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10">
                <img
                  src="/lovable-uploads/292354a6-7f20-4b8d-af9f-b444a1d6ce38.png"
                  alt="Person arbeitet mit Laptop bei Sonnenschein"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="my-20">
            <SectionHeading
              title="Meine Werte"
              description="Diese Prinzipien leiten meine tägliche Arbeit"
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {values.map((value, index) => (
                <Card key={index} className="bg-card/60 backdrop-blur-sm border border-border/10 shadow-sm hover:shadow-md transition-shadow text-center">
                  <CardHeader className="pb-2">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tabs for About Me and History */}
          <div className="my-20">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
                <TabsTrigger value="about">Über Mich</TabsTrigger>
                <TabsTrigger value="history">Meine Geschichte</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about">
                <Card className="bg-card/60 backdrop-blur-sm border border-border/10 shadow-sm max-w-3xl mx-auto">
                  <CardHeader className="flex flex-col items-center text-center pb-2">
                    <Avatar className="h-24 w-24 mb-4 border-4 border-background">
                      <AvatarImage src="/placeholder.svg" alt="Profilbild" />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-2xl">Max Mustermann</CardTitle>
                    <CardDescription className="font-medium text-primary">
                      Gründer & Inhaber von MyLifeTips
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center max-w-2xl mx-auto">
                    <p className="text-muted-foreground mb-4">
                      Ich habe MyLifeTips 2018 mit der Vision gegründet, komplexe Themen verständlich zu machen und praktische Tipps 
                      für den Alltag zu liefern. Mit meiner Erfahrung im Digital Publishing und Content Marketing 
                      führe ich das Projekt mit Leidenschaft und Innovationsgeist.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Als leidenschaftlicher Blogger und Autor teile ich mein Wissen und meine Erfahrungen in den Bereichen 
                      Finanzen, Business, Technologie und Lifestyle. Mein Ziel ist es, komplexe Themen so aufzubereiten, 
                      dass sie für jeden verständlich und anwendbar sind.
                    </p>
                    <p className="text-muted-foreground">
                      Wenn ich nicht gerade schreibe oder recherchiere, findet man mich beim Wandern in den Bergen, 
                      beim Lesen eines guten Buches oder beim Experimentieren mit neuen Technologien.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="history">
                <div className="relative border-l-2 border-primary/30 ml-4 pl-8 space-y-8 py-4 max-w-3xl mx-auto">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-12 top-0 bg-primary/10 rounded-full p-1.5 border-4 border-background">
                        <AwardIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="absolute -left-14 top-0 bg-primary text-white text-sm font-bold px-2 py-1 rounded">
                        {milestone.year}
                      </div>
                      <Card className="bg-card/60 backdrop-blur-sm border border-border/10 shadow-sm hover:shadow-md transition-all ml-6">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl">{milestone.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Achievements Section */}
          <div className="my-20">
            <SectionHeading
              title="Meine Erfolge"
              description="Was ich bisher erreicht habe"
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-center">
              <Card className="bg-card/60 backdrop-blur-sm border border-border/10 shadow-sm py-8">
                <CardContent>
                  <div className="text-4xl font-bold text-primary mb-2">1.2M+</div>
                  <p className="text-muted-foreground">Monatliche Besucher</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/60 backdrop-blur-sm border border-border/10 shadow-sm py-8">
                <CardContent>
                  <div className="text-4xl font-bold text-primary mb-2">250+</div>
                  <p className="text-muted-foreground">Artikel veröffentlicht</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/60 backdrop-blur-sm border border-border/10 shadow-sm py-8">
                <CardContent>
                  <div className="text-4xl font-bold text-primary mb-2">45K+</div>
                  <p className="text-muted-foreground">Newsletter-Abonnenten</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/60 backdrop-blur-sm border border-border/10 shadow-sm py-8">
                <CardContent>
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <p className="text-muted-foreground">Laufende Kooperationen</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UeberMich;
