"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "@/components/ui/home/Navbar";
import HeroSlider from "@/components/ui/home/HeroSlider";
import FeaturedCollections from "@/components/ui/home/FeaturedCollections";
import ShopByAge from "@/components/ui/home/ShopByAge";
import SeasonalCollections from "@/components/ui/home/SeasonalCollections";
import BestSellers from "@/components/ui/home/BestSellers";
import FreshFromAtelier from "@/components/ui/home/FreshFromAtelier";
import SizeGuideCare from "@/components/ui/home/SizeGuideCare";
import TestimonialSlider from "@/components/ui/home/TestimonialSlider";
import GiftIdeas from "@/components/ui/home/GiftIdeas";
import SafetyQuality from "@/components/ui/home/SafetyQuality";
import SocialProof from "@/components/ui/home/SocialProof";
import Newsletter from "@/components/ui/home/Newsletter";
import SearchOverlay from "@/components/ui/home/SearchOverlay";
import Footer from "@/components/ui/home/Footer";

const HomePage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <HeroSlider />
        <FeaturedCollections />
        <ShopByAge />
        <SeasonalCollections />
        <BestSellers />
        <FreshFromAtelier />
        <SizeGuideCare />
        <TestimonialSlider />
        <GiftIdeas />
        <SafetyQuality />
        <SocialProof />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
