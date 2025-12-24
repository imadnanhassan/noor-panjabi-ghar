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
  const shipping = items.reduce(
    (sum, item) => sum + (item.shipping || 0) * item.quantity,
    0
  );
  const finalTotal = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A2E2A] font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
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
          <section className="relative h-[400px] bg-emerald-950 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070"
              alt="Shopping Cart Background"
              className="w-full h-full object-cover brightness-[0.45]"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center px-10 mt-32 mb-10">
              <div className="max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-none tracking-tighter">
                    Your Shopping Cart
                  </h1>
                  <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto mt-6 italic">
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
                <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-emerald-100 to-amber-100 rounded-full mb-6 shadow-2xl">
                  <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="text-emerald-800 text-xl font-medium">
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
                <div className="inline-flex items-center justify-center w-32 h-32 bg-linear-to-br from-emerald-50 via-amber-50 to-emerald-100 rounded-full mb-10 shadow-2xl border-4 border-white">
                  <ShoppingBag className="w-16 h-16 text-emerald-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-6 leading-tight">
                  Your Cart Awaits
                </h2>
                <p className="text-emerald-700 text-xl mb-10 max-w-lg mx-auto leading-relaxed">
                  Discover our exquisite collection of premium garments, crafted
                  with unparalleled elegance and sophistication
                </p>
                <Link href="/products">
                  <Button className="bg-linear-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white px-10 py-4 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-full">
                    Explore Collection
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 pt-16">
                {/* Cart Items */}
                <div className="xl:col-span-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center justify-between mb-12">
                      <div>
                        <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-2">
                          Luxury Selections
                        </h2>
                        <p className="text-emerald-600 text-lg">
                          {items.length} exquisite{" "}
                          {items.length === 1 ? "piece" : "pieces"} in your
                          collection
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 px-6 py-3 text-lg font-medium rounded-full border border-emerald-200"
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
                        className="group bg-linear-to-br from-white via-emerald-50/30 to-amber-50/20 rounded-3xl shadow-lg border border-emerald-100/50 hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 overflow-hidden backdrop-blur-sm"
                      >
                        <div className="p-8">
                          <div className="flex items-center space-x-8">
                            {/* Product Image */}
                            <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-linear-to-br from-emerald-100 via-amber-50 to-emerald-50 flex-shrink-0 shadow-xl border-4 border-white">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Product Details */}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-3 group-hover:text-amber-600 transition-colors duration-300 leading-tight">
                                {item.name}
                              </h3>
                              <div className="flex items-center space-x-3 text-sm text-emerald-700 mb-4">
                                {item.size && (
                                  <span className="bg-linear-to-r from-emerald-100 to-emerald-200 px-4 py-2 rounded-full font-medium shadow-sm">
                                    Size: {item.size}
                                  </span>
                                )}
                                {item.color && (
                                  <span className="bg-linear-to-r from-amber-100 to-amber-200 px-4 py-2 rounded-full font-medium shadow-sm">
                                    Color: {item.color}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-baseline space-x-2">
                                <p className="text-3xl font-bold text-emerald-600">
                                  ${item.price.toFixed(2)}
                                </p>
                                <span className="text-emerald-500 text-lg">
                                  per piece
                                </span>
                              </div>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center bg-white rounded-2xl shadow-lg border-2 border-emerald-100 overflow-hidden">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                                disabled={item.quantity <= 1}
                                className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 text-red-600 hover:text-red-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border-r border-emerald-100"
                              >
                                <Minus className="w-6 h-6" />
                              </button>
                              <div className="px-6 py-3 bg-gradient-to-r from-emerald-50 to-amber-50">
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
                                  className="w-16 text-center font-bold text-emerald-950 text-xl bg-transparent border-none outline-none focus:ring-0"
                                />
                              </div>
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                                className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 text-green-600 hover:text-green-700 transition-all duration-200 border-l border-emerald-100"
                              >
                                <Plus className="w-6 h-6" />
                              </button>
                            </div>

                            {/* Item Total & Remove */}
                            <div className="text-right flex-shrink-0">
                              <p className="text-3xl font-bold text-emerald-950 mb-4">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                              <Button
                                variant="ghost"
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-3 rounded-full transition-all duration-200 shadow-sm"
                              >
                                <Trash2 className="w-5 h-5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Order Summary */}
                <div className="xl:col-span-4">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="sticky top-24"
                  >
                    <div className="bg-linear-to-br from-white via-emerald-50/50 to-amber-50/30 rounded-3xl shadow-2xl border border-emerald-100/60 p-10 backdrop-blur-sm">
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-2">
                          Order Summary
                        </h2>
                        <div className="w-16 h-1 bg-linear-to-r from-emerald-400 to-amber-400 rounded-full mx-auto"></div>
                      </div>

                      <div className="space-y-6 mb-8">
                        <div className="flex justify-between items-center py-3 border-b border-emerald-100">
                          <span className="text-emerald-700 font-medium text-lg">
                            Subtotal
                          </span>
                          <span className="font-bold text-emerald-950 text-xl">
                            ${subtotal.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-emerald-100">
                          <span className="text-emerald-700 font-medium text-lg">
                            Premium Shipping
                          </span>
                          <span className="font-bold text-emerald-950 text-xl">
                            ${shipping.toFixed(2)}
                          </span>
                        </div>
                        <div className="border-t-2 border-emerald-200 pt-6">
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-emerald-950">
                              Grand Total
                            </span>
                            <span className="text-3xl font-bold text-emerald-600">
                              ${finalTotal.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Link href="/checkout">
                          <Button
                            fullWidth
                            className="bg-linear-to-r from-emerald-600 via-emerald-500 to-amber-500 hover:from-emerald-700 hover:via-emerald-600 hover:to-amber-600 text-white py-5 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl"
                          >
                            Complete Purchase
                          </Button>
                        </Link>
                        <Link href="/products">
                          <Button
                            variant="outline"
                            fullWidth
                            className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 py-5 text-xl font-semibold rounded-2xl hover:border-emerald-400 transition-all duration-300"
                          >
                            Continue Shopping
                          </Button>
                        </Link>
                      </div>

                      {/* Luxury Trust Badges */}
                      <div className="mt-10 pt-8 border-t-2 border-emerald-200">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 bg-linear-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-2xl">🔒</span>
                            </div>
                            <span className="text-sm font-semibold text-emerald-700">
                              Secure Checkout
                            </span>
                          </div>
                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 bg-linear-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-2xl">🚚</span>
                            </div>
                            <span className="text-sm font-semibold text-emerald-700">
                              Premium Shipping
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
