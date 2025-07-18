import Image from "next/image";

export default function ProductCard({
  name,
  description,
  color,
  price,
  image,
}) {
  return (
    <div>
      <Image />
      <h3>Name : {name}</h3>
      <p>Description :{description}</p>
      <p>Color: {color}</p>
      <p>Price : ${price}</p>
    </div>
  );
}
