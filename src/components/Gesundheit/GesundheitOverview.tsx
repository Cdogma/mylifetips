
import SectionHeading from "../UI/SectionHeading";

const GesundheitOverview = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          title="Ganzheitliche Gesundheit"
          description="Gesundheit ist mehr als nur die Abwesenheit von Krankheit. Es geht um körperliches, mentales und emotionales Wohlbefinden."
        />

        <div className="mt-12 prose max-w-none">
          <p>
            In unserem hektischen Alltag vergessen wir oft, auf unsere Gesundheit zu achten. Dabei ist sie unser wertvollstes Gut. Auf dieser Seite findest du praktische Tipps und Informationen zu verschiedenen Gesundheitsthemen - von Ernährung und Bewegung bis hin zu Stressmanagement und mentaler Gesundheit.
          </p>
          <p>
            Mein Ziel ist es, dir Wege zu zeigen, wie du mit kleinen Veränderungen große Wirkung erzielen kannst. Es geht nicht um perfekte Fitness oder strenge Diäten, sondern um nachhaltige Gewohnheiten, die zu deinem Lebensstil passen und dir langfristig guttun.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GesundheitOverview;
