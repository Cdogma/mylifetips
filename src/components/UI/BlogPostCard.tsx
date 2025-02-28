
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageSrc?: string;
  slug: string;
  delay?: number;
}

const BlogPostCard = ({
  title,
  excerpt,
  date,
  category,
  imageSrc,
  slug,
  delay = 0,
}: BlogPostCardProps) => {
  return (
    <article 
      className="hover-card bg-card rounded-lg overflow-hidden animate-fade-in"
      style={{
        animationDelay: `${delay * 0.1}s`,
      }}
    >
      <Link to={`/blog/${slug}`} className="block">
        <div className="h-56 relative overflow-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Kein Bild verfügbar</span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <time dateTime={date}>{date}</time>
        </div>
        <Link to={`/blog/${slug}`} className="block">
          <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground line-clamp-3 mb-4">{excerpt}</p>
        <Link
          to={`/blog/${slug}`}
          className="text-primary font-medium hover:text-primary/80 transition-colors"
        >
          Weiterlesen
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;
