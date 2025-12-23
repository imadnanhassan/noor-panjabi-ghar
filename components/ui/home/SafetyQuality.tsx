"use client";

import React from "react";
import { Sprout, Leaf, Award } from "lucide-react";
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
      desc: "Safe fabrics that are exceptionally gentle on sensitive skin.",
    },
    {
      title: "Eco Production",
      icon: Leaf,
      desc: "Sustainable practices for a future as bright as our heritage.",
    },
    {
      title: "Quality Tested",
      icon: Award,
      desc: "Every garment meets international safety and textile standards.",
    },
  ];

  return (
    <section className="py-32 bg-white px-6 border-y border-emerald-50">
      <div className="container mx-auto">
        <SectionTitle title="Safety & Quality Assurance" className="mb-20" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {qualities.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-8 group-hover:bg-emerald-950 group-hover:text-white transition-all duration-700">
                <s.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-bold text-emerald-950 mb-4">
                {s.title}
              </h4>
              <p className="text-slate-400 text-sm font-light max-w-xs">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyQuality;
