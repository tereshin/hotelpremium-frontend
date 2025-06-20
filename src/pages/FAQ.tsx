import Footer from "@/components/layout/footer";
import FirstSection from "@/features/hotel/components/first-section";
import FAQSection from "@/shared/utils/faq-section";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Вопросы и ответы" />
      <FAQSection />
      
    </div>
  );
};

export default FAQ; 