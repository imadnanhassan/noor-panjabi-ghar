"use client";

import React from "react";
import { Ruler, Leaf } from "lucide-react";
import { SectionTitle } from "../../common/section-title";

const SizeGuideCare: React.FC = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="container mx-auto">
        <SectionTitle
          title="Size Guide & Care Instructions"
          className="mb-20"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-emerald-950 p-20 rounded-[80px] text-white group overflow-hidden relative cursor-pointer shadow-2xl">
            <Ruler className="absolute -top-10 -right-10 w-64 h-64 opacity-5" />
            <h4 className="text-4xl font-serif font-bold mb-6">
              Bespoke Fit Guide
            </h4>
            <p className="text-white/60 mb-10 leading-relaxed font-light italic text-lg max-w-sm">
              Every silhouette deserves precision. Explore our detailed guide to
              finding your perfect fit.
            </p>
            <button className="bg-amber-600 text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-emerald-950 transition-all">
              Size Registry
            </button>
          </div>
          <div className="bg-[#E9F0EE] p-20 rounded-[80px] text-emerald-950 group overflow-hidden relative cursor-pointer shadow-xl">
            <Leaf className="absolute -top-10 -right-10 w-64 h-64 opacity-5" />
            <h4 className="text-4xl font-serif font-bold mb-6">
              Fabric Sanctuary
            </h4>
            <p className="text-emerald-950/60 mb-10 leading-relaxed font-light italic text-lg max-w-sm">
              Preserve the integrity of your Noor garments with our specialized
              textile care tips.
            </p>
            <button className="border-2 border-emerald-950 text-emerald-950 px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-emerald-950 hover:text-white transition-all">
              Care Tips
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeGuideCare;
