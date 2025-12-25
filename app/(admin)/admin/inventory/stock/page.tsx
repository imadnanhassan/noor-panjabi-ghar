"use client";

import { useState } from "react";

interface StockItem {
  id: string;
  productName: string;
  currentStock: number;
  minStock: number;
  location: string;
  status: "normal" | "low" | "out";
}

const mockStock: StockItem[] = [
  {
    id: "1",
    productName: "Panjabi Dress A",
    currentStock: 10,
    minStock: 5,
    location: "Main Warehouse",
    status: "normal",
  },
  {
    id: "2",
    productName: "Panjabi Dress B",
    currentStock: 3,
    minStock: 5,
    location: "Main Warehouse",
    status: "low",
  },
];

export default function StockManagement() {
  const [stockItems, setStockItems] = useState<StockItem[]>(mockStock);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<StockItem | null>(null);
  const [adjustment, setAdjustment] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "bg-green-100 text-green-800";
      case "low":
        return "bg-yellow-100 text-yellow-800";
      case "out":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleAdjustStock = (item: StockItem) => {
    setSelectedItem(item);
    setAdjustment("");
    setShowModal(true);
  };

  const handleSaveAdjustment = () => {
    if (!selectedItem) return;

    const adjustAmount = parseInt(adjustment);
    if (isNaN(adjustAmount)) return;

    setStockItems((items) =>
      items.map((item) => {
        if (item.id === selectedItem.id) {
          const newStock = Math.max(0, item.currentStock + adjustAmount);
          let status: "normal" | "low" | "out" = "normal";
          if (newStock === 0) status = "out";
          else if (newStock <= item.minStock) status = "low";
          return { ...item, currentStock: newStock, status };
        }
        return item;
      })
    );

    setShowModal(false);
    setSelectedItem(null);
  };

  const lowStockItems = stockItems.filter(
    (item) => item.status === "low" || item.status === "out"
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Stock Management</h1>

      {lowStockItems.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">
            Low Stock Alerts
          </h3>
          <ul className="list-disc list-inside text-yellow-700">
            {lowStockItems.map((item) => (
              <li key={item.id}>
                {item.productName}: {item.currentStock} units remaining (min:{" "}
                {item.minStock})
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Current Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Min Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {stockItems.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.productName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.currentStock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.minStock}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status === "normal"
                      ? "Normal"
                      : item.status === "low"
                      ? "Low Stock"
                      : "Out of Stock"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleAdjustStock(item)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Adjust Stock
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Adjust Stock</h2>
            <p className="mb-4">Product: {selectedItem.productName}</p>
            <p className="mb-4">Current Stock: {selectedItem.currentStock}</p>

            <div>
              <label className="block text-sm font-medium mb-1">
                Adjustment Amount (use negative for reduction)
              </label>
              <input
                type="number"
                value={adjustment}
                onChange={(e) => setAdjustment(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="e.g., 10 or -5"
              />
            </div>

            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveAdjustment}
                className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
              >
                Save Adjustment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
