
import { Card, CardContent } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import SectionHeading from "../UI/SectionHeading";

const LifestyleTips = () => {
  return (
    <section id="lifestyle-tipps" className="section-padding">
      <div className="container">
        <SectionHeading
          title="Meine Lifestyle-Tipps"
          description="Entdecke Tipps zu verschiedenen Bereichen des täglichen Lebens."
          align="center"
        />

        <Tabs defaultValue="gesundheit" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="gesundheit">Gesundheit & Wellness</TabsTrigger>
            <TabsTrigger value="produktivitaet">Produktivität</TabsTrigger>
            <TabsTrigger value="nachhaltigkeit">Nachhaltigkeit</TabsTrigger>
            <TabsTrigger value="minimalismus">Minimalismus</TabsTrigger>
          </TabsList>
          
          <TabsContent value="gesundheit">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Gesundheit & Wellness</h3>
                <div className="space-y-4">
                  <p>Gesundheit ist mehr als nur die Abwesenheit von Krankheit. Es geht um ganzheitliches Wohlbefinden, das Körper, Geist und Seele umfasst. Hier sind einige meiner wichtigsten Tipps:</p>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Bewegung in den Alltag integrieren</strong> - Es muss nicht immer das Fitnessstudio sein. Schon kleine Veränderungen wie Treppensteigen statt Aufzugfahren oder kurze Spaziergänge in der Mittagspause können einen großen Unterschied machen.</li>
                    <li><strong>Ausreichend Schlaf</strong> - 7-8 Stunden qualitativ hochwertiger Schlaf ist entscheidend für Regeneration und Gesundheit. Eine regelmäßige Schlafenszeit und ein ruhiges Schlafumfeld können die Schlafqualität deutlich verbessern.</li>
                    <li><strong>Achtsamkeit praktizieren</strong> - Regelmäßige Meditation oder bewusstes Atmen kann Stress reduzieren und das allgemeine Wohlbefinden steigern.</li>
                    <li><strong>Digital Detox</strong> - Regelmäßige Auszeiten von digitalen Geräten können Stress reduzieren und die Konzentrationsfähigkeit verbessern.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="produktivitaet">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Produktivität & Fokus</h3>
                <div className="space-y-4">
                  <p>In einer Welt voller Ablenkungen ist es eine Herausforderung, fokussiert und produktiv zu bleiben. Diese Strategien helfen mir, meine Ziele effizienter zu erreichen:</p>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Pomodoro-Technik</strong> - 25 Minuten fokussiertes Arbeiten, gefolgt von 5 Minuten Pause, kann die Produktivität erheblich steigern.</li>
                    <li><strong>Wichtige Aufgaben zuerst</strong> - Die anspruchsvollsten Aufgaben am Morgen erledigen, wenn die Energie und Konzentration am höchsten sind.</li>
                    <li><strong>Klare Tagesplanung</strong> - Jeden Tag mit einer klaren Liste von 3-5 Prioritäten beginnen, die unbedingt erledigt werden müssen.</li>
                    <li><strong>Ablenkungen minimieren</strong> - Benachrichtigungen deaktivieren und feste Zeiten für E-Mails und Social Media festlegen.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="nachhaltigkeit">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Nachhaltiger Lebensstil</h3>
                <div className="space-y-4">
                  <p>Nachhaltigkeit beginnt im Alltag mit kleinen, aber konsequenten Entscheidungen. Diese Tipps können dir helfen, umweltbewusster zu leben:</p>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Mehrwegprodukte nutzen</strong> - Von Einkaufstaschen über Kaffeebecher bis hin zu Wasserflaschen: Einwegplastik lässt sich oft leicht vermeiden.</li>
                    <li><strong>Bewusst konsumieren</strong> - Vor jedem Kauf überlegen: Brauche ich das wirklich? Qualität statt Quantität wählen und auf langlebige Produkte setzen.</li>
                    <li><strong>Regionale und saisonale Lebensmittel</strong> - Kurze Transportwege und weniger Ressourcenverbrauch bei der Produktion schonen die Umwelt.</li>
                    <li><strong>Strom und Wasser sparen</strong> - Kleine Gewohnheitsänderungen wie das Ausschalten ungenutzter Geräte oder kürzeres Duschen summieren sich.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="minimalismus">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Minimalismus im Alltag</h3>
                <div className="space-y-4">
                  <p>Minimalismus bedeutet nicht, in einem leeren Raum zu leben. Es geht darum, sich auf das Wesentliche zu konzentrieren und bewusste Entscheidungen zu treffen:</p>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Regelmäßiges Ausmisten</strong> - Die 6-Monats-Regel anwenden: Was in den letzten 6 Monaten nicht benutzt wurde, wird wahrscheinlich auch in Zukunft nicht gebraucht.</li>
                    <li><strong>Ein Gegenstand rein, einer raus</strong> - Bei jedem Neukauf einen ähnlichen Gegenstand aussortieren, um Anhäufungen zu vermeiden.</li>
                    <li><strong>Digitales Aufräumen</strong> - Auch digitaler Ballast wie ungenutzte Apps, alte E-Mails oder überflüssige Dateien kann Stress verursachen.</li>
                    <li><strong>Bewusster Medienkonsum</strong> - Qualität statt Quantität: Lieber ein gutes Buch gründlich lesen als durch endlose Social-Media-Feeds scrollen.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LifestyleTips;
