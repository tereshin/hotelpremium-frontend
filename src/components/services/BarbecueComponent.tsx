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

const BarbecueComponent = () => {
  const features: Feature[] = [
    {
      icon: "/assets/icons/icon-size.svg",
      text: "Размер беседки 55 кв.м."
    },
    {
      icon: "/assets/icons/icon-light.svg",
      text: "Собственное освещение, включая розетки для мобильных устройств и портативных колонок"
    },
    {
      icon: "/assets/icons/icon-3.svg",
      text: "Бесплатный Wi-Fi"
    },
    {
      icon: "/assets/icons/icon-water.svg",
      text: "Столешница с раковиной"
    },
    {
      icon: "/assets/icons/icon-barbecue.svg",
      text: "Обеденная и мангальная зона"
    },
    {
      icon: "/assets/icons/icon-ball.svg",
      text: "Детская игровая зона"
    }
  ];

  return (
    <BaseServiceLayout>
      <FirstSection title="Аренда беседок" />
      
      <BaseDescriptionSection>
        Отличное место для отдыха на природе – беседки для барбекю в гостиничном комплексе PREMIUM Щелково. Две беседки, расположенные в непосредственной близости к реке и недалеко от лесной зоны станут прекрасным местом для того, чтобы устроить классную гриль-вечеринку.
      </BaseDescriptionSection>

      <BaseImageContentCard imageUrl="/assets/images/barbecue/1.jpg" imagePosition="left">
        <div className="flex flex-col gap-4 lg:text-lg">
          <p>
            Для всех гостей, желающих отдохнуть на природе вместе с семьей или друзьями, в нашем Гостиничном комплексе имеется возможность арендовать беседки для барбекю с мангальными зонами. Две беседки, расположенные в непосредственной близости к реке и недалеко от лесной зоны, станут прекрасным местом для того, чтобы устроить классную гриль-вечеринку!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-7">
          <Form />
        </div>
      </BaseImageContentCard>

      <BaseFeaturesSection 
        title="Мы все продумали, беседки<br /> оборудованы всем необходимым:"
        features={features}
        columns={6}
      />

      <BaseImageContentCard imageUrl="/assets/images/barbecue/2.jpg" imagePosition="right">
        <div className="flex flex-col gap-5 lg:gap-10">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-1">с 11:00 до 22:00</h2>
              Беседки доступны для аренды
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-1">до 10 чел.</h2>
              Вместимость беседки
            </div>
          </div>

          <div className="flex flex-col lg:gap-2">
            <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-2">
              Стоимость
            </h2>
            <p className="flex lg:items-center gap-2">
              <CheckIcon className="relative top-1 lg:top-0" />
              Будние дни - 8 000 руб. за весь день / 5 000 руб. за пол дня (6 часов)
            </p>
            <p className="flex lg:items-center gap-2">
              <CheckIcon className="relative top-1 lg:top-0" />
              Выходные дни - 12 000 руб. за весь день / 8 000 руб. за пол дня (6 часов)
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

export default BarbecueComponent; 