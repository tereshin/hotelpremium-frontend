import Footer from "@/components/footer";
import { Form } from "@/components/Form";
import FirstSection from "@/components/sections/first-section";
import ImageGallerySlider from "@/components/sliders/image-gallery-slider";
import Title from "@/components/ui/Title";
import { cn } from "@/lib/utils";
import CheckIcon from "@/components/icons/CheckIcon";
import ServicesSlider from "@/components/sliders/services-slider";
import React from "react";
import ImageSlider from "@/components/sliders/image-slider";

// Sample sauna images - replace with actual images from your project
const saunaImages = [
  "/assets/images/sauna/1.jpg",
  "/assets/images/sauna/2.jpg",
  "/assets/images/sauna/3.jpg",
  "/assets/images/sauna/4.jpg",
  "/assets/images/sauna/5.jpg",
  "/assets/images/sauna/6.jpg",
  "/assets/images/sauna/7.jpg",
  "/assets/images/sauna/8.jpg",
  "/assets/images/sauna/9.jpg",
  "/assets/images/sauna/10.jpg",
  "/assets/images/sauna/11.jpg",
];

const Sauna = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Сауна и хамам" />
      <section className="max-w-content relative w-full lg:text-lg mx-auto px-4 xl:px-0 mb-8">
        <div className="max-w-[747px]">
          Позвольте себе сбежать от повседневных забот, скрыться от шума, стрессов и суеты. Приглашаем посетить наш прекрасный банный комплекс. Здесь вы сможете удовлетворить запросы на самые разные варианты парения. Они помогут вам расслабиться и восстановить силы. С легким паром!
        </div>
      </section>

      {/* Image Slider */}
      <section className="max-w-content h-[300px] lg:h-[600px] relative w-full lg:mx-auto mt-8 lg:my-12 px-4 xl:px-0">
        <ImageSlider 
          images={saunaImages} 
          ariaLabelPrev="Предыдущее изображение сауны"
          ariaLabelNext="Следующее изображение сауны"
        />
      </section>

      {/* Features Section */}
      <section className="py-10 lg:py-20 px-4 lg:px-10 max-w-[2048px] mx-auto">
        <div className="max-w-content w-full mx-auto flex flex-col gap-6 lg:gap-12">
          <Title>Мы все продумали, комплекс<br/>
          оборудован всем необходимым: </Title>
          
          <div className="flex flex-wrap justify-between gap-6 lg:gap-8">
            <div className="flex items-center gap-5">
              <div className="relative flex items-center justify-center w-[60px] h-[60px]">
                <div className="absolute inset-0 w-full h-full rounded-full bg-white border border-[#E8EEF3]"></div>
                <img 
                  src="/assets/icons/sauna-icon.svg" 
                  alt="Финская сауна и хаммам" 
                  className="w-6 h-6 relative z-10"
                />
              </div>
              <p className="font-['Forum'] text-lg">Финская сауна и хаммам</p>
            </div>
            
            <div className="flex items-center gap-5">
              <div className="relative flex items-center justify-center w-[60px] h-[60px]">
                <div className="absolute inset-0 w-full h-full rounded-full bg-white border border-[#E8EEF3]"></div>
                <img 
                  src="/assets/icons/shower-icon.svg" 
                  alt="Душевая зона" 
                  className="w-6 h-6 relative z-10"
                />
              </div>
              <p className="font-['Forum'] text-lg">Душевая зона</p>
            </div>
            
            <div className="flex items-center gap-5">
              <div className="relative flex items-center justify-center w-[60px] h-[60px]">
                <div className="absolute inset-0 w-full h-full rounded-full bg-white border border-[#E8EEF3]"></div>
                <img 
                  src="/assets/icons/toilet-icon.svg" 
                  alt="Отдельный сан.узел" 
                  className="w-6 h-6 relative z-10"
                />
              </div>
              <p className="font-['Forum'] text-lg">Отдельный сан.узел</p>
            </div>
            
            <div className="flex items-center gap-5">
              <div className="relative flex items-center justify-center w-[60px] h-[60px]">
                <div className="absolute inset-0 w-full h-full rounded-full bg-white border border-[#E8EEF3]"></div>
                <img 
                  src="/assets/icons/rest-room-icon.svg" 
                  alt="Комната отдыха" 
                  className="w-6 h-6 relative z-10"
                />
              </div>
              <p className="font-['Forum'] text-lg">Комната отдыха</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="max-w-content relative w-full lg:mx-auto -mb-6 mt-8 lg:my-12 px-4 xl:px-0">
        <div className="flex w-full flex-col lg:flex-row items-center gap-0 lg:gap-10 lg:h-[625px]">
          {/* Left image column */}
          <div className={cn("w-full lg:w-[70%] lg:absolute top-0 bottom-0 z-0 right-0")}>
            <div className="w-full bg-cover bg-center rounded-sm" style={{ backgroundImage: `url(/assets/images/sauna/0.jpg)` }}>
              <div className="pt-[60%] lg:pt-[70%]"></div>
            </div>
          </div>

          {/* Right content column */}
          <div className={cn("w-full lg:w-[57%] flex flex-col gap-6 lg:gap-10 shadow-xl -top-10 lg:-top-6 bg-white rounded-md px-6 py-8 lg:px-10 lg:py-16 z-10 relative")}>
            <div className="flex flex-col gap-5 lg:gap-10">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-1" >с 9:00 до 23:00</h2>
                  Время доступа к банному комплексу
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-1" >до 4 чел.</h2>
                  Вместимость
                </div>

              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-2" >
                  Стоимость
                </h2>
                <p className="flex lg:items-center gap-2"><CheckIcon className="relative top-1 lg:top-0" />
                  1 000 руб. за час (До 4-ех человек. Каждый последующий + 500 руб.)
                </p>
              </div>

            </div>

            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-7">
              <Form />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 lg:py-20 px-4 lg:px-10 max-w-[2048px] mx-auto">
        <div className="max-w-content w-full mx-auto flex flex-col gap-6 lg:gap-12">
          <Title>Другие предложения</Title>
          <ServicesSlider />
        </div>
      </section>


      {/* Image Gallery Section */}
      <section className="max-w-[2048px] mx-auto bg-[#192128]">
        <div className="max-w-content text-white w-full mx-auto relative">
          <Title className="text-white absolute top-10 left-3 z-10 hidden lg:block">Галерея</Title>
          <ImageGallerySlider />
          <div className="hidden lg:block absolute h-full w-full lg:w-[35%] bg-gradient-to-t from-transparent to-black z-1 lg:-left-10 top-0 pointer-events-none"/>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Sauna; 