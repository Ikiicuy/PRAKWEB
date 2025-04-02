import { forwardRef } from "react";
import Fadeup from "../animasi/Fadeup"

const portfolioItems = {
  barang: [
    { title: "Landing Page Toko Baju", img: "/public/tes1.jpg", link: "#", desc:
    "Cocok untuk bisnis yang menjual produk fisik seperti makanan,pakaian,gadget, dan lain-lain. Fokus pada tampilan menarik dan  call-to-action (CTA) yang kuat agar pelanggan lebih mudah melakukan  pembelian. contoh:" },
  ],
  jasa: [
    { title: "Landing Page Freelance", img: "/public/tes1.jpg", link: "#", desc:
    "Digunakan untuk mempromosikan layanan seperti freelance, kursus online, event, dan lainnya. Biasanya memiliki CTA yang mengarahkan pengunjung untuk menghubungi atau mendaftar layanan. contoh:" },
  ],
};

const Portfolio = forwardRef((props, ref) => {
  return (
    <section id="portfolio" ref={ref} className="py-16 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Contoh Portofolio</h2>

        {Object.entries(portfolioItems).map(([category, items], index) => (
          <div key={index} className="mb-16">
            <h3 className={`text-2xl font-semibold mb-6 ${category === "barang" ? "text-blue-600" : "text-green-600"}`}>
              {category === "barang" ? "Landing Page Barang" : "Landing Page Jasa"}
            </h3>
            
            {items.map((item, i) => (
    <Fadeup>
              <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform group-hover:scale-105">
                  
                  {/* Deskripsi di Kiri */}
                  <div className="w-full md:w-2/3 p-6 text-left">
                    <p className="text-gray-700 mt-2">{item.desc}</p>
                  </div>

                  {/* Gambar di Kanan - Square & Rounded */}
                  <div className="w-full md:w-1/3 p-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </a>
    </Fadeup>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
});

export default Portfolio;
