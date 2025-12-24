"use client";

import React from "react";
import { useLoadingAlert } from "@/hooks/useLoadingAlert";

export default function CheckoutPage() {
  const { loading, alert } = useLoadingAlert();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {alert.message && (
        <div
          style={{
            color:
              alert.type === "error"
                ? "red"
                : alert.type === "success"
                ? "green"
                : "blue",
            position: "fixed",
            top: 0,
            width: "100%",
            background: "white",
            zIndex: 1000,
            padding: "10px",
            textAlign: "center",
          }}
        >
          {alert.message}
        </div>
      )}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <p className="text-muted">Complete your purchase securely.</p>
        {/* Checkout form and payment options will go here */}
      </div>
    </>
  );
}
