
import { Heart, ShieldCheck, BookOpen, ScrollText } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Persönlich getestet",
      description: "Wir empfehlen nur Produkte und Services, die wir selbst nutzen und lieben."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Unabhängige Bewertungen",
      description: "Unsere Bewertungen sind ehrlich und basieren auf realen Erfahrungen."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Tiefgehende Analysen",
      description: "Wir testen gründlich und berichten detailliert über Vor- und Nachteile."
    },
    {
      icon: <ScrollText className="h-6 w-6 text-primary" />,
      title: "Aktuelle Inhalte",
      description: "Wir aktualisieren unsere Empfehlungen regelmäßig, um immer auf dem neuesten Stand zu sein."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Was macht MyLifeTips besonders?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ehrliche Empfehlungen für dein Leben
          </h2>
          <p className="text-lg text-muted-foreground">
            Bei uns findest du ausschließlich Empfehlungen, die wir selbst getestet und für gut befunden haben. Kein Marketing-Sprech, sondern ehrliche Erfahrungen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
