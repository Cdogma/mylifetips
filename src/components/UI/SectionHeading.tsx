
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
    <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""} mb-32 ${textAlignment[align]}`}>
      {subtitle && (
        <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-8">
          {subtitle}
        </span>
      )}
      {align === "left" ? (
        <div className="relative mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-relaxed">
            <span className="inline-block py-6">{title}</span>
          </h2>
          <div className="absolute bottom-0 left-0 h-1 w-16 bg-primary rounded-full mt-4"></div>
        </div>
      ) : (
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground leading-relaxed">
          <span className="inline-block py-6">{title}</span>
        </h2>
      )}
      {description && <p className="text-lg text-muted-foreground mt-12 mb-6">{description}</p>}
      {children}
    </div>
  );
};

export default SectionHeading;
