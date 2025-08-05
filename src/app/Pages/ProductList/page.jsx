import ProductCard from "../ProductCard/page";
// import Link from "next/link";
// import products from "../data/products.json";
import products from "../../data/products.json";

export default function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
