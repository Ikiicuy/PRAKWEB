import { forwardRef } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="py-8 bg-gray-900 text-white text-center">
      <p>&copy; 2025 PRAKWEB. Semua Hak Dilindungi.</p>
      <a href="/privacy-policy" className="text-blue-300 underline block mt-2">
        Kebijakan Privasi
      </a>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://www.instagram.com/prakweb?igsh=c281bmNqMHN6Ynky" className="text-pink-400 text-xl hover:text-pink-600"><FaInstagram /></a>
        <a href="https://wa.me/+62895396264693" className="text-green-400 text-xl hover:text-green-600"><FaWhatsapp /></a>
      </div>
    </footer>
  );
});

export default Footer;
