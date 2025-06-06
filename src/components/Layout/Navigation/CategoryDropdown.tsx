
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

export interface CategoryType {
  name: string;
  href: string;
  subcategories: { name: string; href: string }[];
}

interface CategoryDropdownProps {
  category: CategoryType;
  isActive: boolean;
}

const CategoryDropdown = ({ category, isActive }: CategoryDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`relative py-5 px-3 text-sm xl:text-base hover:text-primary transition-colors whitespace-nowrap flex items-center gap-1 group ${
            isActive 
              ? "text-primary font-medium" 
              : "text-foreground"
          }`}
        >
          {category.name}
          <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
          {isActive && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-48">
        <DropdownMenuItem asChild>
          <Link 
            to={category.href}
            className="w-full px-2 py-1.5 cursor-pointer flex justify-start"
          >
            <span className="font-medium">Alle {category.name}</span>
          </Link>
        </DropdownMenuItem>
        {category.subcategories.map((subCategory) => (
          <DropdownMenuItem key={subCategory.name} asChild>
            <Link 
              to={subCategory.href}
              className="w-full px-2 py-1.5 cursor-pointer flex justify-start"
            >
              {subCategory.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryDropdown;
