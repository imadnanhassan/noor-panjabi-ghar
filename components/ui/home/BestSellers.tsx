"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SectionTitle } from "../../common/section-title";

interface Product {
  name: string;
  price: string;
  img: string;
  discount?: string;
  originalPrice?: string;
}

interface ProfessionalProductCardProps {
  name: string;
  price: string;
  img: string;
  discount?: string;
  originalPrice?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ProfessionalProductCard = ({
  name,
  price,
  originalPrice,
  discount,
  img,
}: ProfessionalProductCardProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="group cursor-pointer"
  >
    <div className="relative aspect-3/4 overflow-hidden rounded-[40px] bg-[#FAF7F2] mb-8">
      <img
        src={img}
        className="w-full h-full object-cover grayscale-15% group-hover:grayscale-0 transition-transform duration-[1.5s] group-hover:scale-110"
      />

      {/* Premium Discount Badge */}
      {discount && (
        <div className="absolute top-6 left-6 z-10">
          <span className="bg-amber-500 text-emerald-950 text-[10px] font-black px-4 py-2 rounded-full shadow-lg border border-white/20">
            {discount}
          </span>
        </div>
      )}

      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
        <button className="p-4 bg-white/90 backdrop-blur-md rounded-full shadow-xl hover:bg-emerald-950 hover:text-white transition-all">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
        <button className="w-full bg-emerald-950 text-white py-5 rounded-3xl text-[10px] font-black uppercase tracking-widest shadow-2xl hover:bg-amber-600 transition-all">
          Add to Bag
        </button>
      </div>
    </div>
    <div className="text-center px-4">
      <h4 className="text-xl font-serif font-bold text-emerald-950 mb-2 group-hover:text-amber-600 transition-colors">
        {name}
      </h4>
      <div className="flex items-center justify-center gap-3">
        {originalPrice && (
          <span className="text-slate-300 line-through text-sm font-light italic">
            {originalPrice}
          </span>
        )}
        <p className="text-slate-400 font-bold tracking-widest text-sm italic">
          {price}
        </p>
      </div>
    </div>
  </motion.div>
);

const BestSellers: React.FC = () => {
  const products: Product[] = [
    {
      name: "Emerald Silk Panjabi",
      price: "৳ 4,500",
      img: "https://images.unsplash.com/photo-1621431602131-0775d7330777?auto=format&fit=crop&q=80&w=500",
      discount: "20% OFF",
      originalPrice: "৳ 5,625",
    },
    {
      name: "Royal Ivory Kurta",
      price: "৳ 3,200",
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=500",
    },
    {
      name: "Midnight Lace Abaya",
      price: "৳ 8,900",
      img: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&q=80&w=500",
      discount: "15% OFF",
      originalPrice: "৳ 10,471",
    },
    {
      name: "Tussar Signature",
      price: "৳ 6,800",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=500",
    },
  ];

  return (
    <section className="py-32 bg-white px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-6">
          <SectionTitle
            eyebrow="Curated Favorites"
            title="Bestselling Classics"
            align="left"
          />
          <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-emerald-950/10 hover:border-amber-600 pb-1 transition-all">
            Shop All Favorites
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product, i) => (
            <ProfessionalProductCard key={i} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
