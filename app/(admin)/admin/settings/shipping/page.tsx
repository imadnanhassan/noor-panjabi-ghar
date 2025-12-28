"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Truck, Plus, Minus, Save, X } from "lucide-react";

export default function ShippingSettingsPage() {
  const [shippingMethods, setShippingMethods] = useState([
    {
      id: 1,
      name: "Standard Delivery",
      carrier: "Delhivery",
      baseRate: "100",
      additionalPerKg: "20",
      estimatedDays: "3-5",
      enabled: true,
    },
    {
      id: 2,
      name: "Express Delivery",
      carrier: "Blue Dart",
      baseRate: "200",
      additionalPerKg: "40",
      estimatedDays: "1-2",
      enabled: true,
    },
    {
      id: 3,
      name: "Same Day Delivery",
      carrier: "Local Courier",
      baseRate: "300",
      additionalPerKg: "50",
      estimatedDays: "Same Day",
      enabled: false,
    },
  ]);

  const [shippingZones, setShippingZones] = useState([
    {
      id: 1,
      name: "Local (Dhaka)",
      regions: "Dhaka, Gazipur, Narayanganj",
      baseRate: "50",
      additionalPerKg: "10",
      enabled: true,
    },
    {
      id: 2,
      name: "Regional (Bangladesh)",
      regions: "Chittagong, Khulna, Rajshahi, Sylhet, Barisal",
      baseRate: "150",
      additionalPerKg: "30",
      enabled: true,
    },
  ]);

  const [generalSettings, setGeneralSettings] = useState({
    freeShippingThreshold: "1000",
    maxWeightPerPackage: "10",
    defaultWeight: "0.5",
    handlingFee: "0",
    taxIncluded: false,
  });

  const addShippingMethod = () => {
    const newMethod = {
      id: Date.now(),
      name: "",
      carrier: "",
      baseRate: "",
      additionalPerKg: "",
      estimatedDays: "",
      enabled: true,
    };
    setShippingMethods([...shippingMethods, newMethod]);
  };

  const removeShippingMethod = (id: number) => {
    setShippingMethods(shippingMethods.filter((method) => method.id !== id));
  };

  const updateShippingMethod = (
    id: number,
    field: string,
    value: string | boolean
  ) => {
    setShippingMethods((methods) =>
      methods.map((method) =>
        method.id === id ? { ...method, [field]: value } : method
      )
    );
  };

  const addShippingZone = () => {
    const newZone = {
      id: Date.now(),
      name: "",
      regions: "",
      baseRate: "",
      additionalPerKg: "",
      enabled: true,
    };
    setShippingZones([...shippingZones, newZone]);
  };

  const removeShippingZone = (id: number) => {
    setShippingZones(shippingZones.filter((zone) => zone.id !== id));
  };

  const updateShippingZone = (
    id: number,
    field: string,
    value: string | boolean
  ) => {
    setShippingZones((zones) =>
      zones.map((zone) => (zone.id === id ? { ...zone, [field]: value } : zone))
    );
  };

  const handleGeneralChange = (field: string, value: string | boolean) => {
    setGeneralSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saving shipping settings:", {
      shippingMethods,
      shippingZones,
      generalSettings,
    });
    alert("Shipping settings saved successfully!");
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
              Shipping Settings
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) mt-1 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Configure shipping methods, zones, and delivery options
            </motion.p>
          </motion.div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="space-y-8"
        >
          {/* GENERAL SHIPPING SETTINGS */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
              <Truck size={18} />
              General Settings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Free Shipping Threshold (₹) *
                </label>
                <input
                  type="number"
                  min="0"
                  value={generalSettings.freeShippingThreshold}
                  onChange={(e) =>
                    handleGeneralChange("freeShippingThreshold", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Max Weight Per Package (kg) *
                </label>
                <input
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={generalSettings.maxWeightPerPackage}
                  onChange={(e) =>
                    handleGeneralChange("maxWeightPerPackage", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Default Package Weight (kg) *
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={generalSettings.defaultWeight}
                  onChange={(e) =>
                    handleGeneralChange("defaultWeight", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Handling Fee (₹) *
                </label>
                <input
                  type="number"
                  min="0"
                  value={generalSettings.handlingFee}
                  onChange={(e) =>
                    handleGeneralChange("handlingFee", e.target.value)
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">
                  Tax Included in Shipping
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={generalSettings.taxIncluded}
                    onChange={(e) =>
                      handleGeneralChange("taxIncluded", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-(--admin-bg-light) peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-(--admin-gold)/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--admin-gold)"></div>
                </label>
              </div>
            </div>
          </motion.div>

          {/* SHIPPING METHODS */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-white flex items-center gap-2">
                <Truck size={18} />
                Shipping Methods
              </h3>
              <button
                type="button"
                onClick={addShippingMethod}
                className="flex items-center gap-2 bg-(--admin-gold) text-black px-4 py-2 rounded-lg font-semibold hover:bg-(--admin-gold)/90 transition-colors"
              >
                <Plus size={16} />
                Add Method
              </button>
            </div>

            <div className="space-y-4">
              {shippingMethods.map((method, index) => (
                <motion.div
                  key={method.id}
                  className="border-(--admin-border) rounded-xl p-4 bg-(--admin-bg-light)"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
                    <div className="md:col-span-2">
                      <label className="block text-(--admin-text-muted) text-sm mb-2">
                        Method Name *
                      </label>
                      <input
                        type="text"
                        value={method.name}
                        onChange={(e) =>
                          updateShippingMethod(
                            method.id,
                            "name",
                            e.target.value
                          )
                        }
                        className="w-full bg-(--admin-bg) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-(--admin-text-muted) text-sm mb-2">
                        Carrier *
                      </label>
                      <input
                        type="text"
                        value={method.carrier}
                        onChange={(e) =>
                          updateShippingMethod(
                            method.id,
                            "carrier",
                            e.target.value
                          )
                        }
                        className="w-full bg-(--admin-bg) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-(--admin-text-muted) text-sm mb-2">
                        Base Rate (₹) *
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={method.baseRate}
                        onChange={(e) =>
                          updateShippingMethod(
                            method.id,
                            "baseRate",
                            e.target.value
                          )
                        }
                        className="w-full bg-(--admin-bg) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-(--admin-text-muted) text-sm mb-2">
                        Per Kg (₹) *
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={method.additionalPerKg}
                        onChange={(e) =>
                          updateShippingMethod(
                            method.id,
                            "additionalPerKg",
                            e.target.value
                          )
                        }
                        className="w-full bg-(--admin-bg) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        required
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Est. Days *
                        </label>
                        <input
                          type="text"
                          value={method.estimatedDays}
                          onChange={(e) =>
                            updateShippingMethod(
                              method.id,
                              "estimatedDays",
                              e.target.value
                            )
                          }
                          className="w-full bg-(--admin-bg) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-xs text-(--admin-text-muted)">
                          <input
                            type="checkbox"
                            checked={method.enabled}
                            onChange={(e) =>
                              updateShippingMethod(
                                method.id,
                                "enabled",
                                e.target.checked
                              )
                            }
                            className="rounded"
                          />
                          Enabled
                        </label>
                        {shippingMethods.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeShippingMethod(method.id)}
                            className="p-1 text-rose-500 hover:bg-rose-500/10 rounded transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SHIPPING ZONES */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-white flex items-center gap-2">
                <Truck size={18} />
                Shipping Zones
              </h3>
              <button
                type="button"
                onClick={addShippingZone}
                className="flex items-center gap-2 bg-(--admin-gold) text-black px-4 py-2 rounded-lg font-semibold hover:bg-(--admin-gold)/90 transition-colors"
              >
                <Plus size={16} />
                Add Zone
              </button>
            </div>

            <div className="space-y-4">
              {shippingZones.map((zone, index) => (
                <motion.div
                  key={zone.id}
                  className="border-(--admin-border) rounded-xl p-4 bg-(--admin-bg-light)"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                    <div className="md:col-span-2">
                      <label className="block text-(--admin-text-muted) text-sm mb-2">
                        Zone Name *
                      </label>
                      <input
                        type="text"
                        value={zone.name}
                        onChange={(e) =>
                          updateShippingZone(zone.id, "name", e.target.value)
                        }
                        className="w-full bg-(--admin-bg) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-(--admin-text-muted) text-sm mb-2">
                        Regions *
                      </label>
                      <input
                        type="text"
                        value={zone.regions}
                        onChange={(e) =>
                          updateShippingZone(zone.id, "regions", e.target.value)
                        }
                        className="w-full bg-(--admin-bg) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        placeholder="City1, City2, State"
                        required
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Base Rate (₹) *
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={zone.baseRate}
                          onChange={(e) =>
                            updateShippingZone(
                              zone.id,
                              "baseRate",
                              e.target.value
                            )
                          }
                          className="w-full bg-(--admin-bg) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-xs text-(--admin-text-muted)">
                          <input
                            type="checkbox"
                            checked={zone.enabled}
                            onChange={(e) =>
                              updateShippingZone(
                                zone.id,
                                "enabled",
                                e.target.checked
                              )
                            }
                            className="rounded"
                          />
                          Enabled
                        </label>
                        {shippingZones.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeShippingZone(zone.id)}
                            className="p-1 text-rose-500 hover:bg-rose-500/10 rounded transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SUBMIT BUTTONS */}
          <motion.div
            className="flex items-center justify-end gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <button
              type="button"
              className="flex items-center gap-2 bg-(--admin-bg-light) border-(--admin-border) text-(--admin-text-muted) px-6 py-3 rounded-xl font-semibold hover:bg-(--admin-bg-hover) transition-colors"
            >
              <X size={18} />
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-(--admin-gold) text-black px-8 py-3 rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors"
            >
              <Save size={18} />
              Save Changes
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
