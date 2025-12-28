"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  Package,
  Search,
  Filter,
  Edit,
  Plus,
  Minus,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  X,
  ChevronDown,
  Eye,
  RefreshCw,
} from "lucide-react";

export default function StockManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    category: "",
    stockLevel: "",
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

  // Sample inventory data
  const inventory = [
    {
      id: 1,
      product: "Royal Salwar Kameez",
      variant: "XS, Royal Blue",
      sku: "RSK001-XS-RB",
      category: "Salwar Kameez",
      currentStock: 25,
      reservedStock: 3,
      availableStock: 22,
      lowStockThreshold: 5,
      status: "In Stock",
      lastUpdated: "2024-01-15",
      supplier: "Textile House",
      price: "2500",
    },
    {
      id: 2,
      product: "Elegant Kurta",
      variant: "M, Crimson Red",
      sku: "EK002-M-CR",
      category: "Kurta",
      currentStock: 2,
      reservedStock: 0,
      availableStock: 2,
      lowStockThreshold: 5,
      status: "Low Stock",
      lastUpdated: "2024-01-14",
      supplier: "Fashion Fabrics",
      price: "1800",
    },
    {
      id: 3,
      product: "Designer Dupatta",
      variant: "L, Golden Yellow",
      sku: "DD003-L-GY",
      category: "Dupatta",
      currentStock: 0,
      reservedStock: 0,
      availableStock: 0,
      lowStockThreshold: 3,
      status: "Out of Stock",
      lastUpdated: "2024-01-13",
      supplier: "Silk Suppliers",
      price: "1200",
    },
    {
      id: 4,
      product: "Wedding Lehenga",
      variant: "XL, Emerald Green",
      sku: "WL004-XL-EG",
      category: "Lehenga",
      currentStock: 8,
      reservedStock: 2,
      availableStock: 6,
      lowStockThreshold: 5,
      status: "In Stock",
      lastUpdated: "2024-01-12",
      supplier: "Royal Textiles",
      price: "8500",
    },
    {
      id: 5,
      product: "Cotton Salwar",
      variant: "S, Pure White",
      sku: "CS005-S-PW",
      category: "Salwar",
      currentStock: 15,
      reservedStock: 1,
      availableStock: 14,
      lowStockThreshold: 10,
      status: "In Stock",
      lastUpdated: "2024-01-11",
      supplier: "Cotton Mills",
      price: "800",
    },
  ];

  const stats = [
    {
      title: "Total Products",
      value: "156",
      icon: <Package size={20} />,
      trend: "+12",
      isUp: true,
    },
    {
      title: "In Stock",
      value: "142",
      icon: <TrendingUp size={20} />,
      trend: "+8",
      isUp: true,
    },
    {
      title: "Low Stock",
      value: "9",
      icon: <AlertTriangle size={20} />,
      trend: "-2",
      isUp: false,
    },
    {
      title: "Out of Stock",
      value: "5",
      icon: <TrendingDown size={20} />,
      trend: "+1",
      isUp: false,
    },
  ];

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch =
      item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.variant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = !filters.status || item.status === filters.status;
    const matchesCategory =
      !filters.category || item.category === filters.category;

    let matchesStockLevel = true;
    if (filters.stockLevel === "In Stock") {
      matchesStockLevel = item.availableStock > item.lowStockThreshold;
    } else if (filters.stockLevel === "Low Stock") {
      matchesStockLevel =
        item.availableStock > 0 &&
        item.availableStock <= item.lowStockThreshold;
    } else if (filters.stockLevel === "Out of Stock") {
      matchesStockLevel = item.availableStock === 0;
    }

    return (
      matchesSearch && matchesStatus && matchesCategory && matchesStockLevel
    );
  });

  const clearFilters = () => {
    setFilters({
      status: "",
      category: "",
      stockLevel: "",
    });
  };

  const hasActiveFilters = Object.values(filters).some((value) => value !== "");

  const updateStock = (id: number, newStock: number) => {
    // Handle stock update
    console.log("Update stock for item", id, "to", newStock);
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
              Stock Management
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) text-sm md:text-base mt-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Monitor and manage your inventory levels
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
            <RefreshCw size={18} />
            Sync Inventory
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

        {/* INVENTORY TABLE */}
        <motion.div
          className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl overflow-hidden"
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
              Inventory Items
            </motion.h3>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-(--admin-text-muted)"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search inventory..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-(--admin-bg-light) border-(--admin-border) rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-(--admin-gold) w-64"
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
                  <div className="absolute right-0 top-full mt-2 w-80 bg-(--admin-card-bg) border-(--admin-border) rounded-xl shadow-xl z-50 p-4">
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
                      {/* Status Filter */}
                      <div>
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Stock Status
                        </label>
                        <select
                          value={filters.status}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              status: e.target.value,
                            }))
                          }
                          className="w-full bg-black border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold) focus:bg-(--admin-gold)/5 focus:text-(--admin-gold)"
                        >
                          <option value="">All Status</option>
                          <option value="In Stock">In Stock</option>
                          <option value="Low Stock">Low Stock</option>
                          <option value="Out of Stock">Out of Stock</option>
                        </select>
                      </div>

                      {/* Category Filter */}
                      <div>
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Category
                        </label>
                        <select
                          value={filters.category}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              category: e.target.value,
                            }))
                          }
                          className="w-full bg-black border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold) focus:bg-(--admin-gold)/5 focus:text-(--admin-gold)"
                        >
                          <option value="">All Categories</option>
                          <option value="Salwar Kameez">Salwar Kameez</option>
                          <option value="Kurta">Kurta</option>
                          <option value="Dupatta">Dupatta</option>
                          <option value="Lehenga">Lehenga</option>
                          <option value="Salwar">Salwar</option>
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
                  <th className="p-3 md:p-5 text-left">Product</th>
                  <th className="p-3 md:p-5 text-left">SKU</th>
                  <th className="p-3 md:p-5 text-left">Category</th>
                  <th className="p-3 md:p-5 text-left">Stock</th>
                  <th className="p-3 md:p-5 text-left">Status</th>
                  <th className="p-3 md:p-5 text-left">Price</th>
                  <th className="p-3 md:p-5 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInventory.map((item) => (
                  <motion.tr
                    key={item.id}
                    className="border-b-(--admin-border) hover:bg-(--admin-bg-hover) transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 + item.id * 0.05 }}
                    whileHover={{
                      backgroundColor: "var(--admin-bg-hover)",
                    }}
                  >
                    <td className="p-3 md:p-5">
                      <div>
                        <p className="text-white font-medium text-sm md:text-base">
                          {item.product}
                        </p>
                        <p className="text-(--admin-text-muted) text-[10px] md:text-xs">
                          {item.variant}
                        </p>
                      </div>
                    </td>
                    <td className="p-3 md:p-5">
                      <code className="text-(--admin-gold) font-mono text-sm">
                        {item.sku}
                      </code>
                    </td>
                    <td className="p-3 md:p-5 text-(--admin-text-muted) text-xs md:text-sm">
                      {item.category}
                    </td>
                    <td className="p-3 md:p-5">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold text-sm">
                            {item.availableStock}
                          </span>
                          <span className="text-(--admin-text-muted) text-xs">
                            ({item.reservedStock} reserved)
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() =>
                              updateStock(item.id, item.currentStock - 1)
                            }
                            className="p-1 bg-(--admin-bg-light) hover:bg-(--admin-bg-hover) rounded text-(--admin-text-muted) hover:text-white transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <input
                            type="number"
                            value={item.currentStock}
                            onChange={(e) =>
                              updateStock(
                                item.id,
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-16 bg-(--admin-bg-light) border-(--admin-border) rounded px-2 py-1 text-xs text-center focus:outline-none focus:border-(--admin-gold)"
                            min="0"
                          />
                          <button
                            onClick={() =>
                              updateStock(item.id, item.currentStock + 1)
                            }
                            className="p-1 bg-(--admin-bg-light) hover:bg-(--admin-bg-hover) rounded text-(--admin-text-muted) hover:text-white transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 md:p-5">
                      <span
                        className={`px-2 py-1 rounded-full text-[10px] md:text-xs font-bold ${
                          item.status === "In Stock"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : item.status === "Low Stock"
                            ? "bg-amber-500/10 text-amber-500"
                            : "bg-rose-500/10 text-rose-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-3 md:p-5 text-white font-semibold text-sm">
                      ₹{item.price}
                    </td>
                    <td className="p-3 md:p-5">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-(--admin-text-muted) hover:text-(--admin-gold) transition-colors">
                          <Eye size={16} />
                        </button>
                        <button className="p-2 text-(--admin-text-muted) hover:text-blue-500 transition-colors">
                          <Edit size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 md:p-6 border-t-(--admin-border) flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-(--admin-text-muted) text-xs md:text-sm">
              Showing {filteredInventory.length} of {inventory.length} items
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
