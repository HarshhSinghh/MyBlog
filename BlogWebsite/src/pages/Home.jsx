import React from "react";
import Banner from "../components/Banner.jsx";
import BlogPage from "../components/BlogPage.jsx";
const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="mx-w-7xl">
        <BlogPage></BlogPage>
      </div>
    </>
  );
};

export default Home;
