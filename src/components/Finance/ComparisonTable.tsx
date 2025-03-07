
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface Feature {
  name: string;
  tooltip?: string;
}

export interface ComparisonItem {
  id: string;
  name: string;
  description?: string;
  link: string;
  isAffiliate?: boolean;
  price?: string;
  rating?: number;
  features: Record<string, boolean | string>;
  bestFor?: string;
}

interface ComparisonTableProps {
  title: string;
  description?: string;
  features: Feature[];
  items: ComparisonItem[];
}

const ComparisonTable = ({ title, description, features, items }: ComparisonTableProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="text-muted-foreground mb-6">{description}</p>}
      
      <Table className="border border-border rounded-lg overflow-hidden">
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="w-[200px]">Produkt</TableHead>
            <TableHead className="text-center">Preis</TableHead>
            <TableHead className="text-center">Bewertung</TableHead>
            {features.map((feature) => (
              <TableHead key={feature.name} className="text-center">
                {feature.tooltip ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="inline-flex items-center gap-1 cursor-help">
                        {feature.name}
                        <Info className="h-3.5 w-3.5 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-[200px] text-sm">{feature.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  feature.name
                )}
              </TableHead>
            ))}
            <TableHead className="text-center">Besonders gut für</TableHead>
            <TableHead className="w-[120px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={item.id} className={index % 2 === 0 ? "bg-card" : "bg-card/50"}>
              <TableCell className="font-medium">
                {item.name}{item.isAffiliate && "*"}
                {item.description && (
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                )}
              </TableCell>
              <TableCell className="text-center">{item.price || "-"}</TableCell>
              <TableCell className="text-center">
                {item.rating ? (
                  <div className="flex justify-center items-center">
                    {item.rating}/5
                  </div>
                ) : (
                  "-"
                )}
              </TableCell>
              {features.map((feature) => (
                <TableCell key={`${item.id}-${feature.name}`} className="text-center">
                  {typeof item.features[feature.name] === "boolean" ? (
                    item.features[feature.name] ? (
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-red-500" />
                    )
                  ) : item.features[feature.name] ? (
                    <span>{item.features[feature.name]}</span>
                  ) : (
                    "-"
                  )}
                </TableCell>
              ))}
              <TableCell className="text-center text-sm">{item.bestFor || "-"}</TableCell>
              <TableCell>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link to={item.link}>Details</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <p className="text-xs text-muted-foreground mt-4">
        * = Affiliate-Link. Bei einem Abschluss über diesen Link erhalte ich eine kleine Provision.
      </p>
    </div>
  );
};

export default ComparisonTable;
