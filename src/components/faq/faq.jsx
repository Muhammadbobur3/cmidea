import React, { useState } from "react";
import AccordionItem from "./accordion-item";

const faqs = [
  {
    question: "1) Boshqa kurslardan nima farqi bor?",
    answer:
      "Kurslar nazariy bilimlar bilan birga ko'proq amaliy bilimlarga tayangan holda o'tiladi.Bundan tashqari bituruvchilarimizga investitsiyalar taqdim etamiz.",
  },
  {
    question: "2) Online kurslar bormi?",
    answer:
      "Albatta bizda online kurslar mavjud va ular zoom platformasi orqali olib boriladi",
  },
  {
    question: "3) Jamoaga qo'shilish imkoni bormi?",
    answer:
      "Bizda kurs yakunlangach imtixon orqali yaxshi natijaga erishgan bitiruvchilarni jamoamizga qabul qilamiz",
  },
  {
    question: "4) Nechchi yoshdan o'qishga qabul qilasizlar?",
    answer:
      "Yoshingizni o'qishga aloqasi bo'lmaydi.Sizda hohishingiz va qiziqishingiz bo'lsa bas",
  },
  {
    question: "5) Bo'lib to'lash imkoni bormi?",
    answer:
      "Bo'ib to'lash imkoni yo'q.Lekin siz o'qish boshlanishidan oldin yarmini to'lab joyingizni bron qilishingiz va o'qishning birinchi kuni yani (Seminar) kuni qolganini to'lashingiz mumkin",
  },
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
          Часто задаваемые вопросы
        </h2>
        <dl className="space-y-6">
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              index={index}
              activeIndex={activeIndex}
              handleClick={handleClick}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FAQ;
