import { Link, useNavigate } from "react-router-dom";
import Rating from "./Rating";
import useCartStore from "../../store/useCartStore";
import toast from "react-hot-toast";

const ProductCard = ({
  product: {
    id,
    image,
    title,
    price,
    rating: { rate },
    slug
  },
}) => {
  const { carts, addCart } = useCartStore();
  const nav = useNavigate();

  const handleAddedBtn = (event) => {
    event.stopPropagation();
    toast.error("Item is already added to My Cart !");
  };

  const handleAddCartBtn = (event) => {
    event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addCart(newCart);
  };

  const handleOpenDetail = () => {
    nav(`/product-detail/${slug}`);
  };

  return (
    <div
      onClick={handleOpenDetail}
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
        {carts.find((cart) => cart.productId === id) ? (
          <button
            onClick={handleAddedBtn}
            className="border-2 text-white bg-gray-800 font-medium rounded-md text-sm px-4 py-1 active:scale-95 hover:ring-2 hover:ring-gray-950 duration-200"
          >
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCartBtn}
            className=" border-2 border-black font-medium rounded-md text-sm px-4 py-1 hover:bg-gray-700 hover:text-white active:ring-2 active:ring-gray-800 active:scale-95 duration-200"
          >
            Add Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
