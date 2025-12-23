"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { SectionTitle } from "../../common/section-title";

interface Feedback {
  text: string;
  name: string;
  role: string;
}

const TestimonialSlider: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const feedback: Feedback[] = [
    {
      text: "Noor-er Panjabi shudhu poshakk noy, eta ekta oitijjer protik. Eid-er din amader poribare Noor chara cholei na.",
      name: "Rezwana Chowdhury",
      role: "Heritage Patron",
    },
    {
      text: "Finding authentic silk Panjabis for my sons was a challenge until I found Noor. The craftsmanship is world-class.",
      name: "Ahmed Karim",
      role: "Legacy Client",
    },
    {
      text: "The most comfortable and elegant school uniforms I've ever purchased. Truly worth every bit of investment.",
      name: "Dr. Samira Ali",
      role: "Parent",
    },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setActive((p) => (p + 1) % feedback.length),
      6000
    );
    return () => clearInterval(timer);
  }, [feedback.length]);

  return (
    <section className="py-32 bg-white px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="The Noor Circle"
          title="Voices of Elegance"
          className="mb-16"
        />
        <div className="relative h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-10 text-amber-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-2xl md:text-4xl font-serif font-bold text-emerald-950 leading-snug mb-10 italic">
                "{feedback[active].text}"
              </p>
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-600">
                {feedback[active].name}
              </h5>
              <p className="text-[10px] text-slate-400 font-bold tracking-widest mt-2">
                {feedback[active].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-4 mt-12">
          {feedback.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-[3px] transition-all duration-700 ${
                active === i
                  ? "w-16 bg-emerald-950"
                  : "w-4 bg-emerald-100 hover:bg-emerald-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
