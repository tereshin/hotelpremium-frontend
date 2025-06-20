import Header from '@/components/layout/header';
import PromotionsSlider from '@/components/ui/sliders/promotions-slider';
import Footer from '@/components/layout/footer';
import Title from '@/components/ui/Title';
import TextImageSection from '@/shared/utils/text-image-section';
import promotions from '@/shared/constants/promotions';
import HeroImage from '@/components/ui/sliders/hero-image';
import FeatureIcon from '@/components/ui/FeatureIcon';
import ServicesSlider from '@/components/ui/sliders/services-slider';
import { BookingSection } from '@/features/booking/components/booking';
import ImageGallerySlider from '@/components/ui/sliders/image-gallery-slider';

const Index = () => {

  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen bg-white  mx-auto">
        <Header />

        {/* Hero Section */}
        <section className="relative">
          <HeroImage title="Гостиничный <br class='hidden md:block'> комплекс <br class='hidden lg:block'> «Premium»" subtitle="" image="/assets/images/home/1.jpg" />
        </section>

        {/* Group Discount Section */}
        <div className="my-[25px] lg:my-[100px] mx-4 max-w-[2048px] md:px-4 lg:mx-auto">
          <TextImageSection
            title="О гостиничном <br>комплексе"
            text="Гостиничный комплекс «Premium», расположен в тихом и уютном месте самого сердца г. Щелково, на берегу реки Клязьма. У нас вы найдете свой тихий уголок, вдали от шумных улиц, где сможете прекрасно провести время, будучи в деловой поездке или устраивая романтичный вечер при свечах." image="/assets/images/home/2.jpg" button={{ text: 'Текущие акции', link: '/promotions' }}
            reverse={true} />
        </div>

        {/* Facts Section */}
        <section className="py-3 lg:py-10 px-4 lg:px-10 max-w-[2048px] mx-auto">
          <div className="max-w-content mx-auto flex flex-col gap-8 lg:gap-14">
            <Title>Факты о нас</Title>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
              <FeatureIcon
                icon="/assets/icons/icon-1.svg"
                text="Собственная приватная территория <br>на берегу Клязьмы"
              />
              <FeatureIcon
                icon="/assets/icons/icon-2.svg"
                text="Room Service и прачечная"
              />
              <FeatureIcon
                icon="/assets/icons/icon-3.svg"
                text='Бесплатный Wi-Fi'
              />
              <FeatureIcon
                icon="/assets/icons/icon-4.svg"
                text="Центр города с выходом на набережную"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-5 lg:py-10 px-4 lg:px-10 max-w-[2048px] mx-auto">
          <div className="max-w-content w-full mx-auto flex flex-col gap-5 lg:gap-12">
            <Title>Мы позаботимся<br />о всем</Title>
            <ServicesSlider />
          </div>
        </section>


        {/* Promotions Section */}
        <section className="py-8 lg:py-20 px-4 lg:px-10 max-w-[2048px] mx-auto bg-[#EEF2F4]">
          <div className="max-w-content w-full mx-auto flex flex-col gap-8 lg:gap-14">
            <PromotionsSlider promotions={promotions} />
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="pt-8 lg:pt-20 px-4 lg:px-10 max-w-[2048px] w-full mx-auto">
          <div className="max-w-content w-full mx-auto flex flex-col gap-8 lg:gap-14">
            <BookingSection />
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className=" mx-auto bg-[#192128ed]">
          <div className="max-w-content text-white w-full mx-auto relative">
            <Title className="text-white absolute top-10 left-3 z-10 hidden lg:block">Галерея</Title>
            <ImageGallerySlider />
            <div className="hidden lg:block absolute h-full w-full lg:w-[35%] bg-gradient-to-t from-transparent to-black z-1 lg:-left-10 top-0 pointer-events-none"/>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
