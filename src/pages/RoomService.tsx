import Footer from "@/components/layout/footer";
import TimeIcon from "@/components/ui/icons/TimeIcon";
import FirstSection from "@/features/hotel/components/first-section";
import ImageGallerySlider from "@/components/ui/sliders/image-gallery-slider";
import MenuSlider from "@/components/ui/sliders/menu-slider";
import ServicesSlider from "@/components/ui/sliders/services-slider";
import Title from "@/components/ui/Title";
import { cn } from "@/shared/utils/utils";

const RoomService = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Room-Service" />
      <section className="max-w-content relative w-full lg:text-lg mx-auto px-4 xl:px-0 mb-8">
        <div className="max-w-[747px]">
          На территории нашего гостиничного комплекса PREMIUM находится ресторан изысканной кухни KINZA. К вашим услугам прямо в номере представлено обширное меню, включающее в себя более ста разных блюд. Европейская, итальянская, кавказская кухня придутся по вкусу как искушенным ценителям, так и всем, кто желает попробовать что-то новое.
        </div>
      </section>

      {/* Menu Slider Section */}
      <MenuSlider />

      <section className="max-w-content relative w-full lg:mx-auto -mb-6 mt-8 lg:my-12 px-4 xl:px-0">
        <div className="flex w-full flex-col lg:flex-row items-center gap-0 lg:gap-10 lg:h-[625px]">
          {/* Left image column */}
          <div className={cn("w-full lg:w-[70%] lg:absolute top-0 bottom-0 z-0 right-0")}>
            <div className="w-full bg-cover bg-center rounded-sm" style={{ backgroundImage: `url(/assets/images/services/service-3.jpg)` }}>
              <div className="pt-[60%] lg:pt-[70%]"></div>
            </div>
          </div>

          {/* Right content column */}
          <div className={cn("w-full lg:w-[57%] flex flex-col gap-6 lg:gap-10 shadow-xl -top-10 lg:-top-6 bg-white rounded-md px-6 py-8 lg:px-10 lg:py-16 z-10 relative")}>
            <div className="flex flex-col gap-5 lg:gap-10">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl  uppercase tracking-wide font-light leading-tight mb-1" >
                    Время работы<br />
                    room service:
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
        </div>
      </section>

      <section className="py-10 lg:pt-20 px-4 lg:px-10 max-w-[2048px] mx-auto">
        <div className="max-w-content w-full mx-auto flex flex-col gap-6 lg:gap-12">
          <Title>Как сделать заказ? </Title>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 lg:w-[70px] lg:h-[70px] rounded-full border border-gray-300 flex items-center justify-center text-hotel-dark-blue text-3xl lg:text-5xl">
                1
              </div>
              <p className="text-lg font-forum">
                Ознакомиться с меню, оно есть в Вашем номере. Позвонить по
                предоставленному номеру и попросить подать еду в номер.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 lg:w-[70px] lg:h-[70px] rounded-full border border-gray-300 flex items-center justify-center text-hotel-dark-blue text-3xl lg:text-5xl font-forum">
                2
              </div>
              <p className="text-lg font-forum">
                По мере готовности блюда и напитки будут поданы в номер. Их
                стоимость не отличается от ресторанных. Блюда имеют тот же вес и
                оформление.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:pb-20 px-4 lg:px-10 max-w-[2048px] mx-auto">
        <div className="max-w-content w-full mx-auto flex flex-col gap-6 lg:gap-12">
          <Title>3 причины сделать заказ в номер </Title>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Reason 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 lg:w-[70px] lg:h-[70px] rounded-full border border-[#E8EEF3] flex items-center justify-center text-hotel-dark-blue text-3xl lg:text-5xl font-forum">
                1
              </div>
              <p className="text-lg font-forum">
                Оставайтесь в номере. Так приятно расслабиться в номере и, удобно расположившись, насладиться вкуснейшими деликатесами.
              </p>
            </div>
            {/* Reason 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 lg:w-[70px] lg:h-[70px] rounded-full border border-[#E8EEF3] flex items-center justify-center text-hotel-dark-blue text-3xl lg:text-5xl font-forum">
                2
              </div>
              <p className="text-lg font-forum">
                Устройте романтический ужин для второй половинки. Никаких хлопот — нужно сделать всего один звонок
              </p>
            </div>
            {/* Reason 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 lg:w-[70px] lg:h-[70px] rounded-full border border-[#E8EEF3] flex items-center justify-center text-hotel-dark-blue text-3xl lg:text-5xl font-forum">
                3
              </div>
              <p className="text-lg font-forum">
                Первые и вторые блюда будут поданы горячими, ведь ресторан находится рядом
              </p>
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
          <div className="hidden lg:block absolute h-full w-full lg:w-[35%] bg-gradient-to-t from-transparent to-black z-1 lg:-left-10 top-0 pointer-events-none"/>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RoomService; 