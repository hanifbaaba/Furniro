import Link from "next/link";
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <Link href="/">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mb-4">
            ← Back
          </button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Sign in to your account
        </h1>
        <p className="text-gray-600 text-sm mb-6">
          Find information about your current and previous orders, or edit your
          account details.
        </p>

        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="johndoe@gmail.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mb-4">
          Login
        </button>

        <button className="w-full bg-white text-gray-700 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition mb-4">
          Sign up with Google
        </button>

        <div className="flex justify-between text-sm text-gray-500">
          <p>
            Don’t have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
          <p className="text-blue-600 cursor-pointer hover:underline">
            Forgot password?
          </p>
        </div>
      </div>
    </div>
  );
}
