import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="text-xl text-white font-bold">Company Name</h3>
          </div>
          <div className="w-full sm:w-auto text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
