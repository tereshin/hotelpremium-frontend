import Footer from "@/components/footer";
import { BookingSection } from "@/components/sections/booking";
import FirstSection from "@/components/sections/first-section";
import ServicesList from "@/components/sections/services-list";
import ImageGallerySlider from "@/components/sliders/image-gallery-slider";
import Title from "@/components/ui/Title";


const Services = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Услуги" />
      <ServicesList />
    
      {/* Image Gallery Section */}
      <section className=" mx-auto bg-[#192128ed]">
        <div className="max-w-content text-white w-full mx-auto relative">
          <Title className="text-white absolute top-10 left-3 z-10 hidden lg:block">Галерея</Title>
          <ImageGallerySlider />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services; 