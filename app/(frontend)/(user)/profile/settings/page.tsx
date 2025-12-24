"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Bell, Shield, CreditCard } from "lucide-react";
import { UserSidebar } from "@/components/common/UserSidebar";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    orders: true,
    promotions: false,
    newsletter: true,
  });

  return (
    <>
      {/* Welcome Section */}
      <div className="h-96 flex items-center justify-center bg-linear-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center space-y-8 px-6">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter">
              Maison Identity
            </h1>
            <p className="text-xl md:text-2xl font-light italic text-emerald-100 max-w-2xl mx-auto">
              Manage your personal information and preferences.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-amber-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-32 bg-[#FDFBF7] min-h-screen">
        <div className="container mx-auto px-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <UserSidebar activePage="settings" />
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-10 md:p-20 rounded-[80px] shadow-2xl shadow-emerald-950/5 border border-emerald-50"
              >
                <div className="space-y-12">
                  <div className="space-y-4">
                    <h1 className="text-4xl font-serif font-bold text-emerald-950">
                      Maison Identity
                    </h1>
                    <p className="text-slate-400 italic font-light leading-relaxed">
                      Manage your personal information and preferences.
                    </p>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-8">
                    <h2 className="text-2xl font-serif font-bold text-emerald-950 flex items-center gap-3">
                      <Shield className="w-6 h-6 text-amber-600" />
                      Personal Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-900/40 ml-4">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Faisal Karim"
                          className="w-full px-8 py-4 bg-[#FAF7F2] rounded-full border-none focus:ring-2 focus:ring-amber-500 transition-all font-medium text-emerald-950"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-900/40 ml-4">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue="faisal.k@maison-noor.com"
                          className="w-full px-8 py-4 bg-[#FAF7F2] rounded-full border-none focus:ring-2 focus:ring-amber-500 transition-all font-medium text-emerald-950"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-900/40 ml-4">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          defaultValue="+880 1XX XXX XXXX"
                          className="w-full px-8 py-4 bg-[#FAF7F2] rounded-full border-none focus:ring-2 focus:ring-amber-500 transition-all font-medium text-emerald-950"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-900/40 ml-4">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          className="w-full px-8 py-4 bg-[#FAF7F2] rounded-full border-none focus:ring-2 focus:ring-amber-500 transition-all font-medium text-emerald-950"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Notifications */}
                  <div className="space-y-8">
                    <h2 className="text-2xl font-serif font-bold text-emerald-950 flex items-center gap-3">
                      <Bell className="w-6 h-6 text-amber-600" />
                      Notification Preferences
                    </h2>
                    <div className="space-y-6">
                      {[
                        {
                          key: "orders",
                          label: "Order Updates",
                          desc: "Receive notifications about your order status",
                        },
                        {
                          key: "promotions",
                          label: "Promotional Offers",
                          desc: "Special offers and seasonal promotions",
                        },
                        {
                          key: "newsletter",
                          label: "Newsletter",
                          desc: "Monthly updates and new arrivals",
                        },
                      ].map((item) => (
                        <div
                          key={item.key}
                          className="flex items-center justify-between p-6 bg-[#FAF7F2] rounded-[40px]"
                        >
                          <div>
                            <h3 className="font-serif font-bold text-emerald-950">
                              {item.label}
                            </h3>
                            <p className="text-sm text-slate-400 font-light">
                              {item.desc}
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={
                                notifications[
                                  item.key as keyof typeof notifications
                                ]
                              }
                              onChange={(e) =>
                                setNotifications((prev) => ({
                                  ...prev,
                                  [item.key]: e.target.checked,
                                }))
                              }
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-emerald-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="space-y-8">
                    <h2 className="text-2xl font-serif font-bold text-emerald-950 flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-amber-600" />
                      Payment Methods
                    </h2>
                    <div className="space-y-4">
                      <div className="p-6 bg-[#FAF7F2] rounded flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-8 bg-linear-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                            VISA
                          </div>
                          <div>
                            <p className="font-serif font-bold text-emerald-950">
                              •••• •••• •••• 4242
                            </p>
                            <p className="text-sm text-slate-400">
                              Expires 12/26
                            </p>
                          </div>
                        </div>
                        <button className="text-amber-600 hover:text-emerald-950 transition-colors text-sm font-medium">
                          Edit
                        </button>
                      </div>
                      <button className="w-full py-4 bg-emerald-950 text-white rounded-full font-black uppercase tracking-[0.3em] text-sm hover:bg-amber-600 transition-all">
                        Add New Payment Method
                      </button>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="pt-8 border-t border-emerald-50">
                    <button className="w-full bg-emerald-950 text-white py-6 rounded-full font-black uppercase tracking-[0.5em] text-[11px] shadow-2xl hover:bg-amber-600 transition-all active:scale-95 flex items-center justify-center gap-3">
                      <Save className="w-5 h-5" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
