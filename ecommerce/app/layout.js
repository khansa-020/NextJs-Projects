import "./globals.css";
import Header from "./components/header";

export const metadata = {
  title: "Ecommerce App",
  description: "Next.js + Tailwind E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
       
        <Header />

       
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
