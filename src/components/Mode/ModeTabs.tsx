
import CategoryTabs, { TabItem } from "../Lifestyle/CategoryTabs";
import SectionHeading from "../UI/SectionHeading";

const ModeTabs = () => {
  const tabs: TabItem[] = [
    {
      value: "basics",
      label: "Stil-Basics",
      title: "Grundlagen des persönlichen Stils",
      content: (
        <>
          <p>Diese Grundprinzipien helfen dir, deinen eigenen Stil zu entwickeln:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Kenne deine Silhouette</strong> - Verstehe, welche Schnitte und Proportionen deiner Körperform schmeicheln. Dies ist wichtiger als kurzlebige Trends.</li>
            <li><strong>Farbpalette definieren</strong> - Finde heraus, welche Farben zu deinem Hautton, deinen Haaren und Augen passen. Eine stimmige Farbpalette erleichtert das Kombinieren.</li>
            <li><strong>Qualität vor Quantität</strong> - Investiere lieber in wenige, hochwertige Stücke als in viele billige. Qualitätskleidung hält länger, sieht besser aus und fühlt sich angenehmer an.</li>
            <li><strong>Anlässe berücksichtigen</strong> - Dein Kleiderschrank sollte deinen Lebensstil widerspiegeln. Berücksichtige, wie du die meiste Zeit verbringst (Arbeit, Freizeit, besondere Anlässe).</li>
          </ul>
        </>
      )
    },
    {
      value: "capsule",
      label: "Capsule Wardrobe",
      title: "Die Kunst der Capsule Wardrobe",
      content: (
        <>
          <p>Eine Capsule Wardrobe ist eine kleine, durchdachte Garderobe aus zeitlosen Stücken, die vielseitig kombinierbar sind:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Bestandsaufnahme</strong> - Beginne mit dem Aussortieren von Kleidung, die du nicht mehr trägst, die nicht passt oder nicht zu deinem Stil gehört.</li>
            <li><strong>Kernstücke identifizieren</strong> - Wähle etwa 30-40 Teile für eine Saison, die gut miteinander kombinierbar sind und verschiedene Anlässe abdecken.</li>
            <li><strong>Farbschema festlegen</strong> - Beschränke dich auf eine Palette von 3-4 Hauptfarben und 1-2 Akzentfarben für maximale Kombinierbarkeit.</li>
            <li><strong>Bewusst ergänzen</strong> - Füge neue Teile nur hinzu, wenn sie bestehende Outfits ergänzen und mit mehreren vorhandenen Stücken kombinierbar sind.</li>
          </ul>
        </>
      )
    },
    {
      value: "nachhaltig",
      label: "Nachhaltige Mode",
      title: "Bewusste Modeentscheidungen",
      content: (
        <>
          <p>Nachhaltige Mode berücksichtigt Umweltaspekte, faire Arbeitsbedingungen und langfristige Nutzung:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Materialien kennen</strong> - Naturfasern wie Bio-Baumwolle, Leinen oder Hanf sowie recycelte Materialien sind oft umweltfreundlicher als konventionelle oder synthetische Fasern.</li>
            <li><strong>Auf Zertifizierungen achten</strong> - Labels wie GOTS, Fair Trade oder OEKO-TEX geben Orientierung bei der Auswahl nachhaltiger Mode.</li>
            <li><strong>Second Hand und Vintage</strong> - Gebrauchte Kleidung zu kaufen ist eine der nachhaltigsten Optionen und oft auch budgetfreundlich.</li>
            <li><strong>Slow Fashion unterstützen</strong> - Kleine, lokale Labels und Handwerker bieten oft hochwertige, langlebige Produkte unter fairen Bedingungen.</li>
          </ul>
        </>
      )
    },
    {
      value: "pflege",
      label: "Kleiderpflege",
      title: "Richtige Kleiderpflege",
      content: (
        <>
          <p>Mit der richtigen Pflege hält deine Kleidung länger und sieht besser aus:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Pflegehinweise beachten</strong> - Die Symbole auf dem Etikett geben wichtige Hinweise zur richtigen Pflege. Kaltes Waschen und Lufttrocknen schont viele Textilien.</li>
            <li><strong>Seltener waschen</strong> - Nicht jedes getragene Kleidungsstück muss sofort in die Wäsche. Oft reicht es, Kleidung zu lüften oder punktuell zu reinigen.</li>
            <li><strong>Richtig aufbewahren</strong> - Formstabile Kleiderbügel für Jacken und Hemden, Falten statt Hängen für dehnbare Materialien wie Strick.</li>
            <li><strong>Kleine Reparaturen selbst vornehmen</strong> - Lerne grundlegende Nähfähigkeiten, um lose Knöpfe, kleine Risse oder offene Säume selbst zu reparieren.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <section id="mode-beratung" className="section-padding bg-muted/30">
      <div className="container">
        <SectionHeading
          title="Mode-Themen"
          description="Entdecke verschiedene Aspekte bewusster Modewahl und persönlichen Stils."
          align="center"
        />

        <CategoryTabs tabs={tabs} defaultValue="basics" />
      </div>
    </section>
  );
};

export default ModeTabs;
