import React from 'react'

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse">
      <div className="flex justify-between items-center border-2 border-slate-300 p-3 rounded-lg mb-3 last:mb-0">
        <div className="flex justify-between w-full items-center">
          <div className="flex justify-between w-60 gap-4">
            <div className="bg-gray-400 size-5 col-span-1"></div>
            <div className="bg-gray-400 rounded-full h-5 w-full col-span-1"></div>
          </div>
          <div className="bg-gray-400 rounded-full h-10 w-20 col-span-1"></div>
        </div>
      </div>

      <div className="flex justify-between items-center border-2 border-slate-300 p-3 rounded-lg mb-3 last:mb-0">
        <div className="flex justify-between w-full items-center">
          <div className="flex justify-between w-60 gap-4">
            <div className="bg-gray-400 size-5 col-span-1"></div>
            <div className="bg-gray-400 rounded-full h-5 w-full col-span-1"></div>
          </div>
          <div className="bg-gray-400 rounded-full h-10 w-20 col-span-1"></div>
        </div>
      </div>

      <div className="flex justify-between items-center border-2 border-slate-300 p-3 rounded-lg mb-3 last:mb-0">
        <div className="flex justify-between w-full items-center">
          <div className="flex justify-between w-60 gap-4">
            <div className="bg-gray-400 size-5 col-span-1"></div>
            <div className="bg-gray-400 rounded-full h-5 w-full col-span-1"></div>
          </div>
          <div className="bg-gray-400 rounded-full h-10 w-20 col-span-1"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonLoader