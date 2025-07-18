export default function Recommendation() {
  const products = [
    { name: "Vilu Bowl", price: "$65" },
    { name: "Flom Sofa 2-seater", price: "$1,799" },
    { name: "Nokk Stool", price: "$279" },
    { name: "Ubi Armchair", price: "$769" },
    { name: "Streiko Bed", price: "$1,049" },
    { name: "Hido Sideboard", price: "$1,899" },
    { name: "Teidi Shelving", price: "" },
    { name: "Met TV Stand", price: "$839" },
    { name: "Lino Throw", price: "" },
  ];

  return (
    <section className="px-6 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Recommended Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {product.price ? product.price : "Coming soon"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
