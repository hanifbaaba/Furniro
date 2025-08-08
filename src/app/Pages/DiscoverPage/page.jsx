import Link from "next/link";
export default function DiscoverPage() {
  return (
    <div className="bg-[url('/Images/Furniro-BackgroundImg.jpg')] bg-cover bg-center h-screen flex flex-col items-center justify-center text-white text-center px-4 rounded-md shadow bg-contain ">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
        Discover Our New Collection
      </h1>
      <Link href="/Pages/ProductsCard">
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Shop now
        </button>
      </Link>
    </div>
  );
}
