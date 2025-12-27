"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Plus,
  Upload,
  X,
  Save,
  Package,
  Image as ImageIcon,
  Tag,
  DollarSign,
  Palette,
  Ruler,
} from "lucide-react";

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    status: "Active",
    images: [] as File[],
    sizes: [] as string[],
    colors: [] as string[],
  });

  const [newSize, setNewSize] = useState("");
  const [newColor, setNewColor] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const addSize = () => {
    if (newSize && !formData.sizes.includes(newSize)) {
      setFormData((prev) => ({
        ...prev,
        sizes: [...prev.sizes, newSize],
      }));
      setNewSize("");
    }
  };

  const removeSize = (size: string) => {
    setFormData((prev) => ({
      ...prev,
      sizes: prev.sizes.filter((s) => s !== size),
    }));
  };

  const addColor = () => {
    if (newColor && !formData.colors.includes(newColor)) {
      setFormData((prev) => ({
        ...prev,
        colors: [...prev.colors, newColor],
      }));
      setNewColor("");
    }
  };

  const removeColor = (color: string) => {
    setFormData((prev) => ({
      ...prev,
      colors: prev.colors.filter((c) => c !== color),
    }));
  };

  const handleSubmit = (e: React.FormEvent, isDraft: boolean = false) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { ...formData, isDraft });
  };

  return (
    <div className="min-h-screen bg-(--admin-bg) text-(--admin-text)">
      <div className="max-w-[1200px] mx-auto p-4 md:p-8 space-y-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Add New Product
          </motion.h1>
          <motion.p
            className="text-(--admin-text-muted) text-sm md:text-base"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Create a new Punjabi traditional wear product
          </motion.p>
        </motion.div>

        <form onSubmit={(e) => handleSubmit(e)} className="space-y-8">
          {/* BASIC INFORMATION */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-(--admin-gold)/10 rounded-lg">
                <Package size={20} className="text-(--admin-gold)" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Basic Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  placeholder="e.g., Embroidered Salwar Kameez"
                  required
                />
              </div>

              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) focus:bg-(--admin-gold)/5 focus:text-(--admin-gold)"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Salwar Kameez">Salwar Kameez</option>
                  <option value="Kurta">Kurta</option>
                  <option value="Dupatta">Dupatta</option>
                  <option value="Lehenga">Lehenga</option>
                  <option value="Salwar">Salwar</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  rows={4}
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) resize-none"
                  placeholder="Describe your product..."
                />
              </div>
            </div>
          </motion.div>

          {/* PRICING & STOCK */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-(--admin-gold)/10 rounded-lg">
                <DollarSign size={20} className="text-(--admin-gold)" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Pricing & Stock
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Price (₹) *
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Stock Quantity *
                </label>
                <input
                  type="number"
                  value={formData.stock}
                  onChange={(e) => handleInputChange("stock", e.target.value)}
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  placeholder="0"
                  min="0"
                  required
                />
              </div>

              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => handleInputChange("status", e.target.value)}
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) focus:bg-(--admin-gold)/5 focus:text-(--admin-gold)"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* IMAGES */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-(--admin-gold)/10 rounded-lg">
                <ImageIcon size={20} className="text-(--admin-gold)" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Product Images
              </h2>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-(--admin-border) rounded-xl p-8 text-center">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload
                    size={48}
                    className="mx-auto text-(--admin-text-muted) mb-4"
                  />
                  <p className="text-(--admin-text-muted) mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-(--admin-text-muted) text-sm">
                    PNG, JPG, GIF up to 10MB each
                  </p>
                </label>
              </div>

              {formData.images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg border border-(--admin-border)"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* VARIANTS */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-(--admin-gold)/10 rounded-lg">
                <Tag size={20} className="text-(--admin-gold)" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Product Variants
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sizes */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Ruler size={16} className="text-(--admin-gold)" />
                  <h3 className="text-lg font-medium text-white">Sizes</h3>
                </div>

                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={newSize}
                    onChange={(e) => setNewSize(e.target.value)}
                    className="flex-1 bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                    placeholder="e.g., S, M, L, XL"
                  />
                  <button
                    type="button"
                    onClick={addSize}
                    className="px-4 py-2 bg-(--admin-gold) text-black rounded-lg font-medium hover:bg-(--admin-gold)/90 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {formData.sizes.map((size) => (
                    <span
                      key={size}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-(--admin-bg-light) border border-(--admin-border) rounded-full text-sm"
                    >
                      {size}
                      <button
                        type="button"
                        onClick={() => removeSize(size)}
                        className="text-(--admin-text-muted) hover:text-red-500"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Palette size={16} className="text-(--admin-gold)" />
                  <h3 className="text-lg font-medium text-white">Colors</h3>
                </div>

                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={newColor}
                    onChange={(e) => setNewColor(e.target.value)}
                    className="flex-1 bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                    placeholder="e.g., Red, Blue, Green"
                  />
                  <button
                    type="button"
                    onClick={addColor}
                    className="px-4 py-2 bg-(--admin-gold) text-black rounded-lg font-medium hover:bg-(--admin-gold)/90 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {formData.colors.map((color) => (
                    <span
                      key={color}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-(--admin-bg-light) border border-(--admin-border) rounded-full text-sm"
                    >
                      {color}
                      <button
                        type="button"
                        onClick={() => removeColor(color)}
                        className="text-(--admin-text-muted) hover:text-red-500"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ACTION BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              type="button"
              onClick={(e) => handleSubmit(e, true)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-(--admin-bg-light) border border-(--admin-border) text-white rounded-xl font-medium hover:bg-(--admin-bg-hover) transition-colors"
            >
              <Save size={18} />
              Save as Draft
            </button>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-(--admin-gold) text-black rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors"
            >
              <Plus size={18} />
              Create Product
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
