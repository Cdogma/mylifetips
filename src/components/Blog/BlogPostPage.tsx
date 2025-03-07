
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import LayoutWithSearch from "../Layout/LayoutWithSearch";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import CommentSection from "./CommentSection";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPostProps {
  useSearchLayout?: boolean;
}

const BlogPostPage = ({ useSearchLayout = true }: BlogPostProps) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [slug]);
  
  // Mock blog post data
  // In einer realen App würde dies aus einer API geladen
  const blogPost = {
    title: "Die besten kostenlosen Girokonten im Vergleich",
    date: "15. Mai 2023",
    author: "Max Mustermann",
    category: "Finanzen",
    tags: ["Girokonto", "Banking", "Kostenlos"],
    content: `
      <p>Ein gutes Girokonto ist heutzutage unverzichtbar – es ist die Basis für die meisten finanziellen Aktivitäten. Dabei muss ein zuverlässiges Girokonto nicht zwangsläufig Geld kosten. In diesem Vergleich stelle ich die besten kostenlosen Girokonten vor und erkläre, worauf du bei der Wahl achten solltest.</p>
      
      <h2>Warum ein kostenloses Girokonto?</h2>
      
      <p>Viele Banken verlangen mittlerweile Kontoführungsgebühren von 5-10€ pro Monat. Das summiert sich auf 60-120€ im Jahr – Geld, das du bei einem kostenlosen Girokonto sparen kannst, ohne auf wichtige Funktionen verzichten zu müssen.</p>
      
      <p>Moderne Direktbanken bieten heute vollwertige Girokonten ohne monatliche Gebühren an. Diese punkten zudem oft mit besseren Apps, innovativen Funktionen und einem guten Kundenservice.</p>
      
      <h2>Worauf solltest du bei einem kostenlosen Girokonto achten?</h2>
      
      <ul>
        <li><strong>Bedingungslos kostenlos:</strong> Achte darauf, ob das Konto wirklich bedingungslos kostenlos ist oder ob es bestimmte Voraussetzungen gibt (z.B. monatlicher Geldeingang).</li>
        <li><strong>Gebührenfreie Girocard/Debitkarte:</strong> Eine kostenlose Girocard (EC-Karte) oder Debitkarte sollte inklusive sein.</li>
        <li><strong>Kostenlose Bargeldversorgung:</strong> Wie kannst du kostenlos Geld abheben? Gibt es ein großes Automatennetz?</li>
        <li><strong>App & Online-Banking:</strong> Wie benutzerfreundlich ist das Online-Banking und die Banking-App?</li>
        <li><strong>Zusatzfunktionen:</strong> Bietet das Konto nützliche Extras wie Multibanking, Statistiken oder Kategorisierung?</li>
      </ul>
      
      <h2>Die besten kostenlosen Girokonten im Überblick</h2>
      
      <h3>1. C24 Smart Girokonto</h3>
      
      <p>Das C24 Smart Girokonto ist mein absoluter Favorit unter den kostenlosen Girokonten. Es vereint alle wichtigen Funktionen mit einer hervorragenden App und bietet zahlreiche innovative Features.</p>
      
      <h4>Vorteile:</h4>
      <ul>
        <li>Bedingungslos kostenlos ohne Mindestgeldeingang</li>
        <li>Kostenlose Visa-Debitkarte inklusive</li>
        <li>Gebührenfreies Geldabheben an vielen Automaten</li>
        <li>Top-bewertete Banking-App mit vielen Zusatzfunktionen</li>
        <li>Multibanking-Funktion für alle deine Konten</li>
        <li>Echtzeitüberweisungen ohne Extrakosten</li>
        <li>Unterkonten für bessere Organisation</li>
      </ul>
      
      <h4>Nachteile:</h4>
      <ul>
        <li>Keine klassische Girocard (EC-Karte) verfügbar</li>
        <li>Als Direktbank keine persönliche Filialberatung</li>
      </ul>
      
      <h3>2. DKB Girokonto</h3>
      
      <p>Das DKB Girokonto ist ein weiterer solider Kandidat mit einigen Stärken im Bereich Kartenzahlung und Bargeldversorgung.</p>
      
      <h4>Vorteile:</h4>
      <ul>
        <li>Kostenlos mit Aktivkundenstatus (ab 700€ mtl. Geldeingang)</li>
        <li>Kostenlose Visa-Debitkarte + Girocard</li>
        <li>Weltweites kostenloses Geldabheben mit der Visa-Karte</li>
        <li>Gutes Online-Banking</li>
      </ul>
      
      <h4>Nachteile:</h4>
      <ul>
        <li>Bei fehlendem Geldeingang fallen 4,50€ pro Monat an</li>
        <li>App mit weniger Funktionen als bei Wettbewerbern</li>
      </ul>
      
      <h3>3. ING Girokonto</h3>
      
      <p>Das ING Girokonto ist ein zuverlässiges Angebot mit gutem Kundenservice und einer stabilen App.</p>
      
      <h4>Vorteile:</h4>
      <ul>
        <li>Kostenlos bei monatlichem Geldeingang von 700€</li>
        <li>Kostenlose Visa-Debitkarte inklusive</li>
        <li>Girocard optional für 99 Cent im Monat</li>
        <li>Guter Kundenservice</li>
        <li>Stabile und übersichtliche App</li>
      </ul>
      
      <h4>Nachteile:</h4>
      <ul>
        <li>Bei fehlendem Geldeingang 4,90€ pro Monat</li>
        <li>Weniger innovative Features als bei C24</li>
      </ul>
      
      <h2>Mein Fazit: Das beste kostenlose Girokonto</h2>
      
      <p>Nach meinem ausführlichen Test ist das <strong>C24 Smart Girokonto</strong> derzeit die beste Wahl für ein kostenloses Girokonto. Es überzeugt durch seine bedingungslose Kostenfreiheit, die hervorragende App und viele innovative Zusatzfunktionen, die den Bankalltag deutlich erleichtern.</p>
      
      <p>Besonders für digital-affine Nutzer, die Wert auf eine moderne Banking-Erfahrung legen und keine Filialberatung benötigen, ist das C24 Konto die optimale Lösung. Die fehlende Girocard ist in der Praxis kaum ein Problem, da die Visa-Debitkarte mittlerweile fast überall akzeptiert wird.</p>
      
      <p>Wenn du nach einem vollwertigen, kostenlosen Girokonto mit Top-App suchst, kann ich dir das C24 Smart Konto uneingeschränkt empfehlen.</p>
    `,
    comments: [
      {
        id: 1,
        author: "Anna M.",
        content: "Danke für den ausführlichen Vergleich! Ich war schon lange auf der Suche nach einem neuen Girokonto und werde jetzt das C24 Konto ausprobieren.",
        date: "16. Mai 2023",
        likes: 5,
        replies: [
          {
            id: 2,
            author: "Max Mustermann",
            content: "Freut mich, dass dir der Vergleich geholfen hat! Bei Fragen zum C24 Konto kannst du mich gerne kontaktieren.",
            date: "16. Mai 2023",
            likes: 2,
          }
        ]
      },
      {
        id: 3,
        author: "Thomas K.",
        content: "Ich bin seit einem Jahr bei der DKB und sehr zufrieden. Die kostenlose Girocard ist für mich ein wichtiges Feature, da mein lokaler Supermarkt keine Visa-Karten akzeptiert.",
        date: "17. Mai 2023",
        likes: 3,
      },
      {
        id: 4,
        author: "Julia B.",
        content: "Was ist mit der Comdirect? Die haben doch auch ein kostenloses Girokonto im Angebot?",
        date: "18. Mai 2023",
        likes: 1,
        replies: [
          {
            id: 5,
            author: "Max Mustermann",
            content: "Hi Julia, die Comdirect habe ich in einem früheren Vergleich getestet. Das Konto ist zwar gut, aber mittlerweile nur noch kostenlos bei aktivem Trading oder mit 700€ Mindestgeldeingang. Deshalb habe ich es nicht in diesen Vergleich aufgenommen, der sich auf die besten bedingungslos kostenlosen Konten konzentriert.",
            date: "18. Mai 2023",
            likes: 2,
          }
        ]
      },
      {
        id: 6,
        author: "Markus W.",
        content: "Ich würde generell empfehlen, ein zweites Bankkonto als Backup zu haben. Man weiß nie, wann man es brauchen könnte, besonders wenn mal Online-Banking-Systeme ausfallen.",
        date: "20. Mai 2023",
        likes: 7,
      },
    ],
    relatedPosts: [
      {
        title: "Die wichtigsten Versicherungen für junge Erwachsene",
        excerpt: "Diese Versicherungen solltest du als junger Erwachsener unbedingt haben.",
        slug: "wichtigste-versicherungen-junge-erwachsene",
        category: "Finanzen",
        date: "5. Mai 2023",
      },
      {
        title: "ETF-Sparpläne für Anfänger erklärt",
        excerpt: "Alles was du über ETF-Sparpläne wissen solltest, wenn du mit dem Investieren beginnen möchtest.",
        slug: "etf-sparplaene-fuer-anfaenger-erklaert",
        category: "Finanzen",
        date: "1. Mai 2023",
      },
    ]
  };
  
  if (loading) {
    return (
      useSearchLayout ? <LayoutWithSearch>
        <div className="container py-16 animate-pulse">
          <div className="h-8 bg-muted/50 rounded-md w-3/4 mb-4"></div>
          <div className="h-4 bg-muted/50 rounded-md w-1/2 mb-8"></div>
          <div className="h-64 bg-muted/50 rounded-md mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-muted/50 rounded-md w-full"></div>
            <div className="h-4 bg-muted/50 rounded-md w-full"></div>
            <div className="h-4 bg-muted/50 rounded-md w-3/4"></div>
          </div>
        </div>
      </LayoutWithSearch> : <Layout>
        <div className="container py-16 animate-pulse">
          <div className="h-8 bg-muted/50 rounded-md w-3/4 mb-4"></div>
          <div className="h-4 bg-muted/50 rounded-md w-1/2 mb-8"></div>
          <div className="h-64 bg-muted/50 rounded-md mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-muted/50 rounded-md w-full"></div>
            <div className="h-4 bg-muted/50 rounded-md w-full"></div>
            <div className="h-4 bg-muted/50 rounded-md w-3/4"></div>
          </div>
        </div>
      </Layout>
    );
  }
  
  const SelectedLayout = useSearchLayout ? LayoutWithSearch : Layout;
  
  return (
    <SelectedLayout>
      <article className="py-8 md:py-12">
        <div className="container">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Startseite</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="max-w-[200px] truncate">
                <BreadcrumbLink href={`/blog/${slug}`}>{blogPost.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blogPost.title}</h1>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-sm">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarFallback className="bg-primary/10 text-primary">
                  {blogPost.author.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span>{blogPost.author}</span>
            </div>
            
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1.5" />
              <time dateTime={blogPost.date}>{blogPost.date}</time>
            </div>
            
            <div className="flex items-center text-muted-foreground">
              <Tag className="h-4 w-4 mr-1.5" />
              <span>{blogPost.category}</span>
            </div>
          </div>
          
          <div className="mb-10 prose prose-sm sm:prose lg:prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
          
          <div className="flex flex-wrap gap-2 mb-10">
            {blogPost.tags.map((tag) => (
              <span key={tag} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <CommentSection postSlug={slug || ""} initialComments={blogPost.comments} />
          
          {blogPost.relatedPosts && blogPost.relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="text-xl font-semibold mb-6">Ähnliche Artikel</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPost.relatedPosts.map((post) => (
                  <div key={post.slug} className="bg-muted/10 p-5 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="text-sm text-muted-foreground mb-1.5 flex items-center">
                      <Tag className="h-3.5 w-3.5 mr-1.5" />
                      <span>{post.category}</span>
                      <span className="mx-2">•</span>
                      <time>{post.date}</time>
                    </div>
                    <h4 className="font-medium mb-2">
                      <a
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </a>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-sm text-primary hover:underline"
                    >
                      Weiterlesen
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </SelectedLayout>
  );
};

export default BlogPostPage;
