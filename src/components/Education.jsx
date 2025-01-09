import React from "react";

function Education() {
  return (
    <div>
      <div className="flex flex-col justify-between items-center gap-8 sm:gap-16 mx-2 sm:mx-8 my-16 px-4 ">
        <p className="text-xl sm:text-2xl font-semibold text-center ">
          Education
        </p>
        {[
          [
            "BBD University",
            "2022-2025",
            "Lucknow, Uttar Pradesh",
            "Bachelor of Computer Application (BCA)",
            "74%",
          ],
          [
            "Modern Public School",
            "2020-2021",
            "Farrukhabad, Uttar Pradesh",
            "Intermediate (12th)",
            "80.3%",
          ],
          [
            "Modern Public School",
            "2018-2019",
            "Farrukhabad, Uttar Pradesh",
            "High School (10th)",
            "80.2%",
          ],
        ].map(([institute, year, location, course, marks]) => (
          <div className="w-3/4 sm:w-2/4">
            <div className="w-full flex flex-col justify-between items-start sm:flex-row sm:items-center ">
              <p className="text-xl font-semibold">{institute}</p>
              <p className="text-sm text-neutral-400">{year}</p>
            </div>
            <p className="text-sm text-neutral-400 mt-[0.75] mb-3">
              {location}
            </p>
            <p>{course}</p>
            <p className="text-sm text-neutral-400">{marks}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
