import React from 'react';
import { useNavigate } from 'react-router-dom';
import services from '@/lib/services';


const ServicesList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="py-4 pb-10 lg:pb-24">
      <div className="max-w-content w-full mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-[25px]">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => navigate(service.link)}
              className="flex-shrink-0 cursor-pointer"
            >
              <div className="flex flex-col gap-8">
                <div
                  className="relative w-full h-[240px] lg:h-[274px] rounded-sm overflow-hidden"
                  style={{
                    backgroundImage: `
                    url(${service.image})
                  `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute bottom-4 lg:bottom-6 left-5 lg:left-6 right-5 lg:right-6">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[#F3EEE7] uppercase text-xl lg:text-[30px] font-light lg:tracking-[0.06em] lg:leading-[1.15em]">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList; 