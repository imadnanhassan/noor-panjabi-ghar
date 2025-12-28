"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Bell,
  Mail,
  MessageSquare,
  Smartphone,
  Save,
  X,
} from "lucide-react";

export default function NotificationSettingsPage() {
  const [emailSettings, setEmailSettings] = useState({
    orderConfirmations: true,
    paymentNotifications: true,
    shippingUpdates: true,
    promotionalEmails: false,
    adminAlerts: true,
  });

  const [smsSettings, setSmsSettings] = useState({
    orderConfirmations: true,
    deliveryUpdates: true,
    paymentReminders: false,
    securityAlerts: true,
  });

  const [pushSettings, setPushSettings] = useState({
    newOrders: true,
    lowStockAlerts: true,
    systemUpdates: false,
    customerMessages: true,
  });

  const handleEmailChange = (setting: string, value: boolean) => {
    setEmailSettings((prev) => ({ ...prev, [setting]: value }));
  };

  const handleSmsChange = (setting: string, value: boolean) => {
    setSmsSettings((prev) => ({ ...prev, [setting]: value }));
  };

  const handlePushChange = (setting: string, value: boolean) => {
    setPushSettings((prev) => ({ ...prev, [setting]: value }));
  };

  const handleSave = () => {
    console.log("Saving notification settings:", {
      emailSettings,
      smsSettings,
      pushSettings,
    });
    alert("Notification settings saved successfully!");
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
              Notification Settings
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) mt-1 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Configure email, SMS, and push notification preferences
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
          {/* EMAIL NOTIFICATIONS */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
              <Mail size={18} />
              Email Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Order Confirmations</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emailSettings.orderConfirmations}
                    onChange={(e) =>
                      handleEmailChange("orderConfirmations", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">
                  Payment Notifications
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emailSettings.paymentNotifications}
                    onChange={(e) =>
                      handleEmailChange(
                        "paymentNotifications",
                        e.target.checked
                      )
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Shipping Updates</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emailSettings.shippingUpdates}
                    onChange={(e) =>
                      handleEmailChange("shippingUpdates", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Promotional Emails</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emailSettings.promotionalEmails}
                    onChange={(e) =>
                      handleEmailChange("promotionalEmails", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Admin Alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emailSettings.adminAlerts}
                    onChange={(e) =>
                      handleEmailChange("adminAlerts", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
            </div>
          </motion.div>

          {/* SMS NOTIFICATIONS */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
              <MessageSquare size={18} />
              SMS Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Order Confirmations</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={smsSettings.orderConfirmations}
                    onChange={(e) =>
                      handleSmsChange("orderConfirmations", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Delivery Updates</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={smsSettings.deliveryUpdates}
                    onChange={(e) =>
                      handleSmsChange("deliveryUpdates", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Payment Reminders</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={smsSettings.paymentReminders}
                    onChange={(e) =>
                      handleSmsChange("paymentReminders", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Security Alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={smsSettings.securityAlerts}
                    onChange={(e) =>
                      handleSmsChange("securityAlerts", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
            </div>
          </motion.div>

          {/* PUSH NOTIFICATIONS */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
              <Smartphone size={18} />
              Push Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">New Orders</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pushSettings.newOrders}
                    onChange={(e) =>
                      handlePushChange("newOrders", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Low Stock Alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pushSettings.lowStockAlerts}
                    onChange={(e) =>
                      handlePushChange("lowStockAlerts", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">System Updates</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pushSettings.systemUpdates}
                    onChange={(e) =>
                      handlePushChange("systemUpdates", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Customer Messages</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pushSettings.customerMessages}
                    onChange={(e) =>
                      handlePushChange("customerMessages", e.target.checked)
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
