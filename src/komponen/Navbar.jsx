import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ refs }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk smooth scroll menggunakan ref
  const smoothScroll = (ref) => {
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Sesuaikan dengan tinggi navbar
        behavior: "smooth",
      });
      setIsOpen(false); // Tutup menu jika di mode mobile
    }
  };

  return (
    <nav className="bg-[#313439] font-popin shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="avatar">
            <div className="h-8 object-cover w-48">
              <img src="/logo2.png" className="shadow-amber-600 rounded-sm"/>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden text-white md:flex space-x-6">
            <button onClick={() => smoothScroll(refs.heroRef)} className="hover:text-blue-500">Home</button>
            <button onClick={() => smoothScroll(refs.portoRef)}
            className="hover:text-blue-500">Portofolio</button>
            <button onClick={() => smoothScroll(refs.featuresRef)} className="hover:text-blue-500">Fitur</button>
            <button onClick={() => smoothScroll(refs.pricingRef)} className="hover:text-blue-500">Harga</button>
            <button onClick={() => smoothScroll(refs.testimonialsRef)} className="hover:text-blue-500">Testimoni</button>
            <button onClick={() => smoothScroll(refs.faqRef)} className="hover:text-blue-500">FAQ</button>
            <button onClick={() => smoothScroll(refs.ctaRef)} className="hover:text-blue-500">Kontak</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="text-white" size={24} /> : <FaBars className="text-white" size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full">
          <button onClick={() => smoothScroll(refs.heroRef)} className="block px-4 py-2">Home</button>
          <button onClick={() => smoothScroll(refs.portoRef)} className="block
          px-4 py-2">Portofolio</button>
          <button onClick={() => smoothScroll(refs.featuresRef)} className="block px-4 py-2">Fitur</button>
          <button onClick={() => smoothScroll(refs.pricingRef)} className="block px-4 py-2">Harga</button>
          <button onClick={() => smoothScroll(refs.testimonialsRef)} className="block px-4 py-2">Testimoni</button>
          <button onClick={() => smoothScroll(refs.faqRef)} className="block px-4 py-2">FAQ</button>
          <button onClick={() => smoothScroll(refs.ctaRef)} className="block px-4 py-2">Kontak</button>
        </div>
      )}
    </nav>
  );
}
