import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {forwardRef} from "react"
import Fadeup from "../animasi/Fadeup"
const testimonials = ["/public/tes1.jpg", "/public/tes2.jpg"]; // Tambahkan gambar jika perlu

const Testimoni = forwardRef((props,ref)=>{
  return (
    <section id="testimonials" ref={ref} className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimoni Klien</h2>

        <div className="relative w-full max-w-2xl mx-auto">
          {/* Tombol Navigasi Manual */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 shadow-lg swiper-button-prev">
            <FaChevronLeft size={24} />
          </button>

          {/* Carousel */}
          <Fadeup>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            className="rounded-lg shadow-lg"
          >
            {testimonials.map((img, i) => (
              <SwiperSlide key={i} className="flex justify-center items-center h-96 bg-white">
                <img src={img} alt={`Testimoni ${i + 1}`} className="h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Fadeup>
          {/* Tombol Navigasi Manual */}
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 shadow-lg swiper-button-next">
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
})

export default Testimoni