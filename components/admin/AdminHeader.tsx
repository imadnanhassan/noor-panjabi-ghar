"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";

interface AdminHeaderProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export default function AdminHeader({
  isCollapsed,
  setIsCollapsed,
}: AdminHeaderProps) {
  return (
    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/noor-logo.svg"
            alt="Noor Panjabi Ghar Logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <div>
           
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Admin Dashboard
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {isCollapsed ? (
            <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
}
