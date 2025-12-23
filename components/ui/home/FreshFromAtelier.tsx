"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "../../common/section-title";

const FreshFromAtelier: React.FC = () => {
  return (
    <section className="py-32 bg-white px-6 overflow-hidden">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="The Atelier Report"
          title="Just Unveiled"
          description="Fresh concepts directly from our looms. A dialogue between classic modesty and digital age aesthetics."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <motion.div
            whileHover={{ y: -10 }}
            className="relative rounded-[60px] overflow-hidden shadow-2xl aspect-4/5 bg-emerald-50"
          >
            <img
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]"
            />
            <div className="absolute bottom-10 left-10">
              <h4 className="text-white text-3xl font-serif font-bold">
                Concept 01
              </h4>
              <span className="text-amber-400 text-[10px] font-black uppercase tracking-widest">
                Silk Fusion
              </span>
            </div>
          </motion.div>
          <div className="flex flex-col gap-10 lg:mt-24">
            <motion.div
              whileHover={{ y: -10 }}
              className="relative rounded-[60px] overflow-hidden shadow-2xl aspect-square bg-emerald-100"
            >
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]"
              />
              <div className="absolute bottom-8 left-8">
                <h4 className="text-white text-2xl font-serif font-bold">
                  Concept 02
                </h4>
                <span className="text-amber-400 text-[10px] font-black uppercase tracking-widest">
                  Heritage Weave
                </span>
              </div>
            </motion.div>
            <div className="bg-[#FAF7F2] p-12 rounded-[60px] border border-emerald-50">
              <h4 className="text-2xl font-serif font-bold text-emerald-950 mb-4">
                Maison Manifesto
              </h4>
              <p className="text-slate-500 font-light italic leading-relaxed mb-8">
                Every drop is a limited run. We prioritize quality of craft over
                quantity of production.
              </p>
              <button className="text-emerald-950 font-black uppercase tracking-widest text-[10px] flex items-center gap-2 group">
                Read Our Story{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
          <motion.div
            whileHover={{ y: -10 }}
            className="relative rounded-[60px] overflow-hidden shadow-2xl aspect-4/5 bg-emerald-50 lg:mt-48"
          >
            <img
              src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]"
            />
            <div className="absolute bottom-10 left-10">
              <h4 className="text-white text-3xl font-serif font-bold">
                Concept 03
              </h4>
              <span className="text-amber-400 text-[10px] font-black uppercase tracking-widest">
                Bridal Abaya
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreshFromAtelier;
