import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySection from "./CategorySection";
import Sidebar from "./Sidebar";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const PageSize = 12;
  const [selectPageCategory, setSelectPageCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let URL = `http://127.0.0.1:8000/blogend/StudentList?page=${currentPage}&limit=${PageSize}`;

      if (selectPageCategory) {
        URL += `&category=${selectPageCategory}`;
      }

      const response = await axios.get(URL);
      const datas = response.data;
      setBlogs(datas);
    }

    fetchBlogs();
  }, [currentPage, PageSize, selectPageCategory]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleCategoryChange = (category) => {
    setSelectPageCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* Category Section */}
      <div>
        {" "}
        <CategorySection
          onSelectCategory={handleCategoryChange}
          selectPageCategory={selectPageCategory}
          activeCategory={activeCategory}
        />{" "}
      </div>
      {/* BlockCard Section */}
      <div className=" flex flex-col lg:flex-row gap-12 ">
        {blogs.length > 0 ? (
          <BlogCards
            blogs={blogs}
            currentPage={currentPage}
            PageSize={PageSize}
            selectPageCategory={selectPageCategory}
          />
        ) : (
          <p>Loading...</p>
        )}
        <div>
          <Sidebar />
        </div>
      </div>

      {/* Pagination */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          blogs={blogs}
          PageSize={PageSize}
        ></Pagination>
        {/* Your pagination logic here */}
        {/* Example: */}
      </div>
    </div>
  );
};

export default BlogPage;
