import React from "react";
import BgHero from "../../assets/images/hero-bg.png";

import "./hero.scss";

const Hero = () => {
  return (
    <section className="pb-14 hero pt-28">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl lg:leading-[3.8rem] text-gray-800 font-bold text-left mb-6">
            Мировой лидер в сфере{" "}
            <span className="text-blue-500">КОНДИЦИОНИРОВАНИЯ</span>{" "}
            <span className="border-b-2 pb-2 border-blue-500">с 1968 года</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 text-left mb-12">
            Вся продукция <b>Midea</b> соответствует международному стандарту
            качества: <b>ISO 9001</b>, а также обладает сертификатами{" "}
            <b>AHRI</b> и <b>EUROVENT</b> – самой авторитетной в мире
            организации, сертифицирующей оборудование для кондиционирования
          </p>
          <a
            href="tel:+998712000575"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-3xl shadow-lg transition-all duration-200"
          >
            +99871 200 05 75
          </a>
        </div>
        <div>
          <img
            src={BgHero}
            alt="air conditioner"
            className="w-full height-[400px] object-cover h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
