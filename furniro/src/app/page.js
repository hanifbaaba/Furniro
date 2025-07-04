import Link from "next/link";
// import Navbar from "./components/Navbar/page";
import Home from "./Pages/Home/page";
import Range from "./Pages/Range/page";
import ProductPage from "./Pages/ProductPage/page";
// import Footer from "./components/Footer/page";
export default function page() {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />
      <Range />
      <ProductPage />
      {/* <Footer /> */}
    </div>
  );
}
