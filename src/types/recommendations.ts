
export interface Recommendation {
  title: string;
  category: string;
  subcategory: string;
  description: string;
  rating: number;
  imageSrc?: string;
  link: string;
  isAffiliate?: boolean;
  price?: string;
  pros?: string[];
  cons?: string[];
}
