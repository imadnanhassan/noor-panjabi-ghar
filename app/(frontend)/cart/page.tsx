"use client";

import React from "react";
import { useLoadingAlert } from "@/hooks/useLoadingAlert";

export default function CartPage() {
  const { loadingComponent, alertComponent } = useLoadingAlert();

  return (
    <>
      {loadingComponent}
      {alertComponent}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <p className="text-muted">Your selected items will appear here.</p>
        {/* Cart items and checkout button will go here */}
      </div>
    </>
  );
}
