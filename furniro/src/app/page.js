import Footer from "./Components/Footer/page";
import Header from "./Components/Header/page";
import Navbar from "./Components/Navbar/page";
import DiscoverPage from "./Pages/DiscoverPage/page";
// import ContactPage from "./Pages/ContactPage/page";
// import ProductList from "./Pages/ProductList/page";
// import ProductPage from "./Pages/ProductPage/page";
// import ProductsCard from "./Pages/ProductsCard/page";
// import Recommendation from "./Pages/Recommendation/page";
// import products from "/products.json";
// import Link from "next/link";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <DiscoverPage />
      <Footer />
      {/* <Recommendation /> */}
      {/* <ProductPage /> */}
      {/* <ProductsCard /> */}

      {/* <ProductList products={products} /> */}
      {/* <ProductList /> */}
      {/* <Recommendation /> */}
      {/* <ContactPage /> */}
    </>
  );
}
