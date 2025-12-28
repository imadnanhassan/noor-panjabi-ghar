"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Users,
  UserCheck,
  Clock,
  DollarSign,
  X,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    role: "",
    department: "",
    joinDate: "",
  });
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sample employees data
  const employees = [
    {
      id: 1,
      name: "Arjun Sharma",
      email: "arjun.sharma@noorpunjabi.com",
      phone: "+91 98765 43210",
      role: "Store Manager",
      department: "Operations",
      status: "Active",
      salary: "₹45,000",
      joinDate: "2022-03-15",
      avatar: "/api/placeholder/40/40",
      performance: "Excellent",
    },
    {
      id: 2,
      name: "Kavita Singh",
      email: "kavita.singh@noorpunjabi.com",
      phone: "+91 87654 32109",
      role: "Sales Associate",
      department: "Sales",
      status: "Active",
      salary: "₹28,000",
      joinDate: "2023-01-10",
      avatar: "/api/placeholder/40/40",
      performance: "Good",
    },
    {
      id: 3,
      name: "Rahul Kumar",
      email: "rahul.kumar@noorpunjabi.com",
      phone: "+91 76543 21098",
      role: "Inventory Manager",
      department: "Operations",
      status: "Active",
      salary: "₹35,000",
      joinDate: "2022-08-20",
      avatar: "/api/placeholder/40/40",
      performance: "Excellent",
    },
    {
      id: 4,
      name: "Priya Patel",
      email: "priya.patel@noorpunjabi.com",
      phone: "+91 65432 10987",
      role: "Customer Service",
      department: "Support",
      status: "On Leave",
      salary: "₹25,000",
      joinDate: "2023-05-12",
      avatar: "/api/placeholder/40/40",
      performance: "Good",
    },
    {
      id: 5,
      name: "Vikram Joshi",
      email: "vikram.joshi@noorpunjabi.com",
      phone: "+91 54321 09876",
      role: "Marketing Coordinator",
      department: "Marketing",
      status: "Active",
      salary: "₹32,000",
      joinDate: "2023-02-28",
      avatar: "/api/placeholder/40/40",
      performance: "Average",
    },
  ];

  const stats = [
    {
      title: "Total Employees",
      value: "24",
      icon: <Users size={20} />,
      trend: "+2",
      isUp: true,
    },
    {
      title: "Active Employees",
      value: "22",
      icon: <UserCheck size={20} />,
      trend: "92%",
      isUp: true,
    },
    {
      title: "On Leave",
      value: "2",
      icon: <Clock size={20} />,
      trend: "8%",
      isUp: false,
    },
    {
      title: "Total Payroll",
      value: "₹8,45,000",
      icon: <DollarSign size={20} />,
      trend: "+5%",
      isUp: true,
    },
  ];

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = !filters.status || employee.status === filters.status;
    const matchesRole = !filters.role || employee.role === filters.role;
    const matchesDepartment =
      !filters.department || employee.department === filters.department;

    let matchesJoinDate = true;
    if (filters.joinDate) {
      const joinYear = new Date(employee.joinDate).getFullYear();
      const currentYear = new Date().getFullYear();
      if (filters.joinDate === "This Year") {
        matchesJoinDate = joinYear === currentYear;
      } else if (filters.joinDate === "Last Year") {
        matchesJoinDate = joinYear === currentYear - 1;
      } else if (filters.joinDate === "Older") {
        matchesJoinDate = joinYear < currentYear - 1;
      }
    }

    return (
      matchesSearch &&
      matchesStatus &&
      matchesRole &&
      matchesDepartment &&
      matchesJoinDate
    );
  });

  const clearFilters = () => {
    setFilters({
      status: "",
      role: "",
      department: "",
      joinDate: "",
    });
  };

  const hasActiveFilters = Object.values(filters).some((value) => value !== "");

  return (
    <div className="min-h-screen bg-(--admin-bg) text-(--admin-text)">
      <div className="max-w-[1600px] mx-auto p-4 md:p-8 space-y-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h1
              className="text-xl md:text-3xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Employee Management
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) mt-1 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Manage your team and workforce
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/admin/users/employees/add">
              <button className="flex items-center gap-2 bg-(--admin-gold) text-black px-6 py-3 rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors">
                <Plus size={18} />
                Add New Employee
              </button>
            </Link>
          </motion.div>
        </div>

        {/* STATS CARDS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-(--admin-card-bg) border-(--admin-border) p-6 rounded-2xl hover:border-(--admin-border-hover) transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-(--admin-bg-light) rounded-xl text-(--admin-gold) group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div
                  className={`flex items-center gap-1 text-[10px] font-bold ${
                    stat.isUp ? "text-emerald-500" : "text-rose-500"
                  }`}
                >
                  {stat.isUp ? "+" : ""}
                  {stat.trend}
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
        </motion.div>

        {/* EMPLOYEES TABLE */}
        <motion.div
          className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Table Header */}
          <motion.div
            className="p-6 border-b-(--admin-border) flex justify-between items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.h3
              className="text-lg font-medium text-white"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              Employee Directory
            </motion.h3>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-(--admin-text-muted)"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search employees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-(--admin-bg-light) border-(--admin-border) rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-(--admin-gold) w-full md:w-64"
                />
              </div>
              <div className="relative" ref={filterRef}>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                    hasActiveFilters
                      ? "bg-(--admin-gold) text-black"
                      : "bg-(--admin-bg-light) border-(--admin-border) hover:bg-(--admin-bg-hover)"
                  }`}
                >
                  <Filter size={16} />
                  Filter
                  {hasActiveFilters && (
                    <span className="ml-1 bg-black/20 text-xs px-1.5 py-0.5 rounded-full">
                      {Object.values(filters).filter((v) => v !== "").length}
                    </span>
                  )}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      isFilterOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isFilterOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 md:w-80 bg-(--admin-card-bg) border-(--admin-border) rounded-xl shadow-xl z-50 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-white font-medium">Filters</h4>
                      {hasActiveFilters && (
                        <button
                          onClick={clearFilters}
                          className="text-(--admin-text-muted) hover:text-(--admin-gold) text-sm flex items-center gap-1"
                        >
                          <X size={14} />
                          Clear all
                        </button>
                      )}
                    </div>

                    <div className="space-y-4">
                      {/* Status Filter */}
                      <div>
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Status
                        </label>
                        <select
                          value={filters.status}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              status: e.target.value,
                            }))
                          }
                          className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        >
                          <option value="">All Status</option>
                          <option value="Active">Active</option>
                          <option value="On Leave">On Leave</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>

                      {/* Role Filter */}
                      <div>
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Role
                        </label>
                        <select
                          value={filters.role}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              role: e.target.value,
                            }))
                          }
                          className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        >
                          <option value="">All Roles</option>
                          <option value="Store Manager">Store Manager</option>
                          <option value="Sales Associate">
                            Sales Associate
                          </option>
                          <option value="Inventory Manager">
                            Inventory Manager
                          </option>
                          <option value="Customer Service">
                            Customer Service
                          </option>
                          <option value="Marketing Coordinator">
                            Marketing Coordinator
                          </option>
                        </select>
                      </div>

                      {/* Department Filter */}
                      <div>
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Department
                        </label>
                        <select
                          value={filters.department}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              department: e.target.value,
                            }))
                          }
                          className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        >
                          <option value="">All Departments</option>
                          <option value="Operations">Operations</option>
                          <option value="Sales">Sales</option>
                          <option value="Support">Support</option>
                          <option value="Marketing">Marketing</option>
                        </select>
                      </div>

                      {/* Join Date Filter */}
                      <div>
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Join Date
                        </label>
                        <select
                          value={filters.joinDate}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              joinDate: e.target.value,
                            }))
                          }
                          className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        >
                          <option value="">All Dates</option>
                          <option value="This Year">This Year</option>
                          <option value="Last Year">Last Year</option>
                          <option value="Older">Older</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-(--admin-bg-light) text-(--admin-text-muted) text-[10px] md:text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-3 md:p-5 text-left">Employee</th>
                  <th className="p-3 md:p-5 text-left">Contact</th>
                  <th className="p-3 md:p-5 text-left">Role</th>
                  <th className="p-3 md:p-5 text-left">Department</th>
                  <th className="p-3 md:p-5 text-left hidden md:table-cell">
                    Salary
                  </th>
                  <th className="p-3 md:p-5 text-left">Status</th>
                  <th className="p-3 md:p-5 text-left hidden md:table-cell">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="border-b-(--admin-border) hover:bg-(--admin-bg-hover) transition-colors"
                  >
                    <td className="p-3 md:p-5">
                      <div className="flex items-center gap-2 md:gap-3">
                        <img
                          src={employee.avatar}
                          alt={employee.name}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover bg-(--admin-bg-light)"
                        />
                        <div>
                          <p className="text-white font-medium text-sm md:text-base">
                            {employee.name}
                          </p>
                          <p className="text-(--admin-text-muted) text-[10px] md:text-xs">
                            ID: #{employee.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 md:p-5">
                      <div>
                        <p className="text-(--admin-text-muted) text-xs md:text-sm">
                          {employee.email}
                        </p>
                        <p className="text-(--admin-text-muted) text-xs md:text-sm">
                          {employee.phone}
                        </p>
                      </div>
                    </td>
                    <td className="p-3 md:p-5 text-(--admin-text-muted) text-xs md:text-sm">
                      {employee.role}
                    </td>
                    <td className="p-3 md:p-5">
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-[10px] md:text-xs font-medium">
                        {employee.department}
                      </span>
                    </td>
                    <td className="p-3 md:p-5 text-white font-semibold text-sm md:text-base hidden md:table-cell">
                      {employee.salary}
                    </td>
                    <td className="p-3 md:p-5">
                      <span
                        className={`px-2 py-1 rounded-full text-[10px] md:text-xs font-bold ${
                          employee.status === "Active"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : employee.status === "On Leave"
                            ? "bg-amber-500/10 text-amber-500"
                            : "bg-rose-500/10 text-rose-500"
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>
                    <td className="p-3 md:p-5 hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/users/employees/info/${employee.id}`}
                        >
                          <button className="p-2 text-(--admin-text-muted) hover:text-(--admin-gold) transition-colors">
                            <Eye size={16} />
                          </button>
                        </Link>
                        <button className="p-2 text-(--admin-text-muted) hover:text-blue-500 transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 text-(--admin-text-muted) hover:text-rose-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 md:p-6 border-t-(--admin-border) flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-(--admin-text-muted) text-xs md:text-sm">
              Showing {filteredEmployees.length} of {employees.length} employees
            </p>
            <div className="flex items-center gap-1 md:gap-2">
              <button className="px-2 md:px-3 py-1 bg-(--admin-bg-light) border-(--admin-border) rounded text-xs md:text-sm hover:bg-(--admin-bg-hover) transition-colors">
                Previous
              </button>
              <button className="px-2 md:px-3 py-1 bg-(--admin-gold) text-black rounded text-xs md:text-sm font-medium">
                1
              </button>
              <button className="px-2 md:px-3 py-1 bg-(--admin-bg-light) border-(--admin-border) rounded text-xs md:text-sm hover:bg-(--admin-bg-hover) transition-colors">
                2
              </button>
              <button className="px-2 md:px-3 py-1 bg-(--admin-bg-light) border-(--admin-border) rounded text-xs md:text-sm hover:bg-(--admin-bg-hover) transition-colors">
                Next
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
