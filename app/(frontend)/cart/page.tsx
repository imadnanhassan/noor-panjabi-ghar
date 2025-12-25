"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLoadingAlert } from "@/hooks/useLoadingAlert";
import { useAppSelector, useAppDispatch } from "@/app/provider/hook";
import {
  removeFromCart,
  updateQuantity,
} from "@/app/provider/features/cart-slice";
import { Button } from "@/components/common/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Navbar from "@/components/ui/home/Navbar";
import Footer from "@/components/ui/home/Footer";
import SearchOverlay from "@/components/ui/home/SearchOverlay";

export default function CartPage() {
  const { loadingComponent, alertComponent } = useLoadingAlert();
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state) => state.cart);

  // Ensure cart data is loaded from localStorage
  const [isHydrated, setIsHydrated] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const finalTotal = subtotal;

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

      <main className=" pb-16">
        <>
          {loadingComponent}
          {alertComponent}

          {/* Hero Section */}
          <section className="relative h-[250px] md:h-[400px] bg-[#0f3d3e] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070"
              alt="Shopping Cart Background"
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
                    Your Shopping Cart
                  </h1>
                  <p className="text-white/60 text-base md:text-xl font-light max-w-2xl mx-auto mt-4 md:mt-6 italic">
                    Review your selections and proceed to checkout when you're
                    ready
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <div className="container mx-auto px-6">
            {!isHydrated ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#e2d7c5] rounded-full mb-6">
                  <div className="w-10 h-10 border-4 border-[#0f3d3e] border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="text-[#6b7280] text-xl font-medium">
                  Loading your luxury selections...
                </p>
              </motion.div>
            ) : items.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-32"
              >
                <div className="inline-flex items-center justify-center w-32 h-32 bg-[#e2d7c5] rounded-full mb-10 border-4 border-white">
                  <ShoppingBag className="w-16 h-16 text-[#0f3d3e]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111827] mb-6 leading-tight">
                  Your Cart Awaits
                </h2>
                <p className="text-[#6b7280] text-xl mb-10 max-w-lg mx-auto leading-relaxed">
                  Discover our exquisite collection of premium garments, crafted
                  with unparalleled elegance and sophistication
                </p>
                <Link href="/products">
                  <Button className="bg-[#0f3d3e] hover:bg-[#c9a36a] text-white px-10 py-4 text-xl font-semibold transition-all duration-300 rounded-full">
                    Explore Collection
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pt-8 md:pt-16">
                {/* Cart Items */}
                <div className="lg:col-span-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center justify-between mb-12">
                      <div>
                        <h2 className="text-3xl font-serif font-bold text-[#111827] mb-2">
                          Luxury Selections
                        </h2>
                        <p className="text-[#0f3d3e] text-lg">
                          {items.length} exquisite{" "}
                          {items.length === 1 ? "piece" : "pieces"} in your
                          collection
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        className="text-[#0f3d3e] hover:text-[#c9a36a] hover:bg-[#e2d7c5] px-6 py-3 text-lg font-medium rounded-full border border-[#e5e7eb]"
                      >
                        Clear Collection
                      </Button>
                    </div>

                    {items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="group bg-white rounded-3xl border border-[#e5e7eb] hover:border-[#c9a36a] transition-all duration-500 overflow-hidden backdrop-blur-sm"
                      >
                        <div className="p-4 md:p-8">
                          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                            {/* Product Image */}
                            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-[#e2d7c5] flex-shrink-0 border-4 border-white">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Product Details */}
                            <div className="flex-1 min-w-0 text-center md:text-left">
                              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#111827] mb-2 md:mb-3 group-hover:text-[#c9a36a] transition-colors duration-300 leading-tight">
                                {item.name}
                              </h3>
                              <div className="flex flex-wrap justify-center md:justify-start items-center space-x-2 md:space-x-3 text-sm text-[#6b7280] mb-3 md:mb-4">
                                {item.size && (
                                  <span className="bg-[#e2d7c5] px-3 py-1 md:px-4 md:py-2 rounded-full font-medium">
                                    Size: {item.size}
                                  </span>
                                )}
                                {item.color && (
                                  <span className="bg-[#c9a36a] text-[#111827] px-3 py-1 md:px-4 md:py-2 rounded-full font-medium">
                                    Color: {item.color}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-baseline justify-center md:justify-start space-x-2">
                                <p className="text-2xl md:text-3xl font-bold text-[#0f3d3e]">
                                  ${item.price.toFixed(2)}
                                </p>
                                <span className="text-[#6b7280] text-base md:text-lg">
                                  per piece
                                </span>
                              </div>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center bg-[#e2d7c5] rounded-2xl border border-[#e5e7eb] overflow-hidden">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                                disabled={item.quantity <= 1}
                                className="w-12 h-12 flex items-center justify-center bg-[#0f3d3e] hover:bg-[#c9a36a] text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-2xl"
                              >
                                <Minus className="w-5 h-5" />
                              </button>
                              <div className="px-4 py-2">
                                <input
                                  type="number"
                                  min="1"
                                  max="99"
                                  value={item.quantity}
                                  onChange={(e) => {
                                    const value = parseInt(e.target.value) || 1;
                                    handleQuantityChange(
                                      item.id,
                                      Math.max(1, Math.min(99, value))
                                    );
                                  }}
                                  className="w-16 text-center font-bold text-[#111827] text-lg bg-transparent border-none outline-none focus:ring-0"
                                />
                              </div>
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                                className="w-12 h-12 flex items-center justify-center bg-[#0f3d3e] hover:bg-[#c9a36a] text-white transition-all duration-200 rounded-r-2xl"
                              >
                                <Plus className="w-5 h-5" />
                              </button>
                            </div>

                            {/* Item Total & Remove */}
                            <div className="text-center md:text-right flex-shrink-0">
                              <p className="text-2xl md:text-3xl font-bold text-[#111827] mb-3 md:mb-4">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                              <Button
                                variant="ghost"
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 md:p-3 rounded-full transition-all duration-200"
                              >
                                <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
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
                    <div className="bg-white rounded-3xl border border-[#e5e7eb] p-6 md:p-10 backdrop-blur-sm">
                      <div className="text-center mb-6 md:mb-8">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#111827] mb-2">
                          Order Summary
                        </h2>
                        <div className="w-12 h-1 md:w-16 bg-[#0f3d3e] rounded-full mx-auto"></div>
                      </div>

                      <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                        <div className="flex justify-between items-center py-2 md:py-3 ">
                          <span className="text-[#6b7280] font-medium text-base md:text-lg">
                            Subtotal
                          </span>
                          <span className="font-bold text-[#111827] text-lg md:text-xl">
                            ${subtotal.toFixed(2)}
                          </span>
                        </div>
                        <div className="border-t-2 border-[#e5e7eb] pt-4 md:pt-6">
                          <div className="flex justify-between items-center">
                            <span className="text-xl md:text-2xl font-bold text-[#111827]">
                              Grand Total
                            </span>
                            <span className="text-2xl md:text-3xl font-bold text-[#0f3d3e]">
                              ${finalTotal.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 md:space-y-4 flex flex-col gap-2.5">
                        <Link href="/checkout">
                          <Button
                            fullWidth
                            className="bg-[#0f3d3e] hover:bg-[#c9a36a] text-white py-4 md:py-5 text-lg md:text-xl font-bold transition-all duration-300 rounded-2xl"
                          >
                            Complete Purchase
                          </Button>
                        </Link>
                        <Link href="/products">
                          <Button
                            variant="outline"
                            fullWidth
                            className="border-2 border-[#e5e7eb] text-[#0f3d3e] hover:bg-[#e2d7c5] py-4 md:py-5 text-lg md:text-xl font-semibold rounded-2xl hover:border-[#c9a36a] transition-all duration-300"
                          >
                            Continue Shopping
                          </Button>
                        </Link>
                      </div>

                      {/* Luxury Trust Badges */}
                      <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t-2 border-[#e5e7eb]">
                        <div className="grid grid-cols-2 gap-3 md:gap-4 text-center">
                          <div className="flex flex-col items-center space-y-1 md:space-y-2">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e2d7c5] rounded-full flex items-center justify-center">
                              <span className="text-lg md:text-2xl">🔒</span>
                            </div>
                            <span className="text-xs md:text-sm font-semibold text-[#6b7280]">
                              Secure Checkout
                            </span>
                          </div>
                          <div className="flex flex-col items-center space-y-1 md:space-y-2">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#c9a36a] rounded-full flex items-center justify-center">
                              <span className="text-lg md:text-2xl">🚚</span>
                            </div>
                            <span className="text-xs md:text-sm font-semibold text-[#6b7280]">
                              Fast Delivery
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </>
      </main>

      <Footer />
    </div>
  );
}
