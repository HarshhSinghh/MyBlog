import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    // <div className="px-4 py-40 bg-black mx-auto max-h-screen-30vh">
<div className="px-4 py-40 bg-black mx-auto h-64">

<div className="text-white text-center  ">
        <h1 className="text-5xl font-bold leading-snug  lg:text-7xl">
          Hello Welcome
        </h1>
        <p className="my-3  font-primary">
          Start your blog today. and join the community of people who are
          passionate and enthusisatic. We offer everything you need to get
          started,fromhelpful tips to tutorial.
        </p>

        <div>
          <Link
            to="/"
            className="font-medium justify-center hover:text-orange-500 flex  "
          >
            LearnMore <FaArrowRight className=" mt-1 ml-2 items-center " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
