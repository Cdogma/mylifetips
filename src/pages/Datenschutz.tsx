
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import { Shield, Info } from "lucide-react";

const Datenschutz = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Datenschutzerklärung"
            description="Informationen zum Datenschutz auf unserer Website"
          />

          <div className="bg-card/60 backdrop-blur-sm border border-border/10 rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Shield className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-2xl font-semibold">Übersicht zum Datenschutz</h2>
            </div>

            <div className="prose max-w-none text-muted-foreground">
              <p className="mb-6">
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
              </p>

              <h3 className="text-xl font-medium mb-3 text-foreground">Verantwortlicher</h3>
              <p className="mb-6">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                Max Mustermann<br />
                Musterstraße 123<br />
                12345 Musterstadt<br />
                E-Mail: <a href="mailto:info@mylifetips.de" className="text-primary hover:underline">info@mylifetips.de</a>
              </p>

              <h3 className="text-xl font-medium mb-3 text-foreground">Datenerfassung auf unserer Website</h3>
              <h4 className="text-lg font-medium mb-2 text-foreground">Server-Log-Dateien</h4>
              <p className="mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>

              <h4 className="text-lg font-medium mb-2 text-foreground">Cookies</h4>
              <p className="mb-6">
                Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten.
              </p>

              <h3 className="text-xl font-medium mb-3 text-foreground">Ihre Rechte</h3>
              <p className="mb-4">
                Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.
              </p>
              <p className="mb-6">
                Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
              </p>

              <h3 className="text-xl font-medium mb-3 text-foreground">Änderung dieser Datenschutzerklärung</h3>
              <p>
                Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit unter Beachtung der geltenden Datenschutzvorschriften zu ändern. Die aktuelle Fassung finden Sie jeweils an dieser Stelle.
              </p>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center mb-2">
                  <Info className="h-5 w-5 text-primary mr-2" />
                  <p className="font-medium text-foreground">Stand: Mai 2024</p>
                </div>
                <p className="text-sm">
                  Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter <a href="mailto:datenschutz@mylifetips.de" className="text-primary hover:underline">datenschutz@mylifetips.de</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;
