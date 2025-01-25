import React, { useState } from "react";

function Hamburger() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <>
    <div className="md:hidden flex flex-col gap-1" onClick={handleClick}>
      <div className="w-6 h-1 bg-neutral-300 rounded-lg"></div>
      <div className="w-6 h-1 bg-neutral-300 rounded-lg"></div>
      <div className="w-6 h-1 bg-neutral-300 rounded-lg"></div>
    </div>
    {open && (<div className='md:hidden size-full fixed top-20 left-0 right-0 w-screen text-center font-semibold bg-indigo-500 text-neutral-300 flex flex-col justify-center gap-6 py-4'>
            <a href="https://github.com/ayushsingh1610/">Project</a>
            <a href="https://x.com/ayushsingh1610">Twitter</a>
            <a href="https://www.instagram.com/_ayushsingh._.16/">Instagram</a>
        </div>)}</>
  );

  
}

export default Hamburger;
