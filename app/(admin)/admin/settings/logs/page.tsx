"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  FileText,
  Search,
  Filter,
  AlertTriangle,
  Info,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  RefreshCw,
} from "lucide-react";

export default function SystemLogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");

  // Sample logs data
  const logs = [
    {
      id: 1,
      timestamp: "2024-01-15 14:30:25",
      level: "error",
      message: "Database connection failed - Connection timeout",
      source: "database.js",
      user: "system",
    },
    {
      id: 2,
      timestamp: "2024-01-15 14:28:12",
      level: "warning",
      message: "High memory usage detected - 85% utilization",
      source: "monitor.js",
      user: "system",
    },
    {
      id: 3,
      timestamp: "2024-01-15 14:25:45",
      level: "info",
      message: "User authentication successful",
      source: "auth.js",
      user: "john.doe",
    },
    {
      id: 4,
      timestamp: "2024-01-15 14:20:33",
      level: "success",
      message: "Order #12345 processed successfully",
      source: "orders.js",
      user: "admin",
    },
    {
      id: 5,
      timestamp: "2024-01-15 14:18:22",
      level: "info",
      message: "Cache cleared successfully",
      source: "cache.js",
      user: "system",
    },
    {
      id: 6,
      timestamp: "2024-01-15 14:15:10",
      level: "error",
      message: "Payment gateway timeout - Transaction failed",
      source: "payment.js",
      user: "jane.smith",
    },
    {
      id: 7,
      timestamp: "2024-01-15 14:12:05",
      level: "warning",
      message: "Disk space running low - 92% used",
      source: "storage.js",
      user: "system",
    },
    {
      id: 8,
      timestamp: "2024-01-15 14:10:58",
      level: "info",
      message: "New user registered: mike.wilson@example.com",
      source: "users.js",
      user: "mike.wilson",
    },
  ];

  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.user.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLevel = selectedLevel === "all" || log.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "error":
        return <XCircle size={16} className="text-rose-500" />;
      case "warning":
        return <AlertTriangle size={16} className="text-amber-500" />;
      case "success":
        return <CheckCircle size={16} className="text-emerald-500" />;
      default:
        return <Info size={16} className="text-blue-500" />;
    }
  };

  const getLevelBadge = (level: string) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-bold uppercase";
    switch (level) {
      case "error":
        return `${baseClasses} bg-rose-500/10 text-rose-500`;
      case "warning":
        return `${baseClasses} bg-amber-500/10 text-amber-500`;
      case "success":
        return `${baseClasses} bg-emerald-500/10 text-emerald-500`;
      default:
        return `${baseClasses} bg-blue-500/10 text-blue-500`;
    }
  };

  return (
    <div className="min-h-screen bg-(--admin-bg) text-(--admin-text)">
      <div className="max-w-[1600px] mx-auto p-4 md:p-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <button className="flex items-center gap-2 text-(--admin-text-muted) hover:text-(--admin-gold) transition-colors mb-4">
              <ArrowLeft size={16} />
              Back to Settings
            </button>
            <motion.h1
              className="text-xl md:text-3xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              System Logs
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) mt-1 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Monitor application logs, errors, and system activities
            </motion.p>
          </motion.div>
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="flex items-center gap-2 bg-(--admin-gold) text-black px-4 py-2 rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors">
              <RefreshCw size={16} />
              Refresh
            </button>
            <button className="flex items-center gap-2 bg-(--admin-bg-light) border-(--admin-border) text-(--admin-text-muted) px-4 py-2 rounded-xl font-semibold hover:bg-(--admin-bg-hover) transition-colors">
              <Download size={16} />
              Export
            </button>
          </motion.div>
        </div>

        {/* FILTERS */}
        <motion.div
          className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-(--admin-text-muted)"
                />
                <input
                  type="text"
                  placeholder="Search logs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-(--admin-text-muted)" />
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) text-white"
                style={{
                  backgroundColor: "var(--admin-bg-light)",
                  color: "white",
                }}
              >
                <option value="all">All Levels</option>
                <option value="error">Errors</option>
                <option value="warning">Warnings</option>
                <option value="info">Info</option>
                <option value="success">Success</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* LOGS TABLE */}
        <motion.div
          className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-(--admin-bg-light)">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-(--admin-text-muted) uppercase tracking-wider">
                    Level
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-(--admin-text-muted) uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-(--admin-text-muted) uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-(--admin-text-muted) uppercase tracking-wider">
                    Source
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-(--admin-text-muted) uppercase tracking-wider">
                    User
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-(--admin-border)">
                {filteredLogs.map((log, index) => (
                  <motion.tr
                    key={log.id}
                    className="hover:bg-(--admin-bg-light)/50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getLevelIcon(log.level)}
                        <span className={getLevelBadge(log.level)}>
                          {log.level}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-(--admin-text-muted)">
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        {log.timestamp}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-white max-w-md">
                      <div className="truncate" title={log.message}>
                        {log.message}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-(--admin-text-muted)">
                      <code className="bg-(--admin-bg) px-2 py-1 rounded text-xs">
                        {log.source}
                      </code>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-(--admin-gold)">
                      {log.user}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredLogs.length === 0 && (
            <div className="text-center py-12">
              <FileText
                size={48}
                className="mx-auto text-(--admin-text-muted) mb-4"
              />
              <p className="text-(--admin-text-muted)">
                No logs found matching your criteria.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
