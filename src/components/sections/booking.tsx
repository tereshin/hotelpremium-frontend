"use client";

import { BookingForm } from "../booking-form";

export function BookingSection() {
    return (
        <section className="max-w-content w-full relative lg:mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-10 lg:h-[625px]">
                {/* Left image column */}
                <div className="w-full lg:w-[70%] lg:absolute top-0 bottom-0 z-0 right-0">
                    <div className="w-full bg-cover bg-center rounded-sm" style={{ backgroundImage: `url('/assets/images/form.jpg')` }}>
                        <div className="pt-[65%]"></div>
                    </div>
                </div>

                {/* Right content column */}
                <div className="w-full lg:w-[57%] flex flex-col gap-6 lg:gap-10 shadow-xl -top-10 lg:-top-6 bg-white rounded-md px-6 py-8 lg:px-10 lg:py-16 z-10 relative">
                    <div className="flex flex-col gap-4 lg:gap-8">
                        <h2 className="text-3xl lg:text-4xl text-[#093024] uppercase tracking-wide font-light leading-tight">
                            Начните свой отдых<br />
                            прямо сейчас
                        </h2>

                        <div className="flex flex-col gap-5">
                            <BookingForm color="white" variant="default" />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
