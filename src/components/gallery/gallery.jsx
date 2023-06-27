import React from "react";

import Gallery1 from "../../assets/images/gallery-1.jpg";
import Gallery2 from "../../assets/images/gallery-2.jpg";

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: Gallery1,
      alt: "Image 1",
    },
    {
      id: 2,
      src: Gallery2,
      alt: "Image 2",
    },
    {
      id: 3,
      src: Gallery1,
      alt: "Image 3",
    },
    {
      id: 4,
      src: Gallery2,
      alt: "Image 4",
    },
    {
      id: 3,
      src: Gallery1,
      alt: "Image 3",
    },
    {
      id: 4,
      src: Gallery2,
      alt: "Image 4",
    },
    // Add more images as needed
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
          Галерея
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="rounded-lg overflow-hidden  h-[290px]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
