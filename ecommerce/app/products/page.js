import ProductCard from "../components/productCard";

export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products", { cache: "no-store" });
  const data = await res.json();

  // ✅ ensure products exist
  const products = Array.isArray(data.products) ? data.products : [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}
