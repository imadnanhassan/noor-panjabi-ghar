"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/app/provider/hook";
import { addProductToCart, Product } from "@/app/provider/features/cart-slice";

interface ProductCardProps extends Product {}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function ProductCard(product: ProductCardProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleAddToCart = () => {
    dispatch(
      addProductToCart({ product, size: selectedSize, color: selectedColor })
    );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="group cursor-pointer"
      onClick={() => router.push(`/product/${product.slug}`)}
    >
      <div className="relative aspect-3/4 overflow-hidden rounded-[40px] bg-[#FAF7F2] mb-8">
        <img
          src={product.img}
          className="w-full h-full object-cover grayscale-15% group-hover:grayscale-0 transition-transform duration-[1.5s] group-hover:scale-110"
        />

        {/* Premium Discount Badge */}
        {product.discount && (
          <div className="absolute top-6 left-6 z-10">
            <span className="bg-amber-500 text-emerald-950 text-[10px] font-black px-4 py-2 rounded-full shadow-lg border border-white/20">
              {product.discount}
            </span>
          </div>
        )}

        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
          <button className="p-4 bg-white/90 backdrop-blur-md rounded-full shadow-xl hover:bg-emerald-950 hover:text-white transition-all">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
            className="w-full bg-emerald-950 text-white py-5 rounded-3xl text-[10px] font-black uppercase tracking-widest shadow-2xl hover:bg-amber-600 transition-all"
          >
            Add to Bag
          </button>
        </div>
      </div>
      <div className="text-center px-4">
        <h4 className="text-xl font-serif font-bold text-emerald-950 mb-2 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h4>
        <div className="flex items-center justify-center gap-3">
          {product.originalPrice && (
            <span className="text-slate-300 line-through text-sm font-light italic">
              {product.originalPrice}
            </span>
          )}
          <p className="text-slate-400 font-bold tracking-widest text-sm italic">
            {product.price}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
