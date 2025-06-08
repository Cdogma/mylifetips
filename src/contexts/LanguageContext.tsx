
import React, { createContext, useContext, useState } from "react";

type Language = "de" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    "quantum.features": "QUANTUM FEATURES",
    "tech.redefining": "Technologien, die die Realität neu definieren",
    "neural.intelligence": "Neural Intelligence",
    "neural.desc": "KI-gestützte Analysen für hyperpräzise Empfehlungen",
    "quantum.security": "Quantum Security",
    "quantum.desc": "Unbreakable Verschlüsselung der nächsten Generation",
    "warp.speed": "Warp Speed",
    "warp.desc": "Instantane Verarbeitung mit Zero-Latenz Technologie",
    "unlimited.potential": "Unlimited Potential",
    "unlimited.desc": "Grenzenlose Möglichkeiten durch adaptive Algorithmen",
    "legendary.stats": "LEGENDARY STATS",
    "stats.making.history": "Zahlen, die Geschichte schreiben",
    "possibilities": "Möglichkeiten",
    "perfection": "Perfektion",
    "evolution": "Evolution",
    "latency": "Latenz",
    "ready.infinity": "READY FOR INFINITY?",
    "new.dimension": "Betrete eine neue Dimension der Möglichkeiten.",
    "metamorphosis.awaits": "Deine Metamorphose wartet.",
    "ascension.begin": "ASCENSION BEGINNEN",
    "elite.contact": "ELITE KONTAKT"
  },
  en: {
    "quantum.features": "QUANTUM FEATURES",
    "tech.redefining": "Technologies that redefine reality",
    "neural.intelligence": "Neural Intelligence",
    "neural.desc": "AI-powered analysis for hyper-precise recommendations",
    "quantum.security": "Quantum Security",
    "quantum.desc": "Unbreakable next-generation encryption",
    "warp.speed": "Warp Speed",
    "warp.desc": "Instant processing with zero-latency technology",
    "unlimited.potential": "Unlimited Potential",
    "unlimited.desc": "Limitless possibilities through adaptive algorithms",
    "legendary.stats": "LEGENDARY STATS",
    "stats.making.history": "Numbers that make history",
    "possibilities": "Possibilities",
    "perfection": "Perfection",
    "evolution": "Evolution",
    "latency": "Latency",
    "ready.infinity": "READY FOR INFINITY?",
    "new.dimension": "Enter a new dimension of possibilities.",
    "metamorphosis.awaits": "Your metamorphosis awaits.",
    "ascension.begin": "BEGIN ASCENSION",
    "elite.contact": "ELITE CONTACT"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("de");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.de] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
