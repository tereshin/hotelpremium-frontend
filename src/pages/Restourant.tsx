import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import ImageGallerySlider from "@/components/sliders/image-gallery-slider";
import Title from "@/components/ui/Title";

const Restourant = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Ресторан и караоке" />
       
      {/* Image Gallery Section */}
      <section className="max-w-[2048px] mx-auto bg-[#192128]">
          <div className="max-w-content text-white w-full mx-auto relative">
            <Title className="text-white absolute top-10 left-3 z-10 hidden lg:block">Галерея</Title>
            <ImageGallerySlider />
          </div>
        </section>
      <Footer />
    </div>
  );
};

export default Restourant; 