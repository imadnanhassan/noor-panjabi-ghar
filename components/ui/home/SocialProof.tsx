"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, User } from "lucide-react";
import { SectionTitle } from "../../common/section-title";

const SocialProof: React.FC = () => {
  return (
    <section className="py-32 bg-[#FAF7F2] px-6">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="#NOORLEGACY ON SOCIAL"
          title="Worn by the Family"
          className="mb-20"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className="aspect-square rounded-[60px] overflow-hidden shadow-xl bg-white relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white w-10 h-10" />
              </div>
              <div className="w-full h-full flex items-center justify-center grayscale opacity-10 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                <User className="w-20 h-20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
