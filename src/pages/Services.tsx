import Footer from "@/components/layout/footer";
import { BookingSection } from "@/features/booking/components/booking";
import FirstSection from "@/features/hotel/components/first-section";
import ServicesList from "@/features/services/components/services-list";
import ImageGallerySlider from "@/components/ui/sliders/image-gallery-slider";
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
      
    </div>
  );
};

export default Services; 