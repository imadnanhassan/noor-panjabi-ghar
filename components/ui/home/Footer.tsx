"use client";

import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-emerald-50 py-32 px-6">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
      <div className="col-span-1">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-emerald-950 text-amber-400 rounded-full flex items-center justify-center font-black">
            N
          </div>
          <span className="text-2xl font-serif font-bold tracking-tighter">
            NOOR
          </span>
        </div>
        <p className="text-sm text-slate-500 leading-loose mb-10 italic">
          Curating the world's finest modest attire since 1995. Dhaka • London •
          Dubai.
        </p>
        <div className="flex gap-8">
          <Instagram className="w-5 h-5 hover:text-amber-600 cursor-pointer transition-colors" />
          <Facebook className="w-5 h-5 hover:text-amber-600 cursor-pointer transition-colors" />
          <Twitter className="w-5 h-5 hover:text-amber-600 cursor-pointer transition-colors" />
        </div>
      </div>

      {[
        {
          title: "Maison",
          links: [
            "Men's Archive",
            "Women's Abaya",
            "The Kids Suite",
            "Uniforms",
          ],
        },
        {
          title: "Services",
          links: [
            "Size Guide",
            "Care Registry",
            "Bespoke Request",
            "Store Locator",
          ],
        },
        {
          title: "Legal",
          links: [
            "Privacy Policy",
            "Terms of Sale",
            "Ethics Manifesto",
            "Shipping",
          ],
        },
      ].map((col, i) => (
        <div key={i}>
          <h5 className="font-black uppercase tracking-[0.4em] text-[10px] text-amber-600 mb-10">
            {col.title}
          </h5>
          <ul className="space-y-6">
            {col.links.map((link) => (
              <li
                key={link}
                className="text-sm font-medium text-emerald-950/60 hover:text-amber-600 cursor-pointer transition-colors"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 mt-32 pt-10 border-t border-emerald-50">
      <p>© 2025 NOOR PANJABI GHAR. CRAFTED WITH PRIDE.</p>
      <div className="flex gap-10 mt-8 md:mt-0">
        <span className="cursor-pointer hover:text-emerald-950 transition-colors">
          Global Shipping
        </span>
        <span className="cursor-pointer hover:text-emerald-950 transition-colors">
          Secure Checkout
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
