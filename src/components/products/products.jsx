import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import AirConditioner from "../../assets/images/air-hero.png";
import Close from "../../assets/images/close.png";

const Products = () => {
  const products = [
    {
      name: "Air Conditioning Systems",
      image: AirConditioner,
      description:
        "Discover our range of high-quality air conditioning systems that provide efficient cooling and comfort for your home or office.",
    },

    {
      name: "Air Conditioning Systems",
      image: AirConditioner,
      description:
        "Discover our range of high-quality air conditioning systems that provide efficient cooling and comfort for your home or office.",
    },

    {
      name: "Air Conditioning Systems",
      image: AirConditioner,
      description:
        "Discover our range of high-quality air conditioning systems that provide efficient cooling and comfort for your home or office.",
    },

    {
      name: "Air Conditioning Systems",
      image: AirConditioner,
      description:
        "Discover our range of high-quality air conditioning systems that provide efficient cooling and comfort for your home or office.",
    },

    {
      name: "Air Conditioning Systems",
      image: AirConditioner,
      description:
        "Discover our range of high-quality air conditioning systems that provide efficient cooling and comfort for your home or office.",
    },
    // Add more products as needed
  ];

  const [activeModal, setActiveModal] = useState(null);

  const openModal = (index) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section className="py-20 bg-gray-100 relative" id="products">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
          Наши бестселлеры
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white rounded-lg shadow-lg p-6 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[200px] object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {product.name}
                </h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal */}
        {activeModal !== null && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white w-3/4 flex rounded-lg shadow-lg p-6 relative">
              <img
                src={products[activeModal].image}
                alt={products[activeModal].name}
                className="w-[500px] h-[500px] mb-4"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {products[activeModal].name}
                </h3>
                <p className="text-gray-700">
                  {products[activeModal].description}
                </p>
              </div>
              <div
                className="absolute right-5 top-5 cursor-pointer"
                onClick={closeModal}
              >
                <img src={Close} alt="close icon" width="16" height="16" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
