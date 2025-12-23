
import type { InputHTMLAttributes, ReactNode } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export function FormInput({
  label,
  helperText,
  error,
  iconLeft,
  iconRight,
  className = "",
  id,
  ...props
}: FormInputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="space-y-1.5 text-left">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-medium text-foreground"
        >
          {label}
        </label>
      )}

      <div
        className={`flex items-center rounded-lg border bg-background px-3 ${
          error ? "border-red-400" : "border-border-soft"
        } focus-within:border-primary focus-within:ring-1 focus-within:ring-primary`}
      >
        {iconLeft && (
          <span className="mr-2 inline-flex h-8 items-center text-muted">
            {iconLeft}
          </span>
        )}
        <input
          id={inputId}
          className={`flex-1 border-none bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted/70 ${className}`}
          {...props}
        />
        {iconRight && (
          <span className="ml-2 inline-flex h-8 items-center text-muted">
            {iconRight}
          </span>
        )}
      </div>

      {error ? (
        <p className="text-[11px] text-red-500">{error}</p>
      ) : helperText ? (
        <p className="text-[11px] text-muted">{helperText}</p>
      ) : null}
    </div>
  );
}
