
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import ContactForm from "../components/UI/ContactForm";
import { Mail, Phone } from "lucide-react";

const Kontakt = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Kontakt"
            description="Hast du Fragen, Anregungen oder Feedback? Ich freue mich auf deine Nachricht!"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
            <div className="lg:col-span-5">
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-8 border border-border/10 shadow-sm h-full">
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Kontaktinformationen
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">E-Mail</h4>
                      <a href="mailto:info@mylifetips.de" className="text-primary hover:underline">info@mylifetips.de</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Telefon</h4>
                      <a href="tel:+491234567890" className="text-primary hover:underline">+49 (0) 123 456 7890</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="font-medium mb-2">Antwortzeit</h4>
                  <p className="text-muted-foreground">
                    Ich bemühe mich, alle Anfragen innerhalb von 24-48 Stunden zu beantworten.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-8 border border-border/10 shadow-sm">
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Schreib mir eine Nachricht
                </h3>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
