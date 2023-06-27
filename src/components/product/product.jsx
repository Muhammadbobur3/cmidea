import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../mocks/products";
import Breadcrumb from "../breadcrumb/breadcrumb";

const Product = () => {
  const { productId, categorySlug } = useParams();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);

  const items = [
    { text: "Главная страница", link: "/" },
    { text: "Категория", link: `/products/${categorySlug}` },
  ];

  useEffect(() => {
    setProduct(products.find((product) => product?.id === parseInt(productId)));
  }, [productId]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleBuy = () => {
    console.log(`Buying ${quantity} of ${product.title}`);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10 backdrop-blur-md bg-white/70 shadow-md">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <div>
            <a href="/">
              <h1 className="text-gray-800 text-lg font-bold">Logo</h1>
            </a>
          </div>
        </nav>
      </header>
      <section className="py-20 pt-28 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="p-5 bg-white rounded-lg mb-6">
            <Breadcrumb items={items} activeLink={product?.title} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-white rounded-lg p-5">
              <div className="flex items-center">
                {product?.availability ? (
                  <span className="bg-green-600 px-1 inline-block rounded-sm mb-3 text-xs text-white">
                    в наличии
                  </span>
                ) : null}
                {product?.bestseller ? (
                  <span className="bg-indigo-600 px-1 inline-block rounded-sm mb-3 text-xs ml-1 text-white">
                    хит продаж
                  </span>
                ) : null}
              </div>
              <img
                src={product?.image}
                alt={product?.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Product Details */}
            <div className="p-5 bg-white rounded-lg">
              <div className="border-b mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                  {product?.title}
                </h2>
                <p className="text-xl font-bold text-gray-800 mb-4">
                  {product?.price}
                </p>
              </div>
              <div className="flex items-center pb-6 border-b mb-6">
                <a
                  href="tel:+998712000575s"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                  onClick={handleBuy}
                >
                  Купить сейчас
                </a>
                <div className="flex ml-4">
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="w-16 text-center bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-none"
                    value={quantity}
                    readOnly
                  />
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{product?.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
