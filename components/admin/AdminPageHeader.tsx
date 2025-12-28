"use client";

import { Bell, Coins, Menu, MoonIcon, Search, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function AdminPageHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [currentDate, setCurrentDate] = useState("");

  // State for new options
  const [currency, setCurrency] = useState("USD");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const options = {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      };
      setCurrentDate(now.toLocaleDateString("en-US", options as any));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header
      className={`h-20 px-4 md:px-8 flex items-center justify-between border-b transition-all duration-700 sticky top-0 z-50 backdrop-blur-xl shrink-0 ${
        theme === "light"
          ? "bg-white/80 border-slate-200"
          : "bg-black/80 border-white/5"
      }`}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-lg transition-all"
        >
          {sidebarOpen ? <Menu size={20} /> : <X size={20} />}
        </button>
        <div className="flex flex-col animate-in fade-in slide-in-from-left-4 duration-700">
          <h1
            className={`text-xl font-serif ${
              theme === "light" ? "text-slate-900" : "text-white"
            }`}
          >
            Luxe<span className="text-[#D4AF37]">Dynamics</span>
          </h1>
          <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-medium">
            {currentDate || "Loading..."} | Admin Panel
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        {/* Currency Selector */}
        <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-1.5 gap-2">
          <Coins size={14} className="text-[#D4AF37]" />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-transparent text-[10px] font-bold outline-none border-none cursor-pointer text-slate-400 focus:text-white"
          >
            <option value="USD">USD ($)</option>
            <option value="BDT">BDT (৳)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 gap-1">
          <button
            onClick={() => setTheme("light")}
            className={`p-1.5 rounded-full transition-all ${
              theme === "light"
                ? "bg-[#D4AF37] text-black"
                : "text-slate-500 hover:text-white"
            }`}
          >
            <Sun size={14} />
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`p-1.5 rounded-full transition-all ${
              theme === "dark"
                ? "bg-[#D4AF37] text-black"
                : "text-slate-500 hover:text-white"
            }`}
          >
            <MoonIcon size={14} />
          </button>
        </div>

        <button className="relative p-2 text-slate-500 hover:text-white transition-all">
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
        </button>

        <div className="h-9 w-9 rounded-full border border-[#D4AF37]/30 p-0.5 overflow-hidden ring-2 ring-white/5">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            className="bg-slate-800 h-full w-full object-cover rounded-full"
            alt="Avatar"
          />
        </div>
      </div>
    </header>
  );
}
