import { forwardRef } from "react";

const Hero = forwardRef((props, ref) => {
  const scrollToPricing = () => {
    const pricingElement = document.getElementById("pricing");
    pricingElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative h-screen flex flex-col justify-center
    items-center text-center bg-[#313439] overflow-hidden px-6">
      {/* Content */}
      <div className="z-10 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Buat Website Profesional Bersama <span className="text-blue-400">PRAKWEB</span></h1>
        <p className="mt-4 text-white text-lg">
          Tingkatkan kehadiran digital Anda dengan website berkualitas dan harga terjangkau.
        </p>
        <p className="mt-2 text-gray-300 text-sm italic">
          "Solusi digital terbaik untuk UMKM, mulai dari 500 ribuan"
        </p>
        <button
          onClick={scrollToPricing}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all"
        >
          Lihat Harga
        </button>
      </div>
    </section>
  );
});

export default Hero;
