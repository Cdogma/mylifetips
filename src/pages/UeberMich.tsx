
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const UeberMich = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Über Mich"
            description="Erfahre mehr über meine Person, meinen Werdegang und meine Mission hinter diesem Blog."
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
            <div className="md:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="/lovable-uploads/6d8ac2cf-9a66-448d-80c5-dcccf33f9917.png"
                  alt="Profilbild"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7">
              <h2 className="text-2xl font-bold mb-4">Hallo, ich bin Max Mustermann</h2>
              <p className="text-muted-foreground mb-4">
                Herzlich willkommen auf meiner Website! Ich bin leidenschaftlicher Finanzexperte, Technik-Enthusiast und Lifestyle-Blogger mit mehr als 10 Jahren Erfahrung im Bereich persönlicher Finanzen und digitaler Produkte.
              </p>
              <p className="text-muted-foreground mb-4">
                Meine Reise begann in der Finanzbranche, wo ich mehrere Jahre als Berater tätig war. Während dieser Zeit erkannte ich, dass vielen Menschen das Wissen fehlt, um informierte Finanzentscheidungen zu treffen. Daher habe ich es mir zur Mission gemacht, komplexe Finanzthemen verständlich zu erklären und ehrliche Empfehlungen auszusprechen.
              </p>
              <p className="text-muted-foreground">
                Heute teile ich mein Wissen und meine Erfahrungen in den Bereichen Finanzen, Technik, Lifestyle und Business, um dir zu helfen, bessere Entscheidungen zu treffen und dein Leben zu optimieren.
              </p>
            </div>
          </div>

          <Tabs defaultValue="mission" className="mt-16">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="mission">Meine Mission</TabsTrigger>
              <TabsTrigger value="expertise">Expertise</TabsTrigger>
              <TabsTrigger value="values">Werte</TabsTrigger>
              <TabsTrigger value="contact">Kontakt</TabsTrigger>
            </TabsList>
            <TabsContent value="mission">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Meine Mission</h3>
                  <p className="mb-4">
                    Mein Ziel ist es, komplexe Themen aus den Bereichen Finanzen, Technik, Lifestyle und Business verständlich zu erklären und dir ehrliche, unabhängige Empfehlungen zu geben.
                  </p>
                  <p>
                    Ich glaube daran, dass jeder Mensch von fundiertem Wissen profitieren kann, um bessere Entscheidungen im Alltag zu treffen. Daher teile ich meine persönlichen Erfahrungen und Recherchen, um dir zu helfen, Zeit und Geld zu sparen.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="expertise">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Meine Expertise</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Über 10 Jahre Erfahrung im Bereich persönlicher Finanzen</li>
                    <li>Zertifizierter Finanzberater mit Schwerpunkt auf Geldanlage und Altersvorsorge</li>
                    <li>Tech-Enthusiast mit besonderem Interesse an Smart Home und produktivitätssteigernden Gadgets</li>
                    <li>Erfahrener Blogger und Content Creator mit Fokus auf verständliche Wissensvermittlung</li>
                    <li>Selbstständiger Unternehmer mit Expertise in digitalen Geschäftsmodellen</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="values">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Meine Werte</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-medium mb-2">Transparenz</h4>
                      <p className="text-sm text-muted-foreground">Ich kommuniziere offen über Affiliate-Partnerschaften und verdiene mein Geld nur mit Produkten, die ich selbst nutze und empfehlen kann.</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-medium mb-2">Unabhängigkeit</h4>
                      <p className="text-sm text-muted-foreground">Meine Meinungen sind unabhängig und unbeeinflussbar. Ich empfehle nur, wovon ich selbst überzeugt bin.</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-medium mb-2">Praxisnähe</h4>
                      <p className="text-sm text-muted-foreground">Ich teste alle Produkte im Alltag und teile meine echten Erfahrungen – positive wie negative.</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-medium mb-2">Respekt</h4>
                      <p className="text-sm text-muted-foreground">Ich respektiere deine Zeit und Privatsphäre und bemühe mich um wertvollen, relevanten Content.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="contact">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Kontakt aufnehmen</h3>
                  <p className="mb-4">
                    Du hast Fragen, Anregungen oder möchtest mit mir zusammenarbeiten? Ich freue mich über deine Nachricht!
                  </p>
                  <div className="flex justify-center mt-6">
                    <a
                      href="/kontakt"
                      className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Zum Kontaktformular
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default UeberMich;
