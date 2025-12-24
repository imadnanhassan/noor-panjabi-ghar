"use client";

import React from "react";
import { useLoadingAlert } from "@/hooks/useLoadingAlert";

export default function FAQPage() {
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
        <h1 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">
              How do I place an order?
            </h2>
            <p className="text-muted">
              Browse our products, add items to your cart, and proceed to
              checkout.
            </p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">
              What is your return policy?
            </h2>
            <p className="text-muted">
              We accept returns within 30 days of purchase. Items must be in
              original condition.
            </p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">
              Do you offer international shipping?
            </h2>
            <p className="text-muted">
              Yes, we ship worldwide. Shipping costs vary by location.
            </p>
          </div>
          {/* Add more FAQs as needed */}
        </div>
      </div>
    </>
  );
}
