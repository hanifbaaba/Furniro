// import Link from "next/link";
import Image from "next/image";
// import "../products.json";
// import products from "../data/products.json";

export default function ProductCard({
  name,
  description,
  color,
  price,
  image,
}) {
  //

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <Image
        src={image}
        alt={name}
        width={300}
        height={200}
        className="object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <p className="text-sm text-gray-500 mt-1">Color: {color}</p>
      <p className="text-sm font-bold mt-2 text-blue-600">${price}</p>
      {/* {products.map((product, index) => (
            <li
              key={index}
              className="bg-white shadow-sm rounded-lg p-4 text-center font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            >
            <Image src={image} alt="" width={300} height={300} />
      <h3>Name : {name}</h3>
      <p>Description :{description}</p>
      <p>Color: {color}</p>
      <p>Price : ${price}</p>
              {category}
   </li> */}
    </div>
  );
}
