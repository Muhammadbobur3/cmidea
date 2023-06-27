import { Route, Routes } from "react-router-dom";
import About from "./components/about/about";
import Category from "./components/category/category";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Gallery from "./components/gallery/gallery";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import ProductsByCategoryPage from "./components/products-by-category/products-by-category";
import Product from "./components/product/product";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Hero />
            <Category />
            <About />
            {/* <Services /> */}
            {/* <Products /> */}
            <Gallery />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route
        path="/products/:categorySlug"
        element={<ProductsByCategoryPage />}
      />
      <Route path="/products/:categorySlug/:productId" element={<Product />} />
    </Routes>
  );
}

export default App;
