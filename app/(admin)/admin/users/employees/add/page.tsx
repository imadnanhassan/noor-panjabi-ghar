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
  Briefcase,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export default function AddEmployeePage() {
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
    role: "",
    department: "",
    salary: "",
    joinDate: "",
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
    if (!formData.role.trim()) newErrors.role = "Role is required";
    if (!formData.department.trim())
      newErrors.department = "Department is required";
    if (!formData.salary.trim()) newErrors.salary = "Salary is required";

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
          <Link href="/admin/users/employees">
            <button className="p-2 bg-(--admin-bg-light) border-(--admin-border) rounded-xl hover:bg-(--admin-bg-hover) transition-colors">
              <ArrowLeft size={20} />
            </button>
          </Link>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Add New Employee
            </h1>
            <p className="text-(--admin-text-muted) mt-1">
              Create a new employee profile
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
                          : "border-(--admin-border)"
                      }`}
                      placeholder="employee@noorpunjabi.com"
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

            {/* EMPLOYMENT INFORMATION */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={20} className="text-(--admin-gold)" />
                <h2 className="text-xl font-semibold text-white">
                  Employment Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Role *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                    className={`w-full bg-(--admin-bg-light) border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) ${
                      errors.role
                        ? "border-red-400"
                        : "border-(--admin-border)"
                    }`}
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="Store Manager">Store Manager</option>
                    <option value="Sales Associate">Sales Associate</option>
                    <option value="Inventory Manager">Inventory Manager</option>
                    <option value="Customer Service">Customer Service</option>
                    <option value="Marketing Coordinator">
                      Marketing Coordinator
                    </option>
                    <option value="Warehouse Staff">Warehouse Staff</option>
                    <option value="Accountant">Accountant</option>
                  </select>
                  {errors.role && (
                    <p className="text-red-400 text-xs mt-1">{errors.role}</p>
                  )}
                </div>

                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Department *
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) =>
                      handleInputChange("department", e.target.value)
                    }
                    className={`w-full bg-(--admin-bg-light) border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) ${
                      errors.department
                        ? "border-red-400"
                        : "border-(--admin-border)"
                    }`}
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="Operations">Operations</option>
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                    <option value="Warehouse">Warehouse</option>
                  </select>
                  {errors.department && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.department}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Monthly Salary (₹) *
                  </label>
                  <div className="relative">
                    <DollarSign
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-(--admin-text-muted)"
                    />
                    <input
                      type="number"
                      value={formData.salary}
                      onChange={(e) =>
                        handleInputChange("salary", e.target.value)
                      }
                      className={`w-full bg-(--admin-bg-light) border rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold) ${
                        errors.salary
                          ? "border-red-400"
                          : "border-(--admin-border)"
                      }`}
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>
                  {errors.salary && (
                    <p className="text-red-400 text-xs mt-1">{errors.salary}</p>
                  )}
                </div>

                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Join Date
                  </label>
                  <div className="relative">
                    <Calendar
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-(--admin-text-muted)"
                    />
                    <input
                      type="date"
                      value={formData.joinDate}
                      onChange={(e) =>
                        handleInputChange("joinDate", e.target.value)
                      }
                      className="w-full bg-(--admin-bg-light) border border-(--admin-border) rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      handleInputChange("status", e.target.value)
                    }
                    className="w-full bg-(--admin-bg-light) border border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  >
                    <option value="Active">Active</option>
                    <option value="On Leave">On Leave</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>

            {/* FORM ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-(--admin-border)">
              <Link
                href="/admin/users/employees"
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
                Create Employee
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
