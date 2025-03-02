
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
      className="group bg-card rounded-xl overflow-hidden border border-border/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-in"
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
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Kein Bild verfügbar</span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
              {category}
            </span>
          </div>
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <Calendar className="h-4 w-4 mr-1.5" />
          <time dateTime={date}>{date}</time>
        </div>
        <Link to={`/blog/${slug}`} className="block group-hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-primary/80 bg-clip-text text-transparent transition-colors duration-300">
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground line-clamp-3 mb-5">{excerpt}</p>
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center text-primary font-medium group-hover:translate-x-0.5 transition-all duration-300"
        >
          <span>Weiterlesen</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1"
          >
            <path 
              fillRule="evenodd" 
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
              clipRule="evenodd" 
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;
