import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { tailspin } from "ldrs";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
tailspin.register();

const ProductCreateCard = () => {
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleCreateProduct = async (data) => {
    // console.log(data);
    setIsSending(true);
    data.created_at = new Date().toISOString();
    await fetch(import.meta.env.VITE_API_URL + "/products", {
      method: "POST",
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        created_at: new Date().toISOString(),
      }), // cause json-server
      headers: {
        "Content-type": "application/json",
      },
    });
    reset();
    if (data.back_to_product_list) {
      navigate("/product");
    }
    toast.success("Product created successfully", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    setIsSending(false);
  };

  return (
    <div className="bg-neutral-100 p-5 rounded-lg w-full md:w-1/2">
      <h1 className="text-3xl font-bold mb-3">Create New Product</h1>
      <p className="text-neutral-500 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
        asperiores tempora nam aut exercitationem quae consectetur praesentium.
      </p>
      <form onSubmit={handleSubmit(handleCreateProduct)} className="space-y-5">
        {/* Product name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className={`block mb-2 text-sm font-medium ${
              errors.product_name ? "text-red-500" : "text-gray-900 "
            } dark:text-white`}
          >
            New Product name
          </label>
          <input
            type="text"
            id="name"
            {...register("product_name", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
            className={`bg-gray-50 border ${
              errors.product_name
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="eg. apple"
          />
          {errors.product_name?.type === "required" && (
            <p className="text-red-600 text-sm mt-1">
              Product name is required
            </p>
          )}
          {errors.product_name?.type === "minLength" && (
            <p className="text-red-600 text-sm mt-1">
              Product must be greater than 3 characters
            </p>
          )}
          {errors.product_name?.type === "maxLength" && (
            <p className="text-red-600 text-sm mt-1">
              Product must be less than 30 characters
            </p>
          )}
        </div>
        {/* Price */}
        <div className="mb-5">
          <label
            htmlFor="price"
            className={`block mb-2 text-sm font-medium ${
              errors.price ? "text-red-500" : "text-gray-900 "
            } dark:text-white`}
          >
            Product Price
          </label>
          <input
            type="number"
            id="price"
            {...register("price", {
              required: true,
              min: 100,
              max: 10000,
            })}
            className={`bg-gray-50 border ${
              errors.price
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="eg. 500"
          />
          {errors.price?.type === "required" && (
            <p className="text-red-600 text-sm mt-1">Price is required</p>
          )}
          {errors.price?.type === "min" && (
            <p className="text-red-600 text-sm mt-1">
              Product must be greater than 100 characters
            </p>
          )}
          {errors.price?.type === "max" && (
            <p className="text-red-600 text-sm mt-1">
              Product must be less than 10000 characters
            </p>
          )}
        </div>

        {/* Checkbox */}
        <div className="flex items-center">
          <input
            id="all_correct"
            type="checkbox"
            {...register("all_correct", {
              required: true,
            })}
            className={`w-4 h-4 ${
              errors.all_correct
                ? "ring-2 ring-red-500"
                : "text-blue-600 active:ring-blue-500"
            } bg-gray-100 border-gray-300 rounded dark:active:ring-blue-600 dark:ring-offset-gray-800 active:ring-2 dark:bg-gray-700 dark:border-gray-600`}
          />
          <label
            htmlFor="all_correct"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Make sure all fields are correct
          </label>
          {/* {errors.all_correct?.type === "required" && (
            <p className="text-red-600 text-sm">All correct is required</p>
          )} */}
        </div>

        {/* Back to product List */}
        <div className="flex items-center">
          <input
            id="back_to_product_list"
            type="checkbox"
            checked
            {...register("back_to_product_list", {
              required: true,
            })}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded active:ring-blue-500 dark:active:ring-blue-600 dark:ring-offset-gray-800 active:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="back_to_product_list"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Back to product List after saving
          </label>
          {/* {errors.back_to_product_list?.type === "required" && (
            <p className="text-red-600 text-sm">All correct is required</p>
          )} */}
        </div>

        <Link
          to={"/product"}
          className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-2 border-gray-300 hover:bg-gray-100 hover:text-blue-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 active:scale-95 duration-200"
        >
          Cancel
        </Link>

        <button
          type="submit"
          className="text-white inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95 duration-200"
        >
          {isSending && (
            <l-tailspin
              size="20"
              stroke="5"
              speed="0.9"
              color="white"
            ></l-tailspin>
          )}
          <span>Save Product</span>
        </button>
      </form>
    </div>
  );
};

export default ProductCreateCard;
