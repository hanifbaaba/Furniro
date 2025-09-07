// // import Link from "next/link";
export default function ProductPage() {
  const categories = [
    "Armchairs",
    "Accessories",
    "Sofas",
    "Beds",
    "Storage",
    "TV Stands",
    "Outdoor",
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Our Customer's Top Picks
        </h1>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className="bg-white shadow-sm rounded-lg p-4 text-center font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
