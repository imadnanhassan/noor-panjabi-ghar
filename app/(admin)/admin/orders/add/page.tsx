"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Plus,
  Minus,
  User,
  Package,
  CreditCard,
  Truck,
  Save,
  X,
} from "lucide-react";

export default function AddOrderPage() {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [orderItems, setOrderItems] = useState([
    {
      productId: "",
      productName: "",
      variant: "",
      quantity: 1,
      price: "",
      total: "",
    },
  ]);

  const [paymentInfo, setPaymentInfo] = useState({
    method: "Credit Card",
    status: "Paid",
    transactionId: "",
  });

  const [shippingInfo, setShippingInfo] = useState({
    method: "Standard Delivery",
    carrier: "Delhivery",
    cost: "100",
  });

  const [orderNotes, setOrderNotes] = useState("");

  // Sample products for selection
  const products = [
    {
      id: 1,
      name: "Embroidered Salwar Kameez",
      price: "2499",
      variants: ["Red, Size M", "Blue, Size L", "Green, Size S"],
    },
    {
      id: 2,
      name: "Punjabi Kurta Pajama",
      price: "1899",
      variants: ["White, Size M", "Cream, Size L", "Navy, Size XL"],
    },
    {
      id: 3,
      name: "Phulkari Dupatta",
      price: "899",
      variants: ["Red", "Blue", "Green"],
    },
    {
      id: 4,
      name: "Designer Lehenga",
      price: "4999",
      variants: ["Gold, Size M", "Silver, Size L", "Bronze, Size S"],
    },
  ];

  const addOrderItem = () => {
    setOrderItems([
      ...orderItems,
      {
        productId: "",
        productName: "",
        variant: "",
        quantity: 1,
        price: "",
        total: "",
      },
    ]);
  };

  const removeOrderItem = (index: number) => {
    setOrderItems(orderItems.filter((_, i) => i !== index));
  };

  const updateOrderItem = (index: number, field: string, value: string) => {
    const updatedItems = [...orderItems];
    updatedItems[index] = { ...updatedItems[index], [field]: value };

    if (field === "productId" && value) {
      const product = products.find((p) => p.id.toString() === value);
      if (product) {
        updatedItems[index].productName = product.name;
        updatedItems[index].price = product.price;
        updatedItems[index].total = (
          parseInt(product.price) * updatedItems[index].quantity
        ).toString();
      }
    }

    if (field === "quantity" || field === "price") {
      const quantity = parseInt(updatedItems[index].quantity.toString());
      const price = parseInt(updatedItems[index].price);
      updatedItems[index].total = (quantity * price).toString();
    }

    setOrderItems(updatedItems);
  };

  const calculateSubtotal = () => {
    return orderItems.reduce(
      (sum, item) => sum + parseInt(item.total || "0"),
      0
    );
  };

  const calculateTotal = () => {
    return calculateSubtotal() + parseInt(shippingInfo.cost || "0");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Order data:", {
      customerInfo,
      orderItems,
      paymentInfo,
      shippingInfo,
      orderNotes,
      total: calculateTotal(),
    });
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
              Back to Orders
            </button>
            <motion.h1
              className="text-xl md:text-3xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Create New Order
            </motion.h1>
            <motion.p
              className="text-(--admin-text-muted) mt-1 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Manually create a new customer order
            </motion.p>
          </motion.div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* CUSTOMER INFORMATION */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
              <User size={18} />
              Customer Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={customerInfo.name}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, name: e.target.value })
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, email: e.target.value })
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, phone: e.target.value })
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Shipping Address *
                </label>
                <textarea
                  value={customerInfo.address}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      address: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  City *
                </label>
                <input
                  type="text"
                  value={customerInfo.city}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, city: e.target.value })
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  State *
                </label>
                <input
                  type="text"
                  value={customerInfo.state}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, state: e.target.value })
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
              <div>
                <label className="block text-(--admin-text-muted) text-sm mb-2">
                  Pincode *
                </label>
                <input
                  type="text"
                  value={customerInfo.pincode}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      pincode: e.target.value,
                    })
                  }
                  className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  required
                />
              </div>
            </div>
          </motion.div>

          {/* ORDER ITEMS */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-white flex items-center gap-2">
                <Package size={18} />
                Order Items
              </h3>
              <button
                type="button"
                onClick={addOrderItem}
                className="flex items-center gap-2 bg-(--admin-gold) text-black px-4 py-2 rounded-lg font-semibold hover:bg-(--admin-gold)/90 transition-colors"
              >
                <Plus size={16} />
                Add Item
              </button>
            </div>

            <div className="space-y-4">
              {orderItems.map((item, index) => (
                <div
                  key={index}
                  className="border-(--admin-border) rounded-xl p-4 bg-(--admin-bg-light)"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                    <div className="md:col-span-2">
                      <label className="block text-(--admin-text-muted) text-sm mb-2">
                        Product *
                      </label>
                      <select
                        value={item.productId}
                        onChange={(e) =>
                          updateOrderItem(index, "productId", e.target.value)
                        }
                        className="w-full bg-(--admin-bg) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        required
                      >
                        <option value="">Select Product</option>
                        {products.map((product) => (
                          <option key={product.id} value={product.id}>
                            {product.name} - ₹{product.price}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-(--admin-text-muted) text-sm mb-2">
                        Variant
                      </label>
                      <select
                        value={item.variant}
                        onChange={(e) =>
                          updateOrderItem(index, "variant", e.target.value)
                        }
                        className="w-full bg-(--admin-bg) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                      >
                        <option value="">Select Variant</option>
                        {item.productId &&
                          products
                            .find((p) => p.id.toString() === item.productId)
                            ?.variants.map((variant) => (
                              <option key={variant} value={variant}>
                                {variant}
                              </option>
                            ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-(--admin-text-muted) text-sm mb-2">
                        Quantity *
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateOrderItem(index, "quantity", e.target.value)
                        }
                        className="w-full bg-(--admin-bg) border-(--admin-border) rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-(--admin-gold)"
                        required
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <label className="block text-(--admin-text-muted) text-sm mb-2">
                          Total
                        </label>
                        <div className="bg-(--admin-bg) border-(--admin-border) rounded-lg px-3 py-2 text-sm font-semibold">
                          ₹{item.total || "0"}
                        </div>
                      </div>
                      {orderItems.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeOrderItem(index)}
                          className="p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Total */}
            <div className="border-t-(--admin-border) mt-6 pt-6">
              <div className="flex justify-end">
                <div className="w-64 space-y-2">
                  <div className="flex justify-between text-(--admin-text-muted) text-sm">
                    <span>Subtotal:</span>
                    <span>₹{calculateSubtotal()}</span>
                  </div>
                  <div className="flex justify-between text-(--admin-text-muted) text-sm">
                    <span>Shipping:</span>
                    <span>₹{shippingInfo.cost}</span>
                  </div>
                  <div className="flex justify-between text-white font-semibold text-lg border-t-(--admin-border) pt-2">
                    <span>Total:</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PAYMENT & SHIPPING */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PAYMENT INFORMATION */}
            <motion.div
              className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                <CreditCard size={18} />
                Payment Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Payment Method *
                  </label>
                  <select
                    value={paymentInfo.method}
                    onChange={(e) =>
                      setPaymentInfo({ ...paymentInfo, method: e.target.value })
                    }
                    className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                    required
                  >
                    <option value="Credit Card">Credit Card</option>
                    <option value="UPI">UPI</option>
                    <option value="Net Banking">Net Banking</option>
                    <option value="Cash on Delivery">Cash on Delivery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Payment Status *
                  </label>
                  <select
                    value={paymentInfo.status}
                    onChange={(e) =>
                      setPaymentInfo({ ...paymentInfo, status: e.target.value })
                    }
                    className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                    required
                  >
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                    <option value="Failed">Failed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Transaction ID
                  </label>
                  <input
                    type="text"
                    value={paymentInfo.transactionId}
                    onChange={(e) =>
                      setPaymentInfo({
                        ...paymentInfo,
                        transactionId: e.target.value,
                      })
                    }
                    className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                    placeholder="Optional"
                  />
                </div>
              </div>
            </motion.div>

            {/* SHIPPING INFORMATION */}
            <motion.div
              className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                <Truck size={18} />
                Shipping Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Shipping Method *
                  </label>
                  <select
                    value={shippingInfo.method}
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        method: e.target.value,
                      })
                    }
                    className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                    required
                  >
                    <option value="Standard Delivery">Standard Delivery</option>
                    <option value="Express Delivery">Express Delivery</option>
                    <option value="Same Day Delivery">Same Day Delivery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Shipping Carrier
                  </label>
                  <select
                    value={shippingInfo.carrier}
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        carrier: e.target.value,
                      })
                    }
                    className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                  >
                    <option value="Delhivery">Delhivery</option>
                    <option value="Blue Dart">Blue Dart</option>
                    <option value="FedEx">FedEx</option>
                    <option value="DTDC">DTDC</option>
                  </select>
                </div>
                <div>
                  <label className="block text-(--admin-text-muted) text-sm mb-2">
                    Shipping Cost (₹) *
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={shippingInfo.cost}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, cost: e.target.value })
                    }
                    className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
                    required
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ORDER NOTES */}
          <motion.div
            className="bg-(--admin-card-bg) border-(--admin-border) rounded-4xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-lg font-medium text-white mb-4">Order Notes</h3>
            <textarea
              value={orderNotes}
              onChange={(e) => setOrderNotes(e.target.value)}
              rows={4}
              className="w-full bg-(--admin-bg-light) border-(--admin-border) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--admin-gold)"
              placeholder="Add any special instructions or notes for this order..."
            />
          </motion.div>

          {/* SUBMIT BUTTONS */}
          <motion.div
            className="flex items-center justify-end gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
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
              Create Order
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
