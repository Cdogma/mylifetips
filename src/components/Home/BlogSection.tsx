
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../UI/SectionHeading";
import BlogPostCard from "../UI/BlogPostCard";
import AnimatedSection from "../UI/AnimatedSection";
import MicroInteractions from "../UI/MicroInteractions";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Die 5 besten ETFs für Einsteiger in 2023",
      excerpt: "Ein umfassender Leitfaden zu den besten ETFs für Anfänger, die gerade erst mit dem Investieren beginnen möchten.",
      date: "15. Mai 2023",
      category: "Finanzen",
      imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
      slug: "beste-etfs-fuer-einsteiger-2023",
    },
    {
      title: "Smart Home für Anfänger: So startest du richtig",
      excerpt: "Ein Einsteigerguide für alle, die ihr Zuhause mit Smart-Home-Technologie ausstatten möchten.",
      date: "3. Juni 2023",
      category: "Technik",
      imageSrc: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
      slug: "smart-home-fuer-anfaenger",
    },
    {
      title: "Projektmanagement-Tools im Vergleich: Asana, Trello und Notion",
      excerpt: "Eine detaillierte Analyse der beliebtesten Projektmanagement-Tools mit Vor- und Nachteilen.",
      date: "21. Juni 2023",
      category: "Business",
      imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
      slug: "projektmanagement-tools-vergleich",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <AnimatedSection direction="up" delay={0.1}>
          <SectionHeading
            subtitle="Blog & News"
            title="Aktuelle Artikel"
            description="Entdecke meine neuesten Artikel zu Finanzen, Business, Technik und Lifestyle."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.slug} direction="up" delay={0.2 + index * 0.1}>
              <MicroInteractions type="hover">
                <BlogPostCard
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  category={post.category}
                  imageSrc={post.imageSrc}
                  slug={post.slug}
                />
              </MicroInteractions>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="up" delay={0.5}>
          <div className="mt-12 text-center">
            <MicroInteractions type="pulse">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-md hover:bg-secondary/80 transition-colors group"
              >
                Zum Blog
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </MicroInteractions>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BlogSection;
