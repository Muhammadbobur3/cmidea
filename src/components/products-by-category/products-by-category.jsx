import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { categories as categoriesData } from "../../mocks/categories";
import { products } from "../../mocks/products";
import Breadcrumb from "../breadcrumb/breadcrumb";
import ArrowUp from "../../assets/images/up-arrow.png";
import ArrowDown from "../../assets/images/down-arrow.png";

const ProductsByCategoryPage = () => {
  const { categorySlug } = useParams();

  const fetchProductsByCategory = (categorySlug, products) => {
    return products.filter((product) => product.category === categorySlug);
  };

  const [categories, setCategories] = useState([]);

  // ...

  useEffect(() => {
    const fetchCategories = () => {
      const fetchedCategories = categoriesData.map((category) => {
        const subcategories = categoriesData.filter(
          (subcategory) => subcategory.category === category.slug
        );
        return {
          ...category,
          subcategories,
          isOpen: false,
        };
      });
      setCategories(fetchedCategories);
    };

    fetchCategories();
  }, []);

  const productsData = fetchProductsByCategory(categorySlug, products);

  const items = [{ text: "Главная страница", link: "/" }];

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
      <section className="py-20 pt-28 bg-gray-100 h-full">
        <div className="container mx-auto px-4">
          <div className="p-5 bg-white rounded-lg mb-6">
            <Breadcrumb items={items} activeLink={"Категории"} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}

            <div className="lg:col-span-1 h-screen bg-white rounded-lg">
              <h2 className="text-3xl lg:text-2xl font-bold text-gray-800 p-5 border-b border-b-gray-100">
                Категории
              </h2>
              <ul className="pb-6">
                {categories?.map((category) => (
                  <li
                    key={category.id}
                    className="text-md m-0 cursor-pointer px-5 py-2 font-medium text-indigo-600 border-b border-b-gray-100"
                  >
                    <div
                      onClick={() => {
                        setCategories((prevCategories) =>
                          prevCategories.map((prevCategory) => {
                            if (prevCategory.id === category.id) {
                              return {
                                ...prevCategory,
                                isOpen: !prevCategory.isOpen,
                              };
                            } else {
                              // Close other open categories
                              return {
                                ...prevCategory,
                                isOpen: false,
                              };
                            }
                          })
                        );
                      }}
                      className={`flex items-center justify-between ${
                        category.slug === categorySlug ? "font-bold" : ""
                      }`}
                    >
                      {category.title}
                      <div className="text-gray-500">
                        {category.isOpen ? (
                          <img
                            width="12"
                            height="12"
                            src={ArrowUp}
                            alt="arrow up"
                          />
                        ) : (
                          <img
                            width="16"
                            height="16"
                            src={ArrowDown}
                            alt="arrow down"
                          />
                        )}
                      </div>
                    </div>
                    {/* Render subcategories if the accordion item is open */}
                    {category.isOpen && (
                      <ul className="pl-5 py-5 ">
                        {category.subCategory.map((subcategory) => {
                          return (
                            <li
                              key={subcategory.id}
                              className="text-md m-0 py-2 font-normal"
                            >
                              <Link
                                to={`/products/${subcategory.slug}`}
                                className="text-indigo-600-800 underline"
                              >
                                {subcategory.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productsData.map((product) => (
                  <Link
                    to={`/products/${categorySlug}/${product.id}`}
                    key={product.id}
                    className="bg-white rounded-lg shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 rounded-t-lg object-cover"
                      />
                      <div className="p-4 flex flex-col flex-grow">
                        <div>
                          {product.availability ? (
                            <span className="bg-green-600 px-1 inline-block rounded-sm mb-3 text-xs text-white">
                              в наличии
                            </span>
                          ) : null}
                          {product.bestseller ? (
                            <span className="bg-indigo-600 px-1 inline-block rounded-sm mb-3 text-xs ml-1 text-white">
                              хит продаж
                            </span>
                          ) : null}
                        </div>
                        <h3 className="text-md font-medium text-gray-800 mb-4">
                          {product.title}
                        </h3>
                        <p className="font-bold text-indigo-600 text-lg mt-auto">
                          {product.price}
                        </p>
                      </div>
                    </div>
                    {/* Add additional product details or buttons here */}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsByCategoryPage;
