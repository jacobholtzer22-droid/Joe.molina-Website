import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import WhyUs from "@/components/WhyUs";
import ServiceArea from "@/components/ServiceArea";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        {/* Signature before/after slider — config-gated; renders only when Joe
            provides real matched pairs (site.beforeAfter.enabled). */}
        <BeforeAfterSlider />
        <WhyUs />
        <ServiceArea />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
