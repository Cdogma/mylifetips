
import { Info } from "lucide-react";

interface DisclaimerProps {
  text: string;
  className?: string;
  variant?: "default" | "affiliate";
}

const Disclaimer = ({ text, className = "", variant = "default" }: DisclaimerProps) => {
  return (
    <div className={`bg-card rounded-lg p-6 border border-border/50 shadow-sm ${className}`}>
      <div className="flex items-start gap-3">
        <Info className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground">
          {variant === "affiliate" ? (
            <strong>Hinweis:</strong>
          ) : (
            <strong>Wichtiger Hinweis:</strong>
          )}{" "}
          {text}
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
