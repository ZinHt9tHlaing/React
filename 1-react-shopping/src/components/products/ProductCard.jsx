import { Link } from "react-router-dom";
import Rating from "./Rating";
import carts from "../../data/carts";

const ProductCard = ({
  product: {
    id,
    image,
    title,
    price,
    rating: { rate },
  },
}) => {
  return (
    <Link
      to={`/product-detail/${id}`}
      className=" border-2 border-black rounded-md p-5 flex flex-col items-start gap-5 hover:shadow-md hover:shadow-black duration-300"
    >
      <img
        src={image}
        className=" border-0 h-36 hover:scale-105 hover:-rotate-6 duration-300"
      />
      <p className=" line-clamp-2 font-bold">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between items-end w-full">
        <p className=" font-medium">$ {price}</p>
        {carts.find((cart) => cart.product.id === id) ? (
          <button className=" border-2 text-white bg-black font-medium rounded-md text-sm px-4 py-1 active:scale-95 duration-200">
            Added
          </button>
        ) : (
          <button className=" border-2 border-black font-medium rounded-md text-sm px-4 py-1 hover:bg-gray-700 hover:text-white active:scale-95 duration-200">
            Add Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
