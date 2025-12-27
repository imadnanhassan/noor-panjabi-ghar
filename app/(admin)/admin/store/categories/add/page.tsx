"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Plus,
  Upload,
  X,
  Save,
  Tag,
  Image as ImageIcon,
  FileText,
} from "lucide-react";

export default function AddCategoryPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null as File | null,
    status: "Active",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  const handleSubmit = (e: React.FormEvent, isDraft: boolean = false) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { ...formData, isDraft });
  };

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
            Add New Category
          </motion.h1>
          <motion.p
            className="text-(--admin-text-muted) text-sm md:text-base"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Create a new category for your Punjabi traditional wear collection
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
                <Tag size={20} className="text-(--admin-gold)" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Basic Information
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Category Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  placeholder="e.g., Salwar Kameez, Dupatta, Lehenga"
                  required
                />
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
                  placeholder="Describe this category..."
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

          {/* CATEGORY IMAGE */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-(--admin-gold)/10 rounded-lg">
                <ImageIcon size={20} className="text-(--admin-gold)" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Category Image
              </h2>
            </div>

            <div className="space-y-4">
              {!imagePreview ? (
                <div className="border-2 border-dashed border-(--admin-border) rounded-xl p-8 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="category-image-upload"
                  />
                  <label
                    htmlFor="category-image-upload"
                    className="cursor-pointer"
                  >
                    <Upload
                      size={48}
                      className="mx-auto text-(--admin-text-muted) mb-4"
                    />
                    <p className="text-(--admin-text-muted) mb-2">
                      Click to upload category image
                    </p>
                    <p className="text-(--admin-text-muted) text-sm">
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </label>
                </div>
              ) : (
                <div className="relative inline-block">
                  <img
                    src={imagePreview}
                    alt="Category preview"
                    className="w-48 h-48 object-cover rounded-lg border border-(--admin-border)"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
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
              Create Category
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
