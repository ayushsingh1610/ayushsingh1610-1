import React from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center mx-8 my-8">
        <div>
          <p className="text-3xl font-semibold">Ayush Singh</p>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-evenly items-center gap-4">
            <li />
            <a href="">Projects</a>
            <li />
            <a href="">Twitter</a>
            <li />
            <a href="">Instagram</a>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="bg-indigo-600 rounded-lg p-2">
            <img src="https://ik.imagekit.io/ayushsingh1610/icons/hamburger-menu?updatedAt=1736320389266" width={20} alt="menu" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
