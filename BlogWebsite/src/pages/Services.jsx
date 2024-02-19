import React from "react";
import Servicespage from "../components/Servicespage";

const Services = () => {
  return (
    <>
      <div className="px-4 py-40 bg-black mx-auto h-64">
        <div className="text-white text-center  ">
          <h1 className="text-5xl font-bold leading-snug  lg:text-7xl">
            Services Page{" "}
          </h1>
        </div>
      </div>
      <Servicespage />
    </>
  );
};
export default Services;
