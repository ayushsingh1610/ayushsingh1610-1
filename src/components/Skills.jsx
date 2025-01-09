import React from "react";

function Skills() {
  return (
    <div>
      <div className="flex flex-col justify-evenly items-center gap-6">
        <p className="text-xl sm:text-2xl ">Skills I have</p>
        <div className="flex flex-wrap justify-evenly items-center gap-6 shrink mx-4 md:mx-8">
        {[
          ["https://ik.imagekit.io/ayushsingh1610/icons/html-48.png?updatedAt=1727286669382", "HTML"],
          ["https://ik.imagekit.io/ayushsingh1610/icons/css-50.png?updatedAt=1727286669371", "CSS"],
          ["https://ik.imagekit.io/ayushsingh1610/icons/javascript-48.png?updatedAt=1727286671927", "Javascript"],
          ["https://ik.imagekit.io/ayushsingh1610/icons/tailwindcss-mark.svg?updatedAt=1736313856978", "Tailwind"],
          ["https://ik.imagekit.io/ayushsingh1610/icons/react-js-100.png?updatedAt=1727286674672", "React"],
          ["https://ik.imagekit.io/ayushsingh1610/icons/mysql-100.png?updatedAt=1727286672360", "MySql"],
          ["https://ik.imagekit.io/ayushsingh1610/icons/java-144.png?updatedAt=1727286671824", "Java"],
          ["https://ik.imagekit.io/ayushsingh1610/icons/github-120.png?updatedAt=1727286669221", "Github"],
        ].map(([link, alt]) => (
          <img src={link} width='72' className="mx-4 my-4 sm:my-16" alt={alt} />
        ))

        }
        </div>
      </div>
    </div>
  );
}

export default Skills;