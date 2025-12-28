"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  Search,
  Filter,
  Eye,
  Clock,
  DollarSign,
  AlertTriangle,
  X,
  ChevronDown,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function PendingOrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    dateRange: "",
    paymentMethod: "",
    totalRange: "",
  });
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

  // Sample pending orders data
  const orders = [
    {
      id: "#ORD-2024-001",
      customer: "Priya Sharma",
      date: "2024-12-28",
      total: "₹2,499",
      payment: "Credit Card",
      items: 3,
      paymentStatus: "Pending",
    },
    {
      id: "#ORD-2024-005",
      customer: "Kavita Patel",
      date: "2024-12-24",
      total: "₹1,299",
      payment: "Credit Card",
      items: 2,
      paymentStatus: "Failed",
    },
    {
      id: "#ORD-2024-008",
      customer: "Ravi Kumar",
      date: "2024-12-23",
      total: "₹3,499",
      payment: "UPI",
      items: 4,
      paymentStatus: "Pending",
    },
  ];

  const stats = [
    {
      title: "Pending Orders",
      value: "23",
      icon: <Clock size={20} />,
      trend: "+5%",
      isUp: false,
    },
    {
      title: "Awaiting Payment",
      value: "18",
      icon: <DollarSign size={20} />,
      trend: "+2%",
      isUp: false,
    },
    {
      title: "Payment Failed",
      value: "5",
      icon: <AlertTriangle size={20} />,
      trend: "-1%",
      isUp: true,
    },
    {
      title: "Total Value",
      value: "₹45,678",
      icon: <DollarSign size={20} />,
      trend: "+8%",
      isUp: true,
    },
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesDate = true;
    if (filters.dateRange) {
      const orderDate = new Date(order.date);
      const now = new Date();
      if (filters.dateRange === "Today") {
        matchesDate = orderDate.toDateString() === now.toDateString();
      } else if (filters.dateRange === "This Week") {
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        matchesDate = orderDate >= weekAgo;
      } else if (filters.dateRange === "This Month") {
        matchesDate =
          orderDate.getMonth() === now.getMonth() &&
          orderDate.getFullYear() === now.getFullYear();
      }
    }

    const matchesPayment =
      !filters.paymentMethod || order.payment === filters.paymentMethod;

    let matchesTotal = true;
    if (filters.totalRange) {
      const total = parseInt(order.total.replace(/[₹,]/g, ""));
      if (filters.totalRange === "Under ₹1,000") {
        matchesTotal = total < 1000;
      } else if (filters.totalRange === "₹1,000 - ₹2,000") {
        matchesTotal = total >= 1000 && total <= 2000;
      } else if (filters.totalRange === "₹2,000 - ₹5,000") {
        matchesTotal = total >= 2000 && total <= 5000;
      } else if (filters.totalRange === "Above ₹5,000") {
        matchesTotal = total > 5000;
      }
    }

    return matchesSearch && matchesDate && matchesPayment && matchesTotal;
  });

  const clearFilters = () => {
    setFilters({
      dateRange: "",
      paymentMethod: "",
      totalRange: "",
    });
  };

  const hasActiveFilters = Object.values(filters).some((value) => value !== "");

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-amber-500/10 text-amber-500";
      case "Failed":
        return "bg-rose-500/10 text-rose-500";
      case "Completed":
        return "bg-emerald-500/10 text-emerald-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
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
              className="text-xl md:text-3xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Pending Orders
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) mt-1 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Orders awaiting payment confirmation or processing
            </motion.p>
          </motion.div>
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
                <div
                  className={`flex items-center gap-1 text-[10px] font-bold ${
                    stat.isUp ? "text-emerald-500" : "text-rose-500"
                  }`}
                >
                  {stat.isUp ? "+" : ""}
                  {stat.trend}
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

        {/* ORDERS TABLE */}
        <motion.div
          className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Table Header */}
          <motion.div
            className="p-6 border-b-(--admin-border) flex justify-between items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.h3
              className="text-lg font-medium text-white"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              Pending Orders ({filteredOrders.length})
            </motion.h3>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-(--admin-text-muted)"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search pending orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-(--admin-bg-light) border-(--admin-border) rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-(--admin-gold) w-full md:w-64"
                />
              </div>
              <div className="relative" ref={filterRef}>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                    hasActiveFilters
                      ? "bg-(--admin-gold) text-black"
                      : "bg-(--admin-bg-light) border-(--admin-border) hover:bg-(--admin-bg-hover)"
                  }`}
                >
                  <Filter size={16} />
                  Filter
                  {hasActiveFilters && (
                    <span className="ml-1 bg-black/20 text-xs px-1.5 py-0.5 rounded-full">
                      {Object.values(filters).filter((v) => v !== "").length}
                    </span>
                  )}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      isFilterOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isFilterOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 md:w-80 bg-(--admin-card-bg) border-(--admin-border) rounded-xl shadow-xl z-50 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-white font-medium">Filters</h4>
                      {hasActiveFilters && (
                        <button
                          onClick={clearFilters}
                          className="text-(--admin-text-muted) hover:text-(--admin-gold) text-sm flex items-center gap-1"
                        >
                          <X size={14} />
                          Clear all
                        </button>
                      )}
                    </div>

                    <div className="space-y-4">
                      {/* Date Range Filter */}
                      <div>
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Date Range
                        </label>
                        <select
                          value={filters.dateRange}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              dateRange: e.target.value,
                            }))
                          }
                          className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        >
                          <option value="">All Dates</option>
                          <option value="Today">Today</option>
                          <option value="This Week">This Week</option>
                          <option value="This Month">This Month</option>
                        </select>
                      </div>

                      {/* Payment Method Filter */}
                      <div>
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Payment Method
                        </label>
                        <select
                          value={filters.paymentMethod}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              paymentMethod: e.target.value,
                            }))
                          }
                          className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        >
                          <option value="">All Methods</option>
                          <option value="Credit Card">Credit Card</option>
                          <option value="UPI">UPI</option>
                          <option value="Net Banking">Net Banking</option>
                          <option value="Cash on Delivery">
                            Cash on Delivery
                          </option>
                        </select>
                      </div>

                      {/* Total Range Filter */}
                      <div>
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Total Amount
                        </label>
                        <select
                          value={filters.totalRange}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              totalRange: e.target.value,
                            }))
                          }
                          className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        >
                          <option value="">All Amounts</option>
                          <option value="Under ₹1,000">Under ₹1,000</option>
                          <option value="₹1,000 - ₹2,000">
                            ₹1,000 - ₹2,000
                          </option>
                          <option value="₹2,000 - ₹5,000">
                            ₹2,000 - ₹5,000
                          </option>
                          <option value="Above ₹5,000">Above ₹5,000</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-(--admin-bg-light) text-(--admin-text-muted) text-[10px] md:text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-3 md:p-5 text-left">Order ID</th>
                  <th className="p-3 md:p-5 text-left">Customer</th>
                  <th className="p-3 md:p-5 text-left">Date</th>
                  <th className="p-3 md:p-5 text-left">Total</th>
                  <th className="p-3 md:p-5 text-left hidden md:table-cell">
                    Items
                  </th>
                  <th className="p-3 md:p-5 text-left">Payment Method</th>
                  <th className="p-3 md:p-5 text-left">Payment Status</th>
                  <th className="p-3 md:p-5 text-left hidden md:table-cell">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b-(--admin-border) hover:bg-(--admin-bg-hover) transition-colors"
                  >
                    <td className="p-3 md:p-5">
                      <div>
                        <p className="text-white font-medium text-sm md:text-base">
                          {order.id}
                        </p>
                      </div>
                    </td>
                    <td className="p-3 md:p-5 text-(--admin-text-muted) text-xs md:text-sm">
                      {order.customer}
                    </td>
                    <td className="p-3 md:p-5 text-(--admin-text-muted) text-xs md:text-sm">
                      {new Date(order.date).toLocaleDateString()}
                    </td>
                    <td className="p-3 md:p-5 text-white font-semibold text-sm md:text-base">
                      {order.total}
                    </td>
                    <td className="p-3 md:p-5 text-(--admin-text-muted) text-xs md:text-sm hidden md:table-cell">
                      {order.items} items
                    </td>
                    <td className="p-3 md:p-5 text-(--admin-text-muted) text-xs md:text-sm">
                      {order.payment}
                    </td>
                    <td className="p-3 md:p-5">
                      <span
                        className={`px-2 py-1 rounded-full text-[10px] md:text-xs font-bold ${getPaymentStatusColor(
                          order.paymentStatus
                        )}`}
                      >
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="p-3 md:p-5 hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-(--admin-text-muted) hover:text-(--admin-gold) transition-colors">
                          <Eye size={16} />
                        </button>
                        <button className="p-2 text-(--admin-text-muted) hover:text-emerald-500 transition-colors">
                          <CheckCircle size={16} />
                        </button>
                        <button className="p-2 text-(--admin-text-muted) hover:text-rose-500 transition-colors">
                          <XCircle size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 md:p-6 border-t-(--admin-border) flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-(--admin-text-muted) text-xs md:text-sm">
              Showing {filteredOrders.length} of {orders.length} pending orders
            </p>
            <div className="flex items-center gap-1 md:gap-2">
              <button className="px-2 md:px-3 py-1 bg-(--admin-bg-light) border-(--admin-border) rounded text-xs md:text-sm hover:bg-(--admin-bg-hover) transition-colors">
                Previous
              </button>
              <button className="px-2 md:px-3 py-1 bg-(--admin-gold) text-black rounded text-xs md:text-sm font-medium">
                1
              </button>
              <button className="px-2 md:px-3 py-1 bg-(--admin-bg-light) border-(--admin-border) rounded text-xs md:text-sm hover:bg-(--admin-bg-hover) transition-colors">
                Next
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
