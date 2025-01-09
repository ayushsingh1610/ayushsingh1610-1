import React from "react";

function Sidebar() {
  return (
    <div className="absolute top-0 right-0 md:hidden w-screen h-2/4 bg-neutral-600  text-white flex justify-center items-center">
      <ul className="flex flex-col justify-evenly items-center gap-4">
        <li />
        <a href="">Projects</a>
        <li />
        <a href="">Twiter</a>
        <li />
        <a href="">Github</a>
      </ul>
    </div>
  );
}

export default Sidebar;
