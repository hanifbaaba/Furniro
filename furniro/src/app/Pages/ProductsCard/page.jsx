"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext/CartContext";
import { ToastContainer, toast } from "react-toastify";
import { apiFetch } from "@/app/Utils/api";

export default function ProductsCard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    apiFetch("products/")
      .then((data) => setProducts(data.results))
      .catch((err) => console.error(err.message));
  });
  const { addToCart } = useCart();
  const ProductsData = [
    {
      id: 1,
      name: "Vilu Bowl",
      description:
        "Presenting Vilu - a thoughtfully crafted steel bowl and a delightful decorating to grace your shelf or coffee table. Vilu's amazing colors and thin steel surface create an constitute intriguing form that speaks for itself, whether you fill it with fresh fruit or leave empty as a minimal homeware.",
      price: 65,
      color: "Piazza Beige",
      image: "/Images/ViluBowl.jpg",
    },
    {
      id: 2,
      name: "Flom Sofa 2-seater",
      description: "Brand new Sofa from Flom inc",
      price: 1799,
      color: "Beige",
      image: "/Images/FlomSeater.jpg",
    },

    {
      id: 3,
      name: "Nokk Stool",
      description:
        "Meet Nokk - a contemporary, design-led stool well-suited for various rooms of your home, as well as for terraces, balconies and gardens. Its sturdy steel construction is waterproof and damage-resistant, which guarantees long-time use. Welcome Nokk to your interior and delight in its vivid colors and eye catching silhoutte.",
      price: 279,
      color: "Orange peel",
      image: "/Images/NokkStool.jpg",
    },
    {
      id: 4,
      name: "Ubi Armchair",
      description:
        "Introducing Ubi - a comfy, chubby armchair easily setting a chic vibe in your living room or home office. Its exquisitely contoured construction and resilient upholstery constitute a next generation seating that invites to sit back and relax.",
      price: 769,
      color: "Blueberry Pie Wool",
      image: "/Images/UbiChair.jpg",
    },
    {
      id: 5,
      name: "Streiko Bed",
      description:
        "Introducing Streiko - a comfortable & precisely crafted bed, tailored to your dreamy interior. Carefully balanced proportions of Streiko provide inspiring aesthetics to different kinds of bedrooms. Precisely rounded legs, brilliant quality veneers and incredibly minimal shape of the bed results in durable and long-lasting use, elegant visual appeal and exceptional daily comfort. Mattress not included. Headboard and slats optional.",
      price: 1049,
      color: "Walnut",
      image: "/Images/StreikoBed.jpg",
    },
    {
      id: 6,
      name: "Hido Sideboard",
      description:
        "Say hello to hido - a majestic sideboard with lots of storage space to organize your wardrobe, put all living room knicknaks in order or to hide your winter hats and scarves in the hallway. Hidos's simple form, equipped with discreet drawers, is dynamised with clear  divisions and tactile surface, instantly bringing a touch of effortless elegance to any style of interior",
      price: 1899,
      color: "Oak",
      image: "/Images/Hido.jpg",
    },
    {
      id: 7,
      name: "Teidi Shelving",
      description:
        "Introducing Teidi - a new chapter in the world of shelving. This outstanding unit is open for customization thanks to the modifiable number of shelves and its tool-free assembly. Teidi will do well as a small side table, but it can grow up to five levels, making a lot of room for your favourite books, decorative items and office supplies. The harmonious design coupled with elegant veneer finish make Teidi a modern and functional addition to your interior. ",
      price: 799,
      color: "Oak",
      image: "/Images/Teidi.jpg",
    },
    {
      id: 8,
      name: "Met TV Stand",
      description:
        "Looking for a capacious TV unit with storage? Get to know Met - a sleek, carefully designed red TV Stand, a perfect match for your living rrom furniture and home electronics. Its spacious compartments will help you effortlessly display any media devices,books,vinyl collection and more. ",
      price: 839,
      color: "Terracotta blush",
      image: "/Images/MetStand.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {ProductsData.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            className="object-cover rounded-lg mb-4"
          />
          <h1 className="text-lg font-semibold text-gray-800">
            Name: {product.name}
          </h1>
          <h2 className="text-sm text-gray-600 mt-1">
            Description: {product.description}
          </h2>
          <h3 className="text-sm text-gray-600 mt-1">Color: {product.color}</h3>
          <h3 className="text-base font-bold text-black-600 mt-2">
            Price: ${product.price}
          </h3>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <Link href="/Pages/CartPage">
            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-blue-700 transition">
              View Cart
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
