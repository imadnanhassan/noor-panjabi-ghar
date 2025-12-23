"use client";

import React from "react";
import { SectionTitle } from "../../common/section-title";

const GiftIdeas: React.FC = () => {
  return (
    <section className="py-32 bg-emerald-950 text-white px-6">
      <div className="container mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="md:w-1/2">
          <SectionTitle
            eyebrow="The Art of Giving"
            title={
              <>
                Wrapped in <br />
                <span className="text-white/40 italic font-light">
                  Elegance
                </span>
              </>
            }
            description="Our signature charcoal boxes, lined with golden silk, transform your purchase into a legendary gift."
            dark={true}
            align="left"
            className="mb-16"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="p-10 border border-white/10 rounded-[40px] hover:bg-white/5 transition-all group cursor-pointer">
              <h5 className="font-bold text-sm tracking-widest uppercase mb-2">
                Eid Box
              </h5>
              <span className="text-amber-400 text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Select Items
              </span>
            </div>
            <div className="p-10 border border-white/10 rounded-[40px] hover:bg-white/5 transition-all group cursor-pointer">
              <h5 className="font-bold text-sm tracking-widest uppercase mb-2">
                Wedding Kit
              </h5>
              <span className="text-amber-400 text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Custom Request
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="aspect-square rounded-full border border-white/5 p-16 animate-pulse">
            <div className="w-full h-full rounded-full bg-amber-500/5 backdrop-blur-3xl" />
          </div>
          <img
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=1000"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] rounded-[80px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-[2s]"
          />
        </div>
      </div>
    </section>
  );
};

export default GiftIdeas;
