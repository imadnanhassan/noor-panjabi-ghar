"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/category/panjabi", label: "Panjabi" },
  { href: "/category/tupi", label: "Tupi" },
  { href: "/category/gift-box", label: "Gift Box" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="sticky top-0 z-40 border-b border-border-soft/60 bg-background/90 shadow-sm shadow-black/5 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* Logo + brand */}
          <Link
            href="/"
            className="flex items-center gap-3 rounded-full px-2 py-1.5 hover:bg-card/70 transition-colors"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-semibold tracking-[0.08em] text-background shadow-sm">
              NP
            </span>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-semibold tracking-[0.16em] uppercase text-foreground">
                Noor Panjabi Ghar
              </span>
              <span className="text-[11px] text-muted">
                Ramadan • Eid • Jummah wear
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-xs font-medium uppercase tracking-[0.16em]"
                >
                  <span
                    className={`transition-colors ${
                      active
                        ? "text-primary"
                        : "text-muted group-hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute -bottom-2 left-0 h-[1.5px] w-0 rounded-full bg-accent transition-all duration-300 group-hover:w-full ${
                      active ? "w-4" : ""
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/login"
              className="hidden rounded-full border border-border-soft/80 bg-background px-3 py-1.5 text-[11px] font-medium text-muted shadow-sm shadow-black/5 transition-colors hover:border-accent hover:text-foreground md:inline-flex"
            >
              Login
            </Link>

            {/* Cart button */}
            <Link
              href="/cart"
              className="relative inline-flex items-center gap-1.5 rounded-full border border-border-soft/80 bg-background px-3 py-1.5 text-[11px] font-medium text-foreground shadow-sm shadow-black/5 hover:border-accent hover:text-primary"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
              <span className="ml-0.5 rounded-full bg-primary px-1.5 text-[10px] font-semibold text-background">
                0
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded-full border border-border-soft/80 bg-background p-2 text-foreground shadow-sm shadow-black/5 hover:border-accent md:hidden"
              onClick={() => setOpen((p) => !p)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed left-0 top-0 z-50 flex h-full w-72 max-w-[80vw] flex-col bg-background shadow-xl shadow-black/25 md:hidden"
            >
              <div className="flex items-center justify-between border-b border-border-soft/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold tracking-[0.08em] text-background">
                    NP
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold tracking-[0.16em] uppercase text-foreground">
                      Noor Panjabi Ghar
                    </span>
                    <span className="text-[11px] text-muted">
                      Islamic wear &amp; gifts
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-1.5 hover:bg-card"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-4">
                <div className="space-y-1.5">
                  {navLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium tracking-wide transition-colors ${
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-muted hover:bg-card hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
