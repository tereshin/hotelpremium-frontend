import React from 'react';
import FirstSection from "@/features/hotel/components/first-section";
import BaseServiceLayout from "@/components/base/BaseServiceLayout";
import BaseDescriptionSection from "@/components/base/BaseDescriptionSection";
import BaseServicesSection from "@/components/base/BaseServicesSection";
import BaseGallerySection from "@/components/base/BaseGallerySection";
import MenuSlider from "@/components/ui/sliders/menu-slider";
import ImageSlider from "@/components/ui/sliders/image-slider";

const RestaurantComponent = () => {
  const restaurantImages = [
    "/assets/images/restaurant/1.jpg",
    "/assets/images/restaurant/2.jpg",
    "/assets/images/restaurant/3.jpg",
    "/assets/images/restaurant/4.jpg",
    "/assets/images/restaurant/5.jpg"
  ];

  return (
    <BaseServiceLayout>
      <FirstSection title="Ресторан KINZA" />
      
      <BaseDescriptionSection>
        <p>
          Изысканный ресторан KINZA расположен на территории гостиничного комплекса PREMIUM и готов предложить великолепную европейскую, итальянскую и кавказскую кухню. Наши повара используют только свежие ингредиенты высочайшего качества, создавая блюда, которые удовлетворят даже самых взыскательных гурманов.
        </p>
        <p>
          Уютная атмосфера ресторана, профессиональное обслуживание и великолепная кухня сделают ваш ужин незабываемым.
        </p>
      </BaseDescriptionSection>

      {/* Menu Slider */}
      <MenuSlider />

      {/* Image Slider */}
      <section className="max-w-content h-[300px] lg:h-[600px] relative w-full lg:mx-auto mt-8 lg:my-12 px-4 xl:px-0">
        <ImageSlider 
          images={restaurantImages} 
          ariaLabelPrev="Предыдущее изображение ресторана"
          ariaLabelNext="Следующее изображение ресторана"
        />
      </section>

      <BaseServicesSection />
      
      <BaseGallerySection />
    </BaseServiceLayout>
  );
};

export default RestaurantComponent; 