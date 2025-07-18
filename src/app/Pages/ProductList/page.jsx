import ProductCard from "../ProductCard/page";

export default function ProductList() {
  return (
    <div>
      {ProductList.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
