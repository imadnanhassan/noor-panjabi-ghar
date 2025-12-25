"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  Package,
  AlertTriangle,
  ShoppingCart,
  DollarSign,
  Eye,
  Settings,
} from "lucide-react";

const quickLinks = [
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
    color: "bg-blue-500",
  },
  {
    title: "Customers",
    href: "/admin/customers",
    icon: Users,
    color: "bg-green-500",
  },
  {
    title: "Products",
    href: "/admin/store/products",
    icon: Package,
    color: "bg-purple-500",
  },
  {
    title: "Inventory",
    href: "/admin/inventory/stock",
    icon: AlertTriangle,
    color: "bg-red-500",
  },
  {
    title: "Reports",
    href: "/admin/orders/reports",
    icon: TrendingUp,
    color: "bg-yellow-500",
  },
  {
    title: "Settings",
    href: "/admin/settings/general",
    icon: Settings,
    color: "bg-gray-500",
  },
];

const recentActivities = [
  {
    id: 1,
    action: "New order placed",
    time: "2 minutes ago",
    user: "John Doe",
  },
  { id: 2, action: "Product updated", time: "15 minutes ago", user: "Admin" },
  {
    id: 3,
    action: "Customer registered",
    time: "1 hour ago",
    user: "Jane Smith",
  },
  { id: 4, action: "Low stock alert", time: "2 hours ago", user: "System" },
];

export default function AdminDashboard() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gray-50 min-h-screen"
    >
      {/* Welcome Section */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, Admin!
        </h1>
        <p className="text-gray-600">{currentDate}</p>
        <p className="text-gray-500 mt-2">
          Here's what's happening with your store today.
        </p>
      </motion.div>

      {/* Metrics Cards */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Total Orders
              </h3>
              <p className="text-3xl font-bold text-blue-600">1,234</p>
            </div>
            <ShoppingCart className="h-8 w-8 text-blue-500" />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Total Revenue
              </h3>
              <p className="text-3xl font-bold text-green-600">$45,678</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-500" />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Total Customers
              </h3>
              <p className="text-3xl font-bold text-purple-600">567</p>
            </div>
            <Users className="h-8 w-8 text-purple-500" />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Low Stock Items
              </h3>
              <p className="text-3xl font-bold text-red-600">12</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
        </motion.div>
      </motion.div>

      {/* Charts Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
      >
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Sales Overview
          </h2>
          <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
            <p className="text-gray-500">
              Chart Placeholder - Sales data visualization
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Order Status
          </h2>
          <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
            <p className="text-gray-500">
              Chart Placeholder - Order status distribution
            </p>
          </div>
        </div>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Quick Links
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href={link.href}>
                <div
                  className={`p-4 rounded-lg shadow-md ${link.color} text-white cursor-pointer transition-all duration-300 hover:shadow-lg`}
                >
                  <link.icon className="h-8 w-8 mb-2" />
                  <h3 className="font-semibold">{link.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-800">{activity.action}</p>
                <p className="text-sm text-gray-500">by {activity.user}</p>
              </div>
              <span className="text-sm text-gray-400">{activity.time}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
