import React from "react";

const CategorySection = ({ onSelectCategory, activeCategory }) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];
  return (
    <div className="flex flex-wrap px-5 lg:space-x-16 items-center border-b-2 py-5 mb-8 text-gray-900 font-semibold">
      <button
        onClick={() => onSelectCategory(null)}
        className={activeCategory === null ? "active-button" : ""}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`mr-2 space-x-16 ${
            activeCategory === category ? "active-button" : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySection;
