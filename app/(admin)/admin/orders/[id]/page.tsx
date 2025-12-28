"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Package,
  User,
  MapPin,
  CreditCard,
  Truck,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  Edit,
  Printer,
  Download,
  RotateCcw,
  Ban,
  AlertTriangle,
} from "lucide-react";

export default function OrderDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [orderStatus, setOrderStatus] = useState("Processing");

  // Sample order data
  const order = {
    id: params.id,
    customer: {
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 98765 43210",
      address: "123 MG Road, Bangalore, Karnataka 560001",
    },
    orderDate: "2024-12-28",
    total: "₹2,499",
    status: "Processing",
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    items: [
      {
        id: 1,
        name: "Embroidered Salwar Kameez",
        variant: "Red, Size M",
        quantity: 1,
        price: "₹2,499",
        image: "/api/placeholder/80/80",
      },
    ],
    shipping: {
      method: "Standard Delivery",
      carrier: "Delhivery",
      trackingNumber: "DLV123456789",
      estimatedDelivery: "2024-12-30",
      cost: "₹100",
    },
    timeline: [
      {
        status: "Order Placed",
        date: "2024-12-28 10:30 AM",
        completed: true,
      },
      {
        status: "Payment Confirmed",
        date: "2024-12-28 10:35 AM",
        completed: true,
      },
      {
        status: "Processing",
        date: "2024-12-28 11:00 AM",
        completed: true,
      },
      {
        status: "Shipped",
        date: "Pending",
        completed: false,
      },
      {
        status: "Delivered",
        date: "Pending",
        completed: false,
      },
    ],
  };

  const statusOptions = [
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
    "Refunded",
  ];

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
            <button className="flex items-center gap-2 text-(--admin-text-muted) hover:text-(--admin-gold) transition-colors mb-4">
              <ArrowLeft size={16} />
              Back to Orders
            </button>
            <motion.h1
              className="text-xl md:text-3xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Order Details
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) mt-1 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Order ID: {order.id}
            </motion.p>
          </motion.div>
          <div className="flex items-center gap-4">
            <motion.button
              className="flex items-center gap-2 bg-(--admin-bg-light) border-(--admin-border) text-(--admin-text-muted) px-4 py-2 rounded-lg hover:bg-(--admin-bg-hover) transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Printer size={16} />
              Print
            </motion.button>
            <motion.button
              className="flex items-center gap-2 bg-(--admin-bg-light) border-(--admin-border) text-(--admin-text-muted) px-4 py-2 rounded-lg hover:bg-(--admin-bg-hover) transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Download size={16} />
              Invoice
            </motion.button>
          </div>
        </div>

        {/* ORDER STATUS & ACTIONS */}
        <motion.div
          className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">
                Order Status
              </h3>
              <select
                value={orderStatus}
                onChange={(e) => setOrderStatus(e.target.value)}
                className="bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-(--admin-gold) text-black px-6 py-3 rounded-xl font-semibold hover:bg-(--admin-gold)/90 transition-colors">
                <Edit size={16} />
                Update Status
              </button>
              {orderStatus !== "Cancelled" && orderStatus !== "Refunded" && (
                <>
                  {orderStatus !== "Delivered" && (
                    <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors">
                      <Ban size={16} />
                      Cancel Order
                    </button>
                  )}
                  {(orderStatus === "Delivered" ||
                    orderStatus === "Shipped") && (
                    <button className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors">
                      <RotateCcw size={16} />
                      Process Refund
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ORDER ITEMS */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6">
              <h3 className="text-lg font-medium text-white mb-6">
                Order Items
              </h3>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 bg-(--admin-bg-light) rounded-xl"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover bg-(--admin-bg)"
                    />
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{item.name}</h4>
                      <p className="text-(--admin-text-muted) text-sm">
                        {item.variant}
                      </p>
                      <p className="text-(--admin-text-muted) text-sm">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t-(--admin-border) mt-6 pt-6 space-y-2">
                <div className="flex justify-between text-(--admin-text-muted) text-sm">
                  <span>Subtotal:</span>
                  <span>₹2,399</span>
                </div>
                <div className="flex justify-between text-(--admin-text-muted) text-sm">
                  <span>Shipping:</span>
                  <span>{order.shipping.cost}</span>
                </div>
                <div className="flex justify-between text-white font-semibold text-lg border-t-(--admin-border) pt-2">
                  <span>Total:</span>
                  <span>{order.total}</span>
                </div>
              </div>
            </div>

            {/* ORDER TIMELINE */}
            <div className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6">
              <h3 className="text-lg font-medium text-white mb-6">
                Order Timeline
              </h3>
              <div className="space-y-4">
                {order.timeline.map((event, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        event.completed
                          ? "bg-(--admin-gold)"
                          : "bg-(--admin-bg-light)"
                      }`}
                    >
                      {event.completed ? (
                        <CheckCircle size={16} className="text-black" />
                      ) : (
                        <Clock
                          size={16}
                          className="text-(--admin-text-muted)"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{event.status}</h4>
                      <p className="text-(--admin-text-muted) text-sm">
                        {event.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CUSTOMER & SHIPPING INFO */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* CUSTOMER INFO */}
            <div className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6">
              <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                <User size={18} />
                Customer Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-medium">
                    {order.customer.name}
                  </p>
                  <div className="flex items-center gap-2 text-(--admin-text-muted) text-sm mt-1">
                    <Mail size={14} />
                    {order.customer.email}
                  </div>
                  <div className="flex items-center gap-2 text-(--admin-text-muted) text-sm mt-1">
                    <Phone size={14} />
                    {order.customer.phone}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">
                    Shipping Address
                  </h4>
                  <div className="flex items-start gap-2 text-(--admin-text-muted) text-sm">
                    <MapPin size={14} className="mt-0.5" />
                    <span>{order.customer.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PAYMENT INFO */}
            <div className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6">
              <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                <CreditCard size={18} />
                Payment Information
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-(--admin-text-muted) text-sm">
                    Method:
                  </span>
                  <span className="text-white">{order.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-(--admin-text-muted) text-sm">
                    Status:
                  </span>
                  <span className="text-emerald-500 font-medium">
                    {order.paymentStatus}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-(--admin-text-muted) text-sm">
                    Total:
                  </span>
                  <span className="text-white font-semibold">
                    {order.total}
                  </span>
                </div>
              </div>
            </div>

            {/* SHIPPING INFO */}
            <div className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6">
              <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                <Truck size={18} />
                Shipping Information
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-(--admin-text-muted) text-sm">
                    Method:
                  </span>
                  <span className="text-white">{order.shipping.method}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-(--admin-text-muted) text-sm">
                    Carrier:
                  </span>
                  <span className="text-white">{order.shipping.carrier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-(--admin-text-muted) text-sm">
                    Tracking:
                  </span>
                  <span className="text-(--admin-gold) font-mono text-sm">
                    {order.shipping.trackingNumber}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-(--admin-text-muted) text-sm">
                    Est. Delivery:
                  </span>
                  <span className="text-white">
                    {new Date(
                      order.shipping.estimatedDelivery
                    ).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
