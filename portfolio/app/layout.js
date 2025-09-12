import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My Portfolio",
  description: "Personal Portfolio with Next.js + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
