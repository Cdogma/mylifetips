
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
        <div className="mb-6">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">
            {subtitle}
          </span>
        </div>
      )}
      
      <div className={`mb-10 ${align === "left" ? "relative pb-10" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ lineHeight: "1.5", overflow: "visible", paddingBottom: "0.5em" }}>
          {title}
        </h2>
        
        {align === "left" && (
          <div className="absolute bottom-0 left-0 h-1 w-16 bg-primary rounded-full"></div>
        )}
      </div>
      
      {description && (
        <div className="mb-10">
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      )}
      
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
};

export default SectionHeading;
