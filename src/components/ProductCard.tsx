import React from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800">
      <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={`Image of ${product.name} product display`}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://placehold.co/400x300?text=Product+Image+Unavailable";
          }}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{product.name}</h3>
      <p className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{product.price}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{product.category}</p>
      <button className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
        Add to Cart
      </button>
    </div>
  );
}
