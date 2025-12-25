export default function InventoryOverview() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Inventory Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <a
              href="/admin/inventory/products"
              className="block bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
            >
              Manage Products
            </a>
            <a
              href="/admin/inventory/stock"
              className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Stock Levels
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Inventory Summary</h3>
          <div className="space-y-2">
            <p>Total Products: 0</p>
            <p>Low Stock Items: 0</p>
            <p>Out of Stock: 0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
