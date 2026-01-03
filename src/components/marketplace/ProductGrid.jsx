import React from "react";

const ProductCard = React.memo(function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4">
      <div className="aspect-square overflow-hidden rounded-xl bg-zionGray">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = "/images/placeholder.png";
          }}
        />
      </div>

      <div className="mt-3">
        <h3 className="font-semibold text-sm">{product.name}</h3>
        <p className="text-xs text-gray-500">{product.unit}</p>
        <p className="mt-1 font-bold text-zionGreen">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
});

export default function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <p className="text-center text-gray-500 mt-16">
        No products found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
