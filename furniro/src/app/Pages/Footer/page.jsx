import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <h1>Furniro.</h1>
      <h5>400 University Drive Suite 200 Coral Gables, FL 33134 USA</h5>
      <div>
        <h2>Links</h2>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h2>Help</h2>
        <ul>
          <li>Payment Options</li>
          <li>Returns</li>
          <li>Privacy Policies</li>
        </ul>
      </div>
      <div>
        <h2>Newsletter</h2>
        <input type="email" placeholder="Enter Your Email Address" />
        <button>Subscribe</button>
      </div>
      <p>2025. All Rights Reserved</p>
    </div>
  );
}
