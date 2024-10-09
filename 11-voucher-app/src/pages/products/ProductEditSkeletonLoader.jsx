import React from "react";

const ProductEditSkeletonLoader = () => {
  return (
    <div className="space-y-5 animate-pulse">
      {/* Product name loader */}
      <div className="mb-5">
        <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
        <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
      </div>

      {/* Price loader */}
      <div className="mb-5">
        <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
        <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
      </div>

      {/* Checkbox loaders */}
      <div className="flex items-center">
        <div className="w-4 h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-48 ml-2"></div>
      </div>

      <div className="flex items-center">
        <div className="w-4 h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-64 ml-2"></div>
      </div>

      {/* Cancel and Update buttons */}
      <div className="flex space-x-3">
        <div className="h-10 bg-gray-200 rounded-lg w-24"></div>
        <div className="h-10 bg-blue-200 rounded-lg w-36"></div>
      </div>
    </div>
  );
};

export default ProductEditSkeletonLoader;
