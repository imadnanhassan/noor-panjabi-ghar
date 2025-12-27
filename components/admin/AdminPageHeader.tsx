"use client";

import { Bell, User, Search, Moon, Sun, ChevronDown } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/app/provider/hook";
import { toggleDarkMode } from "@/app/provider/features/theme-slice";
import { useState, useEffect, useRef } from "react";

export default function AdminPageHeader() {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useAppSelector((state) => state.theme);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="h-20 px-4 md:px-8 flex items-center justify-between border-b-[var(--admin-border)] sticky top-0 z-50 bg-[var(--admin-bg)]/80 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="flex flex-col animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
        <h1 className="text-xl font-serif text-white">
          Luxe<span className="text-[var(--admin-gold)]">Dynamics</span>
        </h1>
        <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--admin-text-muted)] font-medium">
          Sat, 27 Dec 2025 | Admin Panel
        </p>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <div className="relative hidden lg:block">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--admin-text-muted)]"
            size={14}
          />
          <input
            type="text"
            placeholder="Search analytics..."
            className="bg-[var(--admin-bg-light)] border-[var(--admin-border-light)] rounded-full py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:border-[var(--admin-gold)]/50 w-64 transition-all"
          />
        </div>
        <button className="relative p-2 text-[var(--admin-text-muted)] hover:text-white">
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[var(--admin-gold)] rounded-full"></span>
        </button>
        <div className="h-8 w-8 rounded-full border-[var(--admin-gold-opacity-30)] p-0.5">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            className="rounded-full bg-[var(--admin-card-bg)]"
            alt="Avatar"
          />
        </div>
      </div>
    </header>
  );
}
