"use client";

import React from "react";
import { SectionTitle } from "../../common/section-title";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SeasonalCollections: React.FC = () => {
  return (
    <section className="py-40 bg-emerald-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 clip-path-oblique pointer-events-none" />
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
        <div className="relative order-2 md:order-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <motion.div
              initial={{ rotate: -5 }}
              whileInView={{ rotate: 0 }}
              className="relative z-10 aspect-4/5 rounded-[100px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border-8 border-emerald-950 overflow-hidden shadow-2xl z-20 hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <SectionTitle
            align="left"
            dark
            eyebrow="The Seasonal Narrative"
            title={`Eid & Wedding Archives`}
            description="A selection of garments that act as artifacts of celebration, weaving the thread of tradition through the tapestry of time."
            className="mb-12"
          />
          <ul className="space-y-6 mb-16">
            {[
              "Hand-Stitched Silk Hems",
              "Bespoke Zardozi Work",
              "Limited Edition Prints",
            ].map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 text-white/70 font-light italic"
              >
                <div className="w-6 h-1px bg-amber-500" /> {feature}
              </li>
            ))}
          </ul>
          <button className="group flex items-center gap-4 bg-white text-emerald-950 px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all shadow-xl">
            Discover The Archives <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeasonalCollections;
