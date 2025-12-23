import React from "react";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Details</h1>
      <p className="text-muted">Product Slug: {params.slug}</p>
      {/* Product details will go here */}
    </div>
  );
}
