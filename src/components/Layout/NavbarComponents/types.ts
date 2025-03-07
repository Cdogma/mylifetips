
import { LucideIcon } from "lucide-react";

export interface SubcategoryType {
  name: string;
  href: string;
  description: string;
}

export interface FeaturedItemType {
  name: string;
  href: string;
  badge?: string;
}

export interface CategoryType {
  name: string;
  href: string;
  icon: LucideIcon;
  description: string;
  subcategories: SubcategoryType[];
  featuredItems: FeaturedItemType[];
}

export interface StandardNavLinkType {
  name: string;
  href: string;
  icon: LucideIcon;
}
