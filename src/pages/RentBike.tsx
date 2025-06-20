import Footer from "@/components/layout/footer";
import { Form } from "@/components/layout/Form";
import FirstSection from "@/features/hotel/components/first-section";
import ImageGallerySlider from "@/components/ui/sliders/image-gallery-slider";
import Title from "@/components/ui/Title";
import { cn } from "@/shared/utils/utils";
import CheckIcon from "@/components/ui/icons/CheckIcon";
import ServicesSlider from "@/components/ui/sliders/services-slider";
import ImageSlider from "@/components/ui/sliders/image-slider";
import FeatureIcon from "@/components/ui/FeatureIcon";

// Sample sauna images - replace with actual images from your project
const images = [
    "/assets/images/rent-bike/2.jpg",
    "/assets/images/rent-bike/3.jpg",
    "/assets/images/rent-bike/4.jpg",
    "/assets/images/rent-bike/5.jpg",
    "/assets/images/rent-bike/6.jpg",
    "/assets/images/rent-bike/7.jpg"
];

const RentBike = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
            <FirstSection title="Прокат велосипедов" />
            <section className="max-w-content relative w-full lg:text-lg mx-auto px-4 xl:px-0 mb-8">
                <div className="max-w-[747px]">
                    <p>
                        Прогулки на спортивных велосипедах вдоль набережной реки Клязьма: прокат в отеле!

                        В нашем Гостиничном комплексе Вы всегда можете взять напрокат удобный и надежный велосипед и отправиться самостоятельно изучать близлежащие достопримечательности или прокатиться по живописной набережной реки Клязьма, оборудованной велосипедными дорожками.
                    </p>
                    <p>
                        Все наши велосипеды выдаются со специальным замком для парковки, что позволяет брать транспорт на целый день и перемещаться на нем по территории города.
                    </p>
                </div>
            </section>


            <section className="max-w-content relative w-full lg:mx-auto -mb-6 mt-8 lg:my-12 px-4 xl:px-0">
                <div className="flex w-full flex-col lg:flex-row items-center gap-0 lg:gap-10 lg:h-[625px]">
                    {/* Left image column */}
                    <div className={cn("w-full lg:w-[70%] lg:absolute top-0 bottom-0 z-0 right-0")}>
                        <div className="w-full bg-cover bg-center rounded-sm" style={{ backgroundImage: `url(/assets/images/rent-bike/1.jpg)` }}>
                            <div className="pt-[60%] lg:pt-[70%]"></div>
                        </div>
                    </div>

                    {/* Right content column */}
                    <div className={cn("w-full lg:w-[57%] flex flex-col gap-6 lg:gap-10 shadow-xl -top-10 lg:-top-6 bg-white rounded-md px-6 py-8 lg:px-10 lg:py-16 z-10 relative")}>
                        <div className="flex flex-col gap-5 lg:gap-10">
                            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                                <div>
                                    <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-1" >с 9:00 до 19:00</h2>
                                    Время проката велосипедов
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-2" >
                                Стоимость
                                </h2>
                                <p className="flex lg:items-center gap-2">
                                    <CheckIcon className="relative top-1 lg:top-0" />
                                    600 руб. — 3 часа
                                </p>
                                <p className="flex lg:items-center gap-2">
                                    <CheckIcon className="relative top-1 lg:top-0" />
                                    1200 руб. — 1 день
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-7">
                            <Form />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-10 lg:py-20 px-4 lg:px-10 max-w-[2048px] mx-auto">
                <div className="max-w-content w-full mx-auto flex flex-col gap-6 lg:gap-12">
                    <div className="max-w-[747px]"><Title>Условия проката велосипеда в Гостиничном комплексе “Premium”: </Title></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
                        <FeatureIcon
                            icon="/assets/icons/rent-1.png"
                            text="Оформить прокат велосипеда можно у администратора на ресепшн"
                        />
                        <FeatureIcon
                            icon="/assets/icons/rent-2.png"
                            text="Если Вы – гость нашего комплекса, залог не требуется"
                        />
                        <FeatureIcon
                            icon="/assets/icons/rent-3.svg"
                            text='Если Вы не проживаете в Гостиничном комплексе, достаточно оставить на ресепшн свои контактные данные и залог, который мы вернем обратно при сдаче велосипеда'
                        />
                        <FeatureIcon
                            icon="/assets/icons/rent-4.svg"
                            text="При получении велосипеда на ресепшн мы попросим Вас ознакомиться с положениями документа «Правила эксплуатации велосипеда» и подписать его"
                        />
                        
                    </div>
                </div>
            </section>


            {/* Image Slider */}
            <section className="max-w-content h-[300px] lg:h-[600px] relative w-full lg:mx-auto mt-0 lg:my-12 px-4 xl:px-0">
                <ImageSlider
                    images={images}
                    ariaLabelPrev="Предыдущее изображение сауны"
                    ariaLabelNext="Следующее изображение сауны"
                />
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

export default RentBike; 