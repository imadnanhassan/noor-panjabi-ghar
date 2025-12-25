import {
  LayoutDashboard,
  Store,
  Package,
  Users,
  UserCheck,
  ShoppingCart,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Plus,
  List,
  Tag,
  Palette,
  BarChart3,
  FileText,
  Truck,
  CreditCard,
  Bell,
  Shield,
  Database,
  Clock,
  CheckCircle,
} from "lucide-react";
import { MenuItem } from "./sidebar-types";

export const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    section: "Store",
    icon: Store,
    items: [
      {
        name: "Products",
        icon: Package,
        subItems: [
          { name: "Product List", href: "/admin/store/products", icon: List },
          {
            name: "Add Product",
            href: "/admin/store/products/add",
            icon: Plus,
          },
        ],
      },
      {
        name: "Categories",
        icon: Tag,
        subItems: [
          {
            name: "Category List",
            href: "/admin/store/categories",
            icon: List,
          },
          {
            name: "Add Category",
            href: "/admin/store/categories/add",
            icon: Plus,
          },
        ],
      },
      {
        name: "Variants",
        icon: Palette,
        subItems: [
          {
            name: "Size Management",
            href: "/admin/store/variants/size",
            icon: Database,
          },
          {
            name: "Color Management",
            href: "/admin/store/variants/color",
            icon: Palette,
          },
          {
            name: "Add Variant",
            href: "/admin/store/variants/add",
            icon: Plus,
          },
        ],
      },
    ],
  },
  {
    section: "Inventory",
    icon: Package,
    items: [
      {
        name: "Stock Management",
        href: "/admin/inventory/stock",
        icon: Database,
      },
      {
        name: "Stock Alerts",
        href: "/admin/inventory/alerts",
        icon: Bell,
      },
      {
        name: "Inventory Reports",
        href: "/admin/inventory/reports",
        icon: BarChart3,
      },
      {
        name: "Suppliers",
        href: "/admin/inventory/suppliers",
        icon: Truck,
      },
      {
        name: "Bulk Operations",
        href: "/admin/inventory/bulk",
        icon: FileText,
      },
    ],
  },
  {
    section: "Users",
    icon: Users,
    items: [
      {
        name: "Customers",
        icon: Users,
        subItems: [
          { name: "Customer List", href: "/admin/users/customers", icon: List },
          {
            name: "Add Customer",
            href: "/admin/users/customers/add",
            icon: Plus,
          },
          {
            name: "Customer Info",
            href: "/admin/users/customers/info",
            icon: FileText,
          },
        ],
      },
      {
        name: "Employees",
        icon: UserCheck,
        subItems: [
          { name: "Employee List", href: "/admin/users/employees", icon: List },
          {
            name: "Add Employee",
            href: "/admin/users/employees/add",
            icon: Plus,
          },
          {
            name: "Employee Info",
            href: "/admin/users/employees/info",
            icon: FileText,
          },
        ],
      },
    ],
  },
  {
    section: "Orders",
    icon: ShoppingCart,
    items: [
      {
        name: "All Orders",
        href: "/admin/orders",
        icon: ShoppingCart,
      },
      {
        name: "Pending Orders",
        href: "/admin/orders/pending",
        icon: Clock,
      },
      {
        name: "Processing Orders",
        href: "/admin/orders/processing",
        icon: Settings,
      },
      {
        name: "Shipped Orders",
        href: "/admin/orders/shipped",
        icon: Truck,
      },
      {
        name: "Delivered Orders",
        href: "/admin/orders/delivered",
        icon: CheckCircle,
      },
      {
        name: "Order Reports",
        href: "/admin/orders/reports",
        icon: BarChart3,
      },
    ],
  },
  {
    section: "Settings",
    icon: Settings,
    items: [
      {
        name: "General Settings",
        href: "/admin/settings/general",
        icon: Settings,
      },
      {
        name: "Payment Settings",
        href: "/admin/settings/payment",
        icon: CreditCard,
      },
      {
        name: "Shipping Settings",
        href: "/admin/settings/shipping",
        icon: Truck,
      },
      {
        name: "Notification Settings",
        href: "/admin/settings/notifications",
        icon: Bell,
      },
      {
        name: "Security Settings",
        href: "/admin/settings/security",
        icon: Shield,
      },
      {
        name: "System Logs",
        href: "/admin/settings/logs",
        icon: FileText,
      },
    ],
  },
];
