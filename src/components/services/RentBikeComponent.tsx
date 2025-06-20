import React from 'react';
import FirstSection from "@/features/hotel/components/first-section";
import BaseServiceLayout from "@/components/base/BaseServiceLayout";
import BaseDescriptionSection from "@/components/base/BaseDescriptionSection";
import BaseImageContentCard from "@/components/base/BaseImageContentCard";
import BaseServicesSection from "@/components/base/BaseServicesSection";
import BaseGallerySection from "@/components/base/BaseGallerySection";
import BaseFeaturesSection, { Feature } from "@/components/base/BaseFeaturesSection";
import CheckIcon from "@/components/ui/icons/CheckIcon";
import { Form } from "@/components/layout/Form";
import ImageSlider from "@/components/ui/sliders/image-slider";
import Title from "@/components/ui/Title";

const RentBikeComponent = () => {
  const images = [
    "/assets/images/rent-bike/2.jpg",
    "/assets/images/rent-bike/3.jpg",
    "/assets/images/rent-bike/4.jpg",
    "/assets/images/rent-bike/5.jpg",
    "/assets/images/rent-bike/6.jpg",
    "/assets/images/rent-bike/7.jpg"
  ];

  const rentConditions: Feature[] = [
    {
      icon: "/assets/icons/rent-1.png",
      text: "Оформить прокат велосипеда можно у администратора на ресепшн"
    },
    {
      icon: "/assets/icons/rent-2.png",
      text: "Если Вы – гость нашего комплекса, залог не требуется"
    },
    {
      icon: "/assets/icons/rent-3.svg",
      text: "Если Вы не проживаете в Гостиничном комплексе, достаточно оставить на ресепшн свои контактные данные и залог, который мы вернем обратно при сдаче велосипеда"
    },
    {
      icon: "/assets/icons/rent-4.svg",
      text: "При получении велосипеда на ресепшн мы попросим Вас ознакомиться с положениями документа «Правила эксплуатации велосипеда» и подписать его"
    }
  ];

  return (
    <BaseServiceLayout>
      <FirstSection title="Прокат велосипедов" />
      
      <BaseDescriptionSection>
        <p>
          Прогулки на спортивных велосипедах вдоль набережной реки Клязьма: прокат в отеле!

          В нашем Гостиничном комплексе Вы всегда можете взять напрокат удобный и надежный велосипед и отправиться самостоятельно изучать близлежащие достопримечательности или прокатиться по живописной набережной реки Клязьма, оборудованной велосипедными дорожками.
        </p>
        <p>
          Все наши велосипеды выдаются со специальным замком для парковки, что позволяет брать транспорт на целый день и перемещаться на нем по территории города.
        </p>
      </BaseDescriptionSection>

      <BaseImageContentCard imageUrl="/assets/images/rent-bike/1.jpg" imagePosition="right">
        <div className="flex flex-col gap-5 lg:gap-10">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-1">с 9:00 до 19:00</h2>
              Время проката велосипедов
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-2">
              Стоимость
            </h2>
            <p className="flex lg:items-center gap-2">
              <CheckIcon className="relative top-1 lg:top-0" />
              600 руб. — 3 часа
            </p>
            <p className="flex lg:items-center gap-2">
              <CheckIcon className="relative top-1 lg:top-0" />
              1200 руб. — 1 день
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-7">
          <Form />
        </div>
      </BaseImageContentCard>

      <BaseFeaturesSection 
        title="Условия проката велосипеда в Гостиничном комплексе &quot;Premium&quot;:"
        features={rentConditions}
        columns={4}
      />

      {/* Image Slider */}
      <section className="max-w-content h-[300px] lg:h-[600px] relative w-full lg:mx-auto mt-0 lg:my-12 px-4 xl:px-0">
        <ImageSlider
          images={images}
          ariaLabelPrev="Предыдущее изображение велосипедов"
          ariaLabelNext="Следующее изображение велосипедов"
        />
      </section>

      <BaseServicesSection />
      
      <BaseGallerySection />
    </BaseServiceLayout>
  );
};

export default RentBikeComponent; 