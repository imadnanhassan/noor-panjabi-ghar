import React from "react";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {params.slug} Collection
      </h1>
      <p className="text-muted">
        Browse our {params.slug} Islamic clothing collection.
      </p>
      {/* Products in this category will go here */}
    </div>
  );
}
