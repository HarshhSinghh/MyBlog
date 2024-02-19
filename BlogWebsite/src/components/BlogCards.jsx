import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogCards = ({ blogs, selectPageCategory, PageSize, currentPage }) => {
  const filteredBlogs = blogs
    .filter((blog) => {
      const condition =
        !selectPageCategory || blog.category === selectPageCategory;
      console.log(
        `Blog ID: ${blog.id}, Category: ${blog.category}, Condition: ${condition}`
      );
      return condition;
    })
    .slice((currentPage - 1) * PageSize, currentPage * PageSize);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 p-4 shadow-lg rounded">
      {filteredBlogs.map((blog) => {
        return (
          <div key={blog.id}>
            {" "}
            {/* Added key prop to the outer div */}
            <Link to={`/blog/${blog.id}`} key={blog.id} className="">
              {/* <Link to={`/Blog/${blog.id}`} key={blog.id} className=""> */}{" "}
              {/* Added key prop to the Link component */}
              <div className="p-4 border border-gray-300 ">
                <div>
                  <img src={blog.image} alt="" className=" w-full " />{" "}
                  {/* Added alt attribute */}
                </div>
                <h3 className="mt-4 mb-2 hover:text-blue-600 cursor-pointer">
                  <b>{blog.title}</b>
                </h3>
                {/* <p>{blog.content}</p> */}
                <p className="flex gap-3 mb-b text-gray-600">
                  {" "}
                  <FaUser className="inline-flex items-center mr-2" />{" "}
                  {blog.author} <p>Published: {blog.published_date} </p>
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCards;
