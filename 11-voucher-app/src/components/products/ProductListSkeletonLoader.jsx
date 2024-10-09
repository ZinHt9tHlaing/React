const ProductListSkeletonLoader = () => {
  const skeletonCount = 5;
  const skeletons = Array.from({ length: skeletonCount });

  return (
    <>
      {skeletons.map((_, index) => (
        <tr
          key={index}
          className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 animate-pulse"
        >
          <td className="px-6 py-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-8"></div>
          </td>
          <th scope="row" className="px-6 py-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-40"></div>
          </th>
          <td className="px-6 py-4 text-end">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
          </td>
          <td className="px-6 py-4 text-end">
            <div className="space-y-1">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-14"></div>
            </div>
          </td>
          <td className="px-6 py-4 text-end">
            <div className="inline-flex space-x-2">
              <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductListSkeletonLoader;
