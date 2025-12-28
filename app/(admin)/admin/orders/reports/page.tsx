"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Package,
  Clock,
  Star,
  Calendar,
  Download,
  Filter,
  X,
  ChevronDown,
} from "lucide-react";

export default function OrderReportsPage() {
  const [dateRange, setDateRange] = useState("30");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sample analytics data
  const overviewStats = [
    {
      title: "Total Revenue",
      value: "₹12,45,678",
      change: "+15.3%",
      isPositive: true,
      icon: <DollarSign size={20} />,
    },
    {
      title: "Total Orders",
      value: "1,247",
      change: "+12.8%",
      isPositive: true,
      icon: <Package size={20} />,
    },
    {
      title: "Avg Order Value",
      value: "₹998",
      change: "+2.1%",
      isPositive: true,
      icon: <TrendingUp size={20} />,
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "-0.5%",
      isPositive: false,
      icon: <BarChart3 size={20} />,
    },
  ];

  const monthlyData = [
    { month: "Jan", orders: 89, revenue: 89234 },
    { month: "Feb", orders: 95, revenue: 94567 },
    { month: "Mar", orders: 102, revenue: 102456 },
    { month: "Apr", orders: 98, revenue: 98765 },
    { month: "May", orders: 115, revenue: 115678 },
    { month: "Jun", orders: 128, revenue: 128456 },
    { month: "Jul", orders: 142, revenue: 142567 },
    { month: "Aug", orders: 135, revenue: 135678 },
    { month: "Sep", orders: 148, revenue: 148456 },
    { month: "Oct", orders: 156, revenue: 156789 },
    { month: "Nov", orders: 167, revenue: 167234 },
    { month: "Dec", orders: 172, revenue: 172567 },
  ];

  const statusData = [
    {
      status: "Delivered",
      count: 1189,
      percentage: 95.2,
      color: "bg-emerald-500",
    },
    { status: "Processing", count: 45, percentage: 3.6, color: "bg-blue-500" },
    { status: "Shipped", count: 13, percentage: 1.0, color: "bg-purple-500" },
    { status: "Pending", count: 0, percentage: 0.2, color: "bg-amber-500" },
  ];

  const topProducts = [
    { name: "Embroidered Salwar Kameez", orders: 45, revenue: "₹2,24,550" },
    { name: "Punjabi Kurta Pajama", orders: 32, revenue: "₹1,59,840" },
    { name: "Phulkari Dupatta", orders: 28, revenue: "₹25,200" },
    { name: "Designer Lehenga", orders: 15, revenue: "₹74,985" },
    { name: "Patiala Salwar", orders: 67, revenue: "₹1,34,830" },
  ];

  const customerSegments = [
    { segment: "New Customers", orders: 234, percentage: 18.8 },
    { segment: "Returning Customers", orders: 892, percentage: 71.5 },
    { segment: "VIP Customers", orders: 121, percentage: 9.7 },
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
              className="text-xl md:text-3xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Order Reports & Analytics
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) mt-1 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Comprehensive insights into order performance and trends
            </motion.p>
          </motion.div>
          <div className="flex items-center gap-4">
            <div className="relative" ref={filterRef}>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-(--admin-bg-light) border-(--admin-border) rounded-lg text-sm hover:bg-(--admin-bg-hover) transition-colors"
              >
                <Calendar size={16} />
                Last {dateRange} days
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    isFilterOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-(--admin-card-bg) border-(--admin-border) rounded-xl shadow-xl z-50 p-2">
                  <div className="space-y-1">
                    {["7", "30", "90", "365"].map((days) => (
                      <button
                        key={days}
                        onClick={() => {
                          setDateRange(days);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-(--admin-bg-hover) transition-colors ${
                          dateRange === days
                            ? "bg-(--admin-gold) text-black"
                            : "text-(--admin-text-muted)"
                        }`}
                      >
                        Last {days} days
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <motion.button
              className="flex items-center gap-2 bg-(--admin-gold) text-black px-6 py-3 rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Export Report
            </motion.button>
          </div>
        </div>

        {/* OVERVIEW STATS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {overviewStats.map((stat, i) => (
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
                <div
                  className={`flex items-center gap-1 text-[10px] font-bold ${
                    stat.isPositive ? "text-emerald-500" : "text-rose-500"
                  }`}
                >
                  {stat.isPositive ? (
                    <TrendingUp size={10} />
                  ) : (
                    <TrendingDown size={10} />
                  )}
                  {stat.change}
                </div>
              </div>
              <p className="text-(--admin-text-muted) text-[10px] uppercase tracking-wider mb-1 font-semibold">
                {stat.title}
              </p>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {stat.value}
              </h2>
            </motion.div>
          ))}
        </motion.div>

        {/* CHARTS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Trends Chart */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-white">Monthly Trends</h3>
              <BarChart3 className="text-(--admin-gold)" size={20} />
            </div>
            <div className="h-64 flex items-end justify-between gap-2">
              {monthlyData.map((data, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 flex-1"
                >
                  <div className="w-full bg-(--admin-bg-light) rounded-t-lg relative group">
                    <div
                      className="bg-(--admin-gold) rounded-t-lg transition-all duration-300 group-hover:bg-(--admin-gold)/80"
                      style={{
                        height: `${(data.orders / 200) * 100}%`,
                        minHeight: "20px",
                      }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {data.orders} orders
                      </div>
                    </div>
                  </div>
                  <span className="text-(--admin-text-muted) text-xs">
                    {data.month}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Order Status Distribution */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-white">
                Order Status Distribution
              </h3>
              <Package className="text-(--admin-gold)" size={20} />
            </div>
            <div className="space-y-4">
              {statusData.map((status, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${status.color}`}
                    ></div>
                    <span className="text-(--admin-text-muted) text-sm">
                      {status.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-(--admin-bg-light) rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${status.color} transition-all duration-500`}
                        style={{ width: `${status.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-white font-medium text-sm w-12 text-right">
                      {status.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Products */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h3 className="text-lg font-medium text-white mb-6">
              Top Performing Products
            </h3>
            <div className="space-y-4">
              {topProducts.map((product, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-(--admin-bg-light) rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-(--admin-gold) rounded-lg flex items-center justify-center text-black font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">
                        {product.name}
                      </p>
                      <p className="text-(--admin-text-muted) text-xs">
                        {product.orders} orders
                      </p>
                    </div>
                  </div>
                  <span className="text-(--admin-gold) font-semibold text-sm">
                    {product.revenue}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Customer Segments */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h3 className="text-lg font-medium text-white mb-6">
              Customer Segments
            </h3>
            <div className="space-y-4">
              {customerSegments.map((segment, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-(--admin-text-muted) text-sm">
                    {segment.segment}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-20 bg-(--admin-bg-light) rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-(--admin-gold) transition-all duration-500"
                        style={{ width: `${segment.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-white font-medium text-sm w-12 text-right">
                      {segment.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
