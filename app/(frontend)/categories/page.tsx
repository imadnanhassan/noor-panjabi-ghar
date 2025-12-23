"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import Navbar from "@/components/ui/home/Navbar";
import Footer from "@/components/ui/home/Footer";
import SearchOverlay from "@/components/ui/home/SearchOverlay";
import { SectionTitle } from "@/components/common/section-title";

interface Category {
  name: string;
  slug: string;
  description: string;
  img: string;
  itemCount: string;
}

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  img: string;
  itemCount: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const CategoryCard = ({
  name,
  slug,
  description,
  img,
  itemCount,
}: CategoryCardProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="group cursor-pointer"
  >
    <Link href={`/categories/${slug}`}>
      <div className="relative aspect-4/5 overflow-hidden rounded-[40px] bg-[#FAF7F2] mb-8">
        <img
          src={img}
          className="w-full h-full object-cover grayscale-15% group-hover:grayscale-0 transition-transform duration-[1.5s] group-hover:scale-110"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
          <button className="w-full bg-emerald-950 text-white py-5 rounded-3xl text-[10px] font-black uppercase tracking-widest shadow-2xl hover:bg-amber-600 transition-all">
            Explore Collection
          </button>
        </div>
      </div>
      <div className="text-center px-4">
        <h4 className="text-xl font-serif font-bold text-emerald-950 mb-2 group-hover:text-amber-600 transition-colors">
          {name}
        </h4>
        <p className="text-slate-400 text-sm mb-3">{description}</p>
        <p className="text-slate-500 font-bold tracking-widest text-xs italic">
          {itemCount} items
        </p>
      </div>
    </Link>
  </motion.div>
);

export default function CategoriesPage() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mensCategories: Category[] = [
    {
      name: "Panjabi Collection",
      slug: "panjabi",
      description: "Traditional Panjabi sets for men",
      img: "https://images.unsplash.com/photo-1621431602131-0775d7330777?auto=format&fit=crop&q=80&w=500",
      itemCount: "45",
    },
    {
      name: "Sherwani & Kurtas",
      slug: "sherwani-kurtas",
      description: "Elegant formal wear",
      img: "https://images.unsplash.com/photo-1506629905607-0b5b8b5b1b5b?auto=format&fit=crop&q=80&w=500",
      itemCount: "32",
    },
    {
      name: "Pajama Sets",
      slug: "pajama-sets",
      description: "Comfortable pajama combinations",
      img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=500",
      itemCount: "28",
    },
  ];

  const womensCategories: Category[] = [
    {
      name: "Abaya Collection",
      slug: "abaya",
      description: "Modest and elegant abayas",
      img: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&q=80&w=500",
      itemCount: "67",
    },
    {
      name: "Hijab & Scarves",
      slug: "hijab-scarves",
      description: "Beautiful hijab styles",
      img: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=500",
      itemCount: "89",
    },
    {
      name: "Salwar Kameez",
      slug: "salwar-kameez",
      description: "Traditional salwar kameez sets",
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=500",
      itemCount: "54",
    },
  ];

  const kidsCategories: Category[] = [
    {
      name: "Boys' Panjabi",
      slug: "boys-panjabi",
      description: "Miniature Panjabi for boys",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=500",
      itemCount: "23",
    },
    {
      name: "Girls' Frocks",
      slug: "girls-frocks",
      description: "Beautiful frocks for girls",
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=500",
      itemCount: "41",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A2E2A] font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      <AnimatePresence>
        {isSearchOpen && (
          <SearchOverlay onClose={() => setIsSearchOpen(false)} />
        )}
      </AnimatePresence>

      <Navbar
        isScrolled={isScrolled}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <section className="relative h-96 bg-emerald-950 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070"
            className="w-full h-full object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-10 mt-32 mb-32">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-none tracking-tighter">
                Our Collections
              </h1>
              <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto mt-6 italic">
                Discover our curated categories, each crafted with traditional
                elegance and modern comfort.
              </p>
            </div>
          </div>
        </section>

        {/* Men's Categories */}
        <section className="py-32 bg-white px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-6">
              <SectionTitle
                eyebrow="For Him"
                title="Men's Collections"
                align="left"
              />
              <Link href="/products">
                <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-emerald-950/10 hover:border-amber-600 pb-1 transition-all">
                  View All Men's
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {mensCategories.map((category, i) => (
                <CategoryCard key={i} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Women's Categories */}
        <section className="py-32 bg-[#FAF7F2] px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-6">
              <SectionTitle
                eyebrow="For Her"
                title="Women's Collections"
                align="left"
              />
              <Link href="/products">
                <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-emerald-950/10 hover:border-amber-600 pb-1 transition-all">
                  View All Women's
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
              {womensCategories.map((category, i) => (
                <CategoryCard key={i} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Kids' Categories */}
        <section className="py-32 bg-white px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-6">
              <SectionTitle
                eyebrow="For Little Ones"
                title="Children's Collections"
                align="left"
              />
              <Link href="/products">
                <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-emerald-950/10 hover:border-amber-600 pb-1 transition-all">
                  View All Kids'
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {kidsCategories.map((category, i) => (
                <CategoryCard key={i} {...category} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
