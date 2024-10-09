import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { useSWRConfig } from "swr";
import { useState } from "react";

import { dotSpinner } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
dotSpinner.register();

const ProductRow = ({ products: { id, product_name, price, created_at } }) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  const date = new Date(created_at);

  const dateOption = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const timeOption = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const currentDate = date.toLocaleDateString("en-GB", dateOption);
  const currentTime = date.toLocaleTimeString("en-GB", timeOption);

  const handleDeleteBtn = async () => {
    setIsDeleting(true);

    await fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
      method: "DELETE",
    });
    mutate(import.meta.env.VITE_API_URL + `/products`);
    toast.success("Product deleted successfully", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    setIsDeleting(false);
  };

  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td className="px-6 py-4">{id}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {product_name}
        </th>
        <td className="px-6 py-4 text-end">{price}</td>
        <td className="px-6 py-4 text-end">
          <p className="text-xs md:text-sm">{currentDate}</p>
          <p className="text-xs md:text-sm">{currentTime}</p>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <Link
              to={`/product/edit/${id}`}
              type="button"
              className="w-10 flex justify-center items-center py-2 text-sm font-medium text-blue-600 bg-white border border-gray-100 shadow rounded-s-lg hover:text-white hover:bg-blue-600 active:scale-90 duration-200"
            >
              <HiOutlinePencil className="size-4" />
            </Link>
            <button
              type="button"
              onClick={handleDeleteBtn}
              className="w-10 flex justify-center items-center py-2 text-sm font-medium text-red-600 bg-white border border-gray-100 shadow rounded-e-lg hover:bg-red-600 hover:text-white active:scale-90 duration-200"
            >
              {isDeleting ? (
                <l-dot-spinner
                  size="20"
                  speed="0.9"
                  color="red"
                ></l-dot-spinner>
              ) : (
                <HiOutlineTrash className="size-4" />
              )}
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
