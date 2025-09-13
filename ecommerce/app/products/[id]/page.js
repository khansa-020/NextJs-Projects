"use client";
import { useState, useEffect } from "react";

export default function ProductDetail({ params }) {
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [params.id]);

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setAdded(true);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <img src={product.thumbnail} alt={product.title} className="w-64 h-64 object-cover rounded mb-4" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-700 my-2">{product.description}</p>
      <p className="text-xl font-semibold">${product.price}</p>
      <button
        onClick={addToCart}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
