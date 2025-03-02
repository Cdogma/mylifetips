
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import CategoryCard from "../components/UI/CategoryCard";
import RecommendationCard from "../components/UI/RecommendationCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

const Tech = () => {
  const subcategories = [
    {
      title: "Smartphones",
      description: "Die besten Handys und Smartphones mit dem besten Preis-Leistungs-Verhältnis im Vergleich.",
      link: "/technik/smartphones",
      imageSrc: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Smart Home",
      description: "Alles für ein intelligentes Zuhause: von Sprachassistenten bis zu vernetzten Geräten.",
      link: "/technik/smart-home",
      imageSrc: "https://images.unsplash.com/photo-1558002038-bb0401c95e8c?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Computer & Laptops",
      description: "Empfehlungen für PCs, Laptops und Zubehör für Arbeit, Studium und Gaming.",
      link: "/technik/computer",
      imageSrc: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Software & Apps",
      description: "Nützliche Programme und Apps für mehr Produktivität und Unterhaltung.",
      link: "/technik/software",
      imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const topRecommendations = [
    {
      title: "Google Pixel 8",
      category: "Smartphones",
      description: "Das Pixel 8 mit herausragender Kamera, langer Akkulaufzeit und 7 Jahren Update-Garantie - das beste Android-Smartphone für die meisten Nutzer.",
      rating: 4.8,
      imageSrc: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop",
      link: "/technik/smartphones/pixel-8",
      isAffiliate: true,
    },
    {
      title: "Philips Hue Starter Set",
      category: "Smart Home",
      description: "Das Philips Hue Starter-Set mit Bridge und farbigen Lampen - der ideale Einstieg in die smarte Beleuchtung.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1558002038-bb0401c95e8c?q=80&w=800&auto=format&fit=crop",
      link: "/technik/smart-home/philips-hue",
      isAffiliate: true,
    },
    {
      title: "Dell XPS 13",
      category: "Computer & Laptops",
      description: "Das Dell XPS 13 mit erstklassiger Verarbeitung, langer Akkulaufzeit und brillantem Display - der perfekte Begleiter für unterwegs.",
      rating: 4.9,
      imageSrc: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop",
      link: "/technik/computer/dell-xps-13",
      isAffiliate: true,
    },
  ];

  const faqItems = [
    {
      question: "Wie oft sollte ich mein Smartphone wechseln?",
      answer: "Es gibt keine feste Regel, aber ein guter Richtwert sind 3-4 Jahre. Ab diesem Zeitpunkt lassen Akkulaufzeit und Update-Support oft nach. Wenn du Wert auf aktuelle Sicherheits-Updates legst, solltest du beim Kauf auf die Dauer des Update-Supports achten (z.B. bietet Google für Pixel-Geräte 7 Jahre)."
    },
    {
      question: "Lohnt sich Smart Home wirklich?",
      answer: "Das hängt stark von deinen Bedürfnissen ab. Smart-Home-Geräte bieten mehr Komfort, Automatisierung und können bei richtigem Einsatz Energie sparen. Allerdings gibt es auch Nachteile wie Datenschutzbedenken und zusätzliche Kosten. Starte klein mit einem Bereich wie intelligenter Beleuchtung und erweitere bei Bedarf."
    },
    {
      question: "PC oder Laptop - was ist besser?",
      answer: "Diese Entscheidung hängt von deinen persönlichen Anforderungen ab. Ein PC bietet in der Regel mehr Leistung und Upgrademöglichkeiten für weniger Geld, benötigt aber einen festen Platz. Ein Laptop bietet Mobilität und Flexibilität, ist dafür aber oft teurer bei vergleichbarer Leistung und schwieriger zu erweitern."
    },
    {
      question: "Welche Apps sollte ich auf jeden Fall haben?",
      answer: "Einige wichtige Apps für die meisten Nutzer sind: Ein Passwort-Manager (z.B. Bitwarden), eine Cloud-Backup-Lösung, eine Notiz-App (z.B. Notion oder OneNote), eine To-Do-Liste und eine vertrauenswürdige Wetter-App. Darüber hinaus hängt es stark von deinen persönlichen Bedürfnissen ab."
    }
  ];

  return (
    <Layout>
      <Hero
        title="Technik & Gadgets"
        subtitle="Smartphones, Smart Home, Computer und nützliche Software: Hier findest du meine Empfehlungen für deine digitale Ausstattung."
        ctaText="Top-Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Digitale Helfer für den Alltag"
            description="Als Tech-Enthusiast teste ich regelmäßig die neuesten Geräte und Anwendungen. Hier teile ich meine Erfahrungen und zeige dir, welche Produkte wirklich nützlich sind und ein gutes Preis-Leistungs-Verhältnis bieten."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              Die Technologie entwickelt sich rasant weiter und es kann schwierig sein, mit allen Neuerungen Schritt zu halten. Welches Smartphone bietet das beste Preis-Leistungs-Verhältnis? Wie kannst du dein Zuhause mit Smart-Home-Geräten sinnvoll ausstatten? Welcher Laptop eignet sich am besten für deine Bedürfnisse?
            </p>
            <p>
              In diesem Bereich helfe ich dir, dich in der Welt der Technologie zurechtzufinden und treffe für dich eine Vorauswahl an Produkten, die ich selbst getestet habe und empfehlen kann. Dabei lege ich besonderen Wert auf Langlebigkeit, Nachhaltigkeit und ein gutes Preis-Leistungs-Verhältnis.
            </p>
            <p>
              <strong>Wichtiger Hinweis:</strong> Bei einigen der vorgestellten Produkte handelt es sich um Affiliate-Links. Das bedeutet, dass ich eine kleine Provision erhalte, wenn du über meinen Link ein Produkt kaufst - für dich entstehen dadurch keine zusätzlichen Kosten. Diese Provisionen helfen mir, diese Website zu betreiben und weiterhin hochwertige Inhalte zu erstellen. Ich empfehle ausschließlich Produkte, die ich selbst nutze und von denen ich überzeugt bin.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Technik-Kategorien"
            description="Entdecke alle Technologie-Bereiche im Überblick."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subcategories.map((category, index) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                imageSrc={category.imageSrc}
                link={category.link}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="empfehlungen" className="section-padding">
        <div className="container">
          <SectionHeading
            subtitle="Meine Top-Empfehlungen"
            title="Diese Tech-Produkte nutze ich selbst"
            description="Basierend auf meinen persönlichen Erfahrungen und ausführlichen Tests kann ich diese Produkte uneingeschränkt empfehlen."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            title="Häufig gestellte Fragen"
            description="Antworten auf die wichtigsten Fragen rund um Technik und Gadgets."
          />

          <div className="mt-8 max-w-3xl mx-auto">
            <Tabs defaultValue="faq-1" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="faq-1">Smartphones</TabsTrigger>
                <TabsTrigger value="faq-2">Smart Home</TabsTrigger>
                <TabsTrigger value="faq-3">Computer</TabsTrigger>
                <TabsTrigger value="faq-4">Software</TabsTrigger>
              </TabsList>
              
              {faqItems.map((faq, index) => (
                <TabsContent key={`faq-${index + 1}`} value={`faq-${index + 1}`}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{faq.answer}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold mb-2">
                  Brauchst du persönliche Beratung?
                </h3>
                <p className="text-muted-foreground">
                  Wenn du Fragen zu einem bestimmten Technik-Produkt hast oder eine individuelle Empfehlung benötigst, kontaktiere mich gerne direkt.
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

export default Tech;
