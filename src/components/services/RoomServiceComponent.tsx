import React from 'react';
import FirstSection from "@/features/hotel/components/first-section";
import BaseServiceLayout from "@/components/base/BaseServiceLayout";
import BaseDescriptionSection from "@/components/base/BaseDescriptionSection";
import BaseImageContentCard from "@/components/base/BaseImageContentCard";
import BaseServicesSection from "@/components/base/BaseServicesSection";
import BaseGallerySection from "@/components/base/BaseGallerySection";
import BaseStepsSection from "@/components/base/BaseStepsSection";
import TimeIcon from "@/components/ui/icons/TimeIcon";
import MenuSlider from "@/components/ui/sliders/menu-slider";

const RoomServiceComponent = () => {
  const orderSteps = [
    {
      number: 1,
      content: "Ознакомиться с меню, оно есть в Вашем номере. Позвонить по предоставленному номеру и попросить подать еду в номер."
    },
    {
      number: 2,
      content: "По мере готовности блюда и напитки будут поданы в номер. Их стоимость не отличается от ресторанных. Блюда имеют тот же вес и оформление."
    }
  ];

  const reasons = [
    {
      number: 1,
      content: "Оставайтесь в номере. Так приятно расслабиться в номере и, удобно расположившись, насладиться вкуснейшими деликатесами."
    },
    {
      number: 2,
      content: "Устройте романтический ужин для второй половинки. Никаких хлопот — нужно сделать всего один звонок"
    },
    {
      number: 3,
      content: "Первые и вторые блюда будут поданы горячими, ведь ресторан находится рядом"
    }
  ];

  return (
    <BaseServiceLayout>
      <FirstSection title="Room-Service" />
      
      <BaseDescriptionSection>
        На территории нашего гостиничного комплекса PREMIUM находится ресторан изысканной кухни KINZA. К вашим услугам прямо в номере представлено обширное меню, включающее в себя более ста разных блюд. Европейская, итальянская, кавказская кухня придутся по вкусу как искушенным ценителям, так и всем, кто желает попробовать что-то новое.
      </BaseDescriptionSection>

      {/* Menu Slider Section */}
      <MenuSlider />

      <BaseImageContentCard imageUrl="/assets/images/services/service-3.jpg" imagePosition="right">
        <div className="flex flex-col gap-5 lg:gap-10">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl uppercase tracking-wide font-light leading-tight mb-1">
                Время работы<br />
                room service:
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex lg:items-center gap-2">
              <TimeIcon className="relative top-1 lg:top-0" />
              Воскресенье - Четверг (с 12:00 - 01:00)
            </p>
            <p className="flex lg:items-center gap-2">
              <TimeIcon className="relative top-1 lg:top-0" />
              Пятница - Суббота (с 12:00 - 06:00)
            </p>
          </div>
        </div>
      </BaseImageContentCard>

      <BaseStepsSection 
        title="Как сделать заказ?"
        steps={orderSteps}
        columns={2}
      />

      <BaseStepsSection 
        title="3 причины сделать заказ в номер"
        steps={reasons}
        columns={3}
        className="py-10 lg:pb-20"
      />

      <BaseServicesSection />
      
      <BaseGallerySection />
    </BaseServiceLayout>
  );
};

export default RoomServiceComponent; 