"use client";

import { motion } from "framer-motion";
import { Package, Sparkles, Heart } from "lucide-react";
import Link from "next/link";
import { UserSidebar } from "@/components/common/UserSidebar";
import { useState } from "react";

type ProfileTab = "overview" | "orders" | "wishlist" | "settings";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("overview");

  return (
    <>
      {/* Welcome Section */}
      <div className="h-96 flex items-center justify-center bg-linear-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center space-y-8 px-6">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter">
              Welcome Back
            </h1>
            <p className="text-xl md:text-2xl font-light italic text-emerald-100 max-w-2xl mx-auto">
              Your personal sanctuary within the Maison awaits
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-amber-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-32 bg-[#FDFBF7] min-h-screen">
        <div className="container mx-auto px-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <UserSidebar activePage="overview" />
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-10 md:p-20 rounded shadow shadow-emerald-950/5 border border-emerald-50 min-h-[600px]"
              >
                <div className="space-y-16">
                  <div className="space-y-4">
                    <h4 className="text-4xl font-serif font-bold text-emerald-950">
                      Dashboard Overview
                    </h4>
                    <p className="text-slate-400 italic font-light leading-relaxed">
                      Your personal passage within the Maison.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        l: "Acquisitions",
                        v: "08",
                        i: Package,
                        href: "/profile/orders",
                      },
                      {
                        l: "Wishlist",
                        v: "12",
                        i: Heart,
                        href: "/profile/wishlist",
                      },
                      { l: "Points", v: "4.5k", i: Sparkles },
                    ].map((s, i) => (
                      <Link
                        key={i}
                        href={s.href || "#"}
                        className="block p-10 bg-[#FDFBF7] rounded border border-emerald-50 group hover:bg-emerald-950 transition-all duration-700"
                      >
                        <s.i className="w-6 h-6 text-amber-600 mb-6" />
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-950/40 group-hover:text-white/40 mb-2">
                          {s.l}
                        </p>
                        <h5 className="text-4xl font-serif font-bold text-emerald-950 group-hover:text-white">
                          {s.v}
                        </h5>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
