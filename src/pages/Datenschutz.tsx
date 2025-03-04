
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/UI/SectionHeading";
import { Shield, Info, Lock, FileCheck, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
              <h2 className="text-2xl font-semibold">Datenschutzerklärung</h2>
            </div>

            <div className="prose max-w-none text-muted-foreground">
              <section className="mb-10">
                <h3 className="text-xl font-medium mb-3 text-foreground flex items-center gap-2">
                  <span className="inline-flex items-center justify-center p-1 rounded-md bg-primary/10">
                    <FileCheck className="h-5 w-5 text-primary" />
                  </span>
                  1. Allgemeine Hinweise
                </h3>
                <p>
                  Diese Datenschutzerklärung informiert Sie über die Verarbeitung personenbezogener Daten bei der Nutzung unserer Website. 
                  Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können, wie z. B. Name, Adresse, 
                  E-Mail-Adresse oder Nutzerverhalten.
                </p>
              </section>

              <section className="mb-10">
                <h3 className="text-xl font-medium mb-3 text-foreground flex items-center gap-2">
                  <span className="inline-flex items-center justify-center p-1 rounded-md bg-primary/10">
                    <Lock className="h-5 w-5 text-primary" />
                  </span>
                  2. Verantwortliche Stelle
                </h3>
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-destructive/10 border border-destructive/30 rounded-md p-4 my-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <Badge variant="destructive" className="mb-2">Bitte ergänzen</Badge>
                      <p className="text-destructive mb-1 font-medium">[Ihr Unternehmensname]</p>
                      <p className="text-destructive mb-1">[Straße, Hausnummer]</p>
                      <p className="text-destructive mb-1">[PLZ, Stadt]</p>
                      <p className="text-destructive mb-1">Telefon: [Ihre Telefonnummer]</p>
                      <p className="text-destructive mb-1">E-Mail: [Ihre E-Mail-Adresse]</p>
                      <p className="text-destructive mb-3">Website: [Ihre Website]</p>
                      
                      <p className="text-destructive mb-1 font-medium">Falls ein Datenschutzbeauftragter bestellt wurde:</p>
                      <p className="text-destructive mb-1">Datenschutzbeauftragter: [Name]</p>
                      <p className="text-destructive">E-Mail: [E-Mail-Adresse]</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h3 className="text-xl font-medium mb-3 text-foreground flex items-center gap-2">
                  <span className="inline-flex items-center justify-center p-1 rounded-md bg-primary/10">
                    <Info className="h-5 w-5 text-primary" />
                  </span>
                  3. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck der Verwendung
                </h3>
                
                <h4 className="text-lg font-medium mb-2 text-foreground">3.1 Beim Besuch der Website</h4>
                <p className="mb-4">
                  Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen 
                  an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>IP-Adresse des anfragenden Rechners</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                  <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
                </ul>
                
                <p className="font-medium mb-2">Zweck:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website</li>
                  <li>Gewährleistung einer komfortablen Nutzung</li>
                  <li>Auswertung der Systemsicherheit und -stabilität</li>
                </ul>
                
                <p className="mb-4">
                  <span className="font-medium">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                </p>
                <p className="mb-4">
                  <span className="font-medium">Speicherdauer:</span> Die Server-Logs werden für 30 Tage gespeichert und dann automatisch gelöscht.
                </p>
                
                <h4 className="text-lg font-medium mb-2 text-foreground">3.2 Kontaktformular und E-Mail-Kontakt</h4>
                <p className="mb-4">
                  Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, speichern wir Ihre Angaben zwecks Bearbeitung der Anfrage 
                  und für eventuelle Anschlussfragen.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) oder lit. f DSGVO (berechtigtes Interesse).
                </p>
                <p className="mb-4">
                  <span className="font-medium">Speicherdauer:</span> Anfragen werden nach Abschluss der Bearbeitung gelöscht, sofern keine gesetzlichen 
                  Aufbewahrungspflichten bestehen.
                </p>
                
                <h4 className="text-lg font-medium mb-2 text-foreground">3.3 Verwendung von Cookies</h4>
                <p className="mb-4">
                  Unsere Website verwendet Cookies, um die Nutzererfahrung zu verbessern.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><span className="font-medium">Erforderliche Cookies:</span> Notwendig für den technischen Betrieb (z. B. Session-Cookies).</li>
                  <li><span className="font-medium">Analytische Cookies:</span> Dienen der Verbesserung der Website (nur mit Einwilligung).</li>
                  <li><span className="font-medium">Marketing-Cookies:</span> Setzen Dritte für Werbung oder Tracking (nur mit Einwilligung).</li>
                </ul>
                <p className="mb-4">
                  <span className="font-medium">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) bzw. Art. 6 Abs. 1 lit. f DSGVO 
                  (berechtigtes Interesse bei technisch erforderlichen Cookies).
                </p>
                <p className="mb-4">
                  <span className="font-medium">Hinweis:</span> Detaillierte Informationen finden Sie in unserem Cookie-Banner.
                </p>
              </section>
              
              <section className="mb-10">
                <h3 className="text-xl font-medium mb-3 text-foreground flex items-center gap-2">
                  <span className="inline-flex items-center justify-center p-1 rounded-md bg-primary/10">
                    <Info className="h-5 w-5 text-primary" />
                  </span>
                  4. Ihre Rechte als betroffene Person
                </h3>
                <p className="mb-4">Sie haben folgende Rechte:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><span className="font-medium">Auskunft (Art. 15 DSGVO)</span> – Welche Daten verarbeiten wir?</li>
                  <li><span className="font-medium">Berichtigung (Art. 16 DSGVO)</span> – Falsche Daten korrigieren.</li>
                  <li><span className="font-medium">Löschung (Art. 17 DSGVO)</span> – Daten unter bestimmten Voraussetzungen löschen lassen.</li>
                  <li><span className="font-medium">Einschränkung der Verarbeitung (Art. 18 DSGVO)</span> – Verarbeitung begrenzen.</li>
                  <li><span className="font-medium">Datenübertragbarkeit (Art. 20 DSGVO)</span> – Daten in maschinenlesbarem Format erhalten.</li>
                  <li><span className="font-medium">Widerspruch (Art. 21 DSGVO)</span> – Verarbeitung ablehnen.</li>
                  <li><span className="font-medium">Beschwerderecht (Art. 77 DSGVO)</span> – Beschwerde bei einer Aufsichtsbehörde einlegen.</li>
                </ul>
              </section>
              
              <section className="mb-10">
                <h3 className="text-xl font-medium mb-3 text-foreground flex items-center gap-2">
                  <span className="inline-flex items-center justify-center p-1 rounded-md bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </span>
                  5. Datensicherheit
                </h3>
                <p>
                  Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Manipulation, Verlust oder 
                  unberechtigten Zugriff zu schützen. Alle sensiblen Daten werden über eine SSL-/TLS-Verschlüsselung übertragen.
                </p>
              </section>
              
              <section className="mb-6">
                <h3 className="text-xl font-medium mb-3 text-foreground flex items-center gap-2">
                  <span className="inline-flex items-center justify-center p-1 rounded-md bg-primary/10">
                    <FileCheck className="h-5 w-5 text-primary" />
                  </span>
                  6. Änderungen dieser Datenschutzerklärung
                </h3>
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren. Die jeweils aktuelle Version finden Sie auf unserer Website.
                </p>
              </section>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center mb-2">
                  <Info className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <div>
                    <Badge variant="destructive" className="mb-1">Bitte ergänzen</Badge>
                    <p className="font-medium text-foreground">Stand: [Monat, Jahr]</p>
                  </div>
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
