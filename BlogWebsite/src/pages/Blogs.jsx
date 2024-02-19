import React from "react";
import BlogPage from "../components/BlogPage";

const Blogs = () => {
  return (
    <>
<div className="px-4 py-40 bg-black mx-auto h-64">
      <div className="text-white text-center  ">
        <h1 className="text-5xl font-bold leading-snug  lg:text-7xl">
          Blog Page
        </h1>
      </div>


    </div><div className="max-w-7xl mx-auto">
        <BlogPage></BlogPage>
      </div></>


  );
};

export default Blogs;
