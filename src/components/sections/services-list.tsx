import React from 'react';
import services from '@/lib/services';
import ServiceCard from '../ui/ServiceCard';

const ServicesList: React.FC = () => {
  return (
    <section className="py-4 lg:pb-24">
      <div className="max-w-content w-full mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-[25px]">
          {services.map((service, index) => (
            <a
            key={service.id}
            href={service.link}
            className="flex-shrink-0"
          >
            <div className="flex flex-col gap-8">
              <div
                className="relative w-full h-[175px] lg:h-[274px] rounded-sm overflow-hidden"
                style={{
                  backgroundImage: `
                    url(${service.image})
                  `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[#F3EEE7] uppercase text-2xl lg:text-[30px] font-light tracking-[0.06em] leading-[1.15em]">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList; 