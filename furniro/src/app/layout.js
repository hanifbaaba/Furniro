// import Link from "next/link";
import Navbar from "./Pages/Navbar/page";
import Footer from "./Pages/Footer/page";
// import "../globals.css";
export const metadata = {
  title: "Furniro",
  description: "Furniro Furniture Store",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
