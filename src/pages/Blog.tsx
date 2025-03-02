
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import BlogPostCard from "../components/UI/BlogPostCard";
import { Search } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      title: "Die besten kostenlosen Girokonten im Vergleich",
      excerpt: "Ein umfassender Vergleich der besten kostenlosen Girokonten in Deutschland. Erfahre, welches Konto am besten zu deinen Bedürfnissen passt.",
      date: "15. Mai 2024",
      category: "Finanzen",
      imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
      slug: "beste-kostenlose-girokonten-vergleich",
    },
    {
      title: "5 Tipps für eine gesunde Work-Life-Balance im Home Office",
      excerpt: "Wie du im Home Office produktiv bleibst und dennoch eine gesunde Balance zwischen Arbeit und Privatleben findest.",
      date: "10. Mai 2024",
      category: "Lifestyle",
      imageSrc: "https://images.unsplash.com/photo-1605565348518-bef3e7d6fed8?q=80&w=800&auto=format&fit=crop",
      slug: "tipps-work-life-balance-home-office",
    },
    {
      title: "Die wichtigsten Versicherungen für junge Erwachsene",
      excerpt: "Diese Versicherungen solltest du als junger Erwachsener unbedingt haben - und auf welche du verzichten kannst.",
      date: "5. Mai 2024",
      category: "Finanzen",
      imageSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
      slug: "wichtigste-versicherungen-junge-erwachsene",
    },
    {
      title: "ETF-Sparpläne für Anfänger erklärt",
      excerpt: "Alles was du über ETF-Sparpläne wissen solltest, wenn du mit dem Investieren beginnen möchtest.",
      date: "1. Mai 2024",
      category: "Finanzen",
      imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
      slug: "etf-sparplaene-fuer-anfaenger-erklaert",
    },
    {
      title: "Die besten Apps für produktives Arbeiten",
      excerpt: "Diese Apps helfen dir dabei, deinen Arbeitsalltag effizienter zu gestalten und mehr zu erreichen.",
      date: "25. April 2024",
      category: "Technik",
      imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
      slug: "beste-apps-produktives-arbeiten",
    },
    {
      title: "Nachhaltig leben: Kleine Veränderungen mit großer Wirkung",
      excerpt: "So kannst du mit einfachen Veränderungen im Alltag nachhaltiger leben und die Umwelt schonen.",
      date: "20. April 2024",
      category: "Lifestyle",
      imageSrc: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
      slug: "nachhaltig-leben-kleine-veraenderungen",
    },
  ];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Blog"
            description="Entdecke unsere neuesten Artikel zu Finanzen, Lifestyle, Business und Technik"
          />

          <div className="mb-12">
            <div className="max-w-lg mx-auto relative">
              <input
                type="text"
                placeholder="Suche nach Artikeln..."
                className="w-full px-5 py-3 pr-12 rounded-full border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            <button
              onClick={() => setSearchTerm("")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                searchTerm === "" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted hover:bg-muted/80 text-foreground"
              }`}
            >
              Alle
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSearchTerm(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  searchTerm === category 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
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

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">Keine Artikel gefunden</h3>
              <p className="text-muted-foreground">
                Versuche es mit einem anderen Suchbegriff oder entferne den Filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
