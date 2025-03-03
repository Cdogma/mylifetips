
import { ReactNode } from "react";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  children?: ReactNode;
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  align = "left",
  children,
}: SectionHeadingProps) => {
  const textAlignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""} mb-12 ${textAlignment[align]}`}>
      {subtitle && (
        <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-2">
          {subtitle}
        </span>
      )}
      <h2 className={`${align === "left" ? "title-with-bar" : ""} text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent pb-1`}>{title}</h2>
      {description && <p className="text-lg text-muted-foreground mt-4">{description}</p>}
      {children}
    </div>
  );
};

export default SectionHeading;
