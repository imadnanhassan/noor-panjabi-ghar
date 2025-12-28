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
  Briefcase,
  DollarSign,
  TrendingUp,
  Clock,
  Star,
  User,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function EmployeeInfoPage() {
  // Mock employee data - in real app this would come from props/params
  const employee = {
    id: 1,
    name: "Arjun Sharma",
    email: "arjun.sharma@noorpunjabi.com",
    phone: "+91 98765 43210",
    avatar: "/api/placeholder/120/120",
    status: "Active",
    role: "Store Manager",
    department: "Operations",
    salary: "₹45,000",
    joinDate: "2022-03-15",
    performance: "Excellent",
    address: "456 Brigade Road, Bangalore, Karnataka 560025",
    dateOfBirth: "1988-09-20",
    gender: "Male",
    experience: "8 years",
    lastPromotion: "2023-06-01",
  };

  const performanceMetrics = [
    {
      title: "Monthly Target Achievement",
      value: "95%",
      icon: <TrendingUp size={20} />,
      color: "text-green-500",
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      icon: <Star size={20} />,
      color: "text-yellow-500",
    },
    {
      title: "Attendance Rate",
      value: "98%",
      icon: <Clock size={20} />,
      color: "text-blue-500",
    },
    {
      title: "Performance Rating",
      value: employee.performance,
      icon: <Award size={20} />,
      color: "text-purple-500",
    },
  ];

  const recentActivities = [
    {
      date: "2024-01-20",
      activity: "Completed monthly inventory audit",
      type: "Task",
    },
    {
      date: "2024-01-18",
      activity: "Trained 3 new sales associates",
      type: "Training",
    },
    {
      date: "2024-01-15",
      activity: "Achieved 95% monthly sales target",
      type: "Achievement",
    },
    {
      date: "2024-01-10",
      activity: "Updated store layout for better customer flow",
      type: "Improvement",
    },
  ];

  const salaryHistory = [
    {
      date: "2023-06-01",
      amount: "₹45,000",
      type: "Promotion",
      reason: "Role change to Store Manager",
    },
    {
      date: "2022-09-01",
      amount: "₹38,000",
      type: "Increment",
      reason: "Annual performance review",
    },
    {
      date: "2022-03-15",
      amount: "₹32,000",
      type: "Starting Salary",
      reason: "Joined as Assistant Manager",
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
          <Link href="/admin/users/employees">
            <button className="p-2 bg-(--admin-bg-light) border-(--admin-border) rounded-xl hover:bg-(--admin-bg-hover) transition-colors">
              <ArrowLeft size={20} />
            </button>
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Employee Profile
            </h1>
            <p className="text-(--admin-text-muted) mt-1">
              Detailed information for {employee.name}
            </p>
          </div>
          <Link href={`/admin/users/employees/edit/${employee.id}`}>
            <button className="flex items-center gap-2 bg-(--admin-gold) text-black px-6 py-3 rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors">
              <Edit size={16} />
              Edit Employee
            </button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* EMPLOYEE PROFILE CARD */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6">
              <div className="text-center mb-6">
                <img
                  src={employee.avatar}
                  alt={employee.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover bg-(--admin-bg-light)"
                />
                <h2 className="text-xl font-bold text-white mb-2">
                  {employee.name}
                </h2>
                <p className="text-(--admin-gold) font-medium mb-2">
                  {employee.role}
                </p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      employee.status === "Active"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : employee.status === "On Leave"
                        ? "bg-amber-500/10 text-amber-500"
                        : "bg-rose-500/10 text-rose-500"
                    }`}
                  >
                    {employee.status}
                  </span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium">
                    {employee.department}
                  </span>
                </div>
                <p className="text-(--admin-text-muted) text-sm">
                  Employee since{" "}
                  {new Date(employee.joinDate).toLocaleDateString()}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-(--admin-gold)" />
                  <div>
                    <p className="text-(--admin-text-muted) text-xs">
                      Email
                    </p>
                    <p className="text-white text-sm">{employee.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-(--admin-gold)" />
                  <div>
                    <p className="text-(--admin-text-muted) text-xs">
                      Phone
                    </p>
                    <p className="text-white text-sm">{employee.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <DollarSign size={16} className="text-(--admin-gold)" />
                  <div>
                    <p className="text-(--admin-text-muted) text-xs">
                      Salary
                    </p>
                    <p className="text-white text-sm font-semibold">
                      {employee.salary}/month
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-(--admin-gold)" />
                  <div>
                    <p className="text-(--admin-text-muted) text-xs">
                      Address
                    </p>
                    <p className="text-white text-sm">{employee.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-(--admin-gold)" />
                  <div>
                    <p className="text-(--admin-text-muted) text-xs">
                      Date of Birth
                    </p>
                    <p className="text-white text-sm">
                      {new Date(employee.dateOfBirth).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <User size={16} className="text-(--admin-gold)" />
                  <div>
                    <p className="text-(--admin-text-muted) text-xs">
                      Gender
                    </p>
                    <p className="text-white text-sm">{employee.gender}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Briefcase size={16} className="text-(--admin-gold)" />
                  <div>
                    <p className="text-(--admin-text-muted) text-xs">
                      Experience
                    </p>
                    <p className="text-white text-sm">{employee.experience}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PERFORMANCE AND DETAILS */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* PERFORMANCE METRICS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {performanceMetrics.map((metric, i) => (
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
                      className={`p-2.5 bg-(--admin-bg-light) rounded-xl ${metric.color} group-hover:scale-110 transition-transform`}
                    >
                      {metric.icon}
                    </div>
                  </div>
                  <p className="text-(--admin-text-muted) text-[10px] uppercase tracking-wider mb-1 font-semibold">
                    {metric.title}
                  </p>
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    {metric.value}
                  </h2>
                </motion.div>
              ))}
            </div>

            {/* RECENT ACTIVITIES */}
            <div className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <Clock size={20} className="text-(--admin-gold)" />
                <h3 className="text-xl font-semibold text-white">
                  Recent Activities
                </h3>
              </div>

              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-(--admin-bg-light) border border-(--admin-border) rounded-xl"
                  >
                    <div className="flex-1">
                      <p className="text-white font-medium mb-1">
                        {activity.activity}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-(--admin-text-muted) text-sm">
                          {new Date(activity.date).toLocaleDateString()}
                        </p>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            activity.type === "Achievement"
                              ? "bg-emerald-500/10 text-emerald-500"
                              : activity.type === "Training"
                              ? "bg-blue-500/10 text-blue-500"
                              : activity.type === "Task"
                              ? "bg-purple-500/10 text-purple-500"
                              : "bg-amber-500/10 text-amber-500"
                          }`}
                        >
                          {activity.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SALARY HISTORY */}
            <div className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <DollarSign size={20} className="text-(--admin-gold)" />
                <h3 className="text-xl font-semibold text-white">
                  Salary History
                </h3>
              </div>

              <div className="space-y-4">
                {salaryHistory.map((record, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-(--admin-bg-light) border border-(--admin-border) rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-white font-medium">
                          {record.amount}
                        </p>
                        <p className="text-(--admin-text-muted) text-sm">
                          {new Date(record.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          record.type === "Promotion"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : record.type === "Increment"
                            ? "bg-blue-500/10 text-blue-500"
                            : "bg-purple-500/10 text-purple-500"
                        }`}
                      >
                        {record.type}
                      </span>
                      <p className="text-(--admin-text-muted) text-sm mt-1">
                        {record.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EMPLOYMENT DETAILS */}
            <div className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={20} className="text-(--admin-gold)" />
                <h3 className="text-xl font-semibold text-white">
                  Employment Details
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-(--admin-text-muted) text-sm mb-1">
                      Join Date
                    </p>
                    <p className="text-white font-medium">
                      {new Date(employee.joinDate).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-(--admin-text-muted) text-sm mb-1">
                      Tenure
                    </p>
                    <p className="text-white font-medium">
                      {Math.floor(
                        (new Date().getTime() -
                          new Date(employee.joinDate).getTime()) /
                          (1000 * 60 * 60 * 24 * 30)
                      )}{" "}
                      months
                    </p>
                  </div>

                  <div>
                    <p className="text-(--admin-text-muted) text-sm mb-1">
                      Last Promotion
                    </p>
                    <p className="text-white font-medium">
                      {new Date(employee.lastPromotion).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-(--admin-text-muted) text-sm mb-1">
                      Department
                    </p>
                    <p className="text-white font-medium">
                      {employee.department}
                    </p>
                  </div>

                  <div>
                    <p className="text-(--admin-text-muted) text-sm mb-1">
                      Current Role
                    </p>
                    <p className="text-white font-medium">{employee.role}</p>
                  </div>

                  <div>
                    <p className="text-(--admin-text-muted) text-sm mb-1">
                      Performance Status
                    </p>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        employee.performance === "Excellent"
                          ? "bg-emerald-500/10 text-emerald-500"
                          : employee.performance === "Good"
                          ? "bg-blue-500/10 text-blue-500"
                          : "bg-amber-500/10 text-amber-500"
                      }`}
                    >
                      {employee.performance}
                    </span>
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
