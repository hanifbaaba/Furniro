export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Hotline</h3>
          <p className="text-lg">+40 123 456 7890</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Customer Service
          </h3>
          <ul className="space-y-1">
            <li>Contact us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Terms & Policies
          </h3>
          <ul className="space-y-1">
            <li>Shipping policy</li>
            <li>Terms of service</li>
            <li>Refund policy</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Stay in Touch
          </h3>
          <ul className="space-y-1">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </div>
      <hr className="my-8 border-gray-700" />
      <div className="text-center text-sm text-gray-500">
        © 2025 FURNIRO. All rights reserved.
      </div>
    </footer>
  );
}
