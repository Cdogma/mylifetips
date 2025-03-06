
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
}

const Breadcrumbs = ({ items, showHome = true }: BreadcrumbsProps) => {
  return (
    <nav className="bg-muted/30 py-3">
      <div className="container">
        <ol className="flex flex-wrap items-center text-sm">
          {showHome && (
            <li className="flex items-center">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                <Home className="h-3.5 w-3.5 mr-1" />
                <span>Home</span>
              </Link>
              <ChevronRight className="h-3.5 w-3.5 mx-2 text-muted-foreground/70" />
            </li>
          )}
          
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={item.label} className="flex items-center">
                {item.link && !isLast ? (
                  <>
                    <Link 
                      to={item.link} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                    <ChevronRight className="h-3.5 w-3.5 mx-2 text-muted-foreground/70" />
                  </>
                ) : (
                  <span className="font-medium text-foreground">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
