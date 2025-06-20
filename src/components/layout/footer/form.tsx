import { BookingForm } from "@/features/booking"
import Title from "@/components/ui/Title"

const FooterForm = () => {
    return (
        <div className="bg-[#01362A] px-4 py-10 lg:p-[100px] text-hotel-off-white w-full lg:w-1/2" id="booking">
            <Title>Отправляйтесь <br/> в путешествие <br/>вместе с нами</Title>
            <BookingForm variant="vertical" className="mt-8" />
        </div>
    )
}

export default FooterForm;
