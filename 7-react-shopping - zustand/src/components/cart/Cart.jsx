import Swal from "sweetalert2";
import useCartStore from "../../store/useCartStore";
import useProductStore from "../../store/useProductStore";
import toast from "react-hot-toast";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();

  const product = products.find((el) => el.id === productId);

  const cost = product.price * quantity;

  const handleIncrement = () => {
    increaseQuantity(id);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#363636",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          toast.success("Item removes successfully !");
        }
      });
    }
  };

  return (
    <div className="border-2 border-black rounded-md p-5 grid grid-cols-6">
      <div className="col-span-1">
        <img src={product.image} className="h-16" />
      </div>
      <div className="col-span-3">
        <p className=" font-bold mb-2">{product.title}</p>
        <p className=" text-gray-500">Price ( $ {product.price} )</p>
      </div>
      <div className="col-span-1">
        <p className=" font-bold mb-2">Quantity</p>
        <div className=" flex gap-3 items-center">
          <button
            onClick={handleDecrement}
            className=" text-white bg-black px-2 rounded py-0.5 active:scale-95 duration-200"
          >
            -
          </button>
          {quantity}
          <button
            onClick={handleIncrement}
            className=" text-white bg-black px-2 rounded py-0.5 active:scale-95 duration-200"
          >
            +
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <p className=" text-end text-xl font-bold mt-3">$ {cost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
