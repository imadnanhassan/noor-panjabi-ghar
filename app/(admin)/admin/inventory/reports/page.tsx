"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Package,
  AlertTriangle,
  DollarSign,
  Download,
  Truck,
} from "lucide-react";

export default function InventoryReportsPage() {
  const [dateRange, setDateRange] = useState("last-30");
  const [reportType, setReportType] = useState("overview");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Comprehensive analytics data for BD market
  const inventoryMetrics = {
    totalValue: "৳1,245,678",
    totalItems: 1250,
    totalVariants: 2450,
    totalCategories: 12,
    avgStockLevel: 78,
    turnoverRate: 4.2,
    stockoutRate: 2.1,
    grossMargin: 28.5,
    inventoryAccuracy: 98.7,
    supplierCount: 24,
    activeProducts: 1180,
  };

  const categoryPerformance = [
    {
      category: "Salwar Kameez",
      value: "৳450,000",
      items: 450,
      growth: 12.5,
      margin: 32.1,
      turnover: 4.8,
    },
    {
      category: "Kurta",
      value: "৳320,000",
      items: 320,
      growth: 8.3,
      margin: 28.7,
      turnover: 3.9,
    },
    {
      category: "Dupatta",
      value: "৳210,000",
      items: 210,
      growth: -2.1,
      margin: 35.2,
      turnover: 5.1,
    },
    {
      category: "Lehenga",
      value: "৳180,000",
      items: 180,
      growth: 15.7,
      margin: 42.3,
      turnover: 2.8,
    },
    {
      category: "Salwar",
      value: "৳85,678",
      items: 90,
      growth: 5.2,
      margin: 25.8,
      turnover: 6.2,
    },
  ];

  const stockMovement = [
    { month: "Jan", incoming: 450, outgoing: 380, net: 70, value: "৳125,000" },
    { month: "Feb", incoming: 520, outgoing: 490, net: 30, value: "৳145,000" },
    { month: "Mar", incoming: 480, outgoing: 520, net: -40, value: "৳135,000" },
    { month: "Apr", incoming: 600, outgoing: 550, net: 50, value: "৳165,000" },
    { month: "May", incoming: 580, outgoing: 620, net: -40, value: "৳155,000" },
    { month: "Jun", incoming: 650, outgoing: 580, net: 70, value: "৳175,000" },
  ];

  const monthlyTrends = [
    { month: "Jan", sales: 125000, inventory: 1150000, profit: 35000 },
    { month: "Feb", sales: 145000, inventory: 1180000, profit: 42000 },
    { month: "Mar", sales: 135000, inventory: 1160000, profit: 38000 },
    { month: "Apr", sales: 165000, inventory: 1190000, profit: 48000 },
    { month: "May", sales: 155000, inventory: 1170000, profit: 45000 },
    { month: "Jun", sales: 175000, inventory: 1200000, profit: 52000 },
  ];

  const topSellingItems = [
    {
      name: "Royal Salwar Kameez",
      sku: "RSK001",
      sold: 145,
      revenue: "৳362,500",
      stock: 25,
      margin: 32.1,
      category: "Salwar Kameez",
    },
    {
      name: "Elegant Kurta",
      sku: "EK002",
      sold: 98,
      revenue: "৳176,400",
      stock: 12,
      margin: 28.7,
      category: "Kurta",
    },
    {
      name: "Designer Dupatta",
      sku: "DD003",
      sold: 87,
      revenue: "৳52,200",
      stock: 0,
      margin: 35.2,
      category: "Dupatta",
    },
    {
      name: "Wedding Lehenga",
      sku: "WL004",
      sold: 76,
      revenue: "৳646,000",
      stock: 8,
      margin: 42.3,
      category: "Lehenga",
    },
    {
      name: "Cotton Salwar",
      sku: "CS005",
      sold: 65,
      revenue: "৳32,500",
      stock: 15,
      margin: 25.8,
      category: "Salwar",
    },
  ];

  const stockDistribution = [
    { status: "In Stock", count: 1180, percentage: 94.4, color: "#10B981" },
    { status: "Low Stock", count: 45, percentage: 3.6, color: "#F59E0B" },
    { status: "Out of Stock", count: 25, percentage: 2.0, color: "#EF4444" },
  ];

  const supplierPerformance = [
    {
      name: "Textile House",
      orders: 245,
      value: "৳1,245,000",
      rating: 4.8,
      onTime: 98,
    },
    {
      name: "Fashion Fabrics",
      orders: 189,
      value: "৳980,000",
      rating: 4.6,
      onTime: 95,
    },
    {
      name: "Silk Suppliers",
      orders: 156,
      value: "৳850,000",
      rating: 4.9,
      onTime: 97,
    },
  ];

  const lowStockAlerts = [
    {
      name: "Designer Dupatta",
      sku: "DD003",
      stock: 0,
      threshold: 3,
      supplier: "Silk Suppliers",
      lastSold: "2024-01-10",
      demand: "High",
    },
    {
      name: "Elegant Kurta",
      sku: "EK002",
      stock: 2,
      threshold: 5,
      supplier: "Fashion Fabrics",
      lastSold: "2024-01-12",
      demand: "Medium",
    },
    {
      name: "Royal Blue Kurta",
      sku: "RBK006",
      stock: 1,
      threshold: 4,
      supplier: "Textile House",
      lastSold: "2024-01-08",
      demand: "High",
    },
  ];

  const reports = [
    {
      id: "overview",
      label: "Overview Dashboard",
      icon: <BarChart3 size={16} />,
    },
    {
      id: "performance",
      label: "Performance Analytics",
      icon: <TrendingUp size={16} />,
    },
    {
      id: "valuation",
      label: "Financial Valuation",
      icon: <DollarSign size={16} />,
    },
    {
      id: "alerts",
      label: "Stock Alerts & KPIs",
      icon: <AlertTriangle size={16} />,
    },
    { id: "suppliers", label: "Supplier Analytics", icon: <Truck size={16} /> },
  ];

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
              Inventory Analytics Dashboard
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) text-sm md:text-base mt-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Comprehensive analytics and insights for your Bangladesh market
              inventory management
            </motion.p>
          </motion.div>
          <div className="flex items-center gap-4">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-(--admin-card-bg) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
            >
              <option value="last-7">Last 7 Days</option>
              <option value="last-30">Last 30 Days</option>
              <option value="last-90">Last 90 Days</option>
              <option value="last-year">Last Year</option>
              <option value="custom">Custom Range</option>
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-(--admin-card-bg) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
            >
              <option value="all">All Categories</option>
              <option value="salwar-kameez">Salwar Kameez</option>
              <option value="kurta">Kurta</option>
              <option value="dupatta">Dupatta</option>
              <option value="lehenga">Lehenga</option>
            </select>
            <motion.button
              className="flex items-center gap-2 bg-(--admin-gold) text-black px-4 py-2 rounded-lg font-semibold hover:bg-(--admin-gold)/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              Export Report
            </motion.button>
          </div>
        </div>

        {/* REPORT TABS */}
        <motion.div
          className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-1 mb-6 border-b border-(--admin-border)">
            {reports.map((report) => (
              <button
                key={report.id}
                onClick={() => setReportType(report.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                  reportType === report.id
                    ? "text-(--admin-gold) border-b-2 border-(--admin-gold)"
                    : "text-(--admin-text-muted) hover:text-white"
                }`}
              >
                {report.icon}
                {report.label}
              </button>
            ))}
          </div>

          {/* OVERVIEW REPORT */}
          {reportType === "overview" && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* KEY METRICS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-(--admin-text-muted) text-sm">
                        Total Inventory Value
                      </p>
                      <p className="text-2xl font-bold text-(--admin-gold)">
                        {inventoryMetrics.totalValue}
                      </p>
                    </div>
                    <DollarSign size={24} className="text-(--admin-gold)" />
                  </div>
                </div>
                <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-(--admin-text-muted) text-sm">
                        Total Items
                      </p>
                      <p className="text-2xl font-bold text-white">
                        {inventoryMetrics.totalItems}
                      </p>
                    </div>
                    <Package size={24} className="text-blue-500" />
                  </div>
                </div>
                <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-(--admin-text-muted) text-sm">
                        Avg Stock Level
                      </p>
                      <p className="text-2xl font-bold text-emerald-500">
                        {inventoryMetrics.avgStockLevel}%
                      </p>
                    </div>
                    <TrendingUp size={24} className="text-emerald-500" />
                  </div>
                </div>
                <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-(--admin-text-muted) text-sm">
                        Stockout Rate
                      </p>
                      <p className="text-2xl font-bold text-amber-500">
                        {inventoryMetrics.stockoutRate}%
                      </p>
                    </div>
                    <AlertTriangle size={24} className="text-amber-500" />
                  </div>
                </div>
              </div>

              {/* STOCK MOVEMENT CHART */}
              <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Stock Movement (6 Months)
                </h3>
                <div className="h-64 flex items-end justify-between gap-2">
                  {stockMovement.map((data, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div className="w-full flex flex-col items-center gap-1 mb-2">
                        <div
                          className="w-full bg-(--admin-gold) rounded-t"
                          style={{
                            height: `${Math.abs(data.net) * 2}px`,
                            minHeight: "4px",
                          }}
                        ></div>
                        <div
                          className="w-full bg-emerald-500 rounded-t"
                          style={{ height: `${data.incoming * 1.5}px` }}
                        ></div>
                        <div
                          className="w-full bg-rose-500 rounded-t"
                          style={{ height: `${data.outgoing * 1.5}px` }}
                        ></div>
                      </div>
                      <span className="text-(--admin-text-muted) text-xs">
                        {data.month}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                    <span className="text-(--admin-text-muted) text-sm">
                      Incoming
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-rose-500 rounded"></div>
                    <span className="text-(--admin-text-muted) text-sm">
                      Outgoing
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-(--admin-gold) rounded"></div>
                    <span className="text-(--admin-text-muted) text-sm">
                      Net Change
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* PERFORMANCE REPORT */}
          {reportType === "performance" && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* CATEGORY PERFORMANCE */}
              <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Category Performance
                </h3>
                <div className="space-y-4">
                  {categoryPerformance.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-(--admin-card-bg) rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="text-white font-medium">
                          {category.category}
                        </h4>
                        <p className="text-(--admin-text-muted) text-sm">
                          {category.items} items • {category.value}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-sm font-semibold ${
                            category.growth > 0
                              ? "text-emerald-500"
                              : "text-rose-500"
                          }`}
                        >
                          {category.growth > 0 ? "+" : ""}
                          {category.growth}%
                        </span>
                        {category.growth > 0 ? (
                          <TrendingUp size={16} className="text-emerald-500" />
                        ) : (
                          <TrendingDown size={16} className="text-rose-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TOP SELLING ITEMS */}
              <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Top Selling Items
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="text-(--admin-text-muted) text-xs uppercase tracking-wider">
                      <tr>
                        <th className="p-3 text-left">Product</th>
                        <th className="p-3 text-left">SKU</th>
                        <th className="p-3 text-left">Sold</th>
                        <th className="p-3 text-left">Revenue</th>
                        <th className="p-3 text-left">Current Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topSellingItems.map((item, index) => (
                        <tr
                          key={index}
                          className="border-t border-(--admin-border)"
                        >
                          <td className="p-3 text-white font-medium">
                            {item.name}
                          </td>
                          <td className="p-3 text-(--admin-gold) font-mono text-sm">
                            {item.sku}
                          </td>
                          <td className="p-3 text-white">{item.sold}</td>
                          <td className="p-3 text-emerald-500 font-semibold">
                            {item.revenue}
                          </td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-bold ${
                                item.stock === 0
                                  ? "bg-rose-500/10 text-rose-500"
                                  : item.stock < 10
                                  ? "bg-amber-500/10 text-amber-500"
                                  : "bg-emerald-500/10 text-emerald-500"
                              }`}
                            >
                              {item.stock}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* VALUATION REPORT */}
          {reportType === "valuation" && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Inventory Valuation
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-(--admin-text-muted)">
                        Total Value
                      </span>
                      <span className="text-2xl font-bold text-(--admin-gold)">
                        ₹12,45,678
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-(--admin-text-muted)">
                        Cost of Goods
                      </span>
                      <span className="text-white font-semibold">
                        ₹8,90,123
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-(--admin-text-muted)">
                        Gross Margin
                      </span>
                      <span className="text-emerald-500 font-semibold">
                        ₹3,55,555
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-(--admin-text-muted)">
                        Margin %
                      </span>
                      <span className="text-emerald-500 font-semibold">
                        28.5%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Stock Turnover
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-(--admin-text-muted)">
                        Turnover Ratio
                      </span>
                      <span className="text-2xl font-bold text-blue-500">
                        4.2x
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-(--admin-text-muted)">
                        Days in Inventory
                      </span>
                      <span className="text-white font-semibold">87 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-(--admin-text-muted)">
                        Sell Through Rate
                      </span>
                      <span className="text-emerald-500 font-semibold">
                        94.2%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-(--admin-text-muted)">
                        Stock Efficiency
                      </span>
                      <span className="text-amber-500 font-semibold">Good</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ALERTS REPORT */}
          {reportType === "alerts" && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Low Stock Alerts
                </h3>
                <div className="space-y-4">
                  {lowStockAlerts.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-(--admin-card-bg) rounded-lg border border-amber-500/20"
                    >
                      <div className="flex items-center gap-4">
                        <AlertTriangle size={20} className="text-amber-500" />
                        <div>
                          <h4 className="text-white font-medium">
                            {item.name}
                          </h4>
                          <p className="text-(--admin-text-muted) text-sm">
                            SKU: {item.sku} • Supplier: {item.supplier}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-rose-500 font-semibold">
                          Stock: {item.stock}
                        </p>
                        <p className="text-(--admin-text-muted) text-sm">
                          Threshold: {item.threshold}
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-(--admin-gold) text-black rounded-lg font-semibold hover:bg-(--admin-gold)/90 transition-colors">
                        Restock
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-rose-500 mb-1">3</div>
                  <div className="text-rose-500 text-sm">Out of Stock</div>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-amber-500 mb-1">
                    5
                  </div>
                  <div className="text-amber-500 text-sm">Low Stock</div>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-500 mb-1">
                    12
                  </div>
                  <div className="text-emerald-500 text-sm">Resolved Today</div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
