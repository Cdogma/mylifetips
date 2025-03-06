
import { Link } from "react-router-dom";
import SectionHeading from "../UI/SectionHeading";
import BlogPostCard from "../UI/BlogPostCard";

export interface Article {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageSrc: string;
  slug: string;
}

interface ArticleSectionProps {
  title: string;
  description: string;
  articles: Article[];
  viewAllLabel?: string;
  viewAllLink?: string;
}

const ArticleSection = ({ 
  title, 
  description, 
  articles, 
  viewAllLabel = "Alle Artikel anzeigen",
  viewAllLink = "/blog" 
}: ArticleSectionProps) => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          title={title}
          description={description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((post, index) => (
            <BlogPostCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
              imageSrc={post.imageSrc}
              slug={post.slug}
              delay={index}
            />
          ))}
        </div>

        {viewAllLink && (
          <div className="mt-12 text-center">
            <Link to={viewAllLink} className="inline-flex items-center bg-primary/10 hover:bg-primary/15 text-primary font-medium px-6 py-3 rounded-lg transition-all duration-300">
              {viewAllLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleSection;
