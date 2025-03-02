
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import { Info, Mail, MapPin, Phone, Globe } from "lucide-react";

const Impressum = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Impressum"
            description="Angaben gemäß § 5 TMG"
          />

          <div className="bg-card/60 backdrop-blur-sm border border-border/10 rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 flex items-center">
                  <Info className="mr-3 h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Angaben</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-muted-foreground mb-2">Max Mustermann</p>
                  <p className="text-muted-foreground mb-2">MyLifeTips Blog</p>
                  <p className="text-muted-foreground">USt-IdNr: DE123456789</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Adresse</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-muted-foreground mb-2">Musterstraße 123</p>
                  <p className="text-muted-foreground">12345 Musterstadt</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Kontakt</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-muted-foreground mb-2">
                    E-Mail: <a href="mailto:info@mylifetips.de" className="text-primary hover:underline">info@mylifetips.de</a>
                  </p>
                  <p className="text-muted-foreground">
                    Telefon: <a href="tel:+491234567890" className="text-primary hover:underline">+49 (0) 123 456 7890</a>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 flex items-center">
                  <Globe className="mr-3 h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Online</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-muted-foreground mb-2">
                    Website: <a href="https://www.mylifetips.de" className="text-primary hover:underline">www.mylifetips.de</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <h3 className="text-xl font-semibold mb-4">Haftungsausschluss</h3>
              <div className="prose max-w-none text-muted-foreground">
                <h4 className="text-lg font-medium mb-2 text-foreground">1. Haftung für Inhalte</h4>
                <p className="mb-4">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>

                <h4 className="text-lg font-medium mb-2 text-foreground">2. Haftung für Links</h4>
                <p className="mb-4">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                </p>

                <h4 className="text-lg font-medium mb-2 text-foreground">3. Urheberrecht</h4>
                <p className="mb-4">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                </p>

                <h4 className="text-lg font-medium mb-2 text-foreground">4. Datenschutz</h4>
                <p>
                  Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
