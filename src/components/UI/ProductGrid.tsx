
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Star } from "lucide-react";
import { getFeatureFlags } from "@/config/environment";

const ProductGrid = () => {
  const flags = getFeatureFlags();

  // Echte Produkte (immer anzeigen)
  const realProducts = [
    {
      id: 1,
      title: "C24 Bank Girokonto",
      description: "Kostenloses Girokonto mit allen wichtigen Features",
      rating: 4.8,
      category: "Banking",
      link: "/finanzen/bankkonten/c24",
      isAffiliate: true
    }
  ];

  // Platzhalter-Produkte (nur in Showcase)
  const placeholderProducts = [
    {
      id: 2,
      title: "Premium Kreditkarte",
      description: "Exklusive Kreditkarte mit weltweiten Vorteilen",
      rating: 4.9,
      category: "Kreditkarten",
      link: "#",
      isAffiliate: true,
      isPlaceholder: true
    },
    {
      id: 3,
      title: "ETF-Sparplan Starter",
      description: "Der perfekte Einstieg in die ETF-Welt",
      rating: 4.7,
      category: "Investment",
      link: "#",
      isAffiliate: true,
      isPlaceholder: true
    },
    {
      id: 4,
      title: "Smart Home Bundle",
      description: "Komplettpaket für dein intelligentes Zuhause",
      rating: 4.6,
      category: "Technik",
      link: "#",
      isAffiliate: true,
      isPlaceholder: true
    }
  ];

  const displayProducts = flags.showPlaceholderProducts 
    ? [...realProducts, ...placeholderProducts]
    : realProducts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayProducts.map((product) => (
        <Card key={product.id} className={`relative ${product.isPlaceholder ? 'border-dashed border-2 border-primary/30' : ''}`}>
          {product.isPlaceholder && (
            <Badge className="absolute -top-2 -right-2 bg-primary/20 text-primary">
              Platzhalter
            </Badge>
          )}
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg">{product.title}</CardTitle>
                <CardDescription className="mt-1">
                  {product.description}
                </CardDescription>
              </div>
              <Badge variant="secondary">{product.category}</Badge>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
          </CardHeader>
          <CardContent>
            <Button 
              asChild 
              className="w-full" 
              disabled={product.isPlaceholder}
            >
              <a href={product.link} className="flex items-center gap-2">
                Mehr erfahren
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            {product.isAffiliate && (
              <p className="text-xs text-muted-foreground mt-2">
                * Affiliate-Link - unterstützt unsere Arbeit
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
