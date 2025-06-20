import React from 'react';
import FirstSection from "@/features/hotel/components/first-section";
import BaseServiceLayout from "@/components/base/BaseServiceLayout";
import BaseDescriptionSection from "@/components/base/BaseDescriptionSection";
import BaseImageContentCard from "@/components/base/BaseImageContentCard";
import BaseServicesSection from "@/components/base/BaseServicesSection";
import BaseGallerySection from "@/components/base/BaseGallerySection";
import BasePricingTable, { PricingRow } from "@/components/base/BasePricingTable";

const LaundryComponent = () => {
  const pricingData: PricingRow[] = [
    { name: "Рубашка", wash: "100 руб.", iron: "300 руб." },
    { name: "Футболка / майка", wash: "100 руб.", iron: "200 руб." },
    { name: "Джинсы", wash: "200 руб.", iron: "300 руб." },
    { name: "Брюки", wash: "200 руб.", iron: "400 руб." },
    { name: "Шорты", wash: "100 руб.", iron: "200 руб." },
    { name: "Юбка", wash: "200 руб.", iron: "300 руб." },
    { name: "Платье", wash: "300 руб.", iron: "500 руб." },
    { name: "Свитер / кардиган", wash: "300 руб.", iron: "400 руб." }
  ];

  const headers = ["Наименование", "Стирка", "Глажка"];

  return (
    <BaseServiceLayout>
      <FirstSection title="Прачечная Гостиничного <br/>комплекса «PREMIUM»" />
      
      <BaseDescriptionSection>
        <p>
          В Гостиничном комплексе Premium комфорт наших гостей стоит на первом месте. Наш персонал заботится о Вашем свободном времени и предлагает взять услуги стирки и глажки на себя. Чтобы ничто не мешало наслаждаться полноценным отдыхом в нашем прекрасном городе.
        </p>
      </BaseDescriptionSection>

      <BaseImageContentCard imageUrl="/assets/images/services/service-6.jpg" imagePosition="right">
        <div className="flex flex-col gap-5 lg:gap-10">
          <BasePricingTable 
            headers={headers}
            rows={pricingData}
            className="text-sm lg:text-base"
          />
        </div>
      </BaseImageContentCard>

      <BaseServicesSection />
      
      <BaseGallerySection />
    </BaseServiceLayout>
  );
};

export default LaundryComponent; 