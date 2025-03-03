
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
    <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""} mb-20 ${textAlignment[align]}`}>
      {subtitle && (
        <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
          {subtitle}
        </span>
      )}
      <h2 className={`${align === "left" ? "title-with-bar" : ""} text-3xl md:text-4xl font-bold mb-8 text-foreground`}>
        <span className="inline-block py-2">{title}</span>
      </h2>
      {description && <p className="text-lg text-muted-foreground mt-8">{description}</p>}
      {children}
    </div>
  );
};

export default SectionHeading;
