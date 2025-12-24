"use client";

import { useState, useEffect, use } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "@/components/ui/home/Navbar";
import Footer from "@/components/ui/home/Footer";
import SearchOverlay from "@/components/ui/home/SearchOverlay";
import { ProductCard } from "@/components/common/ProductCard";
import { Product } from "@/app/provider/features/cart-slice";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatTitle = (slug: string) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Product interface imported from cart-slice
  // ProductCard component imported from components/common/ProductCard.tsx

  // Sample products - in a real app, this would be fetched based on category
  const products: Product[] = [
    {
      name: "Emerald Silk Panjabi",
      slug: "emerald-silk-panjabi",
      price: "৳ 4,500",
      img: "https://images.unsplash.com/photo-1621431602131-0775d7330777?auto=format&fit=crop&q=80&w=500",
      discount: "20% OFF",
      originalPrice: "৳ 5,625",
      category: "panjabi",
      gender: "men",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Emerald"],
      priceValue: 4500,
    },
    {
      name: "Royal Ivory Kurta",
      slug: "royal-ivory-kurta",
      price: "৳ 3,200",
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=500",
      category: "kurta",
      gender: "men",
      sizes: ["M", "L", "XL"],
      colors: ["Ivory"],
      priceValue: 3200,
    },
    {
      name: "Midnight Lace Abaya",
      slug: "midnight-lace-abaya",
      price: "৳ 8,900",
      img: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&q=80&w=500",
      discount: "15% OFF",
      originalPrice: "৳ 10,471",
      category: "abaya",
      gender: "women",
      sizes: ["S", "M", "L"],
      colors: ["Black"],
      priceValue: 8900,
    },
    {
      name: "Tussar Signature",
      slug: "tussar-signature",
      price: "৳ 6,800",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=500",
      category: "sherwani",
      gender: "men",
      sizes: ["L", "XL"],
      colors: ["Gold"],
      priceValue: 6800,
    },
    {
      name: "Golden Thread Sherwani",
      slug: "golden-thread-sherwani",
      price: "৳ 12,500",
      img: "https://images.unsplash.com/photo-1506629905607-0b5b8b5b1b5b?auto=format&fit=crop&q=80&w=500",
      discount: "10% OFF",
      originalPrice: "৳ 13,889",
      category: "sherwani",
      gender: "men",
      sizes: ["L", "XL"],
      colors: ["Gold"],
      priceValue: 12500,
    },
    {
      name: "Cotton Comfort Pajama",
      slug: "cotton-comfort-pajama",
      price: "৳ 2,100",
      img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=500",
      category: "pajama",
      gender: "men",
      sizes: ["M", "L", "XL"],
      colors: ["White"],
      priceValue: 2100,
    },
  ];

  return (
    <>
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
          <section className="relative h-[500px] bg-emerald-950 overflow-hidden ">
            <img
              src="https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=2070"
              className="w-full h-full object-cover brightness-[0.45]"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center px-10 mt-32 mb-10">
              <div className="max-w-6xl">
                <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-none tracking-tighter">
                  {formatTitle(resolvedParams.slug)} Collection
                </h1>
                <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto mt-6 italic">
                  Discover our exquisite{" "}
                  {formatTitle(resolvedParams.slug).toLowerCase()} collection,
                  crafted with traditional elegance and modern comfort.
                </p>
              </div>
            </div>
          </section>
          <section className="py-16 bg-white px-6">
            <div className="container mx-auto">
              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-8">
                  Browse our curated selection of{" "}
                  {formatTitle(resolvedParams.slug).toLowerCase()} items,
                  featuring authentic designs and premium quality fabrics.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
                  {products.map((product, i) => (
                    <ProductCard key={i} {...product} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
