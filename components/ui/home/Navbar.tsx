"use client";

import React, { useState } from "react";
import { ShoppingBag, User, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  isScrolled: boolean;
  onSearchClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onSearchClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md py-3 shadow-sm"
            : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold group-hover:rotate-180 transition-transform duration-700 shadow-lg ${
                  isScrolled
                    ? "bg-emerald-950 text-amber-400"
                    : "bg-white/20 text-white backdrop-blur-sm"
                }`}
              >
                N
              </div>
              <span
                className={`text-2xl font-serif font-black tracking-tighter ${
                  isScrolled ? "text-emerald-950" : "text-white"
                }`}
              >
                NOOR
              </span>
            </Link>
            <div
              className={`hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] ${
                isScrolled ? "text-emerald-950/60" : "text-white/60"
              }`}
            >
              {[
                { name: "Men's Panjabi", slug: "mens-panjabi" },
                { name: "Women's Panjabi", slug: "womens-panjabi" },
                { name: "Kids' Panjabi", slug: "kids-panjabi" },
                { name: "Ramadan Collection", slug: "ramadan" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={`/categories/${item.slug}`}
                  className="hover:text-amber-400 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-amber-600 group-hover:w-full transition-all" />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Search
              className={`w-5 h-5 cursor-pointer ${
                isScrolled ? "text-emerald-950/60" : "text-white/60"
              } hover:text-amber-400`}
              onClick={onSearchClick}
            />
            <Link href={'/login'}>
              <User
                className={`w-5 h-5 cursor-pointer ${
                  isScrolled ? "text-emerald-950/60" : "text-white/60"
                } hover:text-amber-400 hidden sm:block`}
              />
            </Link>
            <div className="relative cursor-pointer group">
              <ShoppingBag
                className={`w-5 h-5 ${
                  isScrolled ? "text-emerald-950/60" : "text-white/60"
                } hover:text-amber-400`}
              />
              <span className="absolute -top-2 -right-2 bg-emerald-950 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
                0
              </span>
            </div>
            <button
              className={`lg:hidden w-5 h-5 ${
                isScrolled ? "text-emerald-950/60" : "text-white/60"
              } hover:text-amber-400`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-80 h-full bg-white/95 backdrop-blur-md z-40 lg:hidden shadow-xl"
          >
            <div className="flex flex-col p-6 pt-20">
              <button
                className="self-end mb-8 text-emerald-950 hover:text-amber-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex flex-col gap-6">
                {[
                  { name: "Men's Panjabi", slug: "mens-panjabi" },
                  { name: "Women's Panjabi", slug: "womens-panjabi" },
                  { name: "Kids' Panjabi", slug: "kids-panjabi" },
                  { name: "Ramadan Collection", slug: "ramadan-collection" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={`/categories/${item.slug}`}
                    className="text-emerald-950 hover:text-amber-400 transition-colors text-lg font-bold uppercase"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
