
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search, ArrowRight } from "lucide-react";

interface SearchResult {
  title: string;
  description: string;
  category: string;
  url: string;
}

// Mocks-Daten, in einer realen App würde dies aus einer API kommen
const searchData: SearchResult[] = [
  // Finanzen
  { 
    title: "C24 Smart Girokonto", 
    description: "Das beste kostenlose Girokonto mit allen wichtigen Funktionen", 
    category: "Finanzen", 
    url: "/finanzen/bankkonten/c24" 
  },
  { 
    title: "Bankkonten Vergleich", 
    description: "Vergleich der besten Girokonten für deine Bedürfnisse", 
    category: "Finanzen", 
    url: "/finanzen/bankkonten" 
  },
  { 
    title: "Kreditkarten im Vergleich", 
    description: "Die besten Kreditkarten auf einen Blick", 
    category: "Finanzen", 
    url: "/finanzen/kreditkarten" 
  },
  { 
    title: "ETF-Portfolios", 
    description: "Empfehlungen für langfristigen Vermögensaufbau", 
    category: "Finanzen", 
    url: "/finanzen/etfs" 
  },
  
  // Technik
  { 
    title: "Smart Home Guide", 
    description: "Alles zum Thema Smart Home für Einsteiger", 
    category: "Technik", 
    url: "/technik/smart-home" 
  },
  { 
    title: "Die besten Gadgets 2023", 
    description: "Meine aktuellen Technik-Empfehlungen", 
    category: "Technik", 
    url: "/technik/gadgets" 
  },
  
  // Lifestyle
  { 
    title: "Gesundheitstipps", 
    description: "Tipps für einen gesünderen Alltag", 
    category: "Lifestyle", 
    url: "/lifestyle/gesundheit" 
  },
  { 
    title: "Reiseziele 2023", 
    description: "Die schönsten Reiseziele für das laufende Jahr", 
    category: "Lifestyle", 
    url: "/lifestyle/reisen" 
  },
  
  // Business
  { 
    title: "Gründungsleitfaden", 
    description: "Schritt-für-Schritt zur erfolgreichen Gründung", 
    category: "Business", 
    url: "/business/gruendung" 
  },
  
  // Blog
  { 
    title: "Die besten kostenlosen Girokonten im Vergleich", 
    description: "Ein umfassender Vergleich der besten kostenlosen Girokonten", 
    category: "Blog", 
    url: "/blog/beste-kostenlose-girokonten-vergleich" 
  },
  { 
    title: "ETF-Sparpläne für Anfänger erklärt", 
    description: "Alles was du über ETF-Sparpläne wissen solltest", 
    category: "Blog", 
    url: "/blog/etf-sparplaene-fuer-anfaenger-erklaert" 
  },
];

const GlobalSearch = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Keyboard shortcut (Ctrl+K oder Cmd+K) zum Öffnen der Suche
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredResults([]);
      return;
    }

    const results = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredResults(results);
  }, [searchQuery]);

  const handleSelect = (url: string) => {
    setOpen(false);
    navigate(url);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-muted/50 hover:bg-muted border-border w-full md:w-auto"
      >
        <Search className="h-4 w-4" />
        <span>Suchen...</span>
        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="rounded-lg border shadow-md">
          <CommandInput
            ref={inputRef}
            placeholder="Suche nach Inhalten..."
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList>
            <CommandEmpty>Keine Ergebnisse gefunden.</CommandEmpty>
            
            {filteredResults.length > 0 && (
              <>
                <CommandGroup heading="Finanzen">
                  {filteredResults
                    .filter((result) => result.category === "Finanzen")
                    .map((result) => (
                      <CommandItem
                        key={result.url}
                        onSelect={() => handleSelect(result.url)}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div>
                            <div className="font-medium">{result.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {result.description}
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 shrink-0 opacity-50" />
                        </div>
                      </CommandItem>
                    ))}
                </CommandGroup>

                <CommandGroup heading="Technik">
                  {filteredResults
                    .filter((result) => result.category === "Technik")
                    .map((result) => (
                      <CommandItem
                        key={result.url}
                        onSelect={() => handleSelect(result.url)}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div>
                            <div className="font-medium">{result.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {result.description}
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 shrink-0 opacity-50" />
                        </div>
                      </CommandItem>
                    ))}
                </CommandGroup>

                <CommandGroup heading="Lifestyle">
                  {filteredResults
                    .filter((result) => result.category === "Lifestyle")
                    .map((result) => (
                      <CommandItem
                        key={result.url}
                        onSelect={() => handleSelect(result.url)}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div>
                            <div className="font-medium">{result.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {result.description}
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 shrink-0 opacity-50" />
                        </div>
                      </CommandItem>
                    ))}
                </CommandGroup>

                <CommandGroup heading="Business">
                  {filteredResults
                    .filter((result) => result.category === "Business")
                    .map((result) => (
                      <CommandItem
                        key={result.url}
                        onSelect={() => handleSelect(result.url)}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div>
                            <div className="font-medium">{result.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {result.description}
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 shrink-0 opacity-50" />
                        </div>
                      </CommandItem>
                    ))}
                </CommandGroup>

                <CommandGroup heading="Blog">
                  {filteredResults
                    .filter((result) => result.category === "Blog")
                    .map((result) => (
                      <CommandItem
                        key={result.url}
                        onSelect={() => handleSelect(result.url)}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div>
                            <div className="font-medium">{result.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {result.description}
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 shrink-0 opacity-50" />
                        </div>
                      </CommandItem>
                    ))}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
};

export default GlobalSearch;
