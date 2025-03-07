
const NewsletterSection = () => {
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
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 px-4 py-3 rounded-l-md sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-r-md sm:rounded-l-none hover:bg-primary/90 transition-colors">
              Abonnieren
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Ich respektiere deine Privatsphäre. Du kannst dich jederzeit abmelden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
