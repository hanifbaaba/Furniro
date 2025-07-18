// ("use client");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Furniro Store</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link href="/ContactPage" className="hover:text-blue-600 transition">
            <FontAwesomeIcon icon={faPhone} title="Phone" /> Contact
          </Link>
        </li>
        <li>
          <Link href="/CartPage" className="hover:text-blue-600 transition">
            <FontAwesomeIcon icon={faShoppingCart} title="Cart" /> Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}
