
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Bitte gib deine E-Mail-Adresse ein.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulieren eines API-Aufrufs
    setTimeout(() => {
      toast.success("Vielen Dank für deine Anmeldung!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-b from-white to-primary/5 dark:from-background dark:to-primary/5 py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Newsletter
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bleibe auf dem Laufenden
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Abonniere meinen Newsletter und erhalte regelmäßig meine neuesten Tipps,
            Empfehlungen und exklusive Angebote direkt in dein Postfach.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 px-4 py-3 rounded-l-md sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            <Button 
              type="submit" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-r-md sm:rounded-l-none hover:bg-primary/90 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wird abonniert..." : "Abonnieren"}
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            Ich respektiere deine Privatsphäre. Du kannst dich jederzeit abmelden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
