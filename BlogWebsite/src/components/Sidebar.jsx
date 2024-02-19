import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [popularBlog, setPopularBlog] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/blogend/StudentList")
      .then((res) => res.json())
      .then((data) => setPopularBlog(data.slice(0, 5)));
  }, []);

  return (
    <div>
      {" "}
      <h3 className="px-4 font-semibold text-2xl">Sidebar</h3>
      <div className="px-5     border-blue-100">
        {popularBlog &&
          popularBlog.map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-2"
            >
              <h1 className="font-medium mb-2">{blog.title}</h1>
              <Link
                to="/"
                className="font-medium hover:text-orange-500 inline-flex item-center pyt-1"
              >
                Read More <FaArrowRight className="mt-1 ml-2" />{" "}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
