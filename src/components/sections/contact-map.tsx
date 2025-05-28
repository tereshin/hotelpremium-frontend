import React from 'react';
import { CustomButton } from '../ui/custom-button';

const ContactMap: React.FC = () => {
  return (
    <section className="w-full">
      <div className="max-w-content w-full mx-auto relative px-4 xl:px-0">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-[30px] mb-[60px]">
          {/* Phone Contact Block */}
          <div className="w-full lg:w-1/2 bg-white rounded-md shadow-[0px_4px_34px_0px_rgba(0,0,0,0.1)] p-4 lg:p-[28px_30px]">
            <div className="flex flex-row items-center gap-5">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border border-[#E8EEF3]"></div>
                <img
                  src="/assets/icons/icon-phone.svg"
                  alt="Phone"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#01396C]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-['Forum'] text-lg leading-[1.4em]">Телефон</p>
                <div className="flex flex-wrap items-center gap-x-[10px]">
                  <a href="tel:+79299961669" className="font-['Montserrat'] font-bold lg:text-lg leading-[1.4em]">+7 929 996 16 69</a>
                  <span className="text-[#8B9197] font-['Forum'] text-lg leading-[1.4em]">|</span>
                  <a href="tel:+79268711669" className="font-['Montserrat'] font-bold lg:text-lg leading-[1.4em]">+7 926 871 16 69</a>
                </div>
              </div>
            </div>
          </div>

          {/* Email Contact Block */}
          <div className="w-full lg:w-1/2 bg-white rounded-md shadow-[0px_4px_34px_0px_rgba(0,0,0,0.1)] p-4 lg:p-[28px_30px]">
            <div className="flex flex-row items-center gap-5">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border border-[#E8EEF3]"></div>
                <img
                  src="/assets/icons/icon-email.svg"
                  alt="Email"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#01396C]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-['Forum'] text-lg leading-[1.4em]">Эл. почта</p>
                <a href="mailto:hotelpremium2016@yandex.ru" className="font-['Montserrat'] font-semibold lg:text-lg leading-[1.4em] text-[#01396C] max-w-[260px] lg:max-w-full text-nowrap truncate">hotelpremium2016@yandex.ru</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-[60px]">
        <div className="w-full relative h-[600px] lg:h-[625px] flex flex-col md:flex-row gap-6">
          {/* Map Image with Rounded Corners */}
          <div className="w-full top-0 left-0 absolute h-full overflow-hidden rounded-md">
            <img
              src="/images/map-image.jpg"
              alt="Hotel Premium Map Location"
              className="w-full h-full object-cover hidden lg:block"
              loading="lazy"
            />
            <img
              src="/images/map-image-mob.jpg"
              alt="Hotel Premium Map Location"
              className="w-full h-full object-cover block lg:hidden"
              loading="lazy"
            />
          </div>

          {/* Location Information Card */}
          <div className="max-w-content mx-auto w-full pt-7 xl:pt-12 px-4 xl:px-0">
            <div className="w-full md:w-1/3 bg-white h-fit relative z-10 rounded-md shadow-[0px_4px_34px_0px_rgba(0,0,0,0.1)] p-6">
              <div className="flex flex-col gap-5">
                {/* Icon */}
                <div className="flex items-center">
                  <div className="w-18 h-18 rounded-full flex gap-4 items-center justify-center relative">
                    <img
                      src="/assets/icons/icon-map.svg"
                      alt="Location"
                    />
                    <a href="https://yandex.ru/maps/org/premium/117018044382/reviews/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/reviews.png" className="h-12" /></a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex flex-col gap-5">
                  <p className="font-['Forum'] text-lg leading-[1.4em]">
                    МО, г. Щелково, улица Талсинская ул., дом 9/2
                  </p>

                  {/* Button */}
                  <a href="https://yandex.ru/maps/-/C2WRRgs" target="_blank" rel="noopener noreferrer">
                    <CustomButton variant="base2">
                      Проложить маршрут
                    </CustomButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap; 