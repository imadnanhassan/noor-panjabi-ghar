"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { UserSidebar } from "@/components/common/UserSidebar";

export default function WishlistPage() {
  return (
    <>
      {/* Welcome Section */}
      <div className="h-96 flex items-center justify-center bg-linear-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center space-y-8 px-6">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter">
              Your Curation
            </h1>
            <p className="text-xl md:text-2xl font-light italic text-emerald-100 max-w-2xl mx-auto">
              Pieces that have captured your discerning eye.
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
            <UserSidebar activePage="wishlist" />
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-10 md:p-20 rounded shadow shadow-emerald-950/5 border border-emerald-50"
              >
                <div className="space-y-12">
                  <div className="space-y-4">
                    <h1 className="text-4xl font-serif font-bold text-emerald-950">
                      Your Curation
                    </h1>
                    <p className="text-slate-400 italic font-light leading-relaxed">
                      Pieces that have captured your discerning eye.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="group relative bg-[#FDFBF7] rounded overflow-hidden shadow-lg border border-emerald-50"
                      >
                        <div className="aspect-3/4 relative overflow-hidden">
                          <img
                            src={`https://images.unsplash.com/photo-15${i}938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=400`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            alt={`Wishlist item ${i}`}
                          />
                          <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-red-500 hover:text-red-600 transition-colors">
                            <Heart className="w-5 h-5 fill-current" />
                          </button>
                          <div className="absolute inset-0 bg-linear-to-t from-emerald-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="p-6 space-y-3">
                          <h3 className="text-lg font-serif font-bold text-emerald-950">
                            Maison Collection #{100 + i}
                          </h3>
                          <p className="text-sm text-slate-400 font-light">
                            Premium handcrafted piece
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-serif font-bold text-amber-600">
                              ৳ {(15000 + i * 2000).toLocaleString()}
                            </span>
                            <button className="flex items-center gap-2 bg-emerald-950 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-amber-600 transition-colors">
                              <ShoppingBag className="w-4 h-4" />
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center pt-8 border-t border-emerald-50">
                    <p className="text-slate-400 text-sm italic">
                      Continue exploring our collections to expand your
                      curation.
                    </p>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 mt-4 text-emerald-950 hover:text-amber-600 transition-colors font-medium"
                    >
                      Browse Collections
                    </Link>
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
