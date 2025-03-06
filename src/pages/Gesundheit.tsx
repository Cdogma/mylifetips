
import React from 'react';
import Layout from "../components/Layout/Layout";
import Hero from "../components/UI/Hero";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import GesundheitTabs from "../components/Gesundheit/GesundheitTabs";
import GesundheitOverview from "../components/Gesundheit/GesundheitOverview";
import ContactBanner from "../components/Lifestyle/ContactBanner";

const Gesundheit = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Lifestyle", path: "/lifestyle" },
    { label: "Gesundheit", path: "/lifestyle/gesundheit" },
  ];

  const tabs = [
    {
      value: "ernaehrung",
      label: "Ernährung",
      title: "Gesunde Ernährung",
      content: (
        <div className="space-y-4">
          <p>
            Eine ausgewogene Ernährung ist die Basis für ein gesundes Leben. Hier findest du Tipps und Empfehlungen für eine nachhaltige und gesunde Ernährungsweise ohne Verzicht auf Genuss.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vollwertige Lebensmittel statt hochverarbeiteter Produkte</li>
            <li>Saisonale und regionale Ernährung</li>
            <li>Ausgewogene Nährstoffzufuhr</li>
            <li>Nachhaltige Ernährungskonzepte</li>
          </ul>
        </div>
      ),
    },
    {
      value: "bewegung",
      label: "Bewegung",
      title: "Regelmäßige Bewegung",
      content: (
        <div className="space-y-4">
          <p>
            Bewegung ist ein Schlüssel zu körperlichem und mentalem Wohlbefinden. Entdecke Wege, mehr Bewegung in deinen Alltag zu integrieren und finde Sportarten, die zu dir passen.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Integration von Bewegung in den Alltag</li>
            <li>Sportarten für Einsteiger</li>
            <li>Trainingsroutinen für zu Hause</li>
            <li>Motivation und Durchhaltevermögen</li>
          </ul>
        </div>
      ),
    },
    {
      value: "mental",
      label: "Mentale Gesundheit",
      title: "Mentale Balance",
      content: (
        <div className="space-y-4">
          <p>
            Mentale Gesundheit ist genauso wichtig wie körperliche. Hier findest du Strategien für mehr Achtsamkeit, Stressreduktion und emotionales Wohlbefinden im Alltag.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Achtsamkeitsübungen für den Alltag</li>
            <li>Stressbewältigungsstrategien</li>
            <li>Work-Life-Balance verbessern</li>
            <li>Digitale Entgiftung und Medienkompetenz</li>
          </ul>
        </div>
      ),
    },
    {
      value: "vorsorge",
      label: "Vorsorge",
      title: "Präventive Gesundheitsvorsorge",
      content: (
        <div className="space-y-4">
          <p>
            Vorsorge ist besser als Nachsorge. Informiere dich über wichtige Vorsorgemaßnahmen und wie du langfristig deine Gesundheit schützen kannst.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Wichtige Vorsorgeuntersuchungen</li>
            <li>Impfungen und Gesundheitschecks</li>
            <li>Langfristige Gesundheitsplanung</li>
            <li>Präventive Lebensgewohnheiten</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <Hero
        title="Gesundheit & Wohlbefinden"
        subtitle="Entdecke Tipps und Empfehlungen für ein gesundes und ausgeglichenes Leben."
        imageSrc="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
      />

      <div className="container my-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <GesundheitOverview />
      
      <GesundheitTabs tabs={tabs} defaultValue="ernaehrung" />

      <ContactBanner />
    </Layout>
  );
};

export default Gesundheit;
