
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import RecommendationCard from "../components/UI/RecommendationCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Lightbulb, CheckCircle, RadioTower } from "lucide-react";

const Gadgets = () => {
  const topRecommendations = [
    {
      title: "Apple AirPods Pro 2",
      category: "Audio",
      description: "Die AirPods Pro 2 bieten hervorragende Geräuschunterdrückung, adaptiven Transparenzmodus und 3D-Audio mit dynamischem Head-Tracking für ein unvergleichliches Hörerlebnis.",
      rating: 4.8,
      imageSrc: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=800&auto=format&fit=crop",
      link: "/technik/gadgets/airpods-pro-2",
      isAffiliate: true,
    },
    {
      title: "Amazon Kindle Paperwhite",
      category: "E-Reader",
      description: "Der Kindle Paperwhite mit seinem 6,8-Zoll-Display, verstellbarem Frontlicht und bis zu 10 Wochen Akkulaufzeit ist der perfekte Begleiter für Leseratten.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1588286802208-ba95ba8b6b8a?q=80&w=800&auto=format&fit=crop",
      link: "/technik/gadgets/kindle-paperwhite",
      isAffiliate: true,
    },
    {
      title: "DJI Mini 3 Pro",
      category: "Drohnen",
      description: "Die DJI Mini 3 Pro wiegt unter 249g, bietet aber professionelle Funktionen wie 4K HDR-Video, bis zu 34 Minuten Flugzeit und fortschrittliche Hindernisvermeidung.",
      rating: 4.6,
      imageSrc: "https://images.unsplash.com/photo-1593108408993-7b86647e4257?q=80&w=800&auto=format&fit=crop",
      link: "/technik/gadgets/dji-mini-3-pro",
      isAffiliate: true,
    },
    {
      title: "Apple Watch Series 9",
      category: "Smartwatches",
      description: "Die Apple Watch Series 9 überzeugt mit dem neuen S9-Chip, einem helleren Always-On-Display und erweiterten Gesundheitsfunktionen für Fitness und Wohlbefinden.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=800&auto=format&fit=crop",
      link: "/technik/gadgets/apple-watch-series-9",
      isAffiliate: true,
    },
  ];

  return (
    <Layout>
      <Hero
        title="Tech-Gadgets"
        subtitle="Entdecke meine Empfehlungen für die besten und nützlichsten Tech-Gadgets, die deinen Alltag bereichern können."
        ctaText="Top-Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Innovative Gadgets für den Alltag"
            description="Als Technik-Enthusiast teste ich regelmäßig die neuesten Gadgets und teile meine ehrlichen Erfahrungen, damit du informierte Kaufentscheidungen treffen kannst."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Moderne Technik-Gadgets können unseren Alltag erheblich vereinfachen, produktiver gestalten und oft auch unterhaltsamer machen. Von Smartwatches und kabellosen Kopfhörern bis hin zu E-Readern und Drohnen – die Auswahl ist riesig und wächst ständig weiter.
            </p>
            <p>
              Auf dieser Seite teile ich meine persönlichen Erfahrungen mit verschiedenen Gadgets, die ich selbst ausführlich getestet habe. Ich lege besonderen Wert auf die Balance zwischen Funktionalität, Benutzerfreundlichkeit, Design und Preis-Leistungs-Verhältnis.
            </p>
            <p>
              <strong>Hinweis:</strong> Bei einigen der vorgestellten Produkte handelt es sich um Affiliate-Links, erkennbar am *-Symbol. Das bedeutet, dass ich eine kleine Provision erhalte, wenn du über meinen Link ein Produkt kaufst - für dich entstehen keine zusätzlichen Kosten.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Warum gute Gadgets wichtig sind"
            description="Die richtigen Tech-Gadgets können deinen Alltag spürbar verbessern und dich produktiver machen."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader className="pb-2">
                <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <RadioTower className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Steigerung der Produktivität</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Die richtigen Gadgets helfen dir, effizienter zu arbeiten, Zeit zu sparen und bestimmte Aufgaben zu automatisieren. Von smarten Stiften bis hin zu portablen Tastaturen – mit den passenden Tools kannst du deine Produktivität erheblich steigern.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Verbesserte Lebensqualität</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Moderne Gadgets können deinen Alltag angenehmer gestalten und deine Lebensqualität verbessern. Sei es durch Fitness-Tracker, die deine Gesundheit überwachen, oder Noise-Cancelling-Kopfhörer, die dir Ruhe in lauten Umgebungen verschaffen.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Nachhaltigkeit & Langlebigkeit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Hochwertige Gadgets sind oft langlebiger und damit auch nachhaltiger. Ich achte bei meinen Empfehlungen besonders auf Qualität und Haltbarkeit, damit du lange Freude an deinen Anschaffungen hast und weniger Elektroschrott produzierst.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="empfehlungen" className="section-padding">
        <div className="container">
          <SectionHeading
            subtitle="Meine Top-Empfehlungen"
            title="Diese Gadgets nutze ich täglich"
            description="Basierend auf meinen persönlichen Erfahrungen und ausführlichen Tests kann ich diese Produkte uneingeschränkt empfehlen."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {topRecommendations.map((recommendation, index) => (
              <RecommendationCard
                key={recommendation.title}
                title={recommendation.title}
                category={recommendation.category}
                description={recommendation.description}
                rating={recommendation.rating}
                imageSrc={recommendation.imageSrc}
                link={recommendation.link}
                isAffiliate={recommendation.isAffiliate}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold mb-2">
                  Hast du eine Frage zu einem bestimmten Gadget?
                </h3>
                <p className="text-muted-foreground">
                  Kontaktiere mich gerne, wenn du Fragen zu einem der vorgestellten Gadgets hast oder eine persönliche Empfehlung benötigst.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <a
                  href="/kontakt"
                  className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gadgets;
