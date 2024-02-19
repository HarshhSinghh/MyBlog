import React from "react";
import AboutPage from "../components/AboutPage";
// import Banner from "../components/Banner.jsx";
const About = () => {
  return (
    <>
      <div className="px-4 py-40 bg-black mx-auto h-64">
        <div className="text-white text-center  ">
          <h1 className="text-5xl font-bold leading-snug  lg:text-7xl">
            About Page
          </h1>
        </div>
        <div className="max-w-7xl mx-auto"></div>
      </div>

      <div>
        <AboutPage />
      </div>
    </>
  );
};

export default About;
