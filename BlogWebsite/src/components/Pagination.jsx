import React, { useState } from "react";

const Pagination = ({ onPageChange, currentPage, blogs, PageSize }) => {
  //   const [currentPage, setcCurrentPage] = useState();
  const totalPages = Math.ceil(blogs.length / PageSize);
  const renderpagination = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => {
        <li
          className={pageNumber === currentPage ? "activePagination" : ""}
          key={pageNumber}
        >
          <a href="" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </a>
        </li>;
      }
    );
  };
  return (
    <div>
      <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>
      <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
