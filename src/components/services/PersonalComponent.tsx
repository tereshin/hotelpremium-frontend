import React from 'react';
import FirstSection from "@/features/hotel/components/first-section";
import BaseServiceLayout from "@/components/base/BaseServiceLayout";
import BaseDescriptionSection from "@/components/base/BaseDescriptionSection";
import BaseImageContentCard from "@/components/base/BaseImageContentCard";
import BaseServicesSection from "@/components/base/BaseServicesSection";
import BaseGallerySection from "@/components/base/BaseGallerySection";
import BaseStepsSection from "@/components/base/BaseStepsSection";
import BaseFeaturesSection, { Feature } from "@/components/base/BaseFeaturesSection";
import { Form } from "@/components/layout/Form";

const PersonalComponent = () => {
  const personalFeatures: Feature[] = [
    {
      icon: "/assets/icons/reason-1-circle.svg",
      text: "Персональный подход к каждому гостю"
    },
    {
      icon: "/assets/icons/reason-2-circle.svg", 
      text: "Широкий спектр дополнительных услуг"
    },
    {
      icon: "/assets/icons/reason-3-circle.svg",
      text: "Профессиональный и внимательный персонал"
    }
  ];

  const serviceSteps = [
    {
      number: 1,
      content: "Обратитесь к администратору на стойке регистрации"
    },
    {
      number: 2, 
      content: "Опишите необходимую вам услугу"
    },
    {
      number: 3,
      content: "Наш персонал организует все необходимое"
    }
  ];

  return (
    <BaseServiceLayout>
      <FirstSection title="Персональные услуги" />
      
      <BaseDescriptionSection>
        <p>
          В Гостиничном комплексе PREMIUM мы стремимся предоставить нашим гостям максимальный комфорт и удобство. Наш профессиональный персонал готов оказать широкий спектр персональных услуг, чтобы сделать ваше пребывание у нас незабываемым.
        </p>
        <p>
          От организации трансфера до помощи в планировании досуга — мы всегда готовы помочь вам в любом вопросе.
        </p>
      </BaseDescriptionSection>

      <BaseImageContentCard imageUrl="/assets/images/services/service-5.jpg" imagePosition="left">
        <div className="flex flex-col gap-5 lg:gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-2">
              Круглосуточно
            </h2>
            <p>Наши администраторы готовы помочь вам в любое время</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-7">
          <Form />
        </div>
      </BaseImageContentCard>

      <BaseFeaturesSection 
        title="Почему выбирают нас:"
        features={personalFeatures}
        columns={3}
      />

      <BaseStepsSection 
        title="Как получить персональную услугу:"
        steps={serviceSteps}
        columns={3}
      />

      <BaseServicesSection />
      
      <BaseGallerySection />
    </BaseServiceLayout>
  );
};

export default PersonalComponent; 