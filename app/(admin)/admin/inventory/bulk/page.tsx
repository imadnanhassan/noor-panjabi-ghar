"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Upload,
  Download,
  FileText,
  Database,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  X,
  Plus,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";

export default function BulkOperationsPage() {
  const [activeTab, setActiveTab] = useState("import");
  const [importFile, setImportFile] = useState<File | null>(null);
  const [importProgress, setImportProgress] = useState(0);
  const [isImporting, setIsImporting] = useState(false);

  // Sample bulk operations history
  const operationsHistory = [
    {
      id: 1,
      type: "Import",
      fileName: "inventory_update_jan2024.csv",
      status: "Completed",
      records: 245,
      timestamp: "2024-01-15 14:30",
      user: "Admin",
    },
    {
      id: 2,
      type: "Export",
      fileName: "full_inventory_export.csv",
      status: "Completed",
      records: 1250,
      timestamp: "2024-01-14 09:15",
      user: "Manager",
    },
    {
      id: 3,
      type: "Bulk Update",
      fileName: "price_update_batch.csv",
      status: "Failed",
      records: 0,
      timestamp: "2024-01-13 16:45",
      user: "Admin",
      error: "Invalid price format in row 15",
    },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImportFile(file);
    }
  };

  const handleImport = () => {
    if (!importFile) return;

    setIsImporting(true);
    setImportProgress(0);

    // Simulate import progress
    const interval = setInterval(() => {
      setImportProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsImporting(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleExport = (type: string) => {
    // Handle export logic
    console.log("Exporting:", type);
  };

  const tabs = [
    { id: "import", label: "Import Data", icon: <Upload size={16} /> },
    { id: "export", label: "Export Data", icon: <Download size={16} /> },
    { id: "bulk-update", label: "Bulk Update", icon: <RefreshCw size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-(--admin-bg) text-(--admin-text)">
      <div className="max-w-[1600px] mx-auto p-4 md:p-8 space-y-8">
        {/* HEADER */}
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
            Bulk Operations
          </motion.h1>
          <motion.p
            className="text-(--admin-text-muted) text-sm md:text-base mt-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Import, export, and perform bulk operations on your inventory
          </motion.p>
        </motion.div>

        {/* TABS */}
        <motion.div
          className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-1 mb-6 border-b border-(--admin-border)">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-(--admin-gold) border-b-2 border-(--admin-gold)"
                    : "text-(--admin-text-muted) hover:text-white"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* IMPORT TAB */}
          {activeTab === "import" && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Import Inventory Data
                  </h3>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-(--admin-border) rounded-xl p-8 text-center">
                      <input
                        type="file"
                        accept=".csv,.xlsx,.xls"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload
                          size={48}
                          className="mx-auto text-(--admin-text-muted) mb-4"
                        />
                        <p className="text-(--admin-text-muted) mb-2">
                          Click to upload CSV or Excel file
                        </p>
                        <p className="text-(--admin-text-muted) text-sm">
                          Maximum file size: 10MB
                        </p>
                      </label>
                    </div>

                    {importFile && (
                      <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <FileText
                              size={20}
                              className="text-(--admin-gold)"
                            />
                            <div>
                              <p className="text-white font-medium">
                                {importFile.name}
                              </p>
                              <p className="text-(--admin-text-muted) text-sm">
                                {(importFile.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => setImportFile(null)}
                            className="text-(--admin-text-muted) hover:text-rose-500 transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">
                        Import Options
                      </h4>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm">
                          <input type="checkbox" className="rounded" />
                          <span className="text-(--admin-text-muted)">
                            Update existing products
                          </span>
                        </label>
                        <label className="flex items-center gap-2 text-sm">
                          <input type="checkbox" className="rounded" />
                          <span className="text-(--admin-text-muted)">
                            Skip duplicate SKUs
                          </span>
                        </label>
                        <label className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            className="rounded"
                            defaultChecked
                          />
                          <span className="text-(--admin-text-muted)">
                            Validate data before import
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Import Progress
                  </h3>
                  {isImporting ? (
                    <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-white font-medium">
                          Importing data...
                        </span>
                        <span className="text-(--admin-gold) font-semibold">
                          {importProgress}%
                        </span>
                      </div>
                      <div className="w-full bg-(--admin-bg-hover) rounded-full h-2">
                        <div
                          className="bg-(--admin-gold) h-2 rounded-full transition-all duration-300"
                          style={{ width: `${importProgress}%` }}
                        ></div>
                      </div>
                      <p className="text-(--admin-text-muted) text-sm mt-2">
                        Processing records... Please wait.
                      </p>
                    </div>
                  ) : (
                    <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-6 text-center">
                      <Database
                        size={48}
                        className="mx-auto text-(--admin-text-muted) mb-4"
                      />
                      <p className="text-(--admin-text-muted)">
                        Upload a file to start importing data
                      </p>
                    </div>
                  )}

                  <div className="mt-6">
                    <button
                      onClick={handleImport}
                      disabled={!importFile || isImporting}
                      className="w-full flex items-center justify-center gap-2 bg-(--admin-gold) text-black px-6 py-3 rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Upload size={18} />
                      {isImporting ? "Importing..." : "Start Import"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* EXPORT TAB */}
          {activeTab === "export" && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-6 text-center cursor-pointer hover:border-(--admin-gold) transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleExport("full")}
                >
                  <Database
                    size={32}
                    className="mx-auto text-(--admin-gold) mb-4"
                  />
                  <h3 className="text-white font-semibold mb-2">
                    Full Inventory
                  </h3>
                  <p className="text-(--admin-text-muted) text-sm">
                    Export all products and variants
                  </p>
                </motion.div>

                <motion.div
                  className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-6 text-center cursor-pointer hover:border-(--admin-gold) transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleExport("low-stock")}
                >
                  <AlertCircle
                    size={32}
                    className="mx-auto text-amber-500 mb-4"
                  />
                  <h3 className="text-white font-semibold mb-2">
                    Low Stock Items
                  </h3>
                  <p className="text-(--admin-text-muted) text-sm">
                    Export items below threshold
                  </p>
                </motion.div>

                <motion.div
                  className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-6 text-center cursor-pointer hover:border-(--admin-gold) transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleExport("out-of-stock")}
                >
                  <X size={32} className="mx-auto text-rose-500 mb-4" />
                  <h3 className="text-white font-semibold mb-2">
                    Out of Stock
                  </h3>
                  <p className="text-(--admin-text-muted) text-sm">
                    Export items with zero stock
                  </p>
                </motion.div>
              </div>

              <div className="bg-(--admin-bg-light) border border-(--admin-border) rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4">
                  Export Options
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-(--admin-text-muted) text-sm mb-2">
                      File Format
                    </label>
                    <select className="w-full bg-black border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)">
                      <option value="csv">CSV</option>
                      <option value="xlsx">Excel (.xlsx)</option>
                      <option value="xls">Excel (.xls)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-(--admin-text-muted) text-sm mb-2">
                      Date Range
                    </label>
                    <select className="w-full bg-black border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)">
                      <option value="all">All Time</option>
                      <option value="last-30">Last 30 Days</option>
                      <option value="last-90">Last 90 Days</option>
                      <option value="custom">Custom Range</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* BULK UPDATE TAB */}
          {activeTab === "bulk-update" && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Bulk Price Update
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-(--admin-text-muted) text-sm mb-2">
                        Update Type
                      </label>
                      <select className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)">
                        <option value="fixed">Set Fixed Price</option>
                        <option value="percentage">Percentage Change</option>
                        <option value="increase">Increase by Amount</option>
                        <option value="decrease">Decrease by Amount</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-(--admin-text-muted) text-sm mb-2">
                        Value
                      </label>
                      <input
                        type="number"
                        placeholder="Enter value"
                        className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                      />
                    </div>
                    <div>
                      <label className="block text-(--admin-text-muted) text-sm mb-2">
                        Apply to Products
                      </label>
                      <select className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)">
                        <option value="all">All Products</option>
                        <option value="category">Specific Category</option>
                        <option value="selected">Selected Products</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Bulk Stock Update
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-(--admin-text-muted) text-sm mb-2">
                        Operation
                      </label>
                      <select className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)">
                        <option value="set">Set Stock Level</option>
                        <option value="add">Add to Current Stock</option>
                        <option value="subtract">
                          Subtract from Current Stock
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-(--admin-text-muted) text-sm mb-2">
                        Quantity
                      </label>
                      <input
                        type="number"
                        placeholder="Enter quantity"
                        className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="confirm-bulk"
                        className="rounded"
                      />
                      <label
                        htmlFor="confirm-bulk"
                        className="text-(--admin-text-muted) text-sm"
                      >
                        I confirm this bulk operation
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button className="px-6 py-3 bg-(--admin-bg-light) border border-(--admin-border) text-white rounded-xl font-medium hover:bg-(--admin-bg-hover) transition-colors">
                  Preview Changes
                </button>
                <button className="px-6 py-3 bg-(--admin-gold) text-black rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors">
                  Apply Changes
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* OPERATIONS HISTORY */}
        <motion.div
          className="bg-(--admin-card-bg) border-(--admin-border) rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-white mb-6">
            Recent Operations
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-(--admin-bg-light) text-(--admin-text-muted) text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-3 text-left">Operation</th>
                  <th className="p-3 text-left">File</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Records</th>
                  <th className="p-3 text-left">User</th>
                  <th className="p-3 text-left">Timestamp</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {operationsHistory.map((operation) => (
                  <tr
                    key={operation.id}
                    className="border-b border-(--admin-border)"
                  >
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        {operation.type === "Import" ? (
                          <Upload size={16} className="text-(--admin-gold)" />
                        ) : operation.type === "Export" ? (
                          <Download size={16} className="text-emerald-500" />
                        ) : (
                          <RefreshCw size={16} className="text-blue-500" />
                        )}
                        <span className="text-white text-sm">
                          {operation.type}
                        </span>
                      </div>
                    </td>
                    <td className="p-3 text-white text-sm">
                      {operation.fileName}
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-bold ${
                          operation.status === "Completed"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : "bg-rose-500/10 text-rose-500"
                        }`}
                      >
                        {operation.status}
                      </span>
                    </td>
                    <td className="p-3 text-white text-sm">
                      {operation.records}
                    </td>
                    <td className="p-3 text-(--admin-text-muted) text-sm">
                      {operation.user}
                    </td>
                    <td className="p-3 text-(--admin-text-muted) text-sm">
                      {operation.timestamp}
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-(--admin-text-muted) hover:text-(--admin-gold) transition-colors">
                          <Eye size={14} />
                        </button>
                        {operation.error && (
                          <button className="p-1 text-(--admin-text-muted) hover:text-rose-500 transition-colors">
                            <AlertCircle size={14} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
