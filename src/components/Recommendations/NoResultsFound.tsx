
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

interface NoResultsFoundProps {
  handleClearFilters: () => void;
}

const NoResultsFound = ({ handleClearFilters }: NoResultsFoundProps) => {
  return (
    <div className="text-center py-12">
      <SlidersHorizontal className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
      <h3 className="text-xl font-medium mb-2">Keine Ergebnisse gefunden</h3>
      <p className="text-muted-foreground mb-6">
        Versuche andere Filtereinstellungen oder Suchbegriffe.
      </p>
      <Button onClick={handleClearFilters}>
        Filter zurücksetzen
      </Button>
    </div>
  );
};

export default NoResultsFound;
