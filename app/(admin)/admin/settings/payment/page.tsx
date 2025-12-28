"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, CreditCard, Eye, EyeOff, Save, X } from "lucide-react";

export default function PaymentSettingsPage() {
  const [stripeSettings, setStripeSettings] = useState({
    enabled: true,
    testMode: true,
    publishableKey: "pk_test_...",
    secretKey: "sk_test_...",
    webhookSecret: "whsec_...",
  });

  const [razorpaySettings, setRazorpaySettings] = useState({
    enabled: false,
    testMode: true,
    keyId: "rzp_test_...",
    keySecret: "secret_...",
    webhookSecret: "webhook_...",
  });

  const [codSettings, setCodSettings] = useState({
    enabled: true,
    maxOrderAmount: "5000",
    minOrderAmount: "100",
    deliveryFee: "50",
  });

  const [showStripeSecret, setShowStripeSecret] = useState(false);
  const [showRazorpaySecret, setShowRazorpaySecret] = useState(false);

  const handleStripeChange = (field: string, value: string | boolean) => {
    setStripeSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleRazorpayChange = (field: string, value: string | boolean) => {
    setRazorpaySettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleCodChange = (field: string, value: string) => {
    setCodSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saving payment settings:", {
      stripeSettings,
      razorpaySettings,
      codSettings,
    });
    alert("Payment settings saved successfully!");
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
              Payment Settings
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) mt-1 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Configure payment gateways and cash on delivery options
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
          {/* STRIPE SETTINGS */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-white flex items-center gap-2">
                <CreditCard size={18} />
                Stripe Payment Gateway
              </h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={stripeSettings.enabled}
                  onChange={(e) =>
                    handleStripeChange("enabled", e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
              </label>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Test Mode</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={stripeSettings.testMode}
                    onChange={(e) =>
                      handleStripeChange("testMode", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Publishable Key *
                </label>
                <input
                  type="text"
                  value={stripeSettings.publishableKey}
                  onChange={(e) =>
                    handleStripeChange("publishableKey", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Secret Key *
                </label>
                <div className="relative">
                  <input
                    type={showStripeSecret ? "text" : "password"}
                    value={stripeSettings.secretKey}
                    onChange={(e) =>
                      handleStripeChange("secretKey", e.target.value)
                    }
                    className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 pr-12 text-sm focus:outline-none focus:border-(--admin-gold)"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowStripeSecret(!showStripeSecret)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-(--admin-text-muted) hover:text-(--admin-gold)"
                  >
                    {showStripeSecret ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Webhook Secret
                </label>
                <input
                  type="text"
                  value={stripeSettings.webhookSecret}
                  onChange={(e) =>
                    handleStripeChange("webhookSecret", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  placeholder="Optional"
                />
              </div>
            </div>
          </motion.div>

          {/* RAZORPAY SETTINGS */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-white flex items-center gap-2">
                <CreditCard size={18} />
                Razorpay Payment Gateway
              </h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={razorpaySettings.enabled}
                  onChange={(e) =>
                    handleRazorpayChange("enabled", e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
              </label>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Test Mode</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={razorpaySettings.testMode}
                    onChange={(e) =>
                      handleRazorpayChange("testMode", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Key ID *
                </label>
                <input
                  type="text"
                  value={razorpaySettings.keyId}
                  onChange={(e) =>
                    handleRazorpayChange("keyId", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Key Secret *
                </label>
                <div className="relative">
                  <input
                    type={showRazorpaySecret ? "text" : "password"}
                    value={razorpaySettings.keySecret}
                    onChange={(e) =>
                      handleRazorpayChange("keySecret", e.target.value)
                    }
                    className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 pr-12 text-sm focus:outline-none focus:border-(--admin-gold)"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowRazorpaySecret(!showRazorpaySecret)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-(--admin-text-muted) hover:text-(--admin-gold)"
                  >
                    {showRazorpaySecret ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Webhook Secret
                </label>
                <input
                  type="text"
                  value={razorpaySettings.webhookSecret}
                  onChange={(e) =>
                    handleRazorpayChange("webhookSecret", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  placeholder="Optional"
                />
              </div>
            </div>
          </motion.div>

          {/* CASH ON DELIVERY SETTINGS */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-white flex items-center gap-2">
                <CreditCard size={18} />
                Cash on Delivery (COD)
              </h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={codSettings.enabled}
                  onChange={(e) =>
                    handleCodChange(
                      "enabled",
                      e.target.checked ? "true" : "false"
                    )
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Max Order Amount (₹) *
                </label>
                <input
                  type="number"
                  value={codSettings.maxOrderAmount}
                  onChange={(e) =>
                    handleCodChange("maxOrderAmount", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Min Order Amount (₹) *
                </label>
                <input
                  type="number"
                  value={codSettings.minOrderAmount}
                  onChange={(e) =>
                    handleCodChange("minOrderAmount", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Delivery Fee (₹) *
                </label>
                <input
                  type="number"
                  value={codSettings.deliveryFee}
                  onChange={(e) =>
                    handleCodChange("deliveryFee", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
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
