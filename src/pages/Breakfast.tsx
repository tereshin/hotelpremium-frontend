import Footer from "@/components/footer";
import { Form } from "@/components/Form";
import FirstSection from "@/components/sections/first-section";
import ImageGallerySlider from "@/components/sliders/image-gallery-slider";
import Title from "@/components/ui/Title";
import { cn } from "@/lib/utils";
import CheckIcon from "@/components/icons/CheckIcon";
import ServicesSlider from "@/components/sliders/services-slider";

const Breakfast = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
            <FirstSection title="Завтраки" />
            <section className="max-w-content relative w-full lg:text-lg mx-auto px-4 xl:px-0 mb-8">
                <div className="max-w-[747px]">
                    <p>
                        Завтраки у нас приносят прямо в номер. По времени на выбор с 7:00 до 9:00. Завтрак состоит
                        из яичницы, блина с творогом, тоста и сосисок. Стоимость завтрака 300р на человека
                    </p>
                </div>
            </section>


            <section className="max-w-content relative w-full lg:mx-auto -mb-6 mt-8 lg:my-12 px-4 xl:px-0">
                <div className="flex w-full flex-col lg:flex-row items-center gap-0 lg:gap-10 lg:h-[625px]">
                    {/* Left image column */}
                    <div className={cn("w-full lg:w-[70%] lg:absolute top-0 bottom-0 z-0 right-0")}>
                        <div className="w-full bg-cover bg-center rounded-sm" style={{ backgroundImage: `url(/assets/images/services/service-5.jpg)` }}>
                            <div className="pt-[70%]"></div>
                        </div>
                    </div>

                    {/* Right content column */}
                    <div className={cn("w-full lg:w-[57%] flex flex-col gap-6 lg:gap-10 shadow-xl -top-10 lg:-top-6 bg-white rounded-md px-6 py-8 lg:px-10 lg:py-16 z-10 relative")}>
                        <div className="flex flex-col gap-5 lg:gap-10">
                            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                                <div>
                                    <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-1" >с 7:00 до 9:00</h2>
                                    Время завтрака
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h2 className="text-3xl lg:text-4xl text-hotel-dark-blue uppercase tracking-wide font-light leading-tight mb-2" >
                                    Стоимость
                                </h2>
                                <p className="flex lg:items-center gap-2"><CheckIcon className="relative top-1 lg:top-0" />
                                1 000 руб. за час (До 4-ех человек. Каждый последующий + 500 руб.)
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

export default Breakfast;    