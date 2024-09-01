import { Link } from "react-router-dom";
import Container from "../Container";
import Cart from "./Cart";
import useCartStore from "../../store/useCartStore";
import useProductStore from "../../store/useProductStore";
import emptyCartImg from "../../assets/empty-cart.svg";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const price = products.find((el) => el.id === cv.productId).price;
    const cost = cv.quantity * price;
    return (pv = cost);
  }, 0);

  const tax = total * 0.05;

  const netTotal = total + tax;

  return (
    <>
      <div className=" flex flex-col gap-5 h-full">
        

        {carts.length <= 0 ? (
          <img
            src={emptyCartImg}
            className="w-[200px] block mx-auto mt-10"
            alt="empty"
          />
        ):carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}

        <div className=" w-full absolute bottom-10 left-0">
          <Container className={"px-5"}>
            <div className=" border-t border-black flex justify-end gap-10 py-5">
              <div className=" text-end">
                <p className=" text-gray-500">Total ($)</p>
                <h3 className=" text-xl font-bold">{total.toFixed(2)}</h3>
              </div>
              <div className=" text-end">
                <p className=" text-gray-500">Tax (10%)</p>
                <h3 className=" text-lg font-bold">{tax.toFixed(2)}</h3>
              </div>
              <div className=" text-end">
                <p className=" text-gray-500">Net Total ($)</p>
                <h3 className=" text-3xl font-bold">{netTotal.toFixed(2)}</h3>
              </div>
            </div>
            <div className=" text-end mb-7">
              <Link className=" border-2 border-black px-4 py-2 rounded-md active:scale-95 hover:bg-black hover:text-white duration-200">
                Order Now
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CartSection;
