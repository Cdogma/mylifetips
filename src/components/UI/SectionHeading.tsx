
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
    <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""} mb-16 ${textAlignment[align]}`}>
      {subtitle && (
        <div className="mb-4">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">
            {subtitle}
          </span>
        </div>
      )}
      
      <div className={`mb-8 ${align === "left" ? "relative pb-6" : ""}`}>
        <div className="mb-2">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground normal-case">
            {title}
          </h2>
        </div>
        
        {align === "left" && (
          <div className="absolute bottom-0 left-0 h-1 w-16 bg-primary rounded-full"></div>
        )}
      </div>
      
      {description && (
        <div className="mb-8">
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      )}
      
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
};

export default SectionHeading;
