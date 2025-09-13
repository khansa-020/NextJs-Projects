"use client";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setAdded(true);
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={addToCart}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-500"
      >
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
