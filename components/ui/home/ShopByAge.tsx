"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../../common/section-title";

interface AgeItem {
  age: string;
  range: string;
  icon: string;
}

const ShopByAge: React.FC = () => {
  const ageGroups: AgeItem[] = [
    { age: "Infants", range: "0-2Y", icon: "👶" },
    { age: "Toddlers", range: "3-5Y", icon: "🏃" },
    { age: "Kids", range: "6-12Y", icon: "🎒" },
    { age: "Teens", range: "13+Y", icon: "📱" },
  ];

  return (
    <section className="py-32 bg-[#FAF7F2] px-6">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="The Generations"
          title="Legacy of Every Age"
          description="Modesty as an heirloom. From the first cradle to the stride of adulthood, we weave grace into every chapter."
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            {
              age: "Infants",
              range: "0-2Y",
              img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600",
            },
            {
              age: "Toddlers",
              range: "3-5Y",
              img: "https://images.unsplash.com/photo-1503917988258-f197e2f31bd0?auto=format&fit=crop&q=80&w=600",
            },
            {
              age: "Kids",
              range: "6-12Y",
              img: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=600",
            },
            {
              age: "Teens",
              range: "13+Y",
              img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=600",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`relative w-full aspect-2/3 overflow-hidden rounded-t-full shadow-2xl bg-emerald-100 ${
                  i % 2 !== 0 ? "mt-12" : ""
                }`}
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                  alt={item.age}
                />
                <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div className="mt-8 text-center">
                <h4 className="text-2xl font-serif font-bold text-emerald-950 mb-1">
                  {item.age}
                </h4>
                <p className="text-amber-600 text-[10px] font-black tracking-[0.3em] uppercase">
                  {item.range}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByAge;
