// app/auth/login/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import Link from "next/link";
import { FormInput } from "@/components/common/form-input";
import { useLoadingAlert } from "@/hooks/useLoadingAlert";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    console.log("login submit", data);
    // TODO: call your auth API / NextAuth signIn
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded border border-border-soft bg-background shadow shadow-black/10 sm:my-10 sm:flex-row">
        {/* Image / brand side */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative hidden w-full items-center justify-center bg-primary/95 px-8 py-10 text-background sm:flex sm:w-1/2"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Noor Panjabi Ghar
            </p>
            <h1 className="text-2xl font-semibold leading-snug">
              Welcome back,
              <br />
              to your Ramadan &amp; Eid wardrobe.
            </h1>
            <p className="text-sm text-background/80">
              Sign in to view your orders, saved sizes and Noor Panjabi
              collections crafted for Jummah, Taraweeh and Eid.
            </p>
          </div>

          {/* subtle pattern / gradient overlay (optional, just color) */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
        </motion.div>

        {/* Form side */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="w-full px-6 py-8 sm:w-1/2 sm:px-8"
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-foreground">
                Login to your account
              </h2>
              <p className="text-xs text-muted">
                Continue to manage your orders &amp; wishlist.
              </p>
            </div>
            <Link
              href="/"
              className="text-xs font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              Back to store
            </Link>
          </div>

          {/* Social login */}
          <div className="space-y-3">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-border-soft bg-background px-4 py-2.5 text-xs font-medium text-foreground shadow-sm hover:border-accent hover:text-primary"
            >
              {/* Google logo placeholder */}
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-background text-[10px]">
                G
              </span>
              Continue with Google
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-border-soft bg-background px-4 py-2.5 text-xs font-medium text-foreground shadow-sm hover:border-accent hover:text-primary"
            >
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-background text-[10px]">
                f
              </span>
              Continue with Facebook
            </button>
          </div>

          <div className="my-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-border-soft" />
            <span className="text-[10px] uppercase tracking-[0.16em] text-muted">
              or login with email
            </span>
            <span className="h-px flex-1 bg-border-soft" />
          </div>

          {/* Email/password form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-xs font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
                className="w-full rounded-lg border border-border-soft bg-background px-3 py-2 text-sm text-foreground outline-none ring-0 placeholder:text-muted/70 focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-foreground"
                >
                  Password
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-[11px] text-muted hover:text-foreground"
                >
                  Forgot?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                {...register("password")}
                className="w-full rounded-lg border border-border-soft bg-background px-3 py-2 text-sm text-foreground outline-none ring-0 placeholder:text-muted/70 focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-background shadow-sm shadow-black/10 transition-colors hover:bg-primary/90"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-[11px] text-muted">
            New to Noor Panjabi Ghar?{" "}
            <Link
              href="/auth/register"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Create an account
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
