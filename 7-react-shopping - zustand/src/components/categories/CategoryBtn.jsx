import React from "react";
import useCategoryStore from "../../store/useCategoryStore";

const CategoryBtn = ({ category: { id, name, isActive } }) => {
  const { activeCategory } = useCategoryStore();

  const handleClick = () => {
    activeCategory(id);
};

  return (
    <button onClick={handleClick} 
      className={` ${
        isActive && "bg-black text-white"
      } border-2 text-nowrap font-medium border-black rounded-md px-4 py-2 me-2 active:scale-95 duration-200 `}
    >
      {name}
    </button>
  );
};

export default CategoryBtn;
