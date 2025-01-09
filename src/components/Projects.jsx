import React from "react";

function Projects() {
  return (
    <section>
      <div>
        <p className="max-w-screen w-full text-center text-xl sm:text-2xl mx-auto my-16">
          Projects
        </p>
      </div>
      {[
        [
          "ATM Simulator",
          "An ATM software which has functionality of deposit cash, withdraw cash, mini statement, pin change, login and signup page.",
          "https://github.com/ayushsingh1610/ATM_simulator",
          "https://www.dummyimage.com/300x200/000/fff",
        ],
        [
          "Nextly",
          "A free Nextly template clone",
          "https://ayushsingh1610.github.io/nextly-project/",
          "https://www.dummyimage.com/300x200/000/fff",
        ],
        [
          "Password Generator",
          "Desktop Application which generates random password for you!",
          "https://github.com/ayushsingh1610/Password_Generator",
          "https://www.dummyimage.com/300x200/000/fff",
        ],
      ].map(([title, desc, url, imgsrc]) => (
        <div className="flex flex-col justify-center items-center gap-8 mx-12 my-8">
          <a href={url} className="flex flex-col md:flex-row justify-evenly items-center gap-8 shrink bg-indigo-600 hover:bg-indigo-700 rounded-xl p-8 sm:mx-6 md:mx-12 sm:p-8 md:p-12 ">
            <div>
              <img
                className="cover shrink"
                src={imgsrc}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-start items-start w-full ">
              <p className="text-xl font-semibold">{title}</p>
              <p>{desc}</p>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
