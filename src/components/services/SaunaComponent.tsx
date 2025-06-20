import React from 'react';
import FirstSection from "@/features/hotel/components/first-section";
import BaseServiceLayout from "@/components/base/BaseServiceLayout";
import BaseDescriptionSection from "@/components/base/BaseDescriptionSection";
import BaseImageContentCard from "@/components/base/BaseImageContentCard";
import BaseServicesSection from "@/components/base/BaseServicesSection";
import BaseGallerySection from "@/components/base/BaseGallerySection";
import CheckIcon from "@/components/ui/icons/CheckIcon";
import { Form } from "@/components/layout/Form";
import ImageSlider from "@/components/ui/sliders/image-slider";
import Title from "@/components/ui/Title";

const SaunaComponent = () => {
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

  const saunaFeatures = [
    {
      icon: "/assets/icons/sauna-icon.svg",
      text: "Финская сауна и хаммам"
    },
    {
      icon: "/assets/icons/shower-icon.svg",
      text: "Душевая зона"
    },
    {
      icon: "/assets/icons/toilet-icon.svg",
      text: "Отдельный сан.узел"
    },
    {
      icon: "/assets/icons/rest-room-icon.svg",
      text: "Комната отдыха"
    }
  ];

  return (
    <BaseServiceLayout>
      <FirstSection title="Сауна и хамам" />
      
      <BaseDescriptionSection>
        Позвольте себе сбежать от повседневных забот, скрыться от шума, стрессов и суеты. Приглашаем посетить наш прекрасный банный комплекс. Здесь вы сможете удовлетворить запросы на самые разные варианты парения. Они помогут вам расслабиться и восстановить силы. С легким паром!
      </BaseDescriptionSection>

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
            {saunaFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="relative flex items-center justify-center w-[60px] h-[60px]">
                  <div className="absolute inset-0 w-full h-full rounded-full bg-white border border-[#E8EEF3]"></div>
                  <img 
                    src={feature.icon} 
                    alt={feature.text} 
                    className="w-6 h-6 relative z-10"
                  />
                </div>
                <p className="font-['Forum'] text-lg">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BaseImageContentCard imageUrl="/assets/images/sauna/0.jpg" imagePosition="right">
        <div className="flex flex-col gap-5 lg:gap-10">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-1">с 9:00 до 23:00</h2>
              Время доступа к банному комплексу
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-1">до 4 чел.</h2>
              Вместимость
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-2">
              Стоимость
            </h2>
            <p className="flex lg:items-center gap-2">
              <CheckIcon className="relative top-1 lg:top-0" />
              1 000 руб. за час (До 4-ех человек. Каждый последующий + 500 руб.)
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-7">
          <Form />
        </div>
      </BaseImageContentCard>

      <BaseServicesSection />
      
      <BaseGallerySection />
    </BaseServiceLayout>
  );
};

export default SaunaComponent; 