import { forwardRef } from "react";
import { MdDashboardCustomize, MdWorkspacePremium } from "react-icons/md";
import Fadeup from "../animasi/Fadeup"

const Harga = forwardRef((props, ref) => {
  const packages = [
    {
      name: "Premium",
      oldPrice: "Rp700.000",
      newPrice: "Rp500.000",
      revisi: "2× revisi",
      unggul: "Hosting + SEO",
      icon: <MdWorkspacePremium size={40} className="text-yellow-400 mx-auto" />,
      features: [
        "Desain Eksklusif",
        "SEO Optimization",
        "2× Revisi",
        "Gratis Hosting 1 Tahun",
      ],
    },
    {
      name: "Custom",
      oldPrice: "Rp1.200.000",
      newPrice: "Rp1.000.000",
      revisi: "3× revisi",
      unggul: "Hosting + SEO",
      icon: <MdDashboardCustomize size={40} className="text-blue-400 mx-auto" />,
      features: [
        "Desain Full Custom",
        "SEO Optimization",
        "3× Revisi",
        "Gratis Hosting 1 Tahun",
        "Support Maintenance",
      ],
    },
  ];

  return (
    <section id="pricing" ref={ref} className="font-popin py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Paket Harga</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((item, i) => (
          <Fadeup>
            <div key={i} className="p-6 bg-white text-gray-900 shadow-lg rounded-lg">
              {item.icon}
              <h3 className="text-2xl font-semibold mt-4">{item.name}</h3>
              <p className="text-lg mt-2">
                <span className="text-gray-400 line-through">{item.oldPrice}</span>{" "}
                <span className="text-green-500 font-bold">{item.newPrice}</span>
              </p>
              <p className="mt-2 text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-md inline-block">
                {item.revisi} | {item.unggul}
              </p>

              {/* List Fitur */}
              <ul className="mt-4 text-left space-y-2">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Fadeup>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Harga;
