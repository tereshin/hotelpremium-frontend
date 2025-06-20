import Footer from "@/components/layout/footer";
import FirstSection from "@/features/hotel/components/first-section";
import ContactMap from "@/features/hotel/components/contact-map";
import ImageGallerySlider from "@/components/ui/sliders/image-gallery-slider";
import Title from "@/components/ui/Title";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Контакты" />
      <ContactMap />
      {/* Image Gallery Section */}
      <section className="max-w-[2048px] mx-auto bg-[#192128]">
          <div className="max-w-content text-white w-full mx-auto relative">
            <Title className="text-white absolute top-10 left-3 z-10 hidden lg:block">Галерея</Title>
            <ImageGallerySlider />
          </div>
        </section>
      
    </div>
  );
};

export default Contacts; 