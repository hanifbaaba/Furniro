import Link from "next/link";
export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Cart</h1>
      <p className="text-gray-600 mb-8">Review your items before checkout</p>

      <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6 text-center">
        <p className="text-gray-500">Your cart is currently empty.</p>
      </div>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
        Proceed to Checkout
      </button>
      <Link href="/">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black-700 transition">
          Back to home
        </button>
      </Link>
    </div>
  );
}
