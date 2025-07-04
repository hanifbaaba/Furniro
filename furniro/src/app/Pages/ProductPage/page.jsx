import Link from "next/link";
import Image from "next/image";
export default function ProductPage() {
  return (
    <div>
      <h1>Our Products</h1>
      <div>
        <Image
          src="/Images/grifo-table.png"
          height={500}
          width={500}
          alt="Grifo Table"
        />
        <h3>Grifo Table</h3>
        <p>Night Lamp</p>
        <p>$500</p>
      </div>
      <div>
        <Image
          src="/Images/muggo-couch.png"
          height={500}
          width={500}
          alt="Muggo Couch"
        />
        <h3>Muggo Couch </h3>
        <p>Small Mug</p>
        <p>$350</p>
      </div>
      <div>
        <Image
          src="/Images/slytherine-sofa.png"
          height={500}
          width={500}
          alt="Slytherine Sofa"
        />
        <h3>Slytherine Sofa</h3>
        <p>$600</p>
      </div>
    </div>
  );
}
