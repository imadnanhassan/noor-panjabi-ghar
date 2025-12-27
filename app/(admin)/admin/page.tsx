"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  DollarSign,
  ShoppingCart,
  CreditCard,
  Search,
  Bell,
  Package,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Trash2,
  ExternalLink,
} from "lucide-react";

export default function AdminDashboard() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="bg-black min-h-screen" />;

  // --- Data Objects ---
  const mainMetrics = [
    {
      title: "Total Sales",
      value: "$43,038.00",
      icon: <DollarSign size={20} />,
      trend: "+12.5%",
      isUp: true,
    },
    {
      title: "Total Expenses",
      value: "$28,346.00",
      icon: <CreditCard size={20} />,
      trend: "-2.4%",
      isUp: false,
    },
    {
      title: "Total Visitors",
      value: "1,29,368",
      icon: <Users size={20} />,
      trend: "+8.1%",
      isUp: true,
    },
    {
      title: "Total Orders",
      value: "35,367",
      icon: <ShoppingCart size={20} />,
      trend: "+5.3%",
      isUp: true,
    },
  ];

  const topCountries = [
    { name: "France", sales: "38,256", color: "#D4AF37" },
    { name: "Spain", sales: "5,932", color: "#C0C0C0" },
    { name: "Argentina", sales: "5,383", color: "#CD7F32" },
    { name: "UAE", sales: "4,825", color: "#D4AF37" },
    { name: "Germany", sales: "4,527", color: "#A0A0A0" },
  ];

  const satisfactionData = [
    { label: "Excellent", value: 85, color: "#D4AF37" },
    { label: "Good", value: 65, color: "#F1E5AC" },
    { label: "Neutral", value: 64, color: "#94a3b8" },
    { label: "Unsatisfied", value: 44, color: "#64748b" },
    { label: "Poor", value: 24, color: "#334155" },
  ];

  return (
    <div className="min-h-screen bg-(--admin-bg) text-(--admin-text) font-sans selection:bg-(--admin-gold) selection:text-black">
      {/* PAGE CONTENT */}
      <div className="max-w-[1600px] mx-auto p-4 md:p-8 space-y-8">
        {/* STATS CARDS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {mainMetrics.map((m, i) => (
            <motion.div
              key={i}
              className="bg-(--admin-card-bg) border-(--admin-border) p-6 rounded-2xl hover:border-(--admin-border-hover) transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-(--admin-bg-light) rounded-xl text-(--admin-gold) group-hover:scale-110 transition-transform">
                  {m.icon}
                </div>
                <div
                  className={`flex items-center gap-1 text-[10px] font-bold ${
                    m.isUp ? "text-emerald-500" : "text-rose-500"
                  }`}
                >
                  {m.isUp ? (
                    <ArrowUpRight size={12} />
                  ) : (
                    <ArrowDownRight size={12} />
                  )}{" "}
                  {m.trend}
                </div>
              </div>
              <p className="text-(--admin-text-muted) text-[10px] uppercase tracking-wider mb-1 font-semibold">
                {m.title}
              </p>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {m.value}
              </h2>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* SALES GRAPH & PRODUCTS TABLE */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              className="bg-[var(--admin-card-bg)] border-[var(--admin-border)] rounded-[2rem] p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <motion.h3
                    className="text-lg text-white font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    Sales Statistics
                  </motion.h3>
                  <motion.p
                    className="text-[10px] text-[var(--admin-text-muted)]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    Live revenue monitoring
                  </motion.p>
                </div>
                <div className="flex gap-6">
                  <motion.div
                    className="text-left"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <p className="text-[10px] text-[var(--admin-text-muted)] uppercase tracking-widest">
                      Revenue
                    </p>
                    <p className="text-lg font-bold text-white">$5,238,346</p>
                  </motion.div>
                  <motion.div
                    className="text-left border-l-[var(--admin-border-light)] pl-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <p className="text-[10px] text-[var(--admin-text-muted)] uppercase tracking-widest">
                      Ratio
                    </p>
                    <p className="text-lg font-bold text-[var(--admin-gold)]">
                      33.7%
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="h-56 w-full relative">
                <motion.svg
                  className="w-full h-full"
                  viewBox="0 0 800 200"
                  preserveAspectRatio="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <motion.path
                    d="M0,180 Q100,120 200,150 T400,80 T600,110 T800,40 L800,200 L0,200 Z"
                    fill="url(#salesGrad)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.3 }}
                  />
                  <motion.path
                    d="M0,180 Q100,120 200,150 T400,80 T600,110 T800,40"
                    fill="none"
                    stroke="var(--admin-gold)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.4, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="var(--admin-gold)"
                        stopOpacity="0.15"
                      />
                      <stop
                        offset="100%"
                        stopColor="var(--admin-gold)"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </div>
            </motion.div>

            {/* PRODUCT LIST */}
            <div className="bg-[var(--admin-card-bg)] border-[var(--admin-border)] rounded-[2rem] overflow-hidden">
              <div className="p-6 border-b-[var(--admin-border)] flex justify-between items-center">
                <h3 className="text-sm font-medium text-white">Top Products</h3>
                <button className="text-[10px] text-[var(--admin-gold)] uppercase font-bold">
                  Details
                </button>
              </div>
              <div className="overflow-x-auto text-xs">
                <table className="w-full text-left">
                  <thead className="bg-[var(--admin-bg-hover)] text-[var(--admin-text-muted)] text-[9px] uppercase tracking-widest">
                    <tr>
                      <th className="p-5">Category</th>
                      <th className="p-5">Value</th>
                      <th className="p-5">Sales</th>
                      <th className="p-5">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "TaoTronics Wall Clock",
                        val: "$699",
                        sales: "1,000",
                        status: "In Stock",
                      },
                      {
                        name: "Club Fleece Hoodie",
                        val: "$55",
                        sales: "3,100",
                        status: "In Stock",
                      },
                      {
                        name: "SmartGizmo Pro",
                        val: "$199",
                        sales: "1,250",
                        status: "In Stock",
                      },
                      {
                        name: "TaoTronics Cattle",
                        val: "$699",
                        sales: "1,000",
                        status: "Out Of Stock",
                      },
                    ].map((p, i) => (
                      <motion.tr
                        key={i}
                        className="border-b-[var(--admin-border)] hover:bg-[var(--admin-bg-hover)]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.8 + i * 0.1 }}
                        whileHover={{
                          backgroundColor: "var(--admin-bg-hover)",
                        }}
                      >
                        <td className="p-5 text-white font-medium">{p.name}</td>
                        <td className="p-5 text-slate-400">{p.val}</td>
                        <td className="p-5 text-slate-400">{p.sales}</td>
                        <td className="p-5">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                              p.status === "In Stock"
                                ? "bg-emerald-500/10 text-emerald-500"
                                : "bg-rose-500/10 text-rose-500"
                            }`}
                          >
                            {p.status}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RIGHT: CARD & ANALYTICS */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-br from-[var(--admin-bg-gradient-start)] to-[var(--admin-bg-gradient-end)] p-8 rounded-[2rem] border-[var(--admin-gold-opacity-30)] h-52 flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between items-start relative z-10">
                <p className="text-[10px] font-mono tracking-widest text-slate-400">
                  VISA PREMIER
                </p>
                <div className="w-10 h-6 bg-[var(--admin-gold-opacity-20)] rounded border-[var(--admin-border-light)]"></div>
              </div>
              <p className="text-white text-lg font-mono tracking-widest relative z-10">
                **** **** **** 4492
              </p>
              <div className="relative z-10">
                <p className="text-[8px] text-[var(--admin-text-muted)] uppercase">
                  Holder
                </p>
                <p className="text-xs text-white uppercase">
                  Elisa Gibson Anabella
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--admin-gold-opacity-10)] blur-[80px] rounded-full"></div>
            </div>

            <motion.div
              className="bg-[var(--admin-card-bg)] border-[var(--admin-border)] rounded-[2rem] p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
            >
              <motion.h3
                className="text-sm font-medium text-white mb-6 uppercase tracking-widest"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                Global Sales
              </motion.h3>
              <div className="space-y-5">
                {topCountries.map((c, i) => (
                  <motion.div
                    key={i}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 + i * 0.1 }}
                  >
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">{c.name}</span>
                      <span className="text-white font-bold">{c.sales}</span>
                    </div>
                    <div className="h-1 w-full bg-[var(--admin-bg-light)] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: c.color }}
                        initial={{ width: 0 }}
                        animate={{
                          width: `${
                            (parseInt(c.sales.replace(",", "")) / 40000) * 100
                          }%`,
                        }}
                        transition={{
                          duration: 1,
                          delay: 2 + i * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-[var(--admin-card-bg)] border-[var(--admin-border)] rounded-[2rem] p-8 text-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.5 }}
            >
              <motion.h3
                className="text-sm font-medium text-white mb-6 uppercase tracking-widest"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.6 }}
              >
                Satisfaction
              </motion.h3>
              <div className="space-y-4">
                {satisfactionData.map((s, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.7 + i * 0.1 }}
                  >
                    <div className="w-16 text-[var(--admin-text-muted)]">
                      {s.label}
                    </div>
                    <div className="flex-1 h-1 bg-[var(--admin-bg-light)] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: s.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${s.value}%` }}
                        transition={{
                          duration: 1,
                          delay: 3 + i * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                    <div className="text-white font-bold">{s.value}%</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ORDER LISTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
          <div className="bg-[var(--admin-card-bg)] border-[var(--admin-border)] rounded-[2rem] p-8">
            <h3 className="text-sm font-medium text-white mb-6 uppercase tracking-widest">
              Ledger Entries
            </h3>
            <div className="space-y-4">
              {[
                { user: "John Doe", amt: "$120.50", status: "Completed" },
                { user: "Jane Smith", amt: "$45.00", status: "Pending" },
                { user: "Robert Brown", amt: "$75.75", status: "Failed" },
                { user: "Emma Williams", amt: "$220.00", status: "Completed" },
              ].map((tx, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between p-3 bg-[var(--admin-bg-hover)] rounded-xl border-[var(--admin-border)]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 3.5 + i * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "var(--admin-bg-light)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--admin-gold-opacity-10)] flex items-center justify-center text-[10px] text-[var(--admin-gold)] font-bold">
                      {tx.user.charAt(0)}
                    </div>
                    <p className="text-xs text-white font-bold">{tx.user}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-white">{tx.amt}</p>
                    <p
                      className={`text-[8px] font-black uppercase ${
                        tx.status === "Completed"
                          ? "text-emerald-500"
                          : tx.status === "Failed"
                          ? "text-rose-500"
                          : "text-amber-500"
                      }`}
                    >
                      {tx.status}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--admin-card-bg)] border-[var(--admin-border)] rounded-[2rem] p-8">
            <h3 className="text-sm font-medium text-white mb-6 uppercase tracking-widest">
              Global Order Ledger
            </h3>
            <div className="overflow-x-auto text-[10px]">
              <table className="w-full text-left">
                <thead className="text-[var(--admin-text-muted)] uppercase">
                  <tr>
                    <th className="pb-4">Order ID</th>
                    <th className="pb-4">Product</th>
                    <th className="pb-4">Amount</th>
                    <th className="pb-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: "$SPK15432",
                      prod: "Urban Chic Bag",
                      total: "$150.00",
                      status: "Completed",
                    },
                    {
                      id: "$SPK15433",
                      prod: "TrailBlaze Runners",
                      total: "$230.75",
                      status: "Pending",
                    },
                    {
                      id: "$SPK15434",
                      prod: "VisionTech SLR",
                      total: "$95.50",
                      status: "Failed",
                    },
                  ].map((order, i) => (
                    <motion.tr
                      key={i}
                      className="border-t-[var(--admin-border)] hover:bg-[var(--admin-bg-hover)]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 4.0 + i * 0.1 }}
                      whileHover={{
                        backgroundColor: "var(--admin-bg-hover)",
                      }}
                    >
                      <td className="py-4 text-[var(--admin-gold)] font-mono">
                        {order.id}
                      </td>
                      <td className="py-4 text-white">{order.prod}</td>
                      <td className="py-4 text-white font-bold">
                        {order.total}
                      </td>
                      <td className="py-4 text-right">
                        <span
                          className={`px-2 py-0.5 rounded-full ${
                            order.status === "Completed"
                              ? "bg-emerald-500/10 text-emerald-500"
                              : "bg-rose-500/10 text-rose-500"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
