import Footer from "@/components/layout/footer";
import FirstSection from "@/features/hotel/components/first-section";
import ImageGallerySlider from "@/components/ui/sliders/image-gallery-slider";
import Title from "@/components/ui/Title";
import ServicesSlider from "@/components/ui/sliders/services-slider";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { cn } from "@/shared/utils/utils";
import CheckIcon from "@/components/ui/icons/CheckIcon";
import { Form } from "@/components/layout/Form";
const Barbecue = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Аренда беседок" />
      <section className="max-w-content relative w-full lg:text-lg mx-auto px-4 xl:px-0 mb-8">
        <div className="max-w-[747px]">
          Отличное место для отдыха на природе – беседки для барбекю в гостиничном комплексе PREMIUM Щелково. Две беседки, расположенные в непосредственной близости к реке и недалеко от лесной зоны станут прекрасным местом для того, чтобы устроить классную гриль-вечеринку.
        </div>
      </section>
      <section className="max-w-content relative w-full lg:mx-auto -mb-6 mt-8 lg:my-12 px-4 xl:px-0">
        <div className="flex w-full flex-col lg:flex-row-reverse items-center gap-0 lg:gap-10 lg:h-[625px]">
          {/* Left image column */}
          <div className={cn("w-full lg:w-[70%] lg:absolute top-0 bottom-0 z-0 left-0")}>
            <div className="w-full bg-cover bg-center rounded-sm" style={{ backgroundImage: `url(/assets/images/barbecue/1.jpg)` }}>
              <div className="pt-[60%] lg:pt-[70%]"></div>
            </div>
          </div>

          {/* Right content column */}
          <div className={cn("w-full lg:w-[57%] flex flex-col gap-6 lg:gap-10 shadow-xl -top-10 lg:-top-6 bg-white rounded-md px-6 py-8 lg:px-10 lg:py-16 z-10 relative")}>
            <div className="flex flex-col gap-4 lg:text-lg">
              <p>
                Для всех гостей, желающих отдохнуть на природе вместе с семьей или друзьями, в нашем Гостиничном комплексе имеется возможность арендовать беседки для барбекю с мангальными зонами. Две беседки, расположенные в непосредственной близости к реке и недалеко от лесной зоны, станут прекрасным местом для того, чтобы устроить классную гриль-вечеринку!
              </p>

            </div>

            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-7">
              <Form />
            </div>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-4 lg:py-10 px-4 lg:px-10 max-w-[2048px] mx-auto ">
        <div className="max-w-content mx-auto flex flex-col gap-8 lg:gap-14">
          <Title>Мы все продумали, беседки<br /> оборудованы всем необходимым:</Title>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-10">
            <FeatureIcon
              icon="/assets/icons/icon-size.svg"
              text="Размер беседки 55 кв.м."
            />
            <FeatureIcon
              icon="/assets/icons/icon-light.svg"
              text="Собственное освещение, включая розетки для мобильных устройств и портативных колонок"
            />
            <FeatureIcon
              icon="/assets/icons/icon-3.svg"
              text='Бесплатный Wi-Fi'
            />
            <FeatureIcon
              icon="/assets/icons/icon-water.svg"
              text="Столешница с раковиной"
            />
            <FeatureIcon
              icon="/assets/icons/icon-barbecue.svg"
              text="Обеденная и мангальная зона"
            />
            <FeatureIcon
              icon="/assets/icons/icon-ball.svg"
              text="Детская игровая зона"
            />
          </div>
        </div>
      </section>

      <section className="max-w-content relative w-full lg:mx-auto -mb-6 mt-8 lg:my-12 px-4 xl:px-0">
        <div className="flex w-full flex-col lg:flex-row items-center gap-0 lg:gap-10 lg:h-[625px]">
          {/* Left image column */}
          <div className={cn("w-full lg:w-[70%] lg:absolute top-0 bottom-0 z-0 right-0")}>
            <div className="w-full bg-cover bg-center rounded-sm" style={{ backgroundImage: `url(/assets/images/barbecue/2.jpg)` }}>
              <div className="pt-[60%] lg:pt-[70%]"></div>
            </div>
          </div>

          {/* Right content column */}
          <div className={cn("w-full lg:w-[57%] flex flex-col gap-4 lg:gap-10 shadow-xl -top-10 lg:-top-6 bg-white rounded-md px-6 py-8 lg:px-10 lg:py-16 z-10 relative")}>
            <div className="flex flex-col gap-5 lg:gap-10 ">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-1" >с 11:00 до 22:00</h2>
                  Беседки доступны для аренды
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-1" >до 10 чел.</h2>
                  Вместимость беседки
                </div>

              </div>

              <div className="flex flex-col lg:gap-2">
                <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-2" >
                  Стоимость
                </h2>
                <p className="flex lg:items-center gap-2"><CheckIcon className="relative top-1 lg:top-0" />
                  Будние дни - 8 000 руб. за весь день / 5 000 руб. за пол дня (6 часов)
                </p>
                <p className="flex lg:items-center gap-2"><CheckIcon className="relative top-1 lg:top-0" />
                  Выходные дни - 12 000 руб. за весь день / 8 000 руб. за пол дня (6 часов)
                </p>
              </div>

            </div>

            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-7">
              <Form />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 lg:py-20 px-4 lg:px-10 max-w-[2048px] mx-auto">
        <div className="max-w-content w-full mx-auto flex flex-col gap-6 lg:gap-12">
          <Title>Другие предложения</Title>
          <ServicesSlider />
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="max-w-[2048px] mx-auto bg-[#192128]">
        <div className="max-w-content text-white w-full mx-auto relative">
          <Title className="text-white absolute top-10 left-3 z-10 hidden lg:block">Галерея</Title>
          <ImageGallerySlider />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Barbecue; 