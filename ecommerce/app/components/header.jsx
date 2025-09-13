import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-xl">E-Shop</Link>
        <nav className="space-x-4">
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </div>
    </header>
  );
}
