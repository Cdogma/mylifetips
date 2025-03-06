
import SectionHeading from "../UI/SectionHeading";

const ModeOverview = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          title="Persönlicher Stil"
          description="Mode ist vergänglich, Stil ist zeitlos. Entdecke deinen persönlichen Stil jenseits kurzlebiger Trends."
        />

        <div className="mt-12 prose max-w-none">
          <p>
            In einer Welt, in der Fast Fashion und ständig wechselnde Trends dominieren, kann es schwierig sein, einen eigenen, authentischen Stil zu entwickeln. Dabei geht es bei Mode nicht darum, blind jedem Trend zu folgen, sondern darum, Kleidung zu finden, die zu deiner Persönlichkeit, deinem Lebensstil und deinem Körper passt.
          </p>
          <p>
            Auf dieser Seite teile ich Tipps für zeitlose Eleganz, nachhaltige Modeentscheidungen und die Entwicklung eines persönlichen Stils, der nicht nur gut aussieht, sondern auch gut anfühlt. Es geht nicht um Perfektion oder teure Designer-Teile, sondern um bewusste Entscheidungen, die deinen Alltag bereichern und gleichzeitig Rücksicht auf Umwelt und soziale Aspekte nehmen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModeOverview;
