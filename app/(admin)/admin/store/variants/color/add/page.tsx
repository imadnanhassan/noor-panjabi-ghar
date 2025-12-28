"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Plus, Save, Palette, FileText, Hash, Sparkles } from "lucide-react";

export default function AddColorPage() {
  const [formData, setFormData] = useState({
    name: "",
    hexCode: "#000000",
    description: "",
    status: "Active",
  });

  const [colorPreview, setColorPreview] = useState("#000000");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === "hexCode") {
      setColorPreview(value);
    }
  };

  const selectSuggestedColor = (color: {
    name: string;
    hex: string;
    description?: string;
  }) => {
    setFormData((prev) => ({
      ...prev,
      name: color.name,
      hexCode: color.hex,
      description: color.description || prev.description,
    }));
    setColorPreview(color.hex);
  };

  const handleSubmit = (e: React.FormEvent, isDraft: boolean = false) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { ...formData, isDraft });
  };

  // Suggested color palettes
  const traditionalColors = [
    {
      name: "Royal Red",
      hex: "#DC2626",
      description: "Traditional festive red",
    },
    {
      name: "Golden Yellow",
      hex: "#D97706",
      description: "Auspicious gold tone",
    },
    {
      name: "Deep Maroon",
      hex: "#7F1D1D",
      description: "Rich burgundy for elegance",
    },
    { name: "Royal Blue", hex: "#1E40AF", description: "Classic navy blue" },
    {
      name: "Emerald Green",
      hex: "#059669",
      description: "Precious green stone",
    },
    {
      name: "Purple Majesty",
      hex: "#7C3AED",
      description: "Regal purple shade",
    },
  ];

  const softColors = [
    { name: "Soft Pink", hex: "#F9A8D4", description: "Gentle blush pink" },
    { name: "Lavender Mist", hex: "#C4B5FD", description: "Soft purple haze" },
    { name: "Mint Breeze", hex: "#6EE7B7", description: "Fresh mint green" },
    { name: "Sky Blue", hex: "#7DD3FC", description: "Light sky blue" },
    { name: "Peach Cream", hex: "#FDBCB4", description: "Creamy peach tone" },
    { name: "Lilac Dream", hex: "#DDD6FE", description: "Dreamy lilac" },
  ];

  const gradientColors = [
    {
      name: "Sunset Orange",
      hex: "#FB923C",
      description: "Warm sunset gradient",
    },
    { name: "Ocean Blue", hex: "#3B82F6", description: "Deep ocean gradient" },
    { name: "Rose Gold", hex: "#F472B6", description: "Luxurious rose gold" },
    {
      name: "Forest Green",
      hex: "#10B981",
      description: "Rich forest gradient",
    },
    {
      name: "Purple Haze",
      hex: "#A855F7",
      description: "Mystical purple gradient",
    },
    {
      name: "Coral Pink",
      hex: "#F87171",
      description: "Vibrant coral gradient",
    },
  ];

  return (
    <div className="min-h-screen bg-(--admin-bg) text-(--admin-text)">
      <div className="max-w-[800px] mx-auto p-4 md:p-8 space-y-8">
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
            Add New Color
          </motion.h1>
          <motion.p
            className="text-(--admin-text-muted) text-sm md:text-base"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Create a new color variant for your product collection
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
                <Palette size={20} className="text-(--admin-gold)" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Color Information
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Color Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  placeholder="e.g., Royal Blue, Crimson Red, Forest Green"
                  required
                />
              </div>

              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Hex Code *
                </label>
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Hash
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-(--admin-text-muted)"
                      size={16}
                    />
                    <input
                      type="text"
                      value={formData.hexCode}
                      onChange={(e) =>
                        handleInputChange("hexCode", e.target.value)
                      }
                      className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) font-mono"
                      placeholder="#000000"
                      pattern="^#[0-9A-Fa-f]{6}$"
                      required
                    />
                  </div>
                  <div
                    className="w-16 h-12 rounded-lg border-2 border-(--admin-border)"
                    style={{ backgroundColor: colorPreview }}
                  ></div>
                  <input
                    type="color"
                    value={colorPreview}
                    onChange={(e) => {
                      handleInputChange("hexCode", e.target.value);
                    }}
                    className="w-12 h-12 rounded-lg border-(--admin-border) cursor-pointer"
                  />
                </div>
              </div>

              <div>
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
                  placeholder="Describe this color and its usage..."
                />
              </div>

              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => handleInputChange("status", e.target.value)}
                  className="w-full bg-black border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) focus:bg-(--admin-gold)/5 focus:text-(--admin-gold)"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* SUGGESTED COLORS */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-(--admin-gold)/10 rounded-lg">
                <Sparkles size={20} className="text-(--admin-gold)" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Suggested Colors
              </h2>
            </div>

            <div className="space-y-6">
              {/* Traditional Colors */}
              <div>
                <h3 className="text-(--admin-text-muted) text-sm font-medium mb-3 uppercase tracking-wider">
                  Traditional Punjabi Colors
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {traditionalColors.map((color, index) => (
                    <motion.button
                      key={index}
                      type="button"
                      onClick={() => selectSuggestedColor(color)}
                      className="group relative flex flex-col items-center p-3 bg-(--admin-bg-light) border border-(--admin-border) rounded-lg hover:border-(--admin-gold) transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className="w-8 h-8 rounded-md border-2 border-white shadow-sm mb-2"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <p className="text-xs text-(--admin-text-muted) group-hover:text-white transition-colors text-center leading-tight">
                        {color.name}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Soft Colors */}
              <div>
                <h3 className="text-(--admin-text-muted) text-sm font-medium mb-3 uppercase tracking-wider">
                  Soft & Pastel Colors
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {softColors.map((color, index) => (
                    <motion.button
                      key={index}
                      type="button"
                      onClick={() => selectSuggestedColor(color)}
                      className="group relative flex flex-col items-center p-3 bg-(--admin-bg-light) border border-(--admin-border) rounded-lg hover:border-(--admin-gold) transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className="w-8 h-8 rounded-md border-2 border-white shadow-sm mb-2"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <p className="text-xs text-(--admin-text-muted) group-hover:text-white transition-colors text-center leading-tight">
                        {color.name}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Gradient Colors */}
              <div>
                <h3 className="text-(--admin-text-muted) text-sm font-medium mb-3 uppercase tracking-wider">
                  Gradient & Vibrant Colors
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {gradientColors.map((color, index) => (
                    <motion.button
                      key={index}
                      type="button"
                      onClick={() => selectSuggestedColor(color)}
                      className="group relative flex flex-col items-center p-3 bg-(--admin-bg-light) border border-(--admin-border) rounded-lg hover:border-(--admin-gold) transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className="w-8 h-8 rounded-md border-2 border-white shadow-sm mb-2"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <p className="text-xs text-(--admin-text-muted) group-hover:text-white transition-colors text-center leading-tight">
                        {color.name}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLOR PREVIEW */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-(--admin-gold)/10 rounded-lg">
                <FileText size={20} className="text-(--admin-gold)" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Color Preview
              </h2>
            </div>

            <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-20 h-20 rounded-xl border-4 border-white shadow-lg"
                  style={{ backgroundColor: colorPreview }}
                ></div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {formData.name || "Color Name"}
                  </h3>
                  <p className="text-(--admin-text-muted) font-mono text-sm">
                    {formData.hexCode}
                  </p>
                  <p className="text-(--admin-text-muted) text-sm mt-1">
                    {formData.description ||
                      "Color description will appear here"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ACTION BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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
              Create Color
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
