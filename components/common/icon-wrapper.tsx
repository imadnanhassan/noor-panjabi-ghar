// src/components/common/icon-wrapper.tsx
import type { ReactNode } from "react";

interface IconWrapperProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "soft" | "outline";
  className?: string;
}

export function IconWrapper({
  children,
  size = "md",
  variant = "soft",
  className = "",
}: IconWrapperProps) {
  const sizeClasses =
    size === "sm" ? "h-7 w-7" : size === "lg" ? "h-11 w-11" : "h-9 w-9";

  const variants: Record<string, string> = {
    default: "bg-primary text-background",
    soft: "bg-primary/8 text-primary",
    outline: "border border-border-soft bg-background text-primary",
  };

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full ${sizeClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
