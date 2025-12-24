"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  title: string;
  sub: string;
  desc: string;
  img: string;
}

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const slides: Slide[] = [
    {
      title: "Elegant Panjabi Collection",
      sub: "Ramadan MMXXV",
      desc: "Modest fashion crafted for the blessed month of Ramadan, blending tradition with contemporary elegance.",
      img: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Islamic Modest Wear",
      sub: "Heritage Series",
      desc: "Traditional Islamic designs that honor our cultural heritage while providing modern comfort and style.",
      img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Family Attire",
      sub: "Complete Collection",
      desc: "Beautiful coordinated Panjabi sets for the whole family, perfect for special occasions and daily wear.",
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=2070",
    },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      7000
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen bg-emerald-950 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8 }}
            src={slides[current].img}
            className="w-full h-full object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-10">
            <div className="max-w-4xl">
              <motion.span
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-amber-400 text-xs font-black uppercase mb-8 block"
              >
                {slides[current].sub}
              </motion.span>
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-7xl md:text-6xl font-serif font-bold text-white leading-none mb-10 tracking-tighter"
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 italic"
              >
                {slides[current].desc}
              </motion.p>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center gap-6"
              >
                <button className="bg-white text-emerald-950 px-12 py-5 cursor-pointer rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 transition-all">
                  Explore Boutique
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[2px] transition-all duration-700 ${
              current === i ? "w-20 bg-amber-500" : "w-8 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
