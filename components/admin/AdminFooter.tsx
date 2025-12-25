"use client";

import { LogOut } from "lucide-react";

export default function AdminFooter() {
  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
      <button className="w-full flex items-center gap-3 p-2.5 text-sm font-semibold text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-gray-800 transition-colors rounded-lg">
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  );
}
