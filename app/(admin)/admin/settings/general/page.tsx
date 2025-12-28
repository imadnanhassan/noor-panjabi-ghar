"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Settings, Mail, Globe, Save, X } from "lucide-react";

export default function GeneralSettingsPage() {
  const [formData, setFormData] = useState({
    siteTitle: "Noor Panjabi Ghar",
    siteDescription:
      "Your premier destination for authentic Panjabi dresses and traditional wear.",
    contactEmail: "info@noorpanjabighar.com",
    contactPhone: "+880 1234-567890",
    address: "123 Main Street, Dhaka, Bangladesh",
    timezone: "Asia/Dhaka",
    language: "en",
    theme: "light",
    maintenanceMode: false,
    allowRegistration: true,
    defaultCurrency: "BDT",
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    // TODO: Call API to save settings
    console.log("Saving general settings:", formData);
    alert("General settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-(--admin-bg) text-(--admin-text)">
      <div className="max-w-[1600px] mx-auto p-4 md:p-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <button className="flex items-center gap-2 text-(--admin-text-muted) hover:text-(--admin-gold) transition-colors mb-4">
              <ArrowLeft size={16} />
              Back to Settings
            </button>
            <motion.h1
              className="text-xl md:text-3xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              General Settings
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) mt-1 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Configure your store's basic information and preferences
            </motion.p>
          </motion.div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="space-y-8"
        >
          {/* SITE INFORMATION */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
              <Globe size={18} />
              Site Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Site Title *
                </label>
                <input
                  type="text"
                  value={formData.siteTitle}
                  onChange={(e) =>
                    handleInputChange("siteTitle", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Default Currency *
                </label>
                <input
                  type="text"
                  value={formData.defaultCurrency}
                  onChange={(e) =>
                    handleInputChange("defaultCurrency", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  placeholder="e.g., BDT, USD"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-(--admin-text-muted) text-sm mb-2">
                Site Description *
              </label>
              <textarea
                value={formData.siteDescription}
                onChange={(e) =>
                  handleInputChange("siteDescription", e.target.value)
                }
                rows={3}
                className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                required
              />
            </div>
          </motion.div>

          {/* CONTACT INFORMATION */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
              <Mail size={18} />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Contact Email *
                </label>
                <input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) =>
                    handleInputChange("contactEmail", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  value={formData.contactPhone}
                  onChange={(e) =>
                    handleInputChange("contactPhone", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-(--admin-text-muted) text-sm mb-2">
                Business Address *
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                rows={2}
                className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                required
              />
            </div>
          </motion.div>

          {/* SYSTEM SETTINGS */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
              <Settings size={18} />
              System Settings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Timezone *
                </label>
                <select
                  value={formData.timezone}
                  onChange={(e) =>
                    handleInputChange("timezone", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) text-white"
                  style={{
                    backgroundColor: "var(--admin-bg-light)",
                    color: "white",
                  }}
                  required
                >
                  <option value="Asia/Dhaka">Asia/Dhaka (UTC+6)</option>
                  <option value="Asia/Kolkata">Asia/Kolkata (UTC+5:30)</option>
                  <option value="UTC">UTC</option>
                  <option value="America/New_York">
                    America/New_York (UTC-5)
                  </option>
                  <option value="Europe/London">Europe/London (UTC+0)</option>
                  <option value="Asia/Tokyo">Asia/Tokyo (UTC+9)</option>
                </select>
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Language *
                </label>
                <select
                  value={formData.language}
                  onChange={(e) =>
                    handleInputChange("language", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) text-white"
                  style={{
                    backgroundColor: "var(--admin-bg-light)",
                    color: "white",
                  }}
                  required
                >
                  <option value="en">English</option>
                  <option value="bn">বাংলা (Bengali)</option>
                  <option value="hi">हिंदी (Hindi)</option>
                  <option value="ur">اردو (Urdu)</option>
                </select>
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Currency Display *
                </label>
                <select
                  value={formData.defaultCurrency}
                  onChange={(e) =>
                    handleInputChange("defaultCurrency", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) text-white"
                  style={{
                    backgroundColor: "var(--admin-bg-light)",
                    color: "white",
                  }}
                  required
                >
                  <option value="INR">INR (₹)</option>
                  <option value="BDT">BDT (৳)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-(--admin-text-muted) text-sm mb-2">
                Theme *
              </label>
              <select
                value={formData.theme || "light"}
                onChange={(e) => handleInputChange("theme", e.target.value)}
                className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) text-white"
                style={{
                  backgroundColor: "var(--admin-bg-light)",
                  color: "white",
                }}
                required
              >
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option>
                <option value="auto">Auto (System)</option>
              </select>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">
                  Enable Maintenance Mode
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="maintenanceMode"
                    checked={formData.maintenanceMode}
                    onChange={(e) =>
                      handleInputChange("maintenanceMode", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">
                  Allow User Registration
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="allowRegistration"
                    checked={formData.allowRegistration}
                    onChange={(e) =>
                      handleInputChange("allowRegistration", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
            </div>
          </motion.div>

          {/* SUBMIT BUTTONS */}
          <motion.div
            className="flex items-center justify-end gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <button
              type="button"
              className="flex items-center gap-2 bg-(--admin-bg-light) border-(--admin-border) text-(--admin-text-muted) px-6 py-3 rounded-xl font-semibold hover:bg-(--admin-bg-hover) transition-colors"
            >
              <X size={18} />
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-(--admin-gold) text-black px-8 py-3 rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors"
            >
              <Save size={18} />
              Save Changes
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
