
import { Layers, BookOpen, ShoppingBag, FilePen, BookMarked, User, Mail } from "lucide-react";
import { CategoryType, StandardNavLinkType } from "./types";

// Hauptkategorien mit Unterkategorien - Reihenfolge: Finanzen, Technik, Lifestyle, Business
export const mainCategories: CategoryType[] = [
  { 
    name: "Finanzen", 
    href: "/finanzen",
    icon: Layers,
    description: "Alles für deine finanzielle Freiheit und smarte Geldanlage.",
    subcategories: [
      { name: "Bankkonten", href: "/finanzen/bankkonten", description: "Die besten Konten im Vergleich" },
      { name: "Kreditkarten", href: "/finanzen/kreditkarten", description: "Welche Karte passt zu dir?" },
      { name: "Broker", href: "/finanzen/broker", description: "Aktien & ETFs clever handeln" },
      { name: "ETFs", href: "/finanzen/etfs", description: "Passive Investmentstrategien" },
      { name: "Versicherungen", href: "/finanzen/versicherungen", description: "Richtig abgesichert sein" }
    ],
    featuredItems: [
      { name: "C24 Bank Test", href: "/finanzen/bankkonten/c24-bank", badge: "Neu" },
      { name: "Die besten ETFs 2023", href: "/finanzen/etfs/beste-etfs", badge: "Beliebt" },
    ]
  },
  { 
    name: "Technik", 
    href: "/technik", 
    icon: BookOpen,
    description: "Von Smart Home bis Mobile - digitale Helfer für deinen Alltag.",
    subcategories: [
      { name: "Smart Home", href: "/technik/smart-home", description: "Dein Zuhause intelligent steuern" },
      { name: "Gadgets", href: "/technik/gadgets", description: "Nützliche technische Helfer" },
      { name: "Software", href: "/technik/software", description: "Apps und Programme im Test" }
    ],
    featuredItems: [
      { name: "Alexa vs. Google Home", href: "/technik/smart-home/sprachassistenten", badge: "Vergleich" },
      { name: "Die besten Smartphones 2023", href: "/technik/gadgets/smartphones", badge: "Top 5" },
    ]
  },
  { 
    name: "Lifestyle", 
    href: "/lifestyle",
    icon: ShoppingBag,
    description: "Besser leben: Von Gesundheit über Reisen bis zu Mode und Hobbys.",
    subcategories: [
      { name: "Gesundheit", href: "/lifestyle/gesundheit", description: "Fitness und Wohlbefinden" },
      { name: "Hobbys", href: "/lifestyle/hobbys", description: "Freizeit sinnvoll gestalten" },
      { name: "Reisen", href: "/lifestyle/reisen", description: "Destinationen und Reisetipps" },
      { name: "Mode", href: "/lifestyle/mode", description: "Nachhaltig und stylisch" }
    ],
    featuredItems: [
      { name: "Fitness-Tracker im Test", href: "/lifestyle/gesundheit/fitness-tracker", badge: "Getestet" },
      { name: "Nachhaltige Mode-Labels", href: "/lifestyle/mode/nachhaltig", badge: "Eco" },
    ]
  },
  { 
    name: "Business", 
    href: "/business",
    icon: FilePen,
    description: "Gründen, wachsen, optimieren - dein Weg zum Erfolg.",
    subcategories: [
      { name: "Gründung", href: "/business/gruendung", description: "Der Start in die Selbstständigkeit" },
      { name: "Marketing", href: "/business/marketing", description: "Strategien für mehr Sichtbarkeit" },
      { name: "Steuern", href: "/business/steuern", description: "Steueroptimierung für Unternehmer" }
    ],
    featuredItems: [
      { name: "Businessplan-Vorlage", href: "/business/gruendung/businessplan", badge: "Kostenlos" },
      { name: "Steuertipps für Freelancer", href: "/business/steuern/freelancer", badge: "Insider" },
    ]
  }
];

// Weitere Haupteinträge, die keine Unterkategorien benötigen
export const standardNavLinks: StandardNavLinkType[] = [
  { name: "Blog", href: "/blog", icon: BookMarked },
  { name: "Empfehlungen", href: "/empfehlungen", icon: ShoppingBag },
  { name: "Ressourcen", href: "/ressourcen", icon: Layers },
  { name: "Über Mich", href: "/ueber-mich", icon: User },
  { name: "Kontakt", href: "/kontakt", icon: Mail },
];
