import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import PromotionsList from "@/components/sections/promotions-list";
import ImageGallerySlider from "@/components/sliders/image-gallery-slider";
import Title from "@/components/ui/Title";
import { BookingSection } from '@/components/sections/booking';
const Promotions = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Акции" />
      <PromotionsList />
      {/* Booking Form Section */}
      <section className="py-8 lg:py-20 px-4 lg:px-10 max-w-[2048px] w-full mx-auto">
        <div className="max-w-content w-full mx-auto flex flex-col gap-8 lg:gap-14">
          <BookingSection />
        </div>
      </section>
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

export default Promotions;
