"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/app/provider/hook";
import { toggleSidebar } from "@/app/provider/features/theme-slice";
import AdminFooter from "./AdminFooter";

import { SubMenuItem, MenuItemWithHref } from "./sidebar-types";
import { menuItems } from "./sidebar-data";

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "Store",
    "Inventory",
    "Users",
    "Orders",
    "Settings",
    "Products",
    "Categories",
    "Variants",
    "Customers",
    "Employees",
  ]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const dispatch = useAppDispatch();
  const { sidebar: isOpen, isDarkMode } = useAppSelector(
    (state) => state.theme
  );

  const toggleExpanded = (name: string) => {
    setExpandedItems((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  // Handle window resize for mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && isOpen) {
        dispatch(toggleSidebar());
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, dispatch]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}

      {/* Sidebar */}
      <div
        className={`bg-(--admin-card-bg) border-r-(--admin-border) h-screen flex flex-col shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] fixed lg:static top-0 left-0 z-50 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } w-[260px]`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b-(--admin-border)">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-(--admin-gold) rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LD</span>
            </div>
            <div>
              <h2 className="text-white font-serif text-lg">
                Luxe<span className="text-(--admin-gold)">Dynamics</span>
              </h2>
              <p className="text-(--admin-text-muted) text-[10px] uppercase tracking-wider">
                Admin Panel
              </p>
            </div>
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto admin-sidebar">
          <div className="p-4">
            {menuItems.map((item, index) => {
              if ("href" in item) {
                const isActive = pathname === item.href;
                return (
                  <div key={item.name || index} className="mb-6">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 p-2.5 text-sm font-semibold transition-colors rounded-xl ${
                        isActive
                          ? "bg-(--admin-bg-light) text-white border-r-2 border-(--admin-gold)"
                          : "text-(--admin-text-muted) hover:bg-(--admin-bg-hover) hover:text-white"
                      }`}
                    >
                      <item.icon className="w-5 h-5 shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  </div>
                );
              }

              const isExpanded = expandedItems.includes(item.section!);
              const hasActiveItem = item.items.some((subItem: SubMenuItem) =>
                "href" in subItem
                  ? pathname === subItem.href
                  : subItem.subItems.some((sub) => pathname === sub.href)
              );

              return (
                <div key={item.section} className="mb-6">
                  <button
                    onClick={() => toggleExpanded(item.section!)}
                    className={`w-full flex items-center justify-between py-3 px-7 mb-2 transition-colors rounded-lg ${
                      hasActiveItem
                        ? "text-white"
                        : "text-(--admin-text-muted) hover:text-white hover:bg-(--admin-bg-hover)"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      <h3 className="text-xs font-extrabold uppercase tracking-wider">
                        {item.section}
                      </h3>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>

                  {/* Section Items - Expandable */}
                  <ul
                    className={`space-y-1 transition-all duration-300 ${
                      isExpanded
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {item.items.map((subItem: SubMenuItem) => {
                      if ("subItems" in subItem) {
                        const hasActiveSubItem = subItem.subItems.some(
                          (sub) => pathname === sub.href
                        );
                        const isSubExpanded = expandedItems.includes(
                          subItem.name
                        );

                        return (
                          <li key={subItem.name} className="mb-2">
                            <button
                              onClick={() => toggleExpanded(subItem.name)}
                              className={`w-full flex items-center gap-3 p-2.5 pl-12 text-sm font-semibold transition-colors rounded-lg ${
                                hasActiveSubItem
                                  ? "text-white"
                                  : "text-(--admin-text-muted) hover:bg-(--admin-bg-hover) hover:text-white"
                              }`}
                            >
                              <subItem.icon className="w-4 h-4 shrink-0" />
                              <span>{subItem.name}</span>
                              {isSubExpanded ? (
                                <ChevronDown className="w-3 h-3 ml-auto" />
                              ) : (
                                <ChevronRight className="w-3 h-3 ml-auto" />
                              )}
                            </button>

                            <ul
                              className={`ml-6 mt-1 space-y-1 transition-all duration-200 ${
                                isSubExpanded
                                  ? "max-h-screen opacity-100"
                                  : "max-h-0 opacity-0 overflow-hidden"
                              }`}
                            >
                              {subItem.subItems.map(
                                (nestedItem: MenuItemWithHref) => {
                                  const isNestedActive =
                                    pathname === nestedItem.href;
                                  return (
                                    <li key={nestedItem.name}>
                                      <Link
                                        href={nestedItem.href}
                                        className={`flex items-center gap-3 p-2 pl-8 text-sm transition-colors rounded-lg ${
                                          isNestedActive
                                            ? "bg-(--admin-gold-opacity-10) text-(--admin-gold) border-r-2 border-(--admin-gold)"
                                            : "text-(--admin-text-muted) hover:bg-(--admin-bg-hover) hover:text-white"
                                        }`}
                                      >
                                        <nestedItem.icon className="w-3 h-3 shrink-0" />
                                        <span>{nestedItem.name}</span>
                                      </Link>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </li>
                        );
                      }

                      // Handle regular items
                      const isActive = pathname === subItem.href;
                      return (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.href}
                            className={`flex items-center gap-3 p-2.5 pl-12 text-sm font-semibold transition-colors rounded-lg ${
                              isActive
                                ? "bg-(--admin-bg-light) text-white border-r-2 border-(--admin-gold)"
                                : "text-(--admin-text-muted) hover:bg-(--admin-bg-hover) hover:text-white"
                            }`}
                          >
                            <subItem.icon className="w-4 h-4 shrink-0" />
                            <span>{subItem.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </nav>
        {/* Footer */}
        <AdminFooter />
      </div>
    </>
  );
}
