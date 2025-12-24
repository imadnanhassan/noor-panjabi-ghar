"use client";

import { motion } from "framer-motion";
import { UserSidebar } from "@/components/common/UserSidebar";

export default function OrdersPage() {
  return (
    <>
      {/* Welcome Section */}
      <div className="h-96 flex items-center justify-center bg-linear-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center space-y-8 px-6">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter">
              Acquisition Archives
            </h1>
            <p className="text-xl md:text-2xl font-light italic text-emerald-100 max-w-2xl mx-auto">
              Your complete history of Maison acquisitions.
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
            <UserSidebar activePage="orders" />
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-10 md:p-20 rounded shadow shadow-emerald-950/5 border border-emerald-50"
              >
                <div className="space-y-12">
                  <div className="space-y-4">
                    <h1 className="text-4xl font-serif font-bold text-emerald-950">
                      Acquisition Archives
                    </h1>
                    <p className="text-slate-400 italic font-light leading-relaxed">
                      Your complete history of Maison acquisitions.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex gap-10 items-center pb-10 border-b border-emerald-50 last:border-b-0 last:pb-0"
                      >
                        <div className="w-24 aspect-3/4 bg-emerald-50 rounded-2xl overflow-hidden shadow-lg">
                          <img
                            src={`https://images.unsplash.com/photo-159${i}938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=400`}
                            className="h-full w-full object-cover"
                            alt={`Acquisition ${i}`}
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between items-center">
                            <h5 className="text-xl font-serif font-bold text-emerald-950">
                              Acquisition #MN-982{i}
                            </h5>
                            <span
                              className={`text-[9px] font-black px-3 py-1 rounded-full uppercase ${
                                i === 1
                                  ? "bg-emerald-100 text-emerald-700"
                                  : i === 2
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-slate-100 text-slate-700"
                              }`}
                            >
                              {i === 1
                                ? "Delivered"
                                : i === 2
                                ? "Processing"
                                : "Shipped"}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 font-light italic">
                            Ordered on Oct {12 + i}, 2025 • Total: ৳{" "}
                            {(8500 + i * 500).toLocaleString()}
                          </p>
                          <div className="flex gap-4 mt-4">
                            <button className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600 hover:text-emerald-950 transition-colors">
                              View Details
                            </button>
                            <button className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-950 hover:text-amber-600 transition-colors">
                              Track Order
                            </button>
                          </div>
                        </div>
                      </div>
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
