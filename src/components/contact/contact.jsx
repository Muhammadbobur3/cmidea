import React from "react";
import ContactVideo from "../../assets/images/contact.mp4";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-100" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/5">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
              Остались вопросы?
            </h2>
            <p className="text-gray-700 mb-8">
              Если у вас есть вопросы, смело звоните в наш колл-центр. Мы рады
              Вам помочь!
            </p>
            <a
              href="tel:+998712000575"
              className="bg-blue-500 text-white py-3 px-6 rounded-full inline-block hover:bg-blue-600 transition duration-300"
            >
              Позвони сейчас
            </a>
          </div>
          <div className="lg:w-1/2 rounded-md mt-10 lg:mt-0">
            <video autoPlay muted loop className="rounded-2xl">
              <source src={ContactVideo} />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
