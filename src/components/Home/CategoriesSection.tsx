
import SectionHeading from "../UI/SectionHeading";
import CategoryCard from "../UI/CategoryCard";

const CategoriesSection = () => {
  const categories = [
    {
      title: "Finanzen & Investitionen",
      description: "Bankkonten, Kreditkarten, Broker, ETFs und mehr für deine finanzielle Freiheit.",
      link: "/finanzen",
      imageSrc: "/lovable-uploads/32cc1446-9ced-4253-8ce3-7716b72254a9.png",
    },
    {
      title: "Technik & Gadgets",
      description: "Smartphones, Smart Home, Wearables, Computer und Software für deinen digitalen Alltag.",
      link: "/technik",
      imageSrc: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Lifestyle & Alltag",
      description: "Haushalt, Reisen, Mobilität und mehr für ein besseres und einfacheres Leben.",
      link: "/lifestyle",
      imageSrc: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Business & Unternehmertum",
      description: "Gründungs-Tipps, Buchhaltung, Konten und Projektmanagement-Tools für dein Business.",
      link: "/business",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <SectionHeading
          title="Entdecke meine Themenbereiche"
          description="Von Finanzen über Technik bis hin zu Lifestyle – hier findest du meine ehrlichen Erfahrungen und Empfehlungen in verschiedenen Lebensbereichen."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
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
  );
};

export default CategoriesSection;
