import { useRef } from "react";
import Navbar from "./komponen/Navbar";
import Hero from "./komponen/Hero";
import Features from "./komponen/Fitur";
import Pricing from "./komponen/Harga";
import Testimonials from "./komponen/Testimoni";
import FAQ from "./komponen/Faq";
import CTA from "./komponen/Cta";
import Porto from "./komponen/Portofolio";
import Footer from "./komponen/Footer";

function App() {
  // Buat ref untuk setiap bagian
  const heroRef = useRef(null);
  const portoRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div>
      {/* Kirim refs ke Navbar */}
      <Navbar 
        refs={{ heroRef,portoRef, featuresRef, pricingRef, testimonialsRef, faqRef, ctaRef, footerRef }} 
      />
      <Hero ref={heroRef} />
      <Porto ref={portoRef} />
      <Features ref={featuresRef} />
      <Pricing ref={pricingRef} />
      <Testimonials ref={testimonialsRef} />
      <FAQ ref={faqRef} />
      <CTA ref={ctaRef} />
      <Footer ref={footerRef} />
    </div>
  );
}

export default App;
