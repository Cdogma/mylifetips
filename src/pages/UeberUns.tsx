
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeartIcon, AwardIcon, UsersIcon, TargetIcon, CheckCircle2Icon } from "lucide-react";

const UeberUns = () => {
  const teamMembers = [
    {
      name: "Lisa Müller",
      position: "Gründerin & CEO",
      bio: "Lisa hat MyLifeTips 2018 mit der Vision gegründet, komplexe Themen verständlich zu machen und praktische Tipps für den Alltag zu liefern. Mit ihrer Erfahrung im Digital Publishing und Content Marketing führt sie das Unternehmen mit Leidenschaft und Innovationsgeist.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Mark Weber",
      position: "Chefredakteur",
      bio: "Als erfahrener Journalist und Content-Stratege sorgt Mark für die hohe Qualität unserer Inhalte. Er hat zuvor bei renommierten Online-Magazinen gearbeitet und bringt sein Fachwissen für verständliche und wertvolle Inhalte ein.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Sarah Schmidt",
      position: "Finanzexpertin",
      bio: "Mit ihrem Hintergrund als zertifizierte Finanzberaterin und freie Journalistin macht Sarah komplexe Finanzthemen verständlich. Sie liebt es, Menschen zu helfen, fundierte finanzielle Entscheidungen zu treffen.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Thomas Becker",
      position: "Tech-Experte",
      bio: "Thomas hat über 15 Jahre Erfahrung in der Tech-Branche und teilt sein Wissen mit unseren Lesern. Seine praxisnahen Tipps zu Technologie im Alltag sind bei unseren Lesern besonders beliebt.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Jana König",
      position: "Lifestyle-Redakteurin",
      bio: "Jana ist spezialisiert auf Nachhaltigkeit, Gesundheit und Wohlbefinden. Mit ihrem Hintergrund in Psychologie und als zertifizierte Yoga-Lehrerin bringt sie eine ganzheitliche Perspektive in unsere Lifestyle-Inhalte ein.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Daniel Fischer",
      position: "Business-Stratege",
      bio: "Nach Jahren als Unternehmensberater und erfolgreicher Gründer mehrerer Startups teilt Daniel sein Wissen über Unternehmertum, Leadership und Produktivität mit unserer Community.",
      avatar: "/placeholder.svg"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Gründung von MyLifeTips",
      description: "Lisa Müller startet MyLifeTips als persönlichen Blog mit Fokus auf Produktivitätstipps."
    },
    {
      year: "2019",
      title: "Erweiterung des Themenspektrums",
      description: "Ausweitung auf die Bereiche Finanzen und Technologie. Die monatlichen Besucherzahlen steigen auf über 50.000."
    },
    {
      year: "2020",
      title: "Wachstum des Teams",
      description: "Das Team wächst auf 5 Vollzeitmitarbeiter. Launch des wöchentlichen Newsletters mit über 10.000 Abonnenten."
    },
    {
      year: "2021",
      title: "Relaunch der Website",
      description: "Komplette Überarbeitung des Webauftritts und Einführung der Business- und Lifestyle-Kategorien."
    },
    {
      year: "2022",
      title: "1 Million monatliche Besucher",
      description: "MyLifeTips erreicht einen wichtigen Meilenstein mit 1 Million monatlichen Besuchern und erweitert das Angebot um kostenlose E-Books."
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
      description: "Wir recherchieren gründlich und bieten nur Informationen, die einen echten Mehrwert bieten."
    },
    {
      icon: <UsersIcon className="h-12 w-12 text-primary" />,
      title: "Gemeinschaft",
      description: "Wir glauben an die Kraft des Austausches und fördern den Dialog in unserer Community."
    },
    {
      icon: <HeartIcon className="h-12 w-12 text-primary" />,
      title: "Authentizität",
      description: "Wir teilen ehrliche Erfahrungen und praktische Tipps, die im echten Leben funktionieren."
    },
    {
      icon: <TargetIcon className="h-12 w-12 text-primary" />,
      title: "Relevanz",
      description: "Wir konzentrieren uns auf Themen, die einen echten Unterschied im Leben unserer Leser machen."
    }
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Über MyLifeTips"
            description="Erfahre mehr über unsere Geschichte, unsere Werte und die Menschen hinter MyLifeTips"
            align="center"
          />

          {/* Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 title-with-bar">Unsere Mission</h3>
              <p className="text-lg mb-6 text-muted-foreground">
                Bei MyLifeTips haben wir es uns zur Aufgabe gemacht, komplexe Themen aus den Bereichen Finanzen, 
                Business, Technologie und Lifestyle verständlich zu erklären und praktische Tipps zu liefern, 
                die unseren Lesern helfen, fundierte Entscheidungen zu treffen und ihr Leben zu verbessern.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Wir glauben daran, dass Wissen allen zugänglich sein sollte. Daher bemühen wir uns, 
                hochwertige Inhalte zu erstellen, die informativ, praktisch und leicht verständlich sind.
              </p>
              <p className="text-lg text-muted-foreground">
                Unser Ziel ist es, eine vertrauenswürdige Quelle für hilfreiche Informationen und Tipps 
                zu sein, die unseren Lesern dabei helfen, in verschiedenen Lebensbereichen erfolgreicher zu sein.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10">
                <img
                  src="/placeholder.svg"
                  alt="Das MyLifeTips Team bei einem Meeting"
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
              title="Unsere Werte"
              description="Diese Prinzipien leiten unsere tägliche Arbeit"
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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

          {/* Tabs for Team and History */}
          <div className="my-20">
            <Tabs defaultValue="team" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
                <TabsTrigger value="team">Unser Team</TabsTrigger>
                <TabsTrigger value="history">Unsere Geschichte</TabsTrigger>
              </TabsList>
              
              <TabsContent value="team">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamMembers.map((member, index) => (
                    <Card key={index} className="bg-card/60 backdrop-blur-sm border border-border/10 shadow-sm hover:shadow-md transition-all duration-300">
                      <CardHeader className="flex flex-col items-center text-center pb-2">
                        <Avatar className="h-24 w-24 mb-4 border-4 border-background">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-xl">{member.name}</CardTitle>
                        <CardDescription className="font-medium text-primary">
                          {member.position}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-muted-foreground">{member.bio}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
              title="Unsere Erfolge"
              description="Was wir bisher erreicht haben"
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
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <p className="text-muted-foreground">Teammitglieder</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UeberUns;
