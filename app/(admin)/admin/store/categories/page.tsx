"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Tag,
  TrendingUp,
  AlertTriangle,
  X,
  ChevronDown,
} from "lucide-react";

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    productCount: "",
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

  // Sample categories data
  const categories = [
    {
      id: 1,
      name: "Salwar Kameez",
      description: "Traditional Punjabi salwar kameez collection",
      productCount: 45,
      status: "Active",
      image: "/api/placeholder/60/60",
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      name: "Kurta",
      description: "Elegant kurta designs for men",
      productCount: 32,
      status: "Active",
      image: "/api/placeholder/60/60",
      createdAt: "2024-01-10",
    },
    {
      id: 3,
      name: "Dupatta",
      description: "Beautiful dupatta collection",
      productCount: 18,
      status: "Active",
      image: "/api/placeholder/60/60",
      createdAt: "2024-01-08",
    },
    {
      id: 4,
      name: "Lehenga",
      description: "Wedding and festive lehenga designs",
      productCount: 12,
      status: "Low Products",
      image: "/api/placeholder/60/60",
      createdAt: "2024-01-05",
    },
    {
      id: 5,
      name: "Salwar",
      description: "Comfortable salwar pants",
      productCount: 0,
      status: "Inactive",
      image: "/api/placeholder/60/60",
      createdAt: "2024-01-01",
    },
  ];

  const stats = [
    {
      title: "Total Categories",
      value: "24",
      icon: <Tag size={20} />,
      trend: "+3",
      isUp: true,
    },
    {
      title: "Active Categories",
      value: "18",
      icon: <TrendingUp size={20} />,
      trend: "+2",
      isUp: true,
    },
    {
      title: "Low Stock Categories",
      value: "4",
      icon: <AlertTriangle size={20} />,
      trend: "-1",
      isUp: false,
    },
    {
      title: "Total Products",
      value: "247",
      icon: <Tag size={20} />,
      trend: "+15",
      isUp: true,
    },
  ];

  const filteredCategories = categories.filter((category) => {
    const matchesSearch =
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = !filters.status || category.status === filters.status;

    let matchesProductCount = true;
    if (filters.productCount === "No Products") {
      matchesProductCount = category.productCount === 0;
    } else if (filters.productCount === "Low Products") {
      matchesProductCount =
        category.productCount > 0 && category.productCount < 20;
    } else if (filters.productCount === "High Products") {
      matchesProductCount = category.productCount >= 20;
    }

    return matchesSearch && matchesStatus && matchesProductCount;
  });

  const clearFilters = () => {
    setFilters({
      status: "",
      productCount: "",
    });
  };

  const hasActiveFilters = Object.values(filters).some((value) => value !== "");

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
              Categories Management
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) text-sm md:text-base mt-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Organize your Punjabi traditional wear categories
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
            <Plus size={18} />
            Add New Category
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

        {/* CATEGORIES TABLE */}
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
              Category Inventory
            </motion.h3>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-(--admin-text-muted)"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search categories..."
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
                          Status
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
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                          <option value="Low Products">Low Products</option>
                        </select>
                      </div>

                      {/* Product Count Filter */}
                      <div>
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Product Count
                        </label>
                        <select
                          value={filters.productCount}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              productCount: e.target.value,
                            }))
                          }
                          className="w-full bg-black border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold) focus:bg-(--admin-gold)/5 focus:text-(--admin-gold)"
                        >
                          <option value="">All Categories</option>
                          <option value="No Products">No Products (0)</option>
                          <option value="Low Products">
                            Low Products (1-19)
                          </option>
                          <option value="High Products">
                            High Products (20+)
                          </option>
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
                  <th className="p-3 md:p-5 text-left">Category</th>
                  <th className="p-3 md:p-5 text-left">Description</th>
                  <th className="p-3 md:p-5 text-left">Products</th>
                  <th className="p-3 md:p-5 text-left">Status</th>
                  <th className="p-3 md:p-5 text-left">Created</th>
                  <th className="p-3 md:p-5 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCategories.map((category) => (
                  <tr
                    key={category.id}
                    className="border-b-(--admin-border) hover:bg-(--admin-bg-hover) transition-colors"
                  >
                    <td className="p-3 md:p-5">
                      <div className="flex items-center gap-3">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-12 h-12 rounded-lg object-cover bg-(--admin-bg-light)"
                        />
                        <div>
                          <p className="text-white font-medium text-sm md:text-base">
                            {category.name}
                          </p>
                          <p className="text-(--admin-text-muted) text-[10px] md:text-xs">
                            ID: #{category.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 md:p-5 text-(--admin-text-muted) text-xs md:text-sm max-w-xs truncate">
                      {category.description}
                    </td>
                    <td className="p-3 md:p-5 text-white font-semibold text-sm md:text-base">
                      {category.productCount} products
                    </td>
                    <td className="p-3 md:p-5">
                      <span
                        className={`px-2 py-1 rounded-full text-[10px] md:text-xs font-bold ${
                          category.status === "Active"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : category.status === "Low Products"
                            ? "bg-amber-500/10 text-amber-500"
                            : "bg-rose-500/10 text-rose-500"
                        }`}
                      >
                        {category.status}
                      </span>
                    </td>
                    <td className="p-3 md:p-5 text-(--admin-text-muted) text-xs md:text-sm">
                      {new Date(category.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-3 md:p-5">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-(--admin-text-muted) hover:text-(--admin-gold) transition-colors">
                          <Eye size={16} />
                        </button>
                        <button className="p-2 text-(--admin-text-muted) hover:text-blue-500 transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 text-(--admin-text-muted) hover:text-rose-500 transition-colors">
                          <Trash2 size={16} />
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
              Showing {filteredCategories.length} of {categories.length}{" "}
              categories
            </p>
            <div className="flex items-center gap-1 md:gap-2">
              <button className="px-2 md:px-3 py-1 bg-(--admin-bg-light) border-(--admin-border) rounded text-xs md:text-sm hover:bg-(--admin-bg-hover) transition-colors">
                Previous
              </button>
              <button className="px-2 md:px-3 py-1 bg-(--admin-gold) text-black rounded text-xs md:text-sm font-medium">
                1
              </button>
              <button className="px-2 md:px-3 py-1 bg-(--admin-bg-light) border-(--admin-border) rounded text-xs md:text-sm hover:bg-(--admin-bg-hover) transition-colors">
                2
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
