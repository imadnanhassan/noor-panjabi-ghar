"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Phone,
  Mail,
  MapPin,
  Building,
  Truck,
  Star,
  X,
  ChevronDown,
} from "lucide-react";

export default function SuppliersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    category: "",
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

  // Sample suppliers data
  const suppliers = [
    {
      id: 1,
      name: "Textile House",
      category: "Fabric Supplier",
      contactPerson: "Rajesh Kumar",
      email: "rajesh@textilehouse.com",
      phone: "+91 98765 43210",
      address: "123 Textile Market, Surat, Gujarat",
      rating: 4.8,
      totalOrders: 245,
      totalValue: "₹12,45,000",
      status: "Active",
      lastOrder: "2024-01-15",
      paymentTerms: "Net 30",
      products: ["Salwar Kameez", "Kurta", "Dupatta"],
    },
    {
      id: 2,
      name: "Fashion Fabrics",
      category: "Clothing Supplier",
      contactPerson: "Priya Sharma",
      email: "priya@fashionfabrics.in",
      phone: "+91 87654 32109",
      address: "456 Fashion Street, Mumbai, Maharashtra",
      rating: 4.6,
      totalOrders: 189,
      totalValue: "₹9,80,000",
      status: "Active",
      lastOrder: "2024-01-14",
      paymentTerms: "Net 15",
      products: ["Kurta", "Salwar"],
    },
    {
      id: 3,
      name: "Silk Suppliers",
      category: "Specialty Fabric",
      contactPerson: "Amit Patel",
      email: "amit@silksuppliers.com",
      phone: "+91 76543 21098",
      address: "789 Silk Road, Varanasi, Uttar Pradesh",
      rating: 4.9,
      totalOrders: 156,
      totalValue: "₹8,50,000",
      status: "Active",
      lastOrder: "2024-01-13",
      paymentTerms: "Net 45",
      products: ["Dupatta", "Lehenga"],
    },
    {
      id: 4,
      name: "Royal Textiles",
      category: "Premium Supplier",
      contactPerson: "Sunita Gupta",
      email: "sunita@royaltextiles.in",
      phone: "+91 65432 10987",
      address: "321 Royal Plaza, Jaipur, Rajasthan",
      rating: 4.7,
      totalOrders: 98,
      totalValue: "₹15,20,000",
      status: "Active",
      lastOrder: "2024-01-12",
      paymentTerms: "Net 30",
      products: ["Lehenga", "Salwar Kameez"],
    },
    {
      id: 5,
      name: "Cotton Mills",
      category: "Raw Material",
      contactPerson: "Vikram Singh",
      email: "vikram@cottonmills.com",
      phone: "+91 54321 09876",
      address: "654 Cotton Valley, Punjab",
      rating: 4.4,
      totalOrders: 134,
      totalValue: "₹6,80,000",
      status: "Inactive",
      lastOrder: "2024-01-10",
      paymentTerms: "Net 60",
      products: ["Salwar"],
    },
  ];

  const stats = [
    {
      title: "Total Suppliers",
      value: "24",
      icon: <Building size={20} />,
      trend: "+2",
      isUp: true,
    },
    {
      title: "Active Suppliers",
      value: "20",
      icon: <Truck size={20} />,
      trend: "+1",
      isUp: true,
    },
    {
      title: "Avg Rating",
      value: "4.6",
      icon: <Star size={20} />,
      trend: "+0.2",
      isUp: true,
    },
    {
      title: "Total Value",
      value: "₹52.5L",
      icon: <Building size={20} />,
      trend: "+8.5%",
      isUp: true,
    },
  ];

  const filteredSuppliers = suppliers.filter((supplier) => {
    const matchesSearch =
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = !filters.status || supplier.status === filters.status;
    const matchesCategory =
      !filters.category || supplier.category === filters.category;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const clearFilters = () => {
    setFilters({
      status: "",
      category: "",
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
              Suppliers Management
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) text-sm md:text-base mt-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Manage your supplier relationships and procurement
            </motion.p>
          </motion.div>
          <Link href="/admin/inventory/suppliers/add">
            <motion.button
              className="flex items-center gap-2 bg-(--admin-gold) text-black px-6 py-3 rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus size={18} />
              Add Supplier
            </motion.button>
          </Link>
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

        {/* SUPPLIERS TABLE */}
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
              Supplier Directory
            </motion.h3>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-(--admin-text-muted)"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search suppliers..."
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
                          <option value="Fabric Supplier">
                            Fabric Supplier
                          </option>
                          <option value="Clothing Supplier">
                            Clothing Supplier
                          </option>
                          <option value="Specialty Fabric">
                            Specialty Fabric
                          </option>
                          <option value="Premium Supplier">
                            Premium Supplier
                          </option>
                          <option value="Raw Material">Raw Material</option>
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
                  <th className="p-3 md:p-5 text-left">Supplier</th>
                  <th className="p-3 md:p-5 text-left">Contact</th>
                  <th className="p-3 md:p-5 text-left">Category</th>
                  <th className="p-3 md:p-5 text-left">Rating</th>
                  <th className="p-3 md:p-5 text-left">Orders</th>
                  <th className="p-3 md:p-5 text-left">Status</th>
                  <th className="p-3 md:p-5 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSuppliers.map((supplier) => (
                  <motion.tr
                    key={supplier.id}
                    className="border-b-(--admin-border) hover:bg-(--admin-bg-hover) transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.1 + supplier.id * 0.05,
                    }}
                    whileHover={{
                      backgroundColor: "var(--admin-bg-hover)",
                    }}
                  >
                    <td className="p-3 md:p-5">
                      <div>
                        <p className="text-white font-medium text-sm md:text-base">
                          {supplier.name}
                        </p>
                        <p className="text-(--admin-text-muted) text-[10px] md:text-xs flex items-center gap-1">
                          <MapPin size={12} />
                          {supplier.address.split(",")[1]?.trim()},{" "}
                          {supplier.address.split(",")[2]?.trim()}
                        </p>
                      </div>
                    </td>
                    <td className="p-3 md:p-5">
                      <div className="space-y-1">
                        <p className="text-white text-sm font-medium">
                          {supplier.contactPerson}
                        </p>
                        <div className="flex items-center gap-1 text-(--admin-text-muted) text-xs">
                          <Mail size={12} />
                          {supplier.email}
                        </div>
                        <div className="flex items-center gap-1 text-(--admin-text-muted) text-xs">
                          <Phone size={12} />
                          {supplier.phone}
                        </div>
                      </div>
                    </td>
                    <td className="p-3 md:p-5 text-(--admin-text-muted) text-xs md:text-sm">
                      {supplier.category}
                    </td>
                    <td className="p-3 md:p-5">
                      <div className="flex items-center gap-1">
                        <Star
                          size={14}
                          className="text-yellow-500 fill-current"
                        />
                        <span className="text-white font-semibold text-sm">
                          {supplier.rating}
                        </span>
                      </div>
                    </td>
                    <td className="p-3 md:p-5">
                      <div>
                        <p className="text-white font-semibold text-sm">
                          {supplier.totalOrders}
                        </p>
                        <p className="text-(--admin-gold) text-xs">
                          {supplier.totalValue}
                        </p>
                      </div>
                    </td>
                    <td className="p-3 md:p-5">
                      <span
                        className={`px-2 py-1 rounded-full text-[10px] md:text-xs font-bold ${
                          supplier.status === "Active"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : "bg-rose-500/10 text-rose-500"
                        }`}
                      >
                        {supplier.status}
                      </span>
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
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 md:p-6 border-t-(--admin-border) flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-(--admin-text-muted) text-xs md:text-sm">
              Showing {filteredSuppliers.length} of {suppliers.length} suppliers
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
