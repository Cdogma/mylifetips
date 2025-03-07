
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Download } from "lucide-react";

const Ressourcen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Ressourcen"
            description="Nützliche Tools, E-Books und Vorlagen für deine Finanzen, Technik, Lifestyle und Business."
          />

          <Tabs defaultValue="finanzen" className="w-full max-w-4xl mx-auto mt-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="finanzen">Finanzen</TabsTrigger>
              <TabsTrigger value="technik">Technik</TabsTrigger>
              <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>
            
            <TabsContent value="finanzen">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6">Ressourcen für deine Finanzen</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">Haushaltsbuch Excel-Vorlage</h4>
                      <p className="text-sm text-muted-foreground mb-4">Eine einfache Vorlage zum Tracken deiner monatlichen Einnahmen und Ausgaben.</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Kostenlos herunterladen
                      </a>
                    </div>
                    
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">ETF-Sparplan Rechner</h4>
                      <p className="text-sm text-muted-foreground mb-4">Berechne, wie viel dein ETF-Sparplan im Laufe der Zeit wachsen kann.</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Zum Online-Rechner
                      </a>
                    </div>
                    
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">E-Book: Finanzielle Freiheit</h4>
                      <p className="text-sm text-muted-foreground mb-4">Mein kostenloses E-Book zum Thema finanzielle Unabhängigkeit.</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        PDF herunterladen
                      </a>
                    </div>
                    
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">Checkliste: Versicherungen</h4>
                      <p className="text-sm text-muted-foreground mb-4">Welche Versicherungen sind wirklich wichtig und welche kannst du dir sparen?</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Kostenlos herunterladen
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="technik">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6">Ressourcen für deine Technik</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">Smart Home Einsteigerguide</h4>
                      <p className="text-sm text-muted-foreground mb-4">Ein umfassender Guide für Einsteiger in die Welt des Smart Homes.</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        PDF herunterladen
                      </a>
                    </div>
                    
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">Checkliste: Smartphone-Kauf</h4>
                      <p className="text-sm text-muted-foreground mb-4">Worauf du beim Kauf eines neuen Smartphones achten solltest.</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Kostenlos herunterladen
                      </a>
                    </div>
                    
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">Produktivitäts-Apps Übersicht</h4>
                      <p className="text-sm text-muted-foreground mb-4">Meine Empfehlungen für Apps, die deine Produktivität steigern.</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Zur Übersicht
                      </a>
                    </div>
                    
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">PC-Bauteile Kompatibilitätsprüfer</h4>
                      <p className="text-sm text-muted-foreground mb-4">Ein Tool zum Überprüfen der Kompatibilität von PC-Komponenten.</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Zum Online-Tool
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="lifestyle">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6">Ressourcen für deinen Lifestyle</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">Reisepackliste</h4>
                      <p className="text-sm text-muted-foreground mb-4">Meine ultimative Packliste für verschiedene Reisearten.</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        PDF herunterladen
                      </a>
                    </div>
                    
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">Fitness-Plan für Einsteiger</h4>
                      <p className="text-sm text-muted-foreground mb-4">Ein 4-Wochen-Plan für einen gesunden Start in ein aktiveres Leben.</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Kostenlos herunterladen
                      </a>
                    </div>
                    
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">Capsule Wardrobe Planer</h4>
                      <p className="text-sm text-muted-foreground mb-4">Ein praktischer Planer für deine minimalistische Garderobe.</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        PDF herunterladen
                      </a>
                    </div>
                    
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">Meal Prep Rezeptsammlung</h4>
                      <p className="text-sm text-muted-foreground mb-4">Gesunde und einfache Rezepte für deine Wochenplanung.</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Kostenlos herunterladen
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="business">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6">Ressourcen für dein Business</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">Business-Plan Vorlage</h4>
                      <p className="text-sm text-muted-foreground mb-4">Eine umfassende Vorlage für deinen Businessplan.</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Kostenlos herunterladen
                      </a>
                    </div>
                    
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">Marketing-Kalender 2024</h4>
                      <p className="text-sm text-muted-foreground mb-4">Ein Kalender mit wichtigen Ereignissen und Marketing-Ideen.</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Excel-Datei herunterladen
                      </a>
                    </div>
                    
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">Checkliste: Gründung</h4>
                      <p className="text-sm text-muted-foreground mb-4">Alle wichtigen Schritte für deine Unternehmensgründung.</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        PDF herunterladen
                      </a>
                    </div>
                    
                    <div className="border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                      <h4 className="font-medium mb-2">Social Media Vorlagen</h4>
                      <p className="text-sm text-muted-foreground mb-4">Designvorlagen für deine Social-Media-Präsenz.</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Zur Sammlung
                      </a>
                    </div>
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

export default Ressourcen;
