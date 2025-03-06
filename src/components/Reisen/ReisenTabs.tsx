
import CategoryTabs, { TabItem } from "../Lifestyle/CategoryTabs";
import SectionHeading from "../UI/SectionHeading";

const ReisenTabs = () => {
  const tabs: TabItem[] = [
    {
      value: "planung",
      label: "Reiseplanung",
      title: "Effektive Reiseplanung",
      content: (
        <>
          <p>Eine gute Planung ist der Schlüssel zu einer gelungenen Reise. Hier sind meine wichtigsten Tipps:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Frühzeitig buchen</strong> - Besonders Flüge und beliebte Unterkünfte solltest du möglichst früh reservieren, um die besten Preise zu sichern.</li>
            <li><strong>Flexible Daten</strong> - Wenn möglich, sei flexibel bei deinen Reisedaten. Oft kannst du durch Reisen in der Nebensaison oder an Wochentagen viel Geld sparen.</li>
            <li><strong>Reisedokumente</strong> - Überprüfe rechtzeitig die Gültigkeit deiner Dokumente und informiere dich über Einreisebestimmungen und eventuell notwendige Visa.</li>
            <li><strong>Balance in der Planung</strong> - Plane genug, um Stress zu vermeiden, aber lasse auch Raum für Spontaneität und unerwartete Entdeckungen.</li>
          </ul>
        </>
      )
    },
    {
      value: "reiseziele",
      label: "Top Reiseziele",
      title: "Empfehlenswerte Reiseziele",
      content: (
        <>
          <p>Diese Destinationen bieten ein besonderes Reiseerlebnis:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Portugal</strong> - Mit seiner vielfältigen Landschaft, dem angenehmen Klima, der reichen Kultur und dem hervorragenden Essen ist Portugal ein Ziel, das für jeden etwas bietet.</li>
            <li><strong>Japan</strong> - Ein faszinierender Mix aus Tradition und Moderne, mit atemberaubender Natur, einzigartiger Kultur und exzellenter Küche.</li>
            <li><strong>Slowenien</strong> - Der Geheimtipp in Europa überzeugt mit unberührter Natur, charmanten Städten und einer exzellenten lokalen Küche.</li>
            <li><strong>Costa Rica</strong> - Ein Paradies für Naturliebhaber mit üppigen Regenwäldern, aktiven Vulkanen, traumhaften Stränden und einer beeindruckenden Artenvielfalt.</li>
          </ul>
        </>
      )
    },
    {
      value: "budget",
      label: "Budget-Reisen",
      title: "Reisen mit kleinem Budget",
      content: (
        <>
          <p>So kannst du auch mit begrenzten Mitteln die Welt entdecken:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Alternative Unterkünfte</strong> - Hostels, Couchsurfing, Homestays oder Wohnungstausch können die Übernachtungskosten drastisch senken.</li>
            <li><strong>Lokale Transportmittel</strong> - Nutze öffentliche Verkehrsmittel statt Taxis oder Mietwagen und erkunde Städte zu Fuß oder mit dem Fahrrad.</li>
            <li><strong>Selbst kochen</strong> - Wähle eine Unterkunft mit Küche und kaufe auf lokalen Märkten ein. So sparst du nicht nur Geld, sondern lernst auch die lokale Küche kennen.</li>
            <li><strong>Kostenlose Attraktionen</strong> - Viele Städte bieten kostenlose Museumseintritte an bestimmten Tagen, Free Walking Tours oder Naturattraktionen ohne Eintrittsgebühren.</li>
          </ul>
        </>
      )
    },
    {
      value: "nachhaltig",
      label: "Nachhaltiges Reisen",
      title: "Umweltbewusstes Reisen",
      content: (
        <>
          <p>Mit diesen Tipps kannst du den ökologischen Fußabdruck deiner Reisen reduzieren:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Klimafreundliche Transportmittel</strong> - Wann immer möglich, nutze Zug oder Bus statt Flugzeug. Bei unvermeidbaren Flügen kannst du die Emissionen kompensieren.</li>
            <li><strong>Länger an einem Ort</strong> - Statt viele Orte kurz zu besuchen, bleib lieber länger an einem Ort. Das reduziert nicht nur deinen CO2-Fußabdruck, sondern ermöglicht auch tiefere Einblicke in die lokale Kultur.</li>
            <li><strong>Lokale Unternehmen unterstützen</strong> - Wähle lokale Unterkünfte, Restaurants und Tourenanbieter, um die lokale Wirtschaft zu stärken.</li>
            <li><strong>Ressourcen schonen</strong> - Spare Wasser und Energie, vermeide Einwegplastik und respektiere die Natur und Tierwelt.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <section id="reise-tipps" className="section-padding bg-muted/30">
      <div className="container">
        <SectionHeading
          title="Reise-Kategorien"
          description="Entdecke verschiedene Arten des Reisens und finde deinen persönlichen Reisestil."
          align="center"
        />

        <CategoryTabs tabs={tabs} defaultValue="planung" />
      </div>
    </section>
  );
};

export default ReisenTabs;
