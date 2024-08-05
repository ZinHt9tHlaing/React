import { Link } from "react-router-dom";
import products from "../../data/products";
import Container from "../Container";
import Cart from "./Cart";
import carts from "../../data/carts";

const CartSection = () => {
  return (
    <>
      <div className=" flex flex-col gap-5 h-full">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}

        <div className=" w-full absolute bottom-10 left-0">
          <Container>
            <div className=" border-t border-black flex justify-end gap-32 py-5">
              <div className=" text-end">
                <p className=" text-gray-500">Total ($)</p>
                <h3 className=" text-xl font-bold">123</h3>
              </div>
              <div className=" text-end">
                <p className=" text-gray-500">Tax (10%)</p>
                <h3 className=" text-lg font-bold">123</h3>
              </div>
              <div className=" text-end">
                <p className=" text-gray-500">Net Total ($)</p>
                <h3 className=" text-3xl font-bold">123</h3>
              </div>
            </div>
            <div className=" text-end mb-7">
              <Link className=" border-2 border-black px-7 py-2 rounded-md active:scale-95 hover:bg-black hover:text-white duration-200">
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
