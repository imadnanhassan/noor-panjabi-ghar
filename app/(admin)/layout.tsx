"use client";

import { Menu } from "lucide-react";
import Sidebar from "@/components/admin/Sidebar";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminPageFooter from "@/components/admin/AdminPageFooter";
import { useAppSelector, useAppDispatch } from "@/app/provider/hook";
import { toggleSidebar } from "@/app/provider/features/theme-slice";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Authentication temporarily removed for design completion
  // Will be implemented later with API

  const dispatch = useAppDispatch();
  const { sidebar: isSidebarOpen } = useAppSelector((state) => state.theme);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Admin Panel</h1>
          <div className="w-10"></div> {/* Spacer for centering */}
        </header>

        {/* Page Header - Desktop */}
        <div className="hidden lg:block">
          <AdminPageHeader />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">{children}</main>

        {/* Page Footer */}
        <AdminPageFooter />
      </div>
    </div>
  );
}
