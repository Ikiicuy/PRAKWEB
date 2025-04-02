import { forwardRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
  { question: "Berapa lama pembuatan website Premium?", answer: "1 hari paling cepat." },
  { question: "Apakah bisa request desain website?", answer: "Tentu, kami menerima kustomisasi desain!" },
  { question: "Berapa lama pembuatan website Custom?", answer: "Sekitar 5-7 hari kerja!" },
];

const FAQItem = ({ faq }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-200 text-[#313439] border border-gray-600 rounded-lg
    overflow-hidden mb-3 font-popin">
      <button onClick={() => setOpen(!open)} className="w-full p-4 flex justify-between items-center text-left font-semibold">
        {faq.question}
        <IoIosArrowDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="p-4 text-sm text-[#313439]">{faq.answer}</div>}
    </div>
  );
};

const Faq = forwardRef((props, ref) => {
  return (
    <section id="faq" ref={ref} className="py-16 bg-[#313439] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Pertanyaan yang Sering
        Ditanyakan</h2>
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} />
        ))}
      </div>
    </section>
  );
});

export default Faq;