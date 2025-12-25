"use client";

import { useState } from "react";

const tabs = [
  { id: "general", label: "General Settings" },
  { id: "policies", label: "Policies" },
  { id: "business", label: "Business Operations" },
  { id: "online", label: "Online Presence" },
  { id: "payment", label: "Payment & Commerce" },
  { id: "notifications", label: "Notifications" },
];

export default function StoreManagement() {
  const [activeTab, setActiveTab] = useState("general");
  const [formData, setFormData] = useState({
    // General
    storeName: "",
    description: "",
    logo: "",
    contactPhone: "",
    contactEmail: "",
    address: "",
    // Policies
    returnPolicy: "",
    shippingPolicy: "",
    privacyPolicy: "",
    termsOfService: "",
    warranty: "",
    // Business
    businessHours: "",
    holidays: "",
    operatingRegions: "",
    deliveryZones: "",
    // Online
    socialMediaLinks: "",
    websiteUrls: "",
    contactFormSettings: "",
    seoMetaTags: "",
    // Payment
    paymentGateway: "",
    supportedCurrencies: "",
    taxRate: "",
    discountCodes: "",
    // Notifications
    emailTemplates: "",
    smsSettings: "",
    alertConfigurations: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    // TODO: Call API to save store settings
    console.log("Saving store settings:", formData);
    alert("Store settings saved successfully!");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Store Name
              </label>
              <input
                type="text"
                value={formData.storeName}
                onChange={(e) => handleInputChange("storeName", e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Noor Panjabi Ghar"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                className="w-full p-2 border rounded"
                rows={3}
                placeholder="Your premier destination for authentic Panjabi dresses..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Logo URL</label>
              <input
                type="text"
                value={formData.logo}
                onChange={(e) => handleInputChange("logo", e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="https://..."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  value={formData.contactPhone}
                  onChange={(e) =>
                    handleInputChange("contactPhone", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) =>
                    handleInputChange("contactEmail", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <textarea
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-full p-2 border rounded"
                rows={2}
              />
            </div>
          </div>
        );
      case "policies":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Return Policy
              </label>
              <textarea
                value={formData.returnPolicy}
                onChange={(e) =>
                  handleInputChange("returnPolicy", e.target.value)
                }
                className="w-full p-2 border rounded"
                rows={4}
                placeholder="Enter return policy..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Shipping Policy
              </label>
              <textarea
                value={formData.shippingPolicy}
                onChange={(e) =>
                  handleInputChange("shippingPolicy", e.target.value)
                }
                className="w-full p-2 border rounded"
                rows={4}
                placeholder="Enter shipping policy..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Privacy Policy
              </label>
              <textarea
                value={formData.privacyPolicy}
                onChange={(e) =>
                  handleInputChange("privacyPolicy", e.target.value)
                }
                className="w-full p-2 border rounded"
                rows={4}
                placeholder="Enter privacy policy..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Terms of Service
              </label>
              <textarea
                value={formData.termsOfService}
                onChange={(e) =>
                  handleInputChange("termsOfService", e.target.value)
                }
                className="w-full p-2 border rounded"
                rows={4}
                placeholder="Enter terms of service..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Warranty Information
              </label>
              <textarea
                value={formData.warranty}
                onChange={(e) => handleInputChange("warranty", e.target.value)}
                className="w-full p-2 border rounded"
                rows={3}
                placeholder="Enter warranty information..."
              />
            </div>
          </div>
        );
      // Add other cases similarly
      default:
        return <div>Select a tab to view settings.</div>;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Store Management</h1>

      <div className="bg-white rounded-lg shadow">
        <div className="border-b">
          <nav className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium border-b-2 ${
                  activeTab === tab.id
                    ? "border-emerald-500 text-emerald-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {renderTabContent()}

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSave}
              className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
