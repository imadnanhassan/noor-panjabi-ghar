"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight, FacebookIcon, Facebook } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/provider/hook";
import { loginUser } from "@/app/provider/features/user-slice";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(result)) {
      router.push("/");
    }
  };

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
              Enter the Archive
            </h2>
            <p className="text-white/40 text-base font-light italic max-w-sm">
              Authenticating your passage into the world of artisanal modesty.
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
          href="/"
          className="absolute top-6 right-6 text-emerald-950 hover:text-amber-600 transition-colors text-sm font-medium"
        >
          ← Back to Home
        </Link>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-xl space-y-8"
        >
          <div className="text-center lg:text-left space-y-3">
            <h3 className="text-3xl font-serif font-bold text-emerald-950 tracking-tight">
              Welcome Back
            </h3>
            <p className="text-slate-400 font-light text-sm italic">
              Identify yourself to access your personal curation.
            </p>
          </div>

          {/* Social login */}
          <div className="space-y-3">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-950/10 bg-white px-4 py-3 text-sm font-medium text-emerald-950 shadow-sm hover:border-amber-500 hover:bg-amber-50 transition-all"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-950/10 bg-white px-4 py-3 text-sm font-medium text-emerald-950 shadow-sm hover:border-amber-500 hover:bg-amber-50 transition-all"
            >
              <svg className="h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Continue with Facebook
            </button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-emerald-950/10" />
            <span className="text-[11px] uppercase tracking-[0.16em] text-emerald-950/40">
              or login with email
            </span>
            <span className="h-px flex-1 bg-emerald-950/10" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-900/40 ml-4">
                Maison Identity (Email)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-8 py-4 bg-white rounded-full border border-emerald-950/5 focus:border-amber-500 outline-none transition-all font-medium text-emerald-950 shadow-sm"
                placeholder="Ledger address..."
                required
              />
            </div>

            <div className="space-y-2 relative">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-900/40 ml-4">
                Secure Key (Password)
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-8 py-4 bg-white rounded-full border border-emerald-950/5 focus:border-amber-500 outline-none transition-all font-medium text-emerald-950 shadow-sm"
                placeholder="••••••••"
                required
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

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex justify-end">
              <button
                type="button"
                className="text-[10px] font-black uppercase tracking-widest text-amber-600 hover:text-emerald-950 transition-colors"
              >
                Recover Secret Key
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-950 text-white py-6 rounded-full font-black uppercase tracking-[0.5em] text-[11px] shadow-2xl hover:bg-amber-600 transition-all active:scale-95 disabled:opacity-50"
            >
              {loading ? "Accessing..." : "Access the Maison"}
            </button>
          </form>

          <div className="pt-4 border-t border-emerald-950/5 text-center">
            <p className="text-slate-400 text-sm font-light italic mb-4">
              New to our heritage story?
            </p>
            <Link
              href="/register"
              className="text-emerald-950 font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-3 mx-auto hover:text-amber-600 transition-colors"
            >
              Request Entry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
