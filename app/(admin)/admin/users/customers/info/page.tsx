"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Edit,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ShoppingCart,
  CreditCard,
  TrendingUp,
  Package,
  Star,
  User,
} from "lucide-react";
import Link from "next/link";

export default function CustomerInfoPage() {
  // Mock customer data - in real app this would come from props/params
  const customer = {
    id: 1,
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    avatar: "/api/placeholder/120/120",
    status: "Active",
    membership: "Gold",
    joinDate: "2023-01-15",
    totalOrders: 15,
    totalSpent: "₹45,678",
    averageOrderValue: "₹3,045",
    lastOrderDate: "2024-01-20",
    address: "123 MG Road, Bangalore, Karnataka 560001",
    dateOfBirth: "1995-06-15",
    gender: "Female",
  };

  const recentOrders = [
    {
      id: "#ORD-2024-001",
      date: "2024-01-20",
      items: 3,
      total: "₹8,999",
      status: "Delivered",
    },
    {
      id: "#ORD-2024-002",
      date: "2024-01-15",
      items: 2,
      total: "₹5,499",
      status: "Delivered",
    },
    {
      id: "#ORD-2024-003",
      date: "2024-01-10",
      items: 1,
      total: "₹2,999",
      status: "Delivered",
    },
  ];

  const stats = [
    {
      title: "Total Orders",
      value: customer.totalOrders.toString(),
      icon: <ShoppingCart size={20} />,
      color: "text-blue-500",
    },
    {
      title: "Total Spent",
      value: customer.totalSpent,
      icon: <CreditCard size={20} />,
      color: "text-green-500",
    },
    {
      title: "Avg Order Value",
      value: customer.averageOrderValue,
      icon: <TrendingUp size={20} />,
      color: "text-purple-500",
    },
    {
      title: "Membership",
      value: customer.membership,
      icon: <Star size={20} />,
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="min-h-screen bg-(--admin-bg) text-(--admin-text)">
      <div className="max-w-[1600px] mx-auto p-4 md:p-8">
        {/* HEADER */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/admin/users/customers">
            <button className="p-2 bg-(--admin-bg-light) border-(--admin-border) rounded-xl hover:bg-(--admin-bg-hover) transition-colors">
              <ArrowLeft size={20} />
            </button>
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Customer Profile
            </h1>
            <p className="text-(--admin-text-muted) mt-1">
              Detailed information for {customer.name}
            </p>
          </div>
          <Link href={`/admin/users/customers/edit/${customer.id}`}>
            <button className="flex items-center gap-2 bg-(--admin-gold) text-black px-6 py-3 rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors">
              <Edit size={16} />
              Edit Customer
            </button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CUSTOMER PROFILE CARD */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6">
              <div className="text-center mb-6">
                <img
                  src={customer.avatar}
                  alt={customer.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover bg-(--admin-bg-light)"
                />
                <h2 className="text-xl font-bold text-white mb-2">
                  {customer.name}
                </h2>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      customer.status === "Active"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : "bg-rose-500/10 text-rose-500"
                    }`}
                  >
                    {customer.status}
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-medium">
                    {customer.membership}
                  </span>
                </div>
                <p className="text-(--admin-text-muted) text-sm">
                  Customer since{" "}
                  {new Date(customer.joinDate).toLocaleDateString()}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-(--admin-gold)" />
                  <div>
                    <p className="text-(--admin-text-muted) text-xs">
                      Email
                    </p>
                    <p className="text-white text-sm">{customer.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-(--admin-gold)" />
                  <div>
                    <p className="text-(--admin-text-muted) text-xs">
                      Phone
                    </p>
                    <p className="text-white text-sm">{customer.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-(--admin-gold)" />
                  <div>
                    <p className="text-(--admin-text-muted) text-xs">
                      Address
                    </p>
                    <p className="text-white text-sm">{customer.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-(--admin-gold)" />
                  <div>
                    <p className="text-(--admin-text-muted) text-xs">
                      Date of Birth
                    </p>
                    <p className="text-white text-sm">
                      {new Date(customer.dateOfBirth).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <User size={16} className="text-(--admin-gold)" />
                  <div>
                    <p className="text-(--admin-text-muted) text-xs">
                      Gender
                    </p>
                    <p className="text-white text-sm">{customer.gender}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* STATS AND ORDERS */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* STATS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-(--admin-card-bg) border-(--admin-border) p-6 rounded-2xl hover:border-(--admin-border-hover) transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div
                      className={`p-2.5 bg-(--admin-bg-light) rounded-xl ${stat.color} group-hover:scale-110 transition-transform`}
                    >
                      {stat.icon}
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
            </div>

            {/* RECENT ORDERS */}
            <div className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Package size={20} className="text-(--admin-gold)" />
                  <h3 className="text-xl font-semibold text-white">
                    Recent Orders
                  </h3>
                </div>
                <Link href={`/admin/orders?customer=${customer.id}`}>
                  <button className="text-(--admin-gold) hover:text-(--admin-gold)/80 text-sm font-medium">
                    View All Orders →
                  </button>
                </Link>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-(--admin-bg-light) border border-(--admin-border) rounded-xl hover:bg-(--admin-bg-hover) transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-white font-medium">{order.id}</p>
                        <p className="text-(--admin-text-muted) text-sm">
                          {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-white font-semibold">{order.total}</p>
                      <p className="text-(--admin-text-muted) text-sm">
                        {order.items} items
                      </p>
                    </div>

                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === "Delivered"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : order.status === "Processing"
                            ? "bg-blue-500/10 text-blue-500"
                            : "bg-amber-500/10 text-amber-500"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {recentOrders.length === 0 && (
                <div className="text-center py-8">
                  <Package
                    size={48}
                    className="mx-auto text-(--admin-text-muted) mb-4"
                  />
                  <p className="text-(--admin-text-muted)">
                    No orders found
                  </p>
                </div>
              )}
            </div>

            {/* CUSTOMER INSIGHTS */}
            <div className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={20} className="text-(--admin-gold)" />
                <h3 className="text-xl font-semibold text-white">
                  Customer Insights
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-(--admin-text-muted) text-sm mb-1">
                      Last Order Date
                    </p>
                    <p className="text-white font-medium">
                      {new Date(customer.lastOrderDate).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-(--admin-text-muted) text-sm mb-1">
                      Customer Lifetime
                    </p>
                    <p className="text-white font-medium">
                      {Math.floor(
                        (new Date().getTime() -
                          new Date(customer.joinDate).getTime()) /
                          (1000 * 60 * 60 * 24)
                      )}{" "}
                      days
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-(--admin-text-muted) text-sm mb-1">
                      Order Frequency
                    </p>
                    <p className="text-white font-medium">
                      {customer.totalOrders > 0
                        ? `${(
                            customer.totalOrders /
                            Math.max(
                              1,
                              Math.floor(
                                (new Date().getTime() -
                                  new Date(customer.joinDate).getTime()) /
                                  (1000 * 60 * 60 * 24 * 30)
                              )
                            )
                          ).toFixed(1)} orders/month`
                        : "No orders yet"}
                    </p>
                  </div>

                  <div>
                    <p className="text-(--admin-text-muted) text-sm mb-1">
                      Loyalty Status
                    </p>
                    <p className="text-white font-medium">
                      {customer.membership === "Gold"
                        ? "High Value Customer"
                        : customer.membership === "Silver"
                        ? "Regular Customer"
                        : "New Customer"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
