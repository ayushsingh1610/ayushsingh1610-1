import React from "react";

const HeroSection = () => {
  return (
    <section className="body-font bg-neutral-800 text-neutral-200 ">
      <div className="container mx-auto flex flex-col items-start place-content-center md:flex-row md:justify-center md:items-center gap-4 sm:gap-8 px-8 py-24 ">
        <div className="w-full md:w-2/4 flex flex-col justify-between items-center md:items-end gap-6 md:gap-8 ">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold">Hey I'm Ayush Singh &#128075;</p>
          <p className="w-full md:w-3/4">Crafting Seamless User Experiences: The Art and Science of Front-End Development</p>
          <div className="flex justify-betwen items-center gap-4 mx-6">
            <button type="button" className="bg-indigo-700 px-4 py-2 rounded-md">Github</button>
            <button type="button" className="bg-indigo-500 px-4 py-2 rounded-md">LinkedIn</button>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="bg-neutral-900 rounded-full"
            src="https://ik.imagekit.io/ayushsingh1610/MY-STUFF/rb_5714.png?updatedAt=1736259157321"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// Crafting Seamless User Experiences: The Art and Science of Front-End Development