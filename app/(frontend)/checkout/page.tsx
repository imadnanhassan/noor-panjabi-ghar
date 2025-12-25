"use client";

import React, { useState } from "react";
import { useLoadingAlert } from "@/hooks/useLoadingAlert";
import { useAppSelector, useAppDispatch } from "@/app/provider/hook";
import { clearCart } from "@/app/provider/features/cart-slice";
import { Button } from "@/components/common/button";
import Navbar from "@/components/ui/home/Navbar";
import Footer from "@/components/ui/home/Footer";
import SearchOverlay from "@/components/ui/home/SearchOverlay";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { loadingComponent, alertComponent } = useLoadingAlert();
  const { items, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    division: "",
    city: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderId, setOrderId] = useState("");

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingRates = {
    Dhaka: { inside: 50, outside: 110 },
    Chittagong: { inside: 60, outside: 120 },
    Khulna: { inside: 55, outside: 115 },
    Rajshahi: { inside: 52, outside: 112 },
    Barisal: { inside: 70, outside: 200 },
    Sylhet: { inside: 58, outside: 118 },
    Rangpur: { inside: 53, outside: 113 },
    Mymensingh: { inside: 51, outside: 111 },
  };

  const calculateShipping = () => {
    if (!formData.division) return 0;
    const isInside =
      formData.city.toLowerCase() === formData.division.toLowerCase();
    return shippingRates[formData.division as keyof typeof shippingRates][
      isInside ? "inside" : "outside"
    ];
  };

  const shipping = calculateShipping();
  const finalTotal = subtotal + shipping;

  const divisions = [
    "Dhaka",
    "Chittagong",
    "Khulna",
    "Rajshahi",
    "Barisal",
    "Sylhet",
    "Rangpur",
    "Mymensingh",
  ];

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
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2070"
            alt="Secure Checkout Background"
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
                  Secure Checkout
                </h1>
                <p className="text-white/60 text-base md:text-xl font-light max-w-2xl mx-auto mt-4 md:mt-6 italic">
                  Complete your purchase with confidence and convenience
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pt-8 md:pt-16">
            {/* Checkout Form */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Shipping Information */}
                <div className="bg-white rounded-3xl border border-[#e5e7eb] p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#111827] mb-6">
                    Shipping Information
                  </h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#6b7280] mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-[#e5e7eb] rounded-2xl focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent bg-[#f8f5f0]"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#6b7280] mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-[#e5e7eb] rounded-2xl focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent bg-[#f8f5f0]"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#6b7280] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-[#e5e7eb] rounded-2xl focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent bg-[#f8f5f0]"
                        placeholder="+880 1XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#6b7280] mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-[#e5e7eb] rounded-2xl focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent bg-[#f8f5f0]"
                        placeholder="House/Road/Area"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#6b7280] mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-[#e5e7eb] rounded-2xl focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent bg-[#f8f5f0]"
                          placeholder="City"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#6b7280] mb-2">
                          Division
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-[#e5e7eb] rounded-2xl focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent bg-[#f8f5f0]"
                          value={formData.division}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              division: e.target.value,
                            })
                          }
                        >
                          <option value="">Select Division</option>
                          {divisions.map((div) => (
                            <option key={div} value={div}>
                              {div}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#6b7280] mb-2">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-[#e5e7eb] rounded-2xl focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent bg-[#f8f5f0]"
                          placeholder="1230"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-3xl border border-[#e5e7eb] p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#111827] mb-6">
                    Payment Method
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 border border-[#e5e7eb] rounded-2xl bg-[#f8f5f0]">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        defaultChecked
                        className="text-[#0f3d3e] focus:ring-[#0f3d3e]"
                      />
                      <label className="ml-3 text-[#111827] font-medium">
                        Cash on Delivery
                      </label>
                    </div>
                    <p className="text-sm text-[#6b7280] ml-7">
                      Pay when your order is delivered to your doorstep
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="sticky top-24"
              >
                <div className="bg-white rounded-3xl border border-[#e5e7eb] p-6 md:p-10">
                  <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#111827] mb-2">
                      Order Summary
                    </h2>
                    <div className="w-12 h-1 md:w-16 bg-[#0f3d3e] rounded-full mx-auto"></div>
                  </div>

                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 py-3 border-b border-[#e5e7eb] last:border-b-0"
                      >
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#e2d7c5] flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-[#111827] truncate">
                            {item.name}
                          </h3>
                          <p className="text-xs text-[#6b7280]">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="text-sm font-bold text-[#0f3d3e]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t-2 border-[#e5e7eb] pt-4">
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-base text-[#6b7280]">
                          Subtotal
                        </span>
                        <span className="text-lg font-medium text-[#111827]">
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-base text-[#6b7280]">
                          Shipping
                        </span>
                        <span className="text-lg font-medium text-[#111827]">
                          ${shipping.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-[#e5e7eb]">
                        <span className="text-xl font-bold text-[#111827]">
                          Total
                        </span>
                        <span className="text-2xl font-bold text-[#0f3d3e]">
                          ${finalTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <Button
                      fullWidth
                      className="bg-[#0f3d3e] hover:bg-[#c9a36a] text-white py-4 text-lg font-bold rounded-2xl"
                      onClick={() => {
                        const id = "ORD-" + Date.now();
                        const order = {
                          id,
                          items,
                          subtotal,
                          shipping,
                          total: finalTotal,
                          status: "Processing",
                          estimatedDelivery: new Date(
                            Date.now() + 7 * 24 * 60 * 60 * 1000
                          )
                            .toISOString()
                            .split("T")[0],
                          date: new Date().toISOString(),
                        };
                        localStorage.setItem(
                          `order_${id}`,
                          JSON.stringify(order)
                        );
                        setOrderId(id);
                        setShowSuccessModal(true);
                        dispatch(clearCart());
                      }}
                    >
                      Place Order
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-2">
                Order Placed Successfully!
              </h3>
              <p className="text-[#6b7280] mb-4">
                Your order has been confirmed and is being processed.
              </p>
              <p className="text-sm text-[#111827] font-medium mb-6">
                Order ID: <span className="text-[#0f3d3e]">{orderId}</span>
              </p>
              <Button
                onClick={() => {
                  setShowSuccessModal(false);
                  router.push("/order-tracking");
                }}
                className="bg-[#0f3d3e] hover:bg-[#c9a36a] text-white px-6 py-3 rounded-2xl"
              >
                Track Your Order
              </Button>
            </motion.div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
