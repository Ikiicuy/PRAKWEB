import { forwardRef } from "react";
import Fadeup from "../animasi/Fadeup"
import { TbHexagonNumber1Filled, TbHexagonNumber2Filled, TbHexagonNumber3Filled } from "react-icons/tb";

const fiturList = [
  {
    icon: <TbHexagonNumber1Filled size={50} className="text-yellow-400 mx-auto" />,
    title: "Mudah Digunakan",
    description: "Antarmuka yang sederhana dan intuitif, sehingga mudah digunakan oleh siapa saja.",
  },
  {
    icon: <TbHexagonNumber2Filled size={50} className="text-blue-400 mx-auto" />,
    title: "SEO Friendly",
    description: "Optimasi SEO bawaan agar website lebih mudah ditemukan di Google.",
  },
  {
    icon: <TbHexagonNumber3Filled size={50} className="text-green-400 mx-auto" />,
    title: "Desain Profesional",
    description: "Desain modern dan responsif yang menarik perhatian pelanggan.",
  },
];

const Fitur = forwardRef((props, ref) => {
  return (
    <section id="features" ref={ref} className="font-popin py-16 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Kenapa Harus Kami?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fiturList.map((item, i) => (
          <Fadeup>
            <div key={i} className="p-6 bg-white shadow-lg rounded-lg text-center">
              {item.icon}
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          </Fadeup>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Fitur;
