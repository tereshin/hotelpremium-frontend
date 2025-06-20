import React from 'react';
import FirstSection from "@/features/hotel/components/first-section";
import BaseServiceLayout from "@/components/base/BaseServiceLayout";
import BaseDescriptionSection from "@/components/base/BaseDescriptionSection";
import BaseImageContentCard from "@/components/base/BaseImageContentCard";
import BaseServicesSection from "@/components/base/BaseServicesSection";
import BaseGallerySection from "@/components/base/BaseGallerySection";
import CheckIcon from "@/components/ui/icons/CheckIcon";
import { Form } from "@/components/layout/Form";

const BreakfastComponent = () => {
  return (
    <BaseServiceLayout>
      <FirstSection title="Завтрак" />
      
      <BaseDescriptionSection>
        <p>
          Чтобы ваше утро было насыщенным, полным энергии и сил, а день — плодотворным и успешным, мы предлагаем попробовать завтрак в Гостиничном комплексе PREMIUM.
        </p>
        <p>
          Завтрак в нашем гостиничном комплексе — это не просто еда, это настроение, заряд бодрости на целый день и превосходное дополнение к комфортному отдыху в PREMIUM Щелково.
        </p>
      </BaseDescriptionSection>

      <BaseImageContentCard imageUrl="/assets/images/services/service-4.jpg" imagePosition="right">
        <div className="flex flex-col gap-5 lg:gap-10">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-1">с 8:00 до 11:00</h2>
              Время подачи завтрака
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-2">
              Стоимость
            </h2>
            <p className="flex lg:items-center gap-2">
              <CheckIcon className="relative top-1 lg:top-0" />
              750 руб. / чел.
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

export default BreakfastComponent; 