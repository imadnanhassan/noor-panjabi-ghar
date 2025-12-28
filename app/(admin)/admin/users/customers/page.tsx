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
  Users,
  UserCheck,
  UserX,
  ShoppingCart,
  X,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    membership: "",
    orderCount: "",
    registrationDate: "",
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

  // Sample customers data
  const customers = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 98765 43210",
      status: "Active",
      membership: "Gold",
      orders: 15,
      totalSpent: "₹45,678",
      joinDate: "2023-01-15",
      avatar: "/api/placeholder/40/40",
      lastOrder: "2024-01-20",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      email: "rajesh.kumar@email.com",
      phone: "+91 87654 32109",
      status: "Active",
      membership: "Silver",
      orders: 8,
      totalSpent: "₹23,450",
      joinDate: "2023-03-22",
      avatar: "/api/placeholder/40/40",
      lastOrder: "2024-01-18",
    },
    {
      id: 3,
      name: "Anjali Patel",
      email: "anjali.patel@email.com",
      phone: "+91 76543 21098",
      status: "Inactive",
      membership: "Bronze",
      orders: 3,
      totalSpent: "₹8,900",
      joinDate: "2023-06-10",
      avatar: "/api/placeholder/40/40",
      lastOrder: "2023-11-15",
    },
    {
      id: 4,
      name: "Vikram Singh",
      email: "vikram.singh@email.com",
      phone: "+91 65432 10987",
      status: "Active",
      membership: "Gold",
      orders: 22,
      totalSpent: "₹67,890",
      joinDate: "2022-11-05",
      avatar: "/api/placeholder/40/40",
      lastOrder: "2024-01-22",
    },
    {
      id: 5,
      name: "Meera Joshi",
      email: "meera.joshi@email.com",
      phone: "+91 54321 09876",
      status: "Active",
      membership: "Silver",
      orders: 12,
      totalSpent: "₹34,567",
      joinDate: "2023-02-28",
      avatar: "/api/placeholder/40/40",
      lastOrder: "2024-01-19",
    },
  ];

  const stats = [
    {
      title: "Total Customers",
      value: "1,247",
      icon: <Users size={20} />,
      trend: "+12%",
      isUp: true,
    },
    {
      title: "Active Customers",
      value: "987",
      icon: <UserCheck size={20} />,
      trend: "+8%",
      isUp: true,
    },
    {
      title: "Inactive Customers",
      value: "260",
      icon: <UserX size={20} />,
      trend: "-3%",
      isUp: false,
    },
    {
      title: "Total Orders",
      value: "4,567",
      icon: <ShoppingCart size={20} />,
      trend: "+15%",
      isUp: true,
    },
  ];

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm);

    const matchesStatus = !filters.status || customer.status === filters.status;
    const matchesMembership =
      !filters.membership || customer.membership === filters.membership;

    let matchesOrderCount = true;
    if (filters.orderCount) {
      if (filters.orderCount === "1-5") {
        matchesOrderCount = customer.orders >= 1 && customer.orders <= 5;
      } else if (filters.orderCount === "6-15") {
        matchesOrderCount = customer.orders >= 6 && customer.orders <= 15;
      } else if (filters.orderCount === "16+") {
        matchesOrderCount = customer.orders >= 16;
      }
    }

    let matchesRegistrationDate = true;
    if (filters.registrationDate) {
      const joinYear = new Date(customer.joinDate).getFullYear();
      const currentYear = new Date().getFullYear();
      if (filters.registrationDate === "This Year") {
        matchesRegistrationDate = joinYear === currentYear;
      } else if (filters.registrationDate === "Last Year") {
        matchesRegistrationDate = joinYear === currentYear - 1;
      } else if (filters.registrationDate === "Older") {
        matchesRegistrationDate = joinYear < currentYear - 1;
      }
    }

    return (
      matchesSearch &&
      matchesStatus &&
      matchesMembership &&
      matchesOrderCount &&
      matchesRegistrationDate
    );
  });

  const clearFilters = () => {
    setFilters({
      status: "",
      membership: "",
      orderCount: "",
      registrationDate: "",
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
              className="text-xl md:text-3xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Customer Management
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) mt-1 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Manage your customer database and relationships
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/admin/users/customers/add">
              <button className="flex items-center gap-2 bg-(--admin-gold) text-black px-6 py-3 rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors">
                <Plus size={18} />
                Add New Customer
              </button>
            </Link>
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

        {/* CUSTOMERS TABLE */}
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
              Customer Directory
            </motion.h3>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-(--admin-text-muted)"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search customers..."
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
                          className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        >
                          <option value="">All Status</option>
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>

                      {/* Membership Filter */}
                      <div>
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Membership
                        </label>
                        <select
                          value={filters.membership}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              membership: e.target.value,
                            }))
                          }
                          className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        >
                          <option value="">All Memberships</option>
                          <option value="Gold">Gold</option>
                          <option value="Silver">Silver</option>
                          <option value="Bronze">Bronze</option>
                        </select>
                      </div>

                      {/* Order Count Filter */}
                      <div>
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Order Count
                        </label>
                        <select
                          value={filters.orderCount}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              orderCount: e.target.value,
                            }))
                          }
                          className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        >
                          <option value="">All Orders</option>
                          <option value="1-5">1-5 orders</option>
                          <option value="6-15">6-15 orders</option>
                          <option value="16+">16+ orders</option>
                        </select>
                      </div>

                      {/* Registration Date Filter */}
                      <div>
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Registration Date
                        </label>
                        <select
                          value={filters.registrationDate}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              registrationDate: e.target.value,
                            }))
                          }
                          className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        >
                          <option value="">All Dates</option>
                          <option value="This Year">This Year</option>
                          <option value="Last Year">Last Year</option>
                          <option value="Older">Older</option>
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
                  <th className="p-3 md:p-5 text-left">Customer</th>
                  <th className="p-3 md:p-5 text-left">Contact</th>
                  <th className="p-3 md:p-5 text-left">Membership</th>
                  <th className="p-3 md:p-5 text-left">Orders</th>
                  <th className="p-3 md:p-5 text-left hidden md:table-cell">
                    Total Spent
                  </th>
                  <th className="p-3 md:p-5 text-left">Status</th>
                  <th className="p-3 md:p-5 text-left hidden md:table-cell">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-b-(--admin-border) hover:bg-(--admin-bg-hover) transition-colors"
                  >
                    <td className="p-3 md:p-5">
                      <div className="flex items-center gap-2 md:gap-3">
                        <img
                          src={customer.avatar}
                          alt={customer.name}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover bg-(--admin-bg-light)"
                        />
                        <div>
                          <p className="text-white font-medium text-sm md:text-base">
                            {customer.name}
                          </p>
                          <p className="text-(--admin-text-muted) text-[10px] md:text-xs">
                            ID: #{customer.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 md:p-5">
                      <div>
                        <p className="text-(--admin-text-muted) text-xs md:text-sm">
                          {customer.email}
                        </p>
                        <p className="text-(--admin-text-muted) text-xs md:text-sm">
                          {customer.phone}
                        </p>
                      </div>
                    </td>
                    <td className="p-3 md:p-5">
                      <span
                        className={`px-2 py-1 rounded-full text-[10px] md:text-xs font-medium ${
                          customer.membership === "Gold"
                            ? "bg-yellow-500/10 text-yellow-500"
                            : customer.membership === "Silver"
                            ? "bg-gray-500/10 text-gray-400"
                            : "bg-amber-600/10 text-amber-600"
                        }`}
                      >
                        {customer.membership}
                      </span>
                    </td>
                    <td className="p-3 md:p-5 text-(--admin-text-muted) text-xs md:text-sm">
                      {customer.orders} orders
                    </td>
                    <td className="p-3 md:p-5 text-white font-semibold text-sm md:text-base hidden md:table-cell">
                      {customer.totalSpent}
                    </td>
                    <td className="p-3 md:p-5">
                      <span
                        className={`px-2 py-1 rounded-full text-[10px] md:text-xs font-bold ${
                          customer.status === "Active"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : "bg-rose-500/10 text-rose-500"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>
                    <td className="p-3 md:p-5 hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/users/customers/info/${customer.id}`}
                        >
                          <button className="p-2 text-(--admin-text-muted) hover:text-(--admin-gold) transition-colors">
                            <Eye size={16} />
                          </button>
                        </Link>
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
              Showing {filteredCustomers.length} of {customers.length} customers
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
