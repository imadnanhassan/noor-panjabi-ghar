"use client";

import React from "react";

const Newsletter: React.FC = () => (
  <section className="py-40 bg-white px-6 relative overflow-hidden">
    <div className="container mx-auto  bg-emerald-950 rounded-[10px] p-20 md:p-32 text-center text-white relative shadow-2xl">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none grayscale invert"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')`,
        }}
      />
      <h3 className="text-5xl md:text-6xl font-serif font-bold mb-10 leading-none">
        The Heritage { ''}
        <span className="italic font-light">Circle</span>
      </h3>
      <p className="text-white/50 text-xl font-light mb-16 italic max-w-xl mx-auto">
        Join our private registry for early access to seasonal archives and
        boutique drops.
      </p>
      <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto relative z-10">
        <input
          type="email"
          placeholder="Email Address"
          className="flex-1 px-12 py-4 bg-white/5 border border-white/20 rounded text-white outline-none focus:bg-white/10 transition-all font-medium text-lg placeholder:text-white/20 shadow-inner"
        />
        <button className="bg-amber-600 text-white px-12 py-6 rounded font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-emerald-950 transition-all shadow-2xl">
          Join Registry
        </button>
      </div>
    </div>
  </section>
);

export default Newsletter;
