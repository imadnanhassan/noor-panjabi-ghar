"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  AlertTriangle,
  Bell,
  BellOff,
  Mail,
  MessageSquare,
  Settings,
  TrendingDown,
  Package,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function StockAlertsPage() {
  const [alertSettings, setAlertSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    autoReorder: false,
    lowStockThreshold: 5,
  });

  // Sample low stock alerts
  const lowStockAlerts = [
    {
      id: 1,
      product: "Elegant Kurta",
      variant: "M, Crimson Red",
      sku: "EK002-M-CR",
      currentStock: 2,
      threshold: 5,
      supplier: "Fashion Fabrics",
      lastRestocked: "2024-01-10",
      status: "Critical",
      daysSinceLastOrder: 12,
    },
    {
      id: 2,
      product: "Designer Dupatta",
      variant: "L, Golden Yellow",
      sku: "DD003-L-GY",
      currentStock: 0,
      threshold: 3,
      supplier: "Silk Suppliers",
      lastRestocked: "2024-01-08",
      status: "Out of Stock",
      daysSinceLastOrder: 15,
    },
    {
      id: 3,
      product: "Cotton Salwar",
      variant: "S, Pure White",
      sku: "CS005-S-PW",
      currentStock: 8,
      threshold: 10,
      supplier: "Cotton Mills",
      lastRestocked: "2024-01-12",
      status: "Warning",
      daysSinceLastOrder: 8,
    },
  ];

  // Sample recent alerts
  const recentAlerts = [
    {
      id: 1,
      message: "Designer Dupatta (L, Golden Yellow) is out of stock",
      type: "Out of Stock",
      timestamp: "2024-01-15 14:30",
      resolved: false,
    },
    {
      id: 2,
      message: "Elegant Kurta (M, Crimson Red) stock below threshold",
      type: "Low Stock",
      timestamp: "2024-01-14 09:15",
      resolved: false,
    },
    {
      id: 3,
      message: "Royal Salwar Kameez (XS, Royal Blue) restocked successfully",
      type: "Restocked",
      timestamp: "2024-01-13 16:45",
      resolved: true,
    },
  ];

  const stats = [
    {
      title: "Active Alerts",
      value: "8",
      icon: <AlertTriangle size={20} />,
      color: "text-amber-500",
    },
    {
      title: "Out of Stock",
      value: "3",
      icon: <XCircle size={20} />,
      color: "text-rose-500",
    },
    {
      title: "Low Stock",
      value: "5",
      icon: <TrendingDown size={20} />,
      color: "text-orange-500",
    },
    {
      title: "Resolved Today",
      value: "12",
      icon: <CheckCircle size={20} />,
      color: "text-emerald-500",
    },
  ];

  const handleSettingChange = (setting: string, value: boolean | number) => {
    setAlertSettings((prev) => ({ ...prev, [setting]: value }));
  };

  return (
    <div className="min-h-screen bg-(--admin-bg) text-(--admin-text)">
      <div className="max-w-[1600px] mx-auto p-4 md:p-8 space-y-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stock Alerts
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) text-sm md:text-base mt-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Monitor low stock items and manage alert notifications
            </motion.p>
          </motion.div>
          <motion.button
            className="flex items-center gap-2 bg-(--admin-gold) text-black px-6 py-3 rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Settings size={18} />
            Alert Settings
          </motion.button>
        </div>

        {/* STATS CARDS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-(--admin-card-bg) border-(--admin-border) p-6 rounded-2xl hover:border-(--admin-border-hover) transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-(--admin-bg-light) rounded-xl text-(--admin-gold) group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
              </div>
              <p className="text-(--admin-text-muted) text-[10px] uppercase tracking-wider mb-1 font-semibold">
                {stat.title}
              </p>
              <h2 className={`text-2xl font-bold tracking-tight ${stat.color}`}>
                {stat.value}
              </h2>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LOW STOCK ITEMS */}
          <motion.div
            className="lg:col-span-2 bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <AlertTriangle size={20} className="text-amber-500" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Low Stock Items
              </h2>
            </div>

            <div className="space-y-4">
              {lowStockAlerts.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-white font-medium">
                          {item.product}
                        </h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-bold ${
                            item.status === "Critical"
                              ? "bg-rose-500/10 text-rose-500"
                              : item.status === "Out of Stock"
                              ? "bg-red-500/10 text-red-500"
                              : "bg-amber-500/10 text-amber-500"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="text-(--admin-text-muted) text-sm mb-2">
                        {item.variant} • SKU: {item.sku}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-(--admin-text-muted)">
                          Current:{" "}
                          <span className="text-white font-semibold">
                            {item.currentStock}
                          </span>
                        </span>
                        <span className="text-(--admin-text-muted)">
                          Threshold:{" "}
                          <span className="text-amber-500">
                            {item.threshold}
                          </span>
                        </span>
                        <span className="text-(--admin-text-muted)">
                          Supplier:{" "}
                          <span className="text-(--admin-gold)">
                            {item.supplier}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1 bg-(--admin-gold) text-black text-sm rounded-lg hover:bg-(--admin-gold)/90 transition-colors">
                        Restock
                      </button>
                      <button className="p-2 text-(--admin-text-muted) hover:text-(--admin-gold) transition-colors">
                        <Bell size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ALERT SETTINGS & RECENT ALERTS */}
          <div className="space-y-6">
            {/* ALERT SETTINGS */}
            <motion.div
              className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-(--admin-gold)/10 rounded-lg">
                  <Settings size={20} className="text-(--admin-gold)" />
                </div>
                <h2 className="text-xl font-semibold text-white">
                  Alert Settings
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-(--admin-text-muted)" />
                    <span className="text-sm text-white">
                      Email Notifications
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={alertSettings.emailNotifications}
                      onChange={(e) =>
                        handleSettingChange(
                          "emailNotifications",
                          e.target.checked
                        )
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageSquare
                      size={16}
                      className="text-(--admin-text-muted)"
                    />
                    <span className="text-sm text-white">
                      SMS Notifications
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={alertSettings.smsNotifications}
                      onChange={(e) =>
                        handleSettingChange(
                          "smsNotifications",
                          e.target.checked
                        )
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Package size={16} className="text-(--admin-text-muted)" />
                    <span className="text-sm text-white">Auto Reorder</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={alertSettings.autoReorder}
                      onChange={(e) =>
                        handleSettingChange("autoReorder", e.target.checked)
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                  </label>
                </div>

                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Default Low Stock Threshold
                  </label>
                  <input
                    type="number"
                    value={alertSettings.lowStockThreshold}
                    onChange={(e) =>
                      handleSettingChange(
                        "lowStockThreshold",
                        parseInt(e.target.value) || 5
                      )
                    }
                    className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                    min="1"
                  />
                </div>
              </div>
            </motion.div>

            {/* RECENT ALERTS */}
            <motion.div
              className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-(--admin-gold)/10 rounded-lg">
                  <Clock size={20} className="text-(--admin-gold)" />
                </div>
                <h2 className="text-xl font-semibold text-white">
                  Recent Alerts
                </h2>
              </div>

              <div className="space-y-3">
                {recentAlerts.map((alert, index) => (
                  <motion.div
                    key={alert.id}
                    className="flex items-start gap-3 p-3 bg-(--admin-bg-light) rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    <div
                      className={`p-1 rounded-full ${
                        alert.type === "Out of Stock"
                          ? "bg-rose-500/10"
                          : alert.type === "Low Stock"
                          ? "bg-amber-500/10"
                          : "bg-emerald-500/10"
                      }`}
                    >
                      {alert.type === "Out of Stock" ? (
                        <XCircle size={12} className="text-rose-500" />
                      ) : alert.type === "Low Stock" ? (
                        <AlertTriangle size={12} className="text-amber-500" />
                      ) : (
                        <CheckCircle size={12} className="text-emerald-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{alert.message}</p>
                      <p className="text-(--admin-text-muted) text-xs">
                        {alert.timestamp}
                      </p>
                    </div>
                    {!alert.resolved && (
                      <button className="text-(--admin-text-muted) hover:text-emerald-500 transition-colors">
                        <CheckCircle size={16} />
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
