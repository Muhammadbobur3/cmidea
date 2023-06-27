import { Link } from "react-router-dom";
import { categories } from "../../mocks/categories";

const Category = () => {
  return (
    <section className="py-20 bg-gray-100" id="products">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
          Категории
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg cursor-pointer"
            >
              <Link to={`/products/${category.slug}`}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[200px] rounded-t-lg object-cover mb-4"
                />
                <h3 className="text-xl px-5 font-bold text-gray-800 mb-4">
                  {category.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
