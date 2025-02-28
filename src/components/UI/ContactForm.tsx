
import { useState } from "react";
import { Mail, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border">
      {submitted ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <Mail className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-medium mb-2">Vielen Dank!</h3>
          <p className="text-muted-foreground">
            Deine Nachricht wurde erfolgreich gesendet. Ich werde mich so schnell wie möglich bei dir melden.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Betreff
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Betreff auswählen</option>
              <option value="Frage">Frage</option>
              <option value="Feedback">Feedback</option>
              <option value="Kooperation">Kooperationsanfrage</option>
              <option value="Sonstiges">Sonstiges</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              required
            ></textarea>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacy"
              className="h-4 w-4 text-primary border-input rounded focus:ring-primary"
              required
            />
            <label htmlFor="privacy" className="ml-2 text-sm text-muted-foreground">
              Ich habe die{" "}
              <a href="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </a>{" "}
              gelesen und stimme zu.
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Wird gesendet...
              </>
            ) : (
              <>
                Nachricht senden <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
