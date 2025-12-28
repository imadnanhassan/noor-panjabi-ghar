"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Plus,
  Save,
  Package,
  Ruler,
  Palette,
  DollarSign,
  Hash,
  ShoppingCart,
  Eye,
  X,
} from "lucide-react";

export default function AddVariantPage() {
  const [formData, setFormData] = useState({
    productId: "",
    sizeId: "",
    colorId: "",
    sku: "",
    price: "",
    comparePrice: "",
    stockQuantity: "",
    lowStockThreshold: "5",
    status: "Active",
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
  });

  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [generatedSku, setGeneratedSku] = useState("");

  // Sample data
  const products = [
    { id: 1, name: "Royal Salwar Kameez", sku: "RSK001", price: "2500" },
    { id: 2, name: "Elegant Kurta", sku: "EK002", price: "1800" },
    { id: 3, name: "Designer Dupatta", sku: "DD003", price: "1200" },
  ];

  const sizes = [
    { id: 1, name: "XS", code: "XS" },
    { id: 2, name: "S", code: "S" },
    { id: 3, name: "M", code: "M" },
    { id: 4, name: "L", code: "L" },
    { id: 5, name: "XL", code: "XL" },
  ];

  const colors = [
    { id: 1, name: "Royal Blue", hex: "#1E40AF", code: "RB" },
    { id: 2, name: "Crimson Red", hex: "#DC2626", code: "CR" },
    { id: 3, name: "Forest Green", hex: "#059669", code: "FG" },
    { id: 4, name: "Golden Yellow", hex: "#D97706", code: "GY" },
  ];

  useEffect(() => {
    // Auto-generate SKU when selections change
    if (selectedProduct && selectedSize && selectedColor) {
      const sku = `${selectedProduct.sku}-${selectedSize.code}-${selectedColor.code}`;
      setFormData((prev) => ({ ...prev, sku }));
      setGeneratedSku(sku);
    }
  }, [selectedProduct, selectedSize, selectedColor]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDimensionChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      dimensions: { ...prev.dimensions, [field]: value },
    }));
  };

  const handleProductSelect = (productId: string) => {
    const product = products.find((p) => p.id.toString() === productId);
    setSelectedProduct(product);
    setFormData((prev) => ({
      ...prev,
      productId,
      price: product?.price || "",
    }));
  };

  const handleSizeSelect = (sizeId: string) => {
    const size = sizes.find((s) => s.id.toString() === sizeId);
    setSelectedSize(size);
    setFormData((prev) => ({ ...prev, sizeId }));
  };

  const handleColorSelect = (colorId: string) => {
    const color = colors.find((c) => c.id.toString() === colorId);
    setSelectedColor(color);
    setFormData((prev) => ({ ...prev, colorId }));
  };

  const handleSubmit = (e: React.FormEvent, isDraft: boolean = false) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { ...formData, isDraft });
  };

  return (
    <div className="min-h-screen bg-(--admin-bg) text-(--admin-text)">
      <div className="max-w-[1000px] mx-auto p-4 md:p-8 space-y-8">
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
            Create Product Variant
          </motion.h1>
          <motion.p
            className="text-(--admin-text-muted) text-sm md:text-base"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Combine products with sizes and colors to create unique variants
          </motion.p>
        </motion.div>

        <form onSubmit={(e) => handleSubmit(e)} className="space-y-8">
          {/* PRODUCT SELECTION */}
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
              <h2 className="text-xl font-semibold text-white">Base Product</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Select Product *
                </label>
                <select
                  value={formData.productId}
                  onChange={(e) => handleProductSelect(e.target.value)}
                  className="w-full bg-black border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) focus:bg-(--admin-gold)/5 focus:text-(--admin-gold)"
                  required
                >
                  <option value="">Choose a product...</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name} (SKU: {product.sku})
                    </option>
                  ))}
                </select>
              </div>

              {selectedProduct && (
                <motion.div
                  className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium">
                        {selectedProduct.name}
                      </h3>
                      <p className="text-(--admin-text-muted) text-sm">
                        Base Price: ₹{selectedProduct.price}
                      </p>
                    </div>
                    <span className="text-(--admin-gold) font-mono text-sm">
                      {selectedProduct.sku}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* SIZE & COLOR SELECTION */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-(--admin-gold)/10 rounded-lg">
                <Ruler size={20} className="text-(--admin-gold)" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Size & Color Variants
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Size Selection */}
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Size *
                </label>
                <select
                  value={formData.sizeId}
                  onChange={(e) => handleSizeSelect(e.target.value)}
                  className="w-full bg-black border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) focus:bg-(--admin-gold)/5 focus:text-(--admin-gold)"
                  required
                >
                  <option value="">Select size...</option>
                  {sizes.map((size) => (
                    <option key={size.id} value={size.id}>
                      {size.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Color *
                </label>
                <select
                  value={formData.colorId}
                  onChange={(e) => handleColorSelect(e.target.value)}
                  className="w-full bg-black border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) focus:bg-(--admin-gold)/5 focus:text-(--admin-gold)"
                  required
                >
                  <option value="">Select color...</option>
                  {colors.map((color) => (
                    <option key={color.id} value={color.id}>
                      {color.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Selected Variants Preview */}
            {(selectedSize || selectedColor) && (
              <motion.div
                className="mt-6 bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-white font-medium mb-3">
                  Selected Variants:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedSize && (
                    <div className="flex items-center gap-2 bg-(--admin-bg-hover) px-3 py-2 rounded-lg">
                      <Ruler size={16} className="text-(--admin-gold)" />
                      <span className="text-white text-sm">
                        {selectedSize.name}
                      </span>
                    </div>
                  )}
                  {selectedColor && (
                    <div className="flex items-center gap-2 bg-(--admin-bg-hover) px-3 py-2 rounded-lg">
                      <div
                        className="w-4 h-4 rounded border border-white"
                        style={{ backgroundColor: selectedColor.hex }}
                      ></div>
                      <span className="text-white text-sm">
                        {selectedColor.name}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* PRICING & SKU */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-(--admin-gold)/10 rounded-lg">
                <DollarSign size={20} className="text-(--admin-gold)" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Pricing & Identification
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  SKU (Auto-generated)
                </label>
                <div className="relative">
                  <Hash
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-(--admin-text-muted)"
                    size={16}
                  />
                  <input
                    type="text"
                    value={formData.sku}
                    onChange={(e) => handleInputChange("sku", e.target.value)}
                    className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) font-mono"
                    placeholder="Auto-generated SKU"
                  />
                </div>
                {generatedSku && (
                  <p className="text-(--admin-text-muted) text-xs mt-1">
                    Suggested: {generatedSku}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Variant Price (₹) *
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
                  Compare Price (₹)
                </label>
                <input
                  type="number"
                  value={formData.comparePrice}
                  onChange={(e) =>
                    handleInputChange("comparePrice", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
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
                  <option value="Draft">Draft</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* INVENTORY MANAGEMENT */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-(--admin-gold)/10 rounded-lg">
                <ShoppingCart size={20} className="text-(--admin-gold)" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Inventory & Shipping
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Stock Quantity *
                </label>
                <input
                  type="number"
                  value={formData.stockQuantity}
                  onChange={(e) =>
                    handleInputChange("stockQuantity", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  placeholder="0"
                  min="0"
                  required
                />
              </div>

              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Low Stock Threshold
                </label>
                <input
                  type="number"
                  value={formData.lowStockThreshold}
                  onChange={(e) =>
                    handleInputChange("lowStockThreshold", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  placeholder="5"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) => handleInputChange("weight", e.target.value)}
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  placeholder="0.5"
                  min="0"
                  step="0.01"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Dimensions (L × W × H in cm)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="number"
                    value={formData.dimensions.length}
                    onChange={(e) =>
                      handleDimensionChange("length", e.target.value)
                    }
                    className="bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                    placeholder="Length"
                    min="0"
                    step="0.1"
                  />
                  <input
                    type="number"
                    value={formData.dimensions.width}
                    onChange={(e) =>
                      handleDimensionChange("width", e.target.value)
                    }
                    className="bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                    placeholder="Width"
                    min="0"
                    step="0.1"
                  />
                  <input
                    type="number"
                    value={formData.dimensions.height}
                    onChange={(e) =>
                      handleDimensionChange("height", e.target.value)
                    }
                    className="bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                    placeholder="Height"
                    min="0"
                    step="0.1"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* VARIANT PREVIEW */}
          {selectedProduct && selectedSize && selectedColor && (
            <motion.div
              className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-(--admin-gold)/10 rounded-lg">
                  <Eye size={20} className="text-(--admin-gold)" />
                </div>
                <h2 className="text-xl font-semibold text-white">
                  Variant Preview
                </h2>
              </div>

              <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-6">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-24 h-24 bg-(--admin-bg-hover) rounded-lg flex items-center justify-center">
                      <Package
                        size={32}
                        className="text-(--admin-text-muted)"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {selectedProduct?.name} - {selectedSize?.name},{" "}
                      {selectedColor?.name}
                    </h3>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-5 h-5 rounded border border-white"
                          style={{ backgroundColor: selectedColor?.hex }}
                        ></div>
                        <span className="text-(--admin-text-muted) text-sm">
                          {selectedColor?.name}
                        </span>
                      </div>
                      <span className="text-(--admin-text-muted) text-sm">
                        Size: {selectedSize?.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-(--admin-gold) font-semibold">
                        ₹{formData.price || "0.00"}
                      </span>
                      {formData.comparePrice && (
                        <span className="text-(--admin-text-muted) line-through">
                          ₹{formData.comparePrice}
                        </span>
                      )}
                      <span className="text-(--admin-text-muted)">
                        SKU: {formData.sku || generatedSku}
                      </span>
                      <span className="text-(--admin-text-muted)">
                        Stock: {formData.stockQuantity || "0"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ACTION BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
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
              Create Variant
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
