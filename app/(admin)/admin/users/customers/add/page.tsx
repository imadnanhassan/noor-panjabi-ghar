"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Save,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

export default function AddCustomerPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    membership: "Bronze",
    status: "Active",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your API
    }
  };

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
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Add New Customer
            </h1>
            <p className="text-(--admin-text-muted)] mt-1">
              Create a new customer profile
            </p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* PERSONAL INFORMATION */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <User size={20} className="text-(--admin-gold)" />
                <h2 className="text-xl font-semibold text-white">
                  Personal Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className={`w-full bg-(--admin-bg-light) border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) ${
                      errors.firstName
                        ? "border-red-400"
                        : "border-(--admin-border)"
                    }`}
                    placeholder="Enter first name"
                    required
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className={`w-full bg-(--admin-bg-light) border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) ${
                      errors.lastName
                        ? "border-red-400"
                        : "border-(--admin-border)"
                    }`}
                    placeholder="Enter last name"
                    required
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-(--admin-text-muted)"
                    />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={`w-full bg-(--admin-bg-light) border rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) ${
                        errors.email
                          ? "border-red-400"
                          : "border-(--admin-border)]"
                      }`}
                      placeholder="customer@example.com"
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-(--admin-text-muted)"
                    />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className={`w-full bg-(--admin-bg-light) border rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) ${
                        errors.phone
                          ? "border-red-400"
                          : "border-(--admin-border)"
                      }`}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <Calendar
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-(--admin-text-muted)"
                    />
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        handleInputChange("dateOfBirth", e.target.value)
                      }
                      className="w-full bg-(--admin-bg-light) border border-(--admin-border) rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) =>
                      handleInputChange("gender", e.target.value)
                    }
                    className="w-full bg-(--admin-bg-light) border border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* ADDRESS INFORMATION */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={20} className="text-(--admin-gold)" />
                <h2 className="text-xl font-semibold text-white">
                  Address Information
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    className="w-full bg-(--admin-bg-light) border border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                    placeholder="Enter full address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-(--admin-text-muted) text-sm mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      className="w-full bg-(--admin-bg-light) border border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                      placeholder="Enter city"
                    />
                  </div>

                  <div>
                    <label className="block text-(--admin-text-muted) text-sm mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) =>
                        handleInputChange("state", e.target.value)
                      }
                      className="w-full bg-(--admin-bg-light) border border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                      placeholder="Enter state"
                    />
                  </div>

                  <div>
                    <label className="block text-(--admin-text-muted) text-sm mb-2">
                      Pincode
                    </label>
                    <input
                      type="text"
                      value={formData.pincode}
                      onChange={(e) =>
                        handleInputChange("pincode", e.target.value)
                      }
                      className="w-full bg-(--admin-bg-light) border border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                      placeholder="Enter pincode"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* MEMBERSHIP & STATUS */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <CreditCard size={20} className="text-(--admin-gold)" />
                <h2 className="text-xl font-semibold text-white">
                  Membership & Status
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">
                    Membership Level
                  </label>
                  <select
                    value={formData.membership}
                    onChange={(e) =>
                      handleInputChange("membership", e.target.value)
                    }
                    className="flex-1 border-none bg-(--admin-bg-light) px-3 py-2 text-sm text-foreground outline-none rounded-lg border border-(--admin-border) focus:border-(--admin-gold) w-full"
                  >
                    <option value="Bronze">Bronze</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      handleInputChange("status", e.target.value)
                    }
                    className="flex-1 border-none bg-(--admin-bg-light) px-3 py-2 text-sm text-foreground outline-none rounded-lg border border-(--admin-border) focus:border-(--admin-gold) w-full"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>

            {/* FORM ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-(--admin-border)">
              <Link
                href="/admin/users/customers"
                className="flex-1 sm:flex-none"
              >
                <button className="w-full sm:w-auto px-6 py-3 bg-(--admin-bg-light) border border-(--admin-border) text-white rounded-xl font-medium hover:bg-(--admin-bg-hover) transition-colors">
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 flex-1 sm:flex-none px-6 py-3 bg-(--admin-gold) text-black rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors"
              >
                <Save size={16} />
                Create Customer
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
