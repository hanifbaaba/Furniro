import Image from "next/image";
export default function Range() {
  return (
    <div>
      <h2>Browse The Range</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
        nostrum? Quibusdam modi enim, laboriosam fuga rerum dolorum ex,
        architecto temporibus accusantium explicabo eaque facere praesentium,
        nisi non eum est commodi!
      </p>
      <Image
        src="/Images/furniro-bedroom.png"
        alt="furniro-bedroom"
        height={500}
        width={500}
      />
      <Image
        src="/Images/furniro-dining.png"
        alt="furniro-bedroom"
        height={500}
        width={500}
      />
      <Image
        src="/Images/furniro-living.png"
        alt="furniro-bedroom"
        height={500}
        width={500}
      />
    </div>
  );
}
