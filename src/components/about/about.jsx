import React from "react";
import AboutAuthor from "../../assets/images/about-author.png";

import "./about.scss";

const About = () => {
  return (
    <section className="py-20 bg-gray-100 about" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2">
            <img
              src={AboutAuthor}
              alt="Aziz Furkatovich Alimjonov"
              className="w-[400px] h-[550px] sm:w-[500px] sm:h-[700px] rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Приветствую Вас!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Спасибо, что выделили несколько минут своего времени, чтобы ближе
              познакомиться с нами и тем, что мы предлагаем.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Midea – бренд No1 в мире по количеству производимого
              климатического оборудования.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Предлагаем Вам сотрудничество в сфере оснащения Ваших объектов
              бытовыми и промышленными системами кондиционирования.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Вы получите оборудование отличного качества по выгодным ценам,
              качественную техническую, сервисную поддержку и выгодные
              гарантийные условия.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Доверьтесь нашему опыту и квалификации, и станьте одним из наших
              довольных Клиентов. Гарантией моих слов являются тысячи довольных
              клиентов и безупречная репутация на рынке кондиционирования.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Только в Узбекистане на нашем счету более 1000 объектов. И эта
              цифра продолжает расти. Мы делаем всё, чтобы держать нашу марку.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
