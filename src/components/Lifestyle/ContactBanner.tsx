
import { Link } from "react-router-dom";

interface ContactBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const ContactBanner = ({
  title = "Hast du Fragen zu einem bestimmten Lifestyle-Thema?",
  description = "Ich freue mich über deine Nachricht und beantworte gerne deine Fragen oder gebe individuelle Empfehlungen.",
  buttonText = "Kontakt aufnehmen",
  buttonLink = "/kontakt"
}: ContactBannerProps) => {
  return (
    <section className="bg-primary/5 py-16">
      <div className="container">
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h3 className="text-2xl font-semibold mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground">
                {description}
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <Link
                to={buttonLink}
                className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
