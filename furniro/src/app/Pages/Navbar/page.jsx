import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  return (
    <nav>
      {/* <h1>Dont forget to add the logo before pushing</h1> */}

      <div>
        {/* <Image
          src="/icons/furniro-logos.svg"
          alt="Furniro Logo"
          height={50}
          width={50}
        /> */}
        <h1>Furniro</h1>
      </div>
      {/* <h1>Furniro</h1> */}
      <ul>
        <li>
          <Link href="/">Home </Link>
        </li>

        <li>
          {" "}
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/ContactPage">Contact</Link>
        </li>
      </ul>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />

        <FontAwesomeIcon icon={faCartShopping} />

        <FontAwesomeIcon icon={faHeart} />

        <FontAwesomeIcon icon={faEnvelope} />

        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  );
}
