"use client";

import React, { useState } from "react";
import { useLoadingAlert } from "@/hooks/useLoadingAlert";
import Navbar from "@/components/ui/home/Navbar";
import Footer from "@/components/ui/home/Footer";
import SearchOverlay from "@/components/ui/home/SearchOverlay";
import { AnimatePresence, motion } from "framer-motion";

export default function OrderTrackingPage() {
  const { loadingComponent, alertComponent } = useLoadingAlert();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState<any>(null);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      const storedOrder = localStorage.getItem(`order_${orderId}`);
      if (storedOrder) {
        const order = JSON.parse(storedOrder);
        setOrderStatus(order);
      } else {
        // Mock for demo
        setOrderStatus({
          id: orderId,
          status: "Processing",
          estimatedDelivery: "2025-12-30",
          items: [{ name: "Sample Product", quantity: 2 }],
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#111827] font-sans selection:bg-[#e2d7c5] selection:text-[#0f3d3e] overflow-x-hidden">
      <AnimatePresence>
        {isSearchOpen && (
          <SearchOverlay onClose={() => setIsSearchOpen(false)} />
        )}
      </AnimatePresence>

      <Navbar
        isScrolled={isScrolled}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      <main className="pb-16">
        {loadingComponent}
        {alertComponent}

        {/* Hero Section */}
        <section className="relative h-[250px] md:h-[400px] bg-[#0f3d3e] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070"
            alt="Order Tracking Background"
            className="w-full h-full object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6 md:px-10 mt-16 md:mt-32 mb-6 md:mb-10">
            <div className="max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-7xl font-serif font-bold text-white leading-none tracking-tighter">
                  Order Tracking
                </h1>
                <p className="text-white/60 text-base md:text-xl font-light max-w-2xl mx-auto mt-4 md:mt-6 italic">
                  Track your order status and delivery updates in real-time
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-8 md:py-16">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl border border-[#e5e7eb] p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#111827] mb-6 text-center">
                Track Your Order
              </h2>

              <form onSubmit={handleTrackOrder} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#6b7280] mb-2">
                    Order ID
                  </label>
                  <input
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-2xl focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent bg-[#f8f5f0]"
                    placeholder="Enter your order ID"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0f3d3e] hover:bg-[#c9a36a] text-white py-4 text-lg font-bold rounded-2xl transition-all duration-300"
                >
                  Track Order
                </button>
              </form>

              {orderStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-[#f8f5f0] rounded-2xl border border-[#e5e7eb]"
                >
                  <h3 className="text-xl font-bold text-[#111827] mb-4">
                    Order Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[#6b7280]">Order ID:</span>
                      <span className="font-medium text-[#111827]">
                        {orderStatus.id}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6b7280]">Status:</span>
                      <span className="font-medium text-[#0f3d3e]">
                        {orderStatus.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6b7280]">
                        Estimated Delivery:
                      </span>
                      <span className="font-medium text-[#111827]">
                        {orderStatus.estimatedDelivery}
                      </span>
                    </div>
                    {orderStatus.subtotal && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-[#6b7280]">Subtotal:</span>
                          <span className="font-medium text-[#111827]">
                            ${orderStatus.subtotal.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#6b7280]">Shipping:</span>
                          <span className="font-medium text-[#111827]">
                            ${orderStatus.shipping.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-[#e5e7eb]">
                          <span className="text-[#6b7280] font-medium">
                            Total:
                          </span>
                          <span className="font-bold text-[#0f3d3e]">
                            ${orderStatus.total.toFixed(2)}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#e5e7eb]">
                    <h4 className="font-medium text-[#111827] mb-2">Items:</h4>
                    {orderStatus.items.map((item: any, index: number) => (
                      <div key={index} className="text-sm text-[#6b7280]">
                        {item.name} (Qty: {item.quantity})
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
