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
          <Link href="/Pages/ContactPage">
            <span className="hover:text-blue-600 transition block">
              <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
            </span>
          </Link>
        </li>
        <li>
          <Link href="/Pages/CartPage">
            <span className="hover:text-blue-600 transition block">
              <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6" />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
