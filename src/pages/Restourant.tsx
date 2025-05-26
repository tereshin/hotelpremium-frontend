import Footer from "@/components/footer";
import { Form } from "@/components/Form";
import FirstSection from "@/components/sections/first-section";
import ImageGallerySlider from "@/components/sliders/image-gallery-slider";
import ImageSlider from "@/components/sliders/image-slider";
import promotions from '@/lib/promotions';
import Title from "@/components/ui/Title";
import TimeIcon from "@/components/icons/TimeIcon";
import { cn } from "@/lib/utils";
import MenuSlider from "@/components/sliders/menu-slider";
import TextImageSection from "@/components/sections/text-image-section";
const images = [
  "/assets/images/restaurant/1.jpg",
  "/assets/images/restaurant/2.jpg",
  "/assets/images/restaurant/3.jpg",
  "/assets/images/restaurant/4.jpg"
];
const promotion = promotions[6];
const Restourant = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Ресторан и караоке" />
      <section className="max-w-content relative w-full lg:text-lg mx-auto px-4 xl:px-0 mb-8">
        <div className="max-w-[747px]">
          На территории нашего гостиничного комплекса PREMIUM находится ресторан и караоке-клуб KINZA. К вашим услугам представлено обширное меню, включающее в себя более ста разных блюд. Европейская, итальянская, кавказская кухня придутся по вкусу как искушенным ценителям, так и всем, кто желает попробовать что-то новое.
        </div>
      </section>

      {/* Image Slider */}
      <section className="max-w-content h-[270px] lg:h-[600px] relative w-full lg:mx-auto mt-8 mb-8 lg:my-12 px-4 xl:px-0">
        <ImageSlider
          images={images}
          ariaLabelPrev="Предыдущее изображение сауны"
          ariaLabelNext="Следующее изображение сауны"
        />
      </section>

      {/* Menu Slider Section */}
      <MenuSlider />


      <section className="max-w-content relative w-full lg:mx-auto -mb-6 mt-8 lg:my-12 px-4 xl:px-0">
        <div className="flex w-full flex-col lg:flex-row items-center gap-0 lg:gap-10 lg:h-[625px]">
          {/* Left image column */}
          <div className={cn("w-full lg:w-[70%] lg:absolute top-0 bottom-0 z-0 right-0")}>
            <div className="w-full bg-cover bg-center rounded-sm" style={{ backgroundImage: `url(/assets/images/restaurant/5.jpg)` }}>
              <div className="pt-[70%]"></div>
            </div>
          </div>

          {/* Right content column */}
          <div className={cn("w-full lg:w-[57%] flex flex-col gap-6 lg:gap-10 shadow-xl -top-10 lg:-top-6 bg-white rounded-md px-6 py-8 lg:px-10 lg:py-16 z-10 relative")}>
            <div className="flex flex-col gap-5 lg:gap-10">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <div className="text-lg">
                  Напоминаем гостям, что заказать любое блюдо из ресторана можно прямо в ваш номер с помощью услуги Room Service
                </div>

              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                  <div>
                    <h2 className="text-3xl lg:text-4xl uppercase tracking-wide font-light leading-tight" >
                      Время работы
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

            </div>

            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-7">
              <Form />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-content relative w-full lg:mx-auto my-8 lg:my-20 lg:mb-28 px-4 xl:px-0">
        <TextImageSection
          title={promotion.title}
          text={promotion.description}
          image={promotion.image}
          list={promotion.conditions}
          expiry={promotion.expiry}
          isPromo={promotion.isPromo}
          isSpecial={promotion.isSpecial}
          button={{
            text: promotion.button_text,
            link: promotion.link
          }}

        />
      </section>
      {/* Image Gallery Section */}
      <section className="max-w-[2048px] mx-auto bg-[#192128]">
        <div className="max-w-content text-white w-full mx-auto relative">
          <Title className="text-white absolute top-10 left-3 z-10 hidden lg:block">Галерея</Title>
          <ImageGallerySlider />
          <div className="absolute h-full w-full lg:w-[35%] bg-gradient-to-t from-transparent to-black z-1 lg:-left-10 top-0 pointer-events-none"/>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Restourant; 