"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Star, Minus, Plus } from "lucide-react";
import { SectionTitle } from "../../../../components/common/section-title";
import Navbar from "../../../../components/ui/home/Navbar";
import Footer from "../../../../components/ui/home/Footer";
import SearchOverlay from "../../../../components/ui/home/SearchOverlay";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

// Mock product data - in real app, fetch from API based on slug
const getProductBySlug = (slug: string) => {
  const products = [
    {
      id: 1,
      slug: "emerald-silk-panjabi",
      name: "Emerald Silk Panjabi",
      price: "৳ 4,500",
      originalPrice: "৳ 5,625",
      discount: "20% OFF",
      images: [
        "https://images.unsplash.com/photo-1621431602131-0775d7330777?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&q=80&w=800",
      ],
      description:
        "Crafted from the finest emerald silk, this panjabi embodies elegance and tradition. Perfect for special occasions and festive gatherings.",
      rating: 4.8,
      reviews: 124,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Emerald Green", "Royal Blue"],
      material: "Premium Silk",
      care: "Dry clean only",
    },
    // Add more products as needed
  ];
  return products.find((p) => p.slug === slug) || products[0];
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const product = getProductBySlug(params.slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % product.images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [product.images.length]);

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

      {/* Hero Section */}
      <section className="relative h-96 bg-emerald-950 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070"
          className="w-full h-full object-cover brightness-[0.45]"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-none tracking-tighter">
              {product.name}
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto mt-4 italic">
              Discover the elegance and craftsmanship in every detail
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="space-y-4"
            >
              <div className="aspect-square overflow-hidden rounded-3xl bg-[#FAF7F2] relative group">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(
                      (prev) =>
                        (prev - 1 + product.images.length) %
                        product.images.length
                    );
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                >
                  <svg
                    className="w-6 h-6 text-emerald-950"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(
                      (prev) => (prev + 1) % product.images.length
                    );
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                >
                  <svg
                    className="w-6 h-6 text-emerald-950"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex gap-4 overflow-x-auto">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? "border-amber-600 shadow-lg scale-110"
                        : "border-gray-200 hover:border-amber-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl font-serif font-bold text-emerald-950 mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "text-amber-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  {product.originalPrice && (
                    <span className="text-slate-300 line-through text-xl font-light">
                      {product.originalPrice}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-emerald-950">
                    {product.price}
                  </span>
                  {product.discount && (
                    <span className="bg-amber-500 text-emerald-950 text-sm font-black px-3 py-1 rounded-full">
                      {product.discount}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div className="bg-[#FAF7F2] p-6 rounded-[30px]">
                <h3 className="text-lg font-serif font-bold text-emerald-950 mb-4">
                  Select Size
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                        selectedSize === size
                          ? "bg-amber-500 text-emerald-950 shadow-lg transform scale-105"
                          : "bg-white border-2 border-emerald-200 text-emerald-800 hover:border-amber-400 hover:bg-amber-50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="bg-[#FAF7F2] p-6 rounded-[30px]">
                <h3 className="text-lg font-serif font-bold text-emerald-950 mb-4">
                  Choose Color
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                        selectedColor === color
                          ? "bg-emerald-600 text-white shadow-lg transform scale-105"
                          : "bg-white border-2 border-emerald-200 text-emerald-800 hover:border-emerald-400 hover:bg-emerald-50"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="bg-[#FAF7F2] p-6 rounded-[30px]">
                <h3 className="text-lg font-serif font-bold text-emerald-950 mb-4">
                  Quantity
                </h3>
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 bg-white border-2 border-emerald-200 rounded-full hover:border-amber-400 hover:bg-amber-50 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Minus className="w-5 h-5 text-emerald-800 group-hover:text-amber-600" />
                  </button>
                  <div className="bg-white border-2 border-emerald-200 rounded-2xl px-6 py-3 min-w-[80px] text-center">
                    <span className="text-xl font-bold text-emerald-950">
                      {quantity}
                    </span>
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 bg-white border-2 border-emerald-200 rounded-full hover:border-amber-400 hover:bg-amber-50 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Plus className="w-5 h-5 text-emerald-800 group-hover:text-amber-600" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button className="flex-1 bg-emerald-950 text-white py-4 rounded-2xl text-lg font-bold hover:bg-amber-600 transition-all">
                  Add to Bag
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-4 border-2 rounded-2xl ${
                    isWishlisted
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isWishlisted ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="border-t pt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-emerald-950">
                    Material:
                  </span>
                  <span className="text-gray-700">{product.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-emerald-950">Care:</span>
                  <span className="text-gray-700">{product.care}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16 bg-white px-6">
        <div className="container mx-auto">
          <div className="w-full mx-auto">
            {/* Tab Navigation */}
            <div className="flex border-b border-emerald-200 mb-8">
              {[
                { id: "description", label: "Description" },
                { id: "reviews", label: "Reviews" },
                { id: "specifications", label: "Specifications" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 font-serif font-bold text-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-emerald-950 border-b-2 border-amber-500 bg-amber-50"
                      : "text-emerald-700 hover:text-emerald-950 hover:bg-emerald-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === "description" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="prose prose-lg max-w-none"
                >
                  <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-6">
                    Product Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This exquisite piece combines traditional craftsmanship with
                    modern elegance. Each garment is meticulously crafted using
                    the finest materials, ensuring both comfort and durability.
                    The intricate details and superior quality make this a
                    timeless addition to any wardrobe.
                  </p>
                  <div className="bg-[#FAF7F2] p-6 rounded-2xl">
                    <h4 className="text-xl font-serif font-bold text-emerald-950 mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                        Premium quality materials
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                        Handcrafted with attention to detail
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                        Comfortable and durable design
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                        Perfect for special occasions
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === "reviews" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-6">
                    Customer Reviews
                  </h3>
                  <div className="space-y-6">
                    {/* Sample Reviews */}
                    {[
                      {
                        name: "Sarah Ahmed",
                        rating: 5,
                        date: "2 weeks ago",
                        review:
                          "Absolutely stunning quality! The fabric is luxurious and the fit is perfect. Highly recommend for special occasions.",
                      },
                      {
                        name: "Mohammed Rahman",
                        rating: 5,
                        date: "1 month ago",
                        review:
                          "Excellent craftsmanship and attention to detail. The color is exactly as shown and the material feels premium.",
                      },
                      {
                        name: "Aisha Khan",
                        rating: 4,
                        date: "6 weeks ago",
                        review:
                          "Beautiful design and great quality. The only reason for 4 stars is that it took a bit longer to arrive, but it was worth the wait!",
                      },
                    ].map((review, index) => (
                      <div key={index} className="bg-[#FAF7F2] p-6 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                              <span className="text-emerald-950 font-bold text-sm">
                                {review.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-950">
                                {review.name}
                              </h4>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating
                                          ? "text-amber-400 fill-current"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-600">
                                  {review.date}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {review.review}
                        </p>
                      </div>
                    ))}

                    {/* Review Form */}
                    <div className="bg-gradient-to-br from-emerald-50 to-amber-50 p-8 rounded-2xl border border-emerald-200 mt-8">
                      <h4 className="text-xl font-serif font-bold text-emerald-950 mb-6">
                        Write a Review
                      </h4>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-bold text-emerald-950 mb-2">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              className="w-full p-4 rounded-2xl border border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-emerald-950 mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              className="w-full p-4 rounded-2xl border border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-emerald-950 mb-2">
                            Rating *
                          </label>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                className="text-2xl text-gray-300 hover:text-amber-400 transition-colors"
                              >
                                ★
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-emerald-950 mb-2">
                            Your Review *
                          </label>
                          <textarea
                            rows={4}
                            className="w-full p-4 rounded-2xl border border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                            placeholder="Share your thoughts about this product..."
                            required
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-emerald-950 text-white py-4 rounded-2xl font-bold text-lg hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Submit Review
                        </button>
                      </form>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "specifications" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-6">
                    Product Specifications
                  </h3>
                  <div className="bg-[#FAF7F2] rounded-2xl overflow-hidden">
                    <div className="divide-y divide-emerald-200">
                      {[
                        { label: "Material", value: product.material },
                        { label: "Care Instructions", value: product.care },
                        {
                          label: "Available Sizes",
                          value: product.sizes.join(", "),
                        },
                        {
                          label: "Available Colors",
                          value: product.colors.join(", "),
                        },
                        { label: "Origin", value: "Bangladesh" },
                        {
                          label: "Warranty",
                          value: "1 Year Manufacturing Defect",
                        },
                        { label: "Return Policy", value: "30 Days Return" },
                        {
                          label: "Shipping",
                          value: "Free shipping on orders over ৳ 5,000",
                        },
                      ].map((spec, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-6"
                        >
                          <span className="font-semibold text-emerald-950">
                            {spec.label}
                          </span>
                          <span className="text-gray-700">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-[#FAF7F2] px-6">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="You Might Also Like"
            title="Related Products"
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                name: "Royal Ivory Kurta",
                slug: "royal-ivory-kurta",
                price: "৳ 3,200",
                img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=500",
                discount: "15% OFF",
                originalPrice: "৳ 3,776",
              },
              {
                name: "Midnight Lace Abaya",
                slug: "midnight-lace-abaya",
                price: "৳ 8,900",
                img: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&q=80&w=500",
              },
              {
                name: "Tussar Signature",
                slug: "tussar-signature",
                price: "৳ 6,800",
                img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=500",
                discount: "10% OFF",
                originalPrice: "৳ 7,556",
              },
              {
                name: "Cotton Comfort Pajama",
                slug: "cotton-comfort-pajama",
                price: "৳ 2,100",
                img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=500",
              },
            ].map((relatedProduct, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group cursor-pointer"
                onClick={() =>
                  (window.location.href = `/product/${relatedProduct.slug}`)
                }
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[40px] bg-[#FAF7F2] mb-8">
                  <img
                    src={relatedProduct.img}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-transform duration-[1.5s] group-hover:scale-110"
                  />

                  {/* Premium Discount Badge */}
                  {relatedProduct.discount && (
                    <div className="absolute top-6 left-6 z-10">
                      <span className="bg-amber-500 text-emerald-950 text-[10px] font-black px-4 py-2 rounded-full shadow-lg border border-white/20">
                        {relatedProduct.discount}
                      </span>
                    </div>
                  )}

                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                    <button className="p-4 bg-white/90 backdrop-blur-md rounded-full shadow-xl hover:bg-emerald-950 hover:text-white transition-all">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                    <button className="w-full bg-emerald-950 text-white py-5 rounded-3xl text-[10px] font-black uppercase tracking-widest shadow-2xl hover:bg-amber-600 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="text-center px-4">
                  <h4 className="text-xl font-serif font-bold text-emerald-950 mb-2 group-hover:text-amber-600 transition-colors">
                    {relatedProduct.name}
                  </h4>
                  <div className="flex items-center justify-center gap-3">
                    {relatedProduct.originalPrice && (
                      <span className="text-slate-300 line-through text-sm font-light italic">
                        {relatedProduct.originalPrice}
                      </span>
                    )}
                    <p className="text-slate-400 font-bold tracking-widest text-sm italic">
                      {relatedProduct.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Just For You Section */}
      <section className="py-16 bg-white px-6">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="Personalized For You"
            title="Just For You"
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                name: "Elegant Hijab Set",
                slug: "elegant-hijab-set",
                price: "৳ 1,800",
                img: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=500",
                discount: "25% OFF",
                originalPrice: "৳ 2,400",
              },
              {
                name: "Salwar Kameez Ensemble",
                slug: "salwar-kameez-ensemble",
                price: "৳ 5,400",
                img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=500",
              },
              {
                name: "Boys' Mini Panjabi",
                slug: "boys-mini-panjabi",
                price: "৳ 2,800",
                img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=500",
                discount: "20% OFF",
                originalPrice: "৳ 3,500",
              },
              {
                name: "Golden Thread Sherwani",
                slug: "golden-thread-sherwani",
                price: "৳ 12,500",
                img: "https://images.unsplash.com/photo-1506629905607-0b5b8b5b1b5b?auto=format&fit=crop&q=80&w=500",
              },
            ].map((justForYouProduct, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group cursor-pointer"
                onClick={() =>
                  (window.location.href = `/product/${justForYouProduct.slug}`)
                }
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[40px] bg-[#FAF7F2] mb-8">
                  <img
                    src={justForYouProduct.img}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-transform duration-[1.5s] group-hover:scale-110"
                  />

                  {/* Premium Discount Badge */}
                  {justForYouProduct.discount && (
                    <div className="absolute top-6 left-6 z-10">
                      <span className="bg-amber-500 text-emerald-950 text-[10px] font-black px-4 py-2 rounded-full shadow-lg border border-white/20">
                        {justForYouProduct.discount}
                      </span>
                    </div>
                  )}

                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                    <button className="p-4 bg-white/90 backdrop-blur-md rounded-full shadow-xl hover:bg-emerald-950 hover:text-white transition-all">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                    <button className="w-full bg-emerald-950 text-white py-5 rounded-3xl text-[10px] font-black uppercase tracking-widest shadow-2xl hover:bg-amber-600 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="text-center px-4">
                  <h4 className="text-xl font-serif font-bold text-emerald-950 mb-2 group-hover:text-amber-600 transition-colors">
                    {justForYouProduct.name}
                  </h4>
                  <div className="flex items-center justify-center gap-3">
                    {justForYouProduct.originalPrice && (
                      <span className="text-slate-300 line-through text-sm font-light italic">
                        {justForYouProduct.originalPrice}
                      </span>
                    )}
                    <p className="text-slate-400 font-bold tracking-widest text-sm italic">
                      {justForYouProduct.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
