import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Welcome to Noor Panjabi Ghar
          </h1>
          <p className="text-xl text-muted mb-8">
            Discover elegance and modesty in our collection of Islamic clothing
            and traditional wear.
          </p>
          <a
            href="/products"
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for featured products */}
            <div className="bg-card p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Women's Panjabi</h3>
              <p className="text-muted">
                Elegant and modest designs for every occasion.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Men's Collection</h3>
              <p className="text-muted">Traditional and contemporary styles.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Accessories</h3>
              <p className="text-muted">
                Complete your look with our range of accessories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
