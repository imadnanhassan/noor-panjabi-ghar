"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="h-screen flex flex-col lg:flex-row bg-white">
      {/* Visual Identity Side */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-emerald-950 h-full">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10 }}
          src="https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=1200"
          className="w-full h-full object-cover brightness-[0.4] grayscale-30"
        />
        <div className="absolute inset-0 flex flex-col justify-between p-12">
          <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center font-bold text-emerald-950 shadow-2xl">
            N
          </div>
          <div className="space-y-4">
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.6em]">
              Maison Access
            </span>
            <h2 className="text-5xl font-serif font-bold text-white tracking-tighter leading-none">
              Join the <br />
              Heritage
            </h2>
            <p className="text-white/40 text-base font-light italic max-w-sm">
              Become part of our legacy of artisanal craftsmanship and timeless
              elegance.
            </p>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
            © 2025 Maison Noor
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-[#FDFBF7] relative">
        <Link
          href="/login"
          className="absolute top-6 right-6 text-emerald-950 hover:text-amber-600 transition-colors text-sm font-medium"
        >
          ← Back to Login
        </Link>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-xl space-y-8"
        >
          <div className="text-center lg:text-left space-y-3">
            <h3 className="text-3xl font-serif font-bold text-emerald-950 tracking-tight">
              Request Entry
            </h3>
            <p className="text-slate-400 font-light text-sm italic">
              Join our community of discerning patrons.
            </p>
          </div>

         

      

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-900/40 ml-4">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-8 py-4 bg-white rounded-full border border-emerald-950/5 focus:border-amber-500 outline-none transition-all font-medium text-emerald-950 shadow-sm"
                placeholder="Your full name..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-900/40 ml-4">
                Maison Identity (Email)
              </label>
              <input
                type="email"
                className="w-full px-8 py-4 bg-white rounded-full border border-emerald-950/5 focus:border-amber-500 outline-none transition-all font-medium text-emerald-950 shadow-sm"
                placeholder="Ledger address..."
              />
            </div>

            <div className="space-y-2 relative">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-900/40 ml-4">
                Secure Key (Password)
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-8 py-4 bg-white rounded-full border border-emerald-950/5 focus:border-amber-500 outline-none transition-all font-medium text-emerald-950 shadow-sm"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-6 top-[45px] text-slate-300 hover:text-emerald-950 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="space-y-2 relative">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-900/40 ml-4">
                Confirm Secure Key
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full px-8 py-4 bg-white rounded-full border border-emerald-950/5 focus:border-amber-500 outline-none transition-all font-medium text-emerald-950 shadow-sm"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-6 top-[45px] text-slate-300 hover:text-emerald-950 transition-colors"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            <button
              type="button"
              className="w-full bg-emerald-950 text-white py-6 rounded-full font-black uppercase tracking-[0.5em] text-[11px] shadow-2xl hover:bg-amber-600 transition-all active:scale-95"
            >
              Request Entry
            </button>
          </form>

          <div className="pt-4 border-t border-emerald-950/5 text-center">
            <p className="text-slate-400 text-sm font-light italic mb-4">
              Already part of our heritage?
            </p>
            <Link
              href="/login"
              className="text-emerald-950 font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-3 mx-auto hover:text-amber-600 transition-colors"
            >
              Access the Maison <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
