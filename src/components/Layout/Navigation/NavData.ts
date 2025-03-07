
// Hauptkategorien mit Unterkategorien
export const mainCategories = [
  { 
    name: "Finanzen", 
    href: "/finanzen",
    subcategories: [
      { name: "Bankkonten", href: "/finanzen/bankkonten" },
      { name: "Kreditkarten", href: "/finanzen/kreditkarten" },
      { name: "Broker", href: "/finanzen/broker" },
      { name: "ETFs", href: "/finanzen/etfs" },
      { name: "Versicherungen", href: "/finanzen/versicherungen" }
    ]
  },
  { 
    name: "Technik", 
    href: "/technik", 
    subcategories: [
      { name: "Smart Home", href: "/technik/smart-home" },
      { name: "Gadgets", href: "/technik/gadgets" },
      { name: "Software", href: "/technik/software" }
    ]
  },
  { 
    name: "Lifestyle", 
    href: "/lifestyle",
    subcategories: [
      { name: "Gesundheit", href: "/lifestyle/gesundheit" },
      { name: "Hobbys", href: "/lifestyle/hobbys" },
      { name: "Reisen", href: "/lifestyle/reisen" },
      { name: "Mode", href: "/lifestyle/mode" }
    ]
  },
  { 
    name: "Business", 
    href: "/business",
    subcategories: [
      { name: "Gründung", href: "/business/gruendung" },
      { name: "Marketing", href: "/business/marketing" },
      { name: "Steuern", href: "/business/steuern" }
    ]
  }
];

// Weitere Haupteinträge, die keine Unterkategorien benötigen
export const standardNavLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Empfehlungen", href: "/empfehlungen" },
  { name: "Ressourcen", href: "/ressourcen" },
  { name: "Über Mich", href: "/ueber-mich" },
  { name: "Kontakt", href: "/kontakt" },
];
