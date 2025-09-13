import Header from "./components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to E-Shop</h1>
        <p className="mt-4 text-gray-600">A simple Next.js + Tailwind demo store</p>
        <Link
          href="/products"
          className="mt-6 inline-block px-6 py-3 bg-black text-white rounded"
        >
          Browse Products
        </Link>
      </main>
    </div>
  );
}
