
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SortDropdownProps {
  setSortBy: (sortBy: "rating" | "title" | "none") => void;
  setSortDirection: (direction: "asc" | "desc") => void;
}

const SortDropdown = ({ setSortBy, setSortDirection }: SortDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-1 items-center">
          <ArrowUpDown className="h-4 w-4" />
          <span className="hidden sm:inline">Sortieren</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => { setSortBy("rating"); setSortDirection("desc"); }}>
          Höchste Bewertung
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setSortBy("rating"); setSortDirection("asc"); }}>
          Niedrigste Bewertung
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setSortBy("title"); setSortDirection("asc"); }}>
          A-Z
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setSortBy("title"); setSortDirection("desc"); }}>
          Z-A
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortDropdown;
