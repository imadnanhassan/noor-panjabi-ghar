import React from "react";

export default function OrderTrackingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Order Tracking</h1>
      <p className="text-center text-muted mb-6">
        Track your order status and delivery updates.
      </p>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="orderId" className="block text-sm font-medium">
              Order ID
            </label>
            <input
              type="text"
              id="orderId"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your order ID"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded"
          >
            Track Order
          </button>
        </form>
      </div>
    </div>
  );
}
