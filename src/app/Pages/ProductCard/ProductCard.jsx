import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  name,
  description,
  color,
  price,
  image,
}) {
  return (
    <div className="bg-white shadow rounded-lg p-4 text-center">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold">Name: {name}</h3>
      <p className="text-sm text-gray-600 mt-1">Description: {description}</p>
      <p className="text-sm text-gray-600 mt-1">Color: {color}</p>
      <p className="text-sm font-bold mt-2 text-blue-600">Price: ${price}</p>

      <Link href="/">
        <button className="mt-4 text-blue-500 underline">Back to home</button>
      </Link>
    </div>
  );
}
