import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function Textarea({
  label,
  helperText,
  error,
  className = "",
  id,
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <div className="space-y-1.5 text-left">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-xs font-medium text-foreground"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`min-h-[96px] w-full rounded-lg border bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted/70 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            : "border-border-soft focus:border-primary focus:ring-1 focus:ring-primary"
        } ${className}`}
        {...props}
      />
      {error ? (
        <p className="text-[11px] text-red-500">{error}</p>
      ) : helperText ? (
        <p className="text-[11px] text-muted">{helperText}</p>
      ) : null}
    </div>
  );
}
