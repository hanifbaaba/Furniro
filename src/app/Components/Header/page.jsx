// // import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white py-12 px-6 md:px-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Hi, we're Furniro!
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Furniro is a new-generation design brand offering a versatile range of
        top-notch sideboards, poufs, beds, and tables — already delivered to
        over
        <span className="font-semibold text-black"> 10,000+ customers </span>
        across 10 countries. The home of bold ideas and timeless designs,
        leaving plenty of room for your personality.
      </p>
    </header>
  );
}
