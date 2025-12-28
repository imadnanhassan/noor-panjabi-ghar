"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Plus, Save, Ruler, FileText } from "lucide-react";

export default function AddSizePage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "Active",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
            Add New Size
          </motion.h1>
          <motion.p
            className="text-(--admin-text-muted) text-sm md:text-base"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Create a new size variant for your product collection
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
                <Ruler size={20} className="text-(--admin-gold)" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Size Information
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Size Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  placeholder="e.g., XS, S, M, L, XL, XXL"
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
                  placeholder="Describe the size measurements and fit..."
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

          {/* SIZE GUIDE */}
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
                Size Guide Information
              </h2>
            </div>

            <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-4">
              <p className="text-(--admin-text-muted) text-sm">
                <strong>Tip:</strong> Provide detailed measurements in the
                description field to help customers choose the right size.
                Include chest, waist, length, and other relevant measurements
                for this size variant.
              </p>
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
              Create Size
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
