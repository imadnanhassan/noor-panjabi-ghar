"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sprout, Leaf, Award, CheckCircle2 } from "lucide-react";
import { SectionTitle } from "../../common/section-title";

interface QualityItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
}

const SafetyQuality: React.FC = () => {
  const qualities: QualityItem[] = [
    {
      title: "Hypoallergenic",
      icon: Sprout,
      desc: "Safe fabrics that are exceptionally gentle on sensitive skin, ensuring comfort all day long.",
    },
    {
      title: "Eco Production",
      icon: Leaf,
      desc: "Sustainable practices for a future as bright as our heritage, minimizing environmental impact.",
    },
    {
      title: "Quality Tested",
      icon: Award,
      desc: "Every garment meets international safety and textile standards through rigorous testing.",
    },
  ];

  // Background Blobs Animation
  const blobAnimation = {
    y: [0, -30, 0],
    x: [0, 20, 0],
    scale: [1, 1.1, 1],
    rotate: [0, 10, 0],
  };

  const blobTransition = {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50">
      {/* --- Animated Background Shapes --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Green Blob */}
        <motion.div
          animate={blobAnimation}
          transition={blobTransition}
          className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl mix-blend-multiply"
        />
        {/* Bottom Right Amber Blob */}
        <motion.div
          animate={blobAnimation}
          transition={{ ...blobTransition, delay: 1 }}
          className="absolute -bottom-20 -right-20 w-120 h-120 bg-amber-200/30 rounded-full blur-3xl mix-blend-multiply"
        />
        {/* Center Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Safety & Quality Assurance" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {qualities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="h-full relative overflow-hidden bg-white/60 backdrop-blur-xl rounded-4xl p-8 border border-white/50 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-emerald-50/50 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Decorative Corner Shape */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-emerald-100/20 to-amber-100/20 rounded-bl-[4rem] -mr-8 -mt-8 transition-all duration-500 group-hover:scale-150 group-hover:bg-emerald-100/40" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className="relative mb-8">
                    {/* Animated Rings */}
                    <motion.div
                      className="absolute inset-0 bg-emerald-100 rounded-full opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{ scale: [1, 1.4, 1.2] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="relative w-20 h-20 flex items-center justify-center bg-linear-to-br from-white to-emerald-50 rounded-2xl shadow-lg border border-emerald-100/50 group-hover:rotate-6 transition-all duration-500">
                      <item.icon className="w-10 h-10 text-emerald-600 group-hover:text-amber-600 transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 font-light leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Bottom Indicator */}
                  <div className="mt-auto opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 mx-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyQuality;
