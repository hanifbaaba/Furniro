"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-sm text-red-500 hover:underline"
            >
              Clear All
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="px-6 py-12 text-center text-gray-500">
            <p className="mb-6">Your cart is currently empty.</p>
            <Link href="/Pages/ProductsCard">
              <button className="bg-green-600 px-6 py-3 rounded-lg text-white hover:bg-green-700 transition">
                Shop Now
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-100">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between px-6 py-4"
                >
                  <div className="flex-1 text-center sm:text-left">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="object-cover rounded-lg mb-4"
                    />
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="text-gray-700 font-semibold mb-2 sm:mb-0">
                    ${item.price * item.quantity}
                  </p>
                  <button
                    className="text-red-500 hover:underline text-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-lg font-bold text-gray-800 mb-4 sm:mb-0">
                Total: ${total}
              </p>
              <div className="flex gap-3">
                <Link href="/Pages/CheckoutPage">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Proceed to Checkout
                  </button>
                </Link>
                <Link href="/">
                  <button className="bg-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
