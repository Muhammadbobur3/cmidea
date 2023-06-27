import React from "react";

const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
          Наши услуги
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Air Conditioning Installation
            </h3>
            <p className="text-gray-700">
              Our experienced technicians provide professional air conditioning
              installation services to ensure your home stays cool and
              comfortable throughout the year.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              TV Sales and Installation
            </h3>
            <p className="text-gray-700">
              Discover the latest TV models and technology in our showroom. We
              offer a wide selection of TVs and provide expert installation
              services for the ultimate viewing experience.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Air Conditioning Repair
            </h3>
            <p className="text-gray-700">
              Is your air conditioner not working properly? Our skilled
              technicians are ready to diagnose and repair any issues to restore
              your AC system's efficiency and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
