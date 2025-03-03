import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import SectionHeading from "../components/UI/SectionHeading";
import CategoryCard from "../components/UI/CategoryCard";
import RecommendationCard from "../components/UI/RecommendationCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Lifestyle = () => {
  // Add effect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcategories = [
    {
      title: "Haushalt",
      description: "Smarte Geräte und praktische Helfer für einen effizienten und nachhaltigen Haushalt.",
      link: "/lifestyle/haushalt",
      imageSrc: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Reisen",
      description: "Tipps und Empfehlungen für entspanntes und nachhaltiges Reisen weltweit.",
      link: "/lifestyle/reisen",
      imageSrc: "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Mobilität",
      description: "Vom E-Bike bis zum Elektroauto: nachhaltige Fortbewegungsmittel für den Alltag.",
      link: "/lifestyle/mobilitaet",
      imageSrc: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Nachhaltigkeit",
      description: "Praktische Tipps und Produkte für einen umweltbewussteren Lebensstil.",
      link: "/lifestyle/nachhaltigkeit",
      imageSrc: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const topRecommendations = [
    {
      title: "Dyson V15 Detect",
      category: "Haushalt",
      description: "Der Dyson V15 Detect mit Laserdetektion von Staub und automatischer Saugkraftanpassung - der beste kabellose Staubsauger für jeden Bodentyp.",
      rating: 4.8,
      imageSrc: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop",
      link: "/lifestyle/haushalt/dyson-v15",
      isAffiliate: true,
    },
    {
      title: "VanMoof S5",
      category: "Mobilität",
      description: "Das VanMoof S5 E-Bike mit schickem Design, integriertem Diebstahlschutz und kraftvollem Motor - das perfekte Stadtrad für Pendler.",
      rating: 4.6,
      imageSrc: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=800&auto=format&fit=crop",
      link: "/lifestyle/mobilitaet/vanmoof-s5",
      isAffiliate: true,
    },
    {
      title: "Pacsafe Rucksack",
      category: "Reisen",
      description: "Der Pacsafe Venturesafe mit Diebstahlschutz-Technologie, RFID-Blockierung und robustem Material - der ideale Begleiter auf Reisen.",
      rating: 4.7,
      imageSrc: "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=800&auto=format&fit=crop",
      link: "/lifestyle/reisen/pacsafe",
      isAffiliate: true,
    },
  ];

  const faqItems = [
    {
      question: "Welche Haushaltsgeräte lohnen sich wirklich?",
      answer: "Nicht jedes moderne Gadget ist sein Geld wert. Zu den Geräten, die den Alltag tatsächlich erleichtern, gehören ein guter Staubsauger (kabellos oder Roboter), eine Spülmaschine, eine Waschmaschine mit Energieeffizienzklasse A und ein hochwertiger Wasserkocher. Bei teureren Anschaffungen wie Küchenmaschinen solltest du überlegen, wie oft du sie wirklich nutzen wirst."
    },
    {
      question: "Wie kann ich günstiger und nachhaltiger reisen?",
      answer: "Flexibilität bei den Reisedaten, Nutzung von Preisvergleichsportalen und Frühbuchungen sind klassische Spartipps. Für nachhaltiges Reisen empfehle ich, auf unnötige Kurzstreckenflüge zu verzichten, die Bahn zu nutzen, lokale Unterkünfte zu wählen und regionale Produkte zu konsumieren. Apps wie TooGoodToGo können auch auf Reisen helfen, Lebensmittelverschwendung zu reduzieren."
    },
    {
      question: "Lohnt sich ein E-Bike oder E-Scooter?",
      answer: "Ein E-Bike kann sich besonders lohnen, wenn du regelmäßig Strecken von 5-15 km zurücklegst oder in einer hügeligen Gegend wohnst. Die Anschaffungskosten sind zwar hoch, amortisieren sich aber bei regelmäßiger Nutzung als Ersatz für Auto oder ÖPNV. E-Scooter sind praktisch für die letzte Meile, jedoch aufgrund ihrer begrenzten Reichweite und Stabilität weniger vielseitig als E-Bikes."
    },
    {
      question: "Was sind die einfachsten Schritte zu mehr Nachhaltigkeit im Alltag?",
      answer: "Beginne mit kleinen Änderungen: Reduziere Einwegplastik durch wiederverwendbare Taschen, Wasserflaschen und Kaffeebecher. Achte auf Energieeffizienz bei Elektrogeräten und schalte Geräte komplett aus (nicht Standby). Reduziere Lebensmittelverschwendung durch bewusstes Einkaufen und kaufe saisonale und regionale Lebensmittel. Und versuche, weniger aber dafür hochwertigere und langlebigere Produkte zu kaufen."
    }
  ];

  return (
    <Layout>
      <Hero
        title="Lifestyle & Alltag"
        subtitle="Entdecke meine Tipps und Empfehlungen für einen besseren, nachhaltigeren und einfacheren Alltag - von Haushalt über Reisen bis hin zu Mobilität."
        ctaText="Top-Empfehlungen"
        ctaLink="#empfehlungen"
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Besser leben im Alltag"
            description="Als Minimalist und Nachhaltigkeits-Enthusiast teile ich hier meine Erfahrungen mit Produkten und Dienstleistungen, die mir helfen, meinen Alltag zu vereinfachen und nachhaltiger zu gestalten."
          />

          <div className="mt-12 prose max-w-none">
            <p>
              In einer Zeit, in der wir von Produkten, Dienstleistungen und Informationen überflutet werden, ist es nicht leicht, die wirklich sinnvollen Dinge zu finden. Welche Haushaltsgeräte erleichtern tatsächlich den Alltag? Wie kann ich umweltbewusster leben, ohne auf Komfort zu verzichten? Welche nachhaltigen Alternativen gibt es für meine tägliche Mobilität?
            </p>
            <p>
              In diesem Bereich sammle ich meine persönlichen Erfahrungen und Empfehlungen für einen bewussteren und einfacheren Lebensstil. Dabei geht es mir nicht um Verzicht, sondern um intelligente Entscheidungen, die sowohl deinen Alltag verbessern als auch einen positiven Einfluss auf die Umwelt haben können.
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
            title="Lifestyle-Kategorien"
            description="Entdecke alle Bereiche für einen besseren Alltag."
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
            title="Diese Lifestyle-Produkte nutze ich täglich"
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
            description="Antworten auf die wichtigsten Fragen rund um Lifestyle und Alltag."
          />

          <div className="mt-8 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
                <AccordionItem key={`faq-${index}`} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Nachhaltigkeit im Alltag</h3>
                <p className="text-muted-foreground mb-6">
                  Mit kleinen Änderungen in deinem Alltag kannst du einen großen Beitrag zum Umweltschutz leisten. Hier sind einige einfache Tipps, die du sofort umsetzen kannst:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Nutze wiederverwendbare Taschen, Flaschen und Kaffeebecher</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Reduziere deinen Fleischkonsum und setze auf saisonale Produkte</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Spare Energie durch effiziente Geräte und bewusstes Verhalten</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Nutze öffentliche Verkehrsmittel, Fahrrad oder gehe zu Fuß</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Kaufe weniger, dafür qualitativ hochwertige und langlebige Produkte</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
                  alt="Nachhaltiger Lebensstil" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-5 -right-5 bg-background p-4 rounded-lg shadow-lg">
                  <p className="text-sm font-medium">Gemeinsam für eine bessere Zukunft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lifestyle;
