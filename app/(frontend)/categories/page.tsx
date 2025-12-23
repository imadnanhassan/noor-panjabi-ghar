import React from "react";

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Categories</h1>
      <p className="text-center text-muted mb-6">
        Explore our collections by category.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">Women's Collection</h2>
          <p className="text-muted">Modest and elegant clothing for women.</p>
          <a
            href="/categories/women"
            className="text-primary hover:underline mt-4 inline-block"
          >
            Shop Now
          </a>
        </div>
        <div className="bg-card p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">Men's Collection</h2>
          <p className="text-muted">
            Traditional and contemporary styles for men.
          </p>
          <a
            href="/categories/men"
            className="text-primary hover:underline mt-4 inline-block"
          >
            Shop Now
          </a>
        </div>
        <div className="bg-card p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">Children's Wear</h2>
          <p className="text-muted">
            Comfortable and modest clothing for kids.
          </p>
          <a
            href="/categories/children"
            className="text-primary hover:underline mt-4 inline-block"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
