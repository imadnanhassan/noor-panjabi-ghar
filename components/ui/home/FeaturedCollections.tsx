"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "@/components/common/section-title";

interface CollectionItem {
  title: string;
  img: string;
  span?: string;
  slug: string;
}

const FeaturedCollections: React.FC = () => {
  const collections: CollectionItem[] = [
    {
      title: "Men's Atelier",
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
      span: "md:col-span-1",
      slug: "mens-panjabi",
    },
    {
      title: "The Silk Suite",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200",
      span: "md:col-span-2",
      slug: "silk-suite",
    },
    {
      title: "Women's Collection",
      img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=1000",
      span: "md:col-span-1",
      slug: "womens-panjabi",
    },
    {
      title: "Kids' Panjabi",
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000",
      span: "md:col-span-1",
      slug: "kids-panjabi",
    },
    {
      title: "Ramadan Special",
      img: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=1200",
      span: "md:col-span-1",
      slug: "ramadan",
    },
  ];

  return (
    <section className="py-32 bg-white px-6">
      <div className="container mx-auto">
        <SectionTitle
          title="Featured Collections"
          description="Discover our curated collections of traditional Panjabi and Islamic wear, crafted with care for every occasion"
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-[50px] group cursor-pointer h-[500px] ${
                item.span || ""
              }`}
            >
              <img
                src={item.img}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-emerald-950/80 via-transparent to-transparent" />
              <Link href={`/categories/${item.slug}`}>
                <div className="absolute bottom-12 left-12">
                  <h4 className="text-white text-4xl font-serif font-bold mb-4">
                    {item.title}
                  </h4>
                  <button className="text-amber-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    Discover Collection <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
