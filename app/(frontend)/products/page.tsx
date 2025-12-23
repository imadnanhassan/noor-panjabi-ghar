"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Filter, SlidersHorizontal } from "lucide-react";

import Navbar from "@/components/ui/home/Navbar";
import Footer from "@/components/ui/home/Footer";
import SearchOverlay from "@/components/ui/home/SearchOverlay";
import { SectionTitle } from "@/components/common/section-title";

interface Product {
  name: string;
  price: string;
  img: string;
  discount?: string;
  originalPrice?: string;
  category: string;
  gender: string;
  sizes: string[];
  colors: string[];
  priceValue: number;
}

interface ProfessionalProductCardProps {
  name: string;
  price: string;
  img: string;
  discount?: string;
  originalPrice?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ProfessionalProductCard = ({
  name,
  price,
  originalPrice,
  discount,
  img,
}: ProfessionalProductCardProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="group cursor-pointer"
  >
    <div className="relative aspect-3/4 overflow-hidden rounded-[40px] bg-[#FAF7F2] mb-8">
      <img
        src={img}
        className="w-full h-full object-cover grayscale-15% group-hover:grayscale-0 transition-transform duration-[1.5s] group-hover:scale-110"
      />

      {/* Premium Discount Badge */}
      {discount && (
        <div className="absolute top-6 left-6 z-10">
          <span className="bg-amber-500 text-emerald-950 text-[10px] font-black px-4 py-2 rounded-full shadow-lg border border-white/20">
            {discount}
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
          Add to Bag
        </button>
      </div>
    </div>
    <div className="text-center px-4">
      <h4 className="text-xl font-serif font-bold text-emerald-950 mb-2 group-hover:text-amber-600 transition-colors">
        {name}
      </h4>
      <div className="flex items-center justify-center gap-3">
        {originalPrice && (
          <span className="text-slate-300 line-through text-sm font-light italic">
            {originalPrice}
          </span>
        )}
        <p className="text-slate-400 font-bold tracking-widest text-sm italic">
          {price}
        </p>
      </div>
    </div>
  </motion.div>
);

export default function ProductsPage() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [sortBy, setSortBy] = useState<string>("featured");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sample products data
  const allProducts: Product[] = [
    {
      name: "Emerald Silk Panjabi",
      price: "৳ 4,500",
      img: "https://images.unsplash.com/photo-1621431602131-0775d7330777?auto=format&fit=crop&q=80&w=500",
      discount: "20% OFF",
      originalPrice: "৳ 5,625",
      category: "panjabi",
      gender: "men",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Emerald", "Navy", "Black"],
      priceValue: 4500,
    },
    {
      name: "Royal Ivory Kurta",
      price: "৳ 3,200",
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=500",
      category: "kurta",
      gender: "men",
      sizes: ["M", "L", "XL"],
      colors: ["Ivory", "White", "Cream"],
      priceValue: 3200,
    },
    {
      name: "Midnight Lace Abaya",
      price: "৳ 8,900",
      img: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&q=80&w=500",
      discount: "15% OFF",
      originalPrice: "৳ 10,471",
      category: "abaya",
      gender: "women",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Burgundy"],
      priceValue: 8900,
    },
    {
      name: "Tussar Signature",
      price: "৳ 6,800",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=500",
      category: "sherwani",
      gender: "men",
      sizes: ["L", "XL", "XXL"],
      colors: ["Gold", "Silver", "Maroon"],
      priceValue: 6800,
    },
    {
      name: "Golden Thread Sherwani",
      price: "৳ 12,500",
      img: "https://images.unsplash.com/photo-1506629905607-0b5b8b5b1b5b?auto=format&fit=crop&q=80&w=500",
      discount: "10% OFF",
      originalPrice: "৳ 13,889",
      category: "sherwani",
      gender: "men",
      sizes: ["L", "XL", "XXL"],
      colors: ["Gold", "Cream", "Navy"],
      priceValue: 12500,
    },
    {
      name: "Cotton Comfort Pajama",
      price: "৳ 2,100",
      img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=500",
      category: "pajama",
      gender: "men",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Gray", "Navy"],
      priceValue: 2100,
    },
    {
      name: "Elegant Hijab Set",
      price: "৳ 1,800",
      img: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=500",
      category: "hijab",
      gender: "women",
      sizes: ["One Size"],
      colors: ["Black", "White", "Cream", "Pink"],
      priceValue: 1800,
    },
    {
      name: "Salwar Kameez Ensemble",
      price: "৳ 5,400",
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=500",
      discount: "25% OFF",
      originalPrice: "৳ 7,200",
      category: "salwar-kameez",
      gender: "women",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Blue", "Green", "Red", "Purple"],
      priceValue: 5400,
    },
    {
      name: "Boys' Mini Panjabi",
      price: "৳ 2,800",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=500",
      category: "panjabi",
      gender: "kids",
      sizes: ["4-6Y", "7-9Y", "10-12Y"],
      colors: ["Blue", "Green", "Red"],
      priceValue: 2800,
    },
  ];

  // Filter and sort products
  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const genderMatch =
      selectedGender === "all" || product.gender === selectedGender;
    const sizeMatch =
      selectedSizes.length === 0 ||
      selectedSizes.some((size) => product.sizes.includes(size));
    const colorMatch =
      selectedColors.length === 0 ||
      selectedColors.some((color) => product.colors.includes(color));
    const priceMatch =
      product.priceValue >= priceRange[0] &&
      product.priceValue <= priceRange[1];
    return (
      categoryMatch && genderMatch && sizeMatch && colorMatch && priceMatch
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.priceValue - b.priceValue;
      case "price-high":
        return b.priceValue - a.priceValue;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

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

      <main>
        {/* Hero Section */}
        <section className="relative h-96 bg-emerald-950 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070"
            className="w-full h-full object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-10 mt-32 mb-32">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-none tracking-tighter">
                Our Products
              </h1>
              <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto mt-6 italic">
                Discover our complete collection of Islamic clothing and
                traditional wear, crafted with care and tradition.
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-16 bg-white px-6">
          <div className="container mx-auto">
            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-8 mb-12">
              <div className="lg:w-1/4">
                <div className="bg-[#FAF7F2] p-8 rounded-[40px]">
                  <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-3">
                    <SlidersHorizontal className="w-5 h-5" />
                    Filters
                  </h3>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-bold mb-3">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full p-3 rounded-2xl border border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="all">All Categories</option>
                      <option value="panjabi">Panjabi</option>
                      <option value="kurta">Kurta</option>
                      <option value="abaya">Abaya</option>
                      <option value="sherwani">Sherwani</option>
                      <option value="pajama">Pajama</option>
                      <option value="hijab">Hijab</option>
                      <option value="salwar-kameez">Salwar Kameez</option>
                    </select>
                  </div>

                  {/* Gender Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-bold mb-3">
                      Gender
                    </label>
                    <select
                      value={selectedGender}
                      onChange={(e) => setSelectedGender(e.target.value)}
                      className="w-full p-3 rounded-2xl border border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="all">All Genders</option>
                      <option value="men">Men</option>
                      <option value="women">Women</option>
                      <option value="kids">Kids</option>
                    </select>
                  </div>

                  {/* Size Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-bold mb-3">Size</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "S",
                        "M",
                        "L",
                        "XL",
                        "XXL",
                        "One Size",
                        "4-6Y",
                        "7-9Y",
                        "10-12Y",
                      ].map((size) => (
                        <button
                          key={size}
                          onClick={() => {
                            if (selectedSizes.includes(size)) {
                              setSelectedSizes(
                                selectedSizes.filter((s) => s !== size)
                              );
                            } else {
                              setSelectedSizes([...selectedSizes, size]);
                            }
                          }}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedSizes.includes(size)
                              ? "bg-emerald-600 text-white shadow-md"
                              : "bg-white border border-emerald-200 text-emerald-800 hover:border-emerald-400 hover:bg-emerald-50"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-bold mb-3">
                      Color
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "Black", code: "#000000" },
                        { name: "White", code: "#FFFFFF" },
                        { name: "Navy", code: "#1e3a8a" },
                        { name: "Emerald", code: "#059669" },
                        { name: "Gold", code: "#d4af37" },
                        { name: "Cream", code: "#fef3c7" },
                        { name: "Burgundy", code: "#7f1d1d" },
                        { name: "Red", code: "#dc2626" },
                        { name: "Blue", code: "#2563eb" },
                        { name: "Green", code: "#16a34a" },
                        { name: "Gray", code: "#6b7280" },
                        { name: "Pink", code: "#ec4899" },
                        { name: "Purple", code: "#9333ea" },
                        { name: "Silver", code: "#9ca3af" },
                        { name: "Maroon", code: "#7f1d1d" },
                      ].map((color) => (
                        <button
                          key={color.name}
                          onClick={() => {
                            if (selectedColors.includes(color.name)) {
                              setSelectedColors(
                                selectedColors.filter((c) => c !== color.name)
                              );
                            } else {
                              setSelectedColors([
                                ...selectedColors,
                                color.name,
                              ]);
                            }
                          }}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                            selectedColors.includes(color.name)
                              ? "bg-emerald-600 text-white shadow-md"
                              : "bg-white border border-emerald-200 text-emerald-800 hover:border-emerald-400 hover:bg-emerald-50"
                          }`}
                        >
                          <div
                            className="w-4 h-4 rounded-full border border-gray-300 flex-shrink-0"
                            style={{ backgroundColor: color.code }}
                          ></div>
                          {color.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-bold mb-3">
                      Price Range: ৳{priceRange[0]} - ৳{priceRange[1]}
                    </label>
                    <div className="px-2">
                      <input
                        type="range"
                        min="0"
                        max="20000"
                        step="500"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([
                            parseInt(e.target.value),
                            priceRange[1],
                          ])
                        }
                        className="w-full accent-emerald-600"
                      />
                      <input
                        type="range"
                        min="0"
                        max="20000"
                        step="500"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([
                            priceRange[0],
                            parseInt(e.target.value),
                          ])
                        }
                        className="w-full accent-emerald-600 mt-2"
                      />
                    </div>
                  </div>

                  {/* Sort */}
                  <div>
                    <label className="block text-sm font-bold mb-3">
                      Sort By
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full p-3 rounded-2xl border border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name">Name</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="lg:w-3/4">
                <div className="flex items-center justify-between mb-8">
                  <p className="text-muted-foreground">
                    Showing {sortedProducts.length} products
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedGender("all");
                      setSelectedSizes([]);
                      setSelectedColors([]);
                      setPriceRange([0, 20000]);
                      setSortBy("featured");
                    }}
                    className="text-[10px] font-black uppercase tracking-widest border-b-2 border-emerald-950/10 hover:border-amber-600 pb-1 transition-all"
                  >
                    Clear Filters
                  </button>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                  {sortedProducts.map((product, i) => (
                    <ProfessionalProductCard key={i} {...product} />
                  ))}
                </div>

                {sortedProducts.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground text-lg">
                      No products found matching your filters.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
