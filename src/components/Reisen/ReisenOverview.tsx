
import SectionHeading from "../UI/SectionHeading";

const ReisenOverview = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          title="Die Welt entdecken"
          description="Reisen erweitert unseren Horizont, schafft unvergessliche Erinnerungen und lässt uns die Welt mit anderen Augen sehen."
        />

        <div className="mt-12 prose max-w-none">
          <p>
            Reisen ist mehr als nur Ortsveränderung – es ist eine Form der Bildung, eine Quelle der Inspiration und oft der Beginn persönlicher Transformation. Ob Wochenendtrip ins Nachbarland oder mehrmonatige Weltreise, ob Luxusurlaub oder Backpacking-Abenteuer – jede Reise bietet die Chance, neue Perspektiven zu gewinnen und den eigenen Horizont zu erweitern.
          </p>
          <p>
            Auf dieser Seite teile ich meine Reiseerfahrungen, praktische Tipps für verschiedene Reisearten und -ziele sowie Inspirationen für dein nächstes Abenteuer. Dabei lege ich Wert auf einen ausgewogenen Mix aus Erholung, Erlebnis und kulturellem Austausch – und versuche stets, auch nachhaltige Aspekte des Reisens zu berücksichtigen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReisenOverview;
