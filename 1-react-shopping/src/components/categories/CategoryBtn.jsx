import React from "react";

const CategoryBtn = ({ categoryName, current }) => {
  return (
    <button
      className={` ${
        current && "bg-black text-white"
      } border-2 text-nowrap font-medium border-black rounded-md px-4 py-2 me-2 active:scale-95 duration-200 `}
    >
      {categoryName}
    </button>
  );
};

export default CategoryBtn;
