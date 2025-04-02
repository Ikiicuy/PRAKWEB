import { forwardRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Cta = forwardRef((props, ref) => {
  return (
    <section id="contact" ref={ref} className="py-16  text-[#313439] text-center
    font-popin">
      <h2 className="text-3xl font-bold mb-4">Siap Buat Website?</h2>
      <p className="text-lg mb-6">Hubungi kami sekarang dan mulai proyek Anda!</p>
      <a href="https://wa.me/+62895396264693" className="bg-[#313439]
      text-gray-200 px-6 py-3 font-bold rounded-lg flex items-center
      justify-center gap-2 w-48 mx-auto hover:bg-gray-200 transition">
        <FaWhatsapp size={30}/> WhatsApp Sekarang
      </a>
    </section>
  );
});

export default Cta;