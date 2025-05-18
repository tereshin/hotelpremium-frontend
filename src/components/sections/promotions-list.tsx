import React from 'react';
import promotions from '@/lib/promotions';
import TextImageSection from './text-image-section';

const PromotionsList: React.FC = () => {
  return (
    <section className="py-2 px-5">
      <div className="max-w-content mx-auto ">
        <div className="flex flex-col gap-10 md:gap-[60px]">
          {promotions.map((promotion, index) => (
            <div key={promotion.id} className="flex flex-col gap-10 md:gap-[60px]">
              <TextImageSection
                title={promotion.title}
                text={promotion.description}
                image={promotion.image}
                list={promotion.conditions}
                expiry={promotion.expiry}
                button={{
                  text: promotion.button_text,
                  link: promotion.link
                }}
                reverse={index % 2 !== 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsList; 