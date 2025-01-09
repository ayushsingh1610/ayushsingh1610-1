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
          "Lorem Ipsum",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, ipsa?1",
          "https://github.com/ayushsingh16101"
        ],
        [
          "Lorem Ipsum2",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, ipsa?2",
          "https://github.com/ayushsingh16102"
        ],
        [
          "Lorem Ipsum3",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, ipsa?3",
          "https://github.com/ayushsingh16103"
        ],
        [
          "Lorem Ipsum4",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, ipsa?4",
          "https://github.com/ayushsingh16104"
        ],
      ].map(([title, desc, url]) => (
        <div className="flex flex-col justify-center items-center gap-8 mx-12 my-8">
          <a href={url} className="flex flex-col md:flex-row justify-evenly items-center gap-8 shrink bg-indigo-600 hover:bg-indigo-700 rounded-xl p-8 sm:mx-6 md:mx-12 sm:p-8 md:p-12 ">
            <div>
              <img
                className="cover shrink"
                src="https://www.dummyimage.com/300x200/000/fff"
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
