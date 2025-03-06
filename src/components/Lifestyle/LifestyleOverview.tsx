
import { Link } from "react-router-dom";
import SectionHeading from "../UI/SectionHeading";

const LifestyleOverview = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          title="Bewusster leben"
          description="In unserem hektischen Alltag ist es oft schwer, Zeit für uns selbst zu finden und bewusste Entscheidungen zu treffen. Hier teile ich meine Erfahrungen und Tipps für einen ausgewogeneren Lebensstil."
        />

        <div className="mt-12 prose max-w-none">
          <p>
            Lifestyle umfasst all die Aspekte, die unser tägliches Leben ausmachen: von Ernährung und Gesundheit über Wohnen und Einrichtung bis hin zu Reisen und persönlicher Entwicklung. In diesem Bereich teile ich meine Gedanken und Erfahrungen zu verschiedenen Lifestyle-Themen, die mir am Herzen liegen.
          </p>
          <p>
            Mir ist wichtig, dass meine Empfehlungen praktisch umsetzbar sind und einen echten Mehrwert für dein Leben bieten. Es geht nicht um perfekte Instagram-Momente, sondern um nachhaltige Veränderungen, die zu einem erfüllteren und bewussteren Leben führen können.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LifestyleOverview;
