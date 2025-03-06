
import SectionHeading from "../UI/SectionHeading";
import CategoryCard from "../UI/CategoryCard";

interface CategoryItem {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
}

interface LifestyleCategoriesProps {
  categories: CategoryItem[];
  title?: string;
  description?: string;
}

const LifestyleCategories = ({ 
  categories, 
  title = "Lifestyle-Kategorien",
  description = "Entdecke alle Bereiche rund um moderne Lebensgestaltung."
}: LifestyleCategoriesProps) => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        <SectionHeading
          title={title}
          description={description}
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
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

export default LifestyleCategories;
