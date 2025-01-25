import React, { useEffect, useRef } from "react";
import Hamburger from "./Hamburger";

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
            <a href="https://x.com/ayushsingh1610">Twitter</a>
            <li />
            <a href="https://www.instagram.com/_ayushsingh._.16">Instagram</a>
          </ul>
        </div>
        <Hamburger/>
      </div>
    </>
  );
}

export default Navbar;