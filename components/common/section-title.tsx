// src/components/common/section-title.tsx
import type { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string | ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-2 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-xs text-muted sm:text-sm">{description}</p>
      )}
    </div>
  );
}
