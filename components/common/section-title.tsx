import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className = "",
}: SectionTitleProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className={`flex flex-col gap-4 mb-20 ${
      align === "center" ? "items-center text-center" : "items-start text-left"
    } ${className}`}
  >
    {eyebrow && (
      <span
        className={`text-[10px] font-black uppercase tracking-[0.5em] ${
          dark ? "text-amber-500" : "text-amber-600"
        }`}
      >
        {eyebrow}
      </span>
    )}
    <h2
      className={`text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-[0.9] ${
        dark ? "text-white" : "text-emerald-950"
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`max-w-2xl text-lg md:text-xl font-light italic leading-relaxed ${
          dark ? "text-white/50" : "text-slate-500"
        }`}
      >
        {description}
      </p>
    )}
    <div
      className={`h-1px w-20 ${
        dark ? "bg-amber-500/30" : "bg-emerald-950/20"
      }`}
    />
  </motion.div>
);

export { SectionTitle };
