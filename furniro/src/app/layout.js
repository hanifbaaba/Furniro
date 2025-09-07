"use client";

import "./globals.css";
import { CartProvider } from "@/app/context/CartContext/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
