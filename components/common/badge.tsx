// src/components/common/badge.tsx
import type { ReactNode } from "react";

type BadgeVariant = "default" | "outline" | "accent";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide";

  const styles: Record<BadgeVariant, string> = {
    default: "bg-primary/10 text-primary",
    outline: "border border-border-soft bg-background text-muted",
    accent: "bg-accent/15 text-accent",
  };

  return (
    <span className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
}
