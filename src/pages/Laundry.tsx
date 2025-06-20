import Footer from "@/components/layout/footer";
import FirstSection from "@/features/hotel/components/first-section";
import ImageGallerySlider from "@/components/ui/sliders/image-gallery-slider";
import Title from "@/components/ui/Title";
import { cn } from "@/shared/utils/utils";
import ServicesSlider from "@/components/ui/sliders/services-slider";
const Laundry = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
            <FirstSection title="Прачечная Гостиничного <br/>комплекса «PREMIUM»" />
            <section className="max-w-content relative w-full lg:text-lg mx-auto px-4 xl:px-0 mb-8">
                <div className="max-w-[747px]">
                    <p>
                        В Гостиничном комплексе Premium комфорт наших гостей стоит на первом месте. Наш персонал заботится о Вашем свободном времени и предлагает взять услуги стирки и глажки на себя. Чтобы ничто не мешало наслаждаться полноценным отдыхом в нашем прекрасном городе.
                    </p>
                </div>
            </section>


            <section className="max-w-content relative w-full lg:mx-auto -mb-6 mt-8 lg:my-12 px-4 xl:px-0">
                <div className="flex w-full flex-col lg:flex-row items-center gap-0 lg:gap-10 lg:h-[625px]">
                    {/* Left image column */}
                    <div className={cn("w-full lg:w-[70%] lg:absolute top-0 bottom-0 z-0 right-0")}>
                        <div className="w-full bg-cover bg-center rounded-sm" style={{ backgroundImage: `url(/assets/images/services/service-6.jpg)` }}>
                            <div className="pt-[60%] lg:pt-[70%]"></div>
                        </div>
                    </div>

                    {/* Right content column */}
                    <div className={cn("w-full lg:w-[57%] flex flex-col gap-6 lg:gap-10 shadow-xl -top-10 lg:-top-6 bg-white rounded-md px-2 text-sm lg:text-base py-8 lg:px-10 lg:py-16 z-10 relative")}>
                        <div className="flex flex-col gap-5 lg:gap-10">
                            { /* Pricing Table */}
                            <div className="grid gap-2">
                                {/* Header row */}
                                <div className="flex rounded-[10px] bg-[#F7F8FA] px-2 lg:px-5 py-2">
                                    <div className="w-[30%]">Наименование</div>
                                    <div className="w-[30%]">Стирка</div>
                                    <div className="w-[30%]">Глажка</div>
                                </div>
                                {/* Data rows */}
                                <div className="flex border-b border-[#E8EEF3] px-2 lg:px-5 pb-2 gap-5">
                                    <div className="w-[30%]">Рубашка</div>
                                    <div className="w-[30%]">100 руб.</div>
                                    <div className="w-[30%]">300 руб.</div>
                                </div>
                                <div className="flex border-b border-[#E8EEF3] px-2 lg:px-5 pb-2 gap-5">
                                    <div className="w-[30%]">Футболка / майка</div>
                                    <div className="w-[30%]">100 руб.</div>
                                    <div className="w-[30%]">200 руб.</div>
                                </div>
                                <div className="flex border-b border-[#E8EEF3] px-2 lg:px-5 pb-2 gap-5">
                                    <div className="w-[30%]">Джинсы</div>
                                    <div className="w-[30%]">200 руб.</div>
                                    <div className="w-[30%]">300 руб.</div>
                                </div>
                                <div className="flex border-b border-[#E8EEF3] px-2 lg:px-5 pb-2 gap-5">
                                    <div className="w-[30%]">Брюки</div>
                                    <div className="w-[30%]">200 руб.</div>
                                    <div className="w-[30%]">400 руб.</div>
                                </div>
                                <div className="flex border-b border-[#E8EEF3] px-2 lg:px-5 pb-2 gap-5">
                                    <div className="w-[30%]">Шорты</div>
                                    <div className="w-[30%]">100 руб.</div>
                                    <div className="w-[30%]">200 руб.</div>
                                </div>
                                <div className="flex border-b border-[#E8EEF3] px-2 lg:px-5 pb-2 gap-5">
                                    <div className="w-[30%]">Юбка</div>
                                    <div className="w-[30%]">200 руб.</div>
                                    <div className="w-[30%]">300 руб.</div>
                                </div>
                                <div className="flex border-b border-[#E8EEF3] px-2 lg:px-5 pb-2 gap-5">
                                    <div className="w-[30%]">Платье</div>
                                    <div className="w-[30%]">300 руб.</div>
                                    <div className="w-[30%]">500 руб.</div>
                                </div>
                                <div className="flex border-b border-[#E8EEF3] px-2 lg:px-5 pb-2 gap-5">
                                    <div className="w-[30%]">Свитер / кардиган</div>
                                    <div className="w-[30%]">300 руб.</div>
                                    <div className="w-[30%]">400 руб.</div>
                                </div>
                            </div>
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

export default Laundry;    