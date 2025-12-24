"use client";

import React from "react";
import { useLoadingAlert } from "@/hooks/useLoadingAlert";

export default function AboutPage() {
  const { loadingComponent, alertComponent } = useLoadingAlert();
  return (
    <>
      {loadingComponent}
      {alertComponent}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          About Noor Panjabi Ghar
        </h1>
        <p className="text-center text-muted mb-6">
          Welcome to Noor Panjabi Ghar, your premier destination for authentic
          Islamic clothing and traditional wear.
        </p>
        <p className="text-muted">
          We specialize in providing high-quality, modest clothing that reflects
          cultural heritage and Islamic values. Our collection includes
          beautiful Panjabi dresses, traditional attire, and accessories for
          men, women, and children.
        </p>
        {/* More content about the store */}
      </div>
    </>
  );
}
