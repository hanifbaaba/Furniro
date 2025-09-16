"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { apiFetch } from "@/app/Utils/api";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const items = await apiFetch("cart/");
        setCart(items);
      } catch (err) {
        console.error("Failed to fetch cart:", err.message);
      }
    })();
  }, []);

  const addToCart = async (productId) => {
    try {
      const item = await apiFetch("cart/", {
        method: "POST",
        body: JSON.stringify({ product: productId, quantity: 1 }),
      });

      setCart((prev) => {
        const existing = prev.find((i) => i.id === item.id);
        if (existing) {
          return prev.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [...prev, item];
      });
    } catch (err) {
      console.error("Failed to add to cart:", err.message);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await apiFetch(`cart/${id}/`, { method: "DELETE" });
      setCart((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Failed to remove item:", err.message);
    }
  };

  const clearCart = async () => {
    try {
      await apiFetch("cart/clear/", { method: "POST" });
      setCart([]);
    } catch (err) {
      console.error("Failed to clear cart:", err.message);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
