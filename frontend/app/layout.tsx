import type { Metadata } from "next";
import Footer from "@/app/components/layout/Footer";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Topbar from "@/app/components/layout/Topbar";
import { CartProvider } from "@/app/context/CartContext";
import { AuthProvider } from "@/app/context/AuthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html >
      <body>
        <AuthProvider>
          <CartProvider>
            <Topbar />
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
