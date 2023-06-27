import React, { useState } from "react";
import Close from "../../assets/images/close.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10 backdrop-blur-md bg-white/70 shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
          <h1 className="text-gray-800 text-lg font-bold">Logo</h1>
        </div>
        <div className="flex items-center">
          <button
            className="block sm:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <img src={Close} alt="close icon" width="16" height="16" />
            ) : (
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16V4H4v2zm0 5h16V9H4v2zm0 5h16v-2H4v2z"
                />
              </svg>
            )}
          </button>
          <ul
            className={`absolute sm:static top-full bg-white sm:bg-transparent w-8/12 sm:w-full right-0 p-6 sm:p-0 text-right h-screen sm:h-auto sm:flex ml-4 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a
                className="text-gray-700 hover:text-gray-600 px-2 py-4 sm:py-1 w-full block"
                href="#about"
              >
                О нас
              </a>
            </li>
            {/* <li>
              <a
                className="text-gray-700 hover:text-gray-600 px-2 py-4 sm:py-1 w-full block"
                href="#services"
              >
                Услуги
              </a>
            </li> */}
            <li>
              <a
                className="text-gray-700 hover:text-gray-600 px-2 py-4 sm:py-1 w-full block"
                href="#products"
              >
                Продукты
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-gray-600 px-2 py-4 sm:py-1 w-full block"
                href="#contact"
              >
                Контакт
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
