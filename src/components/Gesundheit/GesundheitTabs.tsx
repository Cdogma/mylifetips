
import CategoryTabs, { TabItem } from "../Lifestyle/CategoryTabs";

const GesundheitTabs = () => {
  const tabs: TabItem[] = [
    {
      value: "ernaehrung",
      label: "Ernährung",
      title: "Bewusste Ernährung",
      content: (
        <>
          <p>Eine ausgewogene Ernährung ist die Basis für Gesundheit und Wohlbefinden. Hier sind einige Grundprinzipien:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Vielseitigkeit</strong> - Je bunter dein Teller, desto mehr verschiedene Nährstoffe nimmst du auf.</li>
            <li><strong>Unverarbeitete Lebensmittel</strong> - Frische, natürliche Lebensmittel enthalten mehr Nährstoffe und weniger unerwünschte Zusatzstoffe.</li>
            <li><strong>Pflanzenbetont</strong> - Gemüse, Obst, Hülsenfrüchte, Nüsse und Vollkornprodukte sollten die Basis deiner Ernährung bilden.</li>
            <li><strong>Achtsames Essen</strong> - Nimm dir Zeit zum Essen, kaue bewusst und genieße jeden Bissen.</li>
          </ul>
        </>
      )
    },
    {
      value: "bewegung",
      label: "Bewegung",
      title: "Regelmäßige Bewegung",
      content: (
        <>
          <p>Bewegung muss nicht kompliziert sein. Das Wichtigste ist, dass du regelmäßig aktiv bist und Spaß daran hast:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Alltagsbewegung</strong> - Treppe statt Aufzug, zu Fuß oder mit dem Rad zur Arbeit, kurze Gehpausen im Büro.</li>
            <li><strong>Krafttraining</strong> - 2-3 Mal pro Woche für starke Muskeln und Knochen, mehr Energie und einen effizienteren Stoffwechsel.</li>
            <li><strong>Ausdauertraining</strong> - Walken, Joggen, Schwimmen oder Radfahren für ein gesundes Herz-Kreislauf-System.</li>
            <li><strong>Beweglichkeit</strong> - Yoga, Pilates oder einfache Dehnübungen für mehr Beweglichkeit und weniger Verspannungen.</li>
          </ul>
        </>
      )
    },
    {
      value: "mental",
      label: "Mentale Gesundheit",
      title: "Mentale Gesundheit",
      content: (
        <>
          <p>Deine mentale Gesundheit ist genauso wichtig wie deine körperliche. Diese Praktiken können dein psychisches Wohlbefinden stärken:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Achtsamkeit</strong> - Regelmäßige Meditation oder bewusstes Atmen kann Stress reduzieren und die emotionale Belastbarkeit verbessern.</li>
            <li><strong>Soziale Verbindungen</strong> - Pflege deine Beziehungen zu Familie und Freunden. Soziale Kontakte sind ein wichtiger Schutzfaktor für die psychische Gesundheit.</li>
            <li><strong>Grenzen setzen</strong> - Lerne, "Nein" zu sagen und deine Bedürfnisse zu kommunizieren.</li>
            <li><strong>Hilfe suchen</strong> - Bei anhaltenden psychischen Belastungen ist es wichtig, professionelle Hilfe in Anspruch zu nehmen.</li>
          </ul>
        </>
      )
    },
    {
      value: "schlaf",
      label: "Schlaf & Erholung",
      title: "Erholsamer Schlaf",
      content: (
        <>
          <p>Guter Schlaf ist entscheidend für Regeneration und Gesundheit. Diese Tipps können deine Schlafqualität verbessern:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Regelmäßiger Rhythmus</strong> - Gehe jeden Tag zur gleichen Zeit ins Bett und stehe zur gleichen Zeit auf, auch am Wochenende.</li>
            <li><strong>Schlaffördernde Umgebung</strong> - Dunkel, kühl und ruhig sollte dein Schlafzimmer sein. Investiere in eine gute Matratze und bequeme Kissen.</li>
            <li><strong>Abendroutine</strong> - Entwickle Rituale, die deinen Körper auf den Schlaf vorbereiten, wie ein warmes Bad, Lesen oder Entspannungsübungen.</li>
            <li><strong>Digitale Auszeit</strong> - Vermeide Bildschirme (Handy, Tablet, TV) mindestens eine Stunde vor dem Schlafengehen.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <section id="gesundheits-tipps" className="section-padding bg-muted/30">
      <div className="container">
        <SectionHeading
          title="Gesundheitsbereiche"
          description="Entdecke verschiedene Aspekte eines gesunden Lebensstils."
          align="center"
        />

        <CategoryTabs tabs={tabs} defaultValue="ernaehrung" />
      </div>
    </section>
  );
};

export default GesundheitTabs;
