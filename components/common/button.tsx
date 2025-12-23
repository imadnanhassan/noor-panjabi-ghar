import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "motion/react";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const base =
  "inline-flex items-center justify-center rounded-full text-xs font-semibold tracking-[0.14em] uppercase transition-colors focus:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-background hover:bg-primary/90 shadow-sm shadow-black/10",
  outline:
    "border border-border-soft bg-background text-foreground hover:border-accent hover:text-primary shadow-sm shadow-black/5",
  ghost: "text-foreground hover:bg-card/80",
};

export function Button({
  children,
  variant = "primary",
  fullWidth,
  className = "",
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${
        fullWidth ? "w-full" : "px-5"
      } py-2 ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
