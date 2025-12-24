"use client";

import Link from "next/link";
import { History, Package, Heart, Settings, LogOut } from "lucide-react";

interface UserSidebarProps {
  activePage: "overview" | "orders" | "wishlist" | "settings";
}

export function UserSidebar({ activePage }: UserSidebarProps) {
  return (
    <div className="lg:col-span-3 space-y-12">
      <div className="flex flex-col items-center lg:items-start space-y-6">
        <div className="w-24 h-24 rounded bg-emerald-950 flex items-center justify-center text-amber-500 font-serif font-bold text-3xl shadow-2xl">
          FK
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-2xl font-serif font-bold text-emerald-950">
            Faisal Karim
          </h3>
          <p className="text-amber-600 text-[10px] font-black uppercase tracking-[0.3em] mt-1">
            Patron since 2021
          </p>
        </div>
      </div>
      <nav className="flex flex-col gap-2">
        {[
          {
            id: "overview",
            label: "Overview",
            icon: History,
            href: "/profile",
          },
          {
            id: "orders",
            label: "Acquisitions",
            icon: Package,
            href: "/profile/orders",
          },
          {
            id: "wishlist",
            label: "Curation",
            icon: Heart,
            href: "/profile/wishlist",
          },
          {
            id: "settings",
            label: "Settings",
            icon: Settings,
            href: "/profile/settings",
          },
        ].map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`flex items-center gap-6 px-8 py-5 rounded transition-all duration-500 group ${
              activePage === item.id
                ? "bg-emerald-950 text-white shadow-xl"
                : "hover:bg-emerald-50 text-emerald-950/40"
            }`}
          >
            <item.icon
              className={`w-5 h-5 ${
                activePage === item.id
                  ? "text-amber-500"
                  : "group-hover:text-emerald-950"
              }`}
            />
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">
              {item.label}
            </span>
          </Link>
        ))}
        <Link
          href="/"
          className="flex items-center gap-6 px-8 py-5 rounded text-red-400 hover:bg-red-50 transition-all mt-10"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-[11px] font-black uppercase tracking-[0.4em]">
            Sign Out
          </span>
        </Link>
      </nav>
    </div>
  );
}
