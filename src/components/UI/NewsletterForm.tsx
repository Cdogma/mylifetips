
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { getFeatureFlags } from "@/config/environment";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const flags = getFeatureFlags();

  if (!flags.showNewsletterSignup) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Bitte gib deine E-Mail-Adresse ein.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simuliere API-Aufruf
    setTimeout(() => {
      toast.success("Vielen Dank für deine Anmeldung!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Newsletter abonnieren</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Erhalte die neuesten Tipps und Empfehlungen direkt in dein Postfach.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Deine E-Mail-Adresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          className="flex-1"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="sm:w-auto"
        >
          {isSubmitting ? "Wird abonniert..." : "Abonnieren"}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterForm;
