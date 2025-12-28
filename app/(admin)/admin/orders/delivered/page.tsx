"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  Search,
  Filter,
  Eye,
  CheckCircle,
  DollarSign,
  Star,
  MessageSquare,
  X,
  ChevronDown,
  Package,
} from "lucide-react";

export default function DeliveredOrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    dateRange: "",
    rating: "",
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

  // Sample delivered orders data
  const orders = [
    {
      id: "#ORD-2024-004",
      customer: "Amit Kumar",
      date: "2024-12-25",
      deliveredDate: "2024-12-28",
      total: "₹4,999",
      items: 4,
      rating: 5,
      feedback: "Excellent quality and fast delivery!",
      carrier: "Delhivery",
    },
    {
      id: "#ORD-2024-011",
      customer: "Neha Singh",
      date: "2024-12-20",
      deliveredDate: "2024-12-24",
      total: "₹1,799",
      items: 2,
      rating: 4,
      feedback: "Good products, packaging was nice.",
      carrier: "Blue Dart",
    },
    {
      id: "#ORD-2024-012",
      customer: "Rahul Mehta",
      date: "2024-12-18",
      deliveredDate: "2024-12-22",
      total: "₹2,499",
      items: 3,
      rating: 5,
      feedback: "Perfect fit and beautiful craftsmanship!",
      carrier: "FedEx",
    },
  ];

  const stats = [
    {
      title: "Delivered Orders",
      value: "1,189",
      icon: <CheckCircle size={20} />,
      trend: "+15%",
      isUp: true,
    },
    {
      title: "Avg Rating",
      value: "4.7/5",
      icon: <Star size={20} />,
      trend: "+0.2",
      isUp: true,
    },
    {
      title: "Customer Feedback",
      value: "892",
      icon: <MessageSquare size={20} />,
      trend: "+22%",
      isUp: true,
    },
    {
      title: "Total Revenue",
      value: "₹15,67,890",
      icon: <DollarSign size={20} />,
      trend: "+28%",
      isUp: true,
    },
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesDate = true;
    if (filters.dateRange) {
      const deliveredDate = new Date(order.deliveredDate);
      const now = new Date();
      if (filters.dateRange === "Today") {
        matchesDate = deliveredDate.toDateString() === now.toDateString();
      } else if (filters.dateRange === "This Week") {
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        matchesDate = deliveredDate >= weekAgo;
      } else if (filters.dateRange === "This Month") {
        matchesDate =
          deliveredDate.getMonth() === now.getMonth() &&
          deliveredDate.getFullYear() === now.getFullYear();
      }
    }

    const matchesRating =
      !filters.rating || order.rating >= parseInt(filters.rating);

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

    return matchesSearch && matchesDate && matchesRating && matchesTotal;
  });

  const clearFilters = () => {
    setFilters({
      dateRange: "",
      rating: "",
      totalRange: "",
    });
  };

  const hasActiveFilters = Object.values(filters).some((value) => value !== "");

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        className={`${
          i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-400"
        }`}
      />
    ));
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
              Delivered Orders
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) mt-1 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Successfully delivered orders and customer feedback
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
              Delivered Orders ({filteredOrders.length})
            </motion.h3>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-(--admin-text-muted)"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search delivered orders..."
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
                          Delivery Date Range
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

                      {/* Rating Filter */}
                      <div>
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Minimum Rating
                        </label>
                        <select
                          value={filters.rating}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              rating: e.target.value,
                            }))
                          }
                          className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        >
                          <option value="">All Ratings</option>
                          <option value="5">5 Stars</option>
                          <option value="4">4+ Stars</option>
                          <option value="3">3+ Stars</option>
                          <option value="2">2+ Stars</option>
                          <option value="1">1+ Stars</option>
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
                  <th className="p-3 md:p-5 text-left">Order Date</th>
                  <th className="p-3 md:p-5 text-left">Delivered</th>
                  <th className="p-3 md:p-5 text-left">Total</th>
                  <th className="p-3 md:p-5 text-left hidden md:table-cell">
                    Items
                  </th>
                  <th className="p-3 md:p-5 text-left">Rating</th>
                  <th className="p-3 md:p-5 text-left">Feedback</th>
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
                    <td className="p-3 md:p-5 text-(--admin-text-muted) text-xs md:text-sm">
                      {new Date(order.deliveredDate).toLocaleDateString()}
                    </td>
                    <td className="p-3 md:p-5 text-white font-semibold text-sm md:text-base">
                      {order.total}
                    </td>
                    <td className="p-3 md:p-5 text-(--admin-text-muted) text-xs md:text-sm hidden md:table-cell">
                      {order.items} items
                    </td>
                    <td className="p-3 md:p-5">
                      <div className="flex items-center gap-1">
                        {renderStars(order.rating)}
                        <span className="text-(--admin-text-muted) text-xs ml-1">
                          ({order.rating})
                        </span>
                      </div>
                    </td>
                    <td className="p-3 md:p-5 max-w-xs">
                      <p className="text-(--admin-text-muted) text-xs md:text-sm truncate">
                        {order.feedback}
                      </p>
                    </td>
                    <td className="p-3 md:p-5 hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-(--admin-text-muted) hover:text-(--admin-gold) transition-colors">
                          <Eye size={16} />
                        </button>
                        <button className="p-2 text-(--admin-text-muted) hover:text-blue-500 transition-colors">
                          <MessageSquare size={16} />
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
              Showing {filteredOrders.length} of {orders.length} delivered
              orders
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
