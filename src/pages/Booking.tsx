import Footer from "@/components/layout/footer";
import FirstSection from "@/features/hotel/components/first-section";
import ImageGallerySlider from "@/components/ui/sliders/image-gallery-slider";
import Title from "@/components/ui/Title";

const Booking = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Бронирование" />
      <div className="flex flex-col gap-8 md:gap-10 max-w-[1280px] mx-auto relative xl:-left-4">
        <iframe className="w-full lg:h-[2500px] h-[4200px] bg-white px-4 xl:px-0" src="https://reservationsteps.ru/rooms/index/e222bc26-37b1-4d47-a7b0-507f2654b884?lang=ru&colorSchemePreview=0&onlyrooms=&name=&surname=&email=&phone=&orderid=&servicemode=0&firstroom=0&vkapp=&insidePopup=0"></iframe>
      </div>
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

export default Booking; 