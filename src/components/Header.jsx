import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" py-4 fixed top-5 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-center">
        <div className="w-full max-w-5xl border border-gray-200 rounded-full flex justify-between items-center px-6 py-2">
          <Link to="/">
            <h1 className="text-xl md:text-2xl font-bold text-lime-300 cursor-pointer">
              LearnHub
            </h1>
          </Link>
          <Link
            to="/form"
            className="text-gray-300 hover:text-white transition"
          >
            Admin
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
