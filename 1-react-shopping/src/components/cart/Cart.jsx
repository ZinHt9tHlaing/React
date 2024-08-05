const Cart = ({ cart }) => {
  return (
    <div className="border-2 border-black rounded-md p-5 grid grid-cols-6">
      <div className="col-span-1">
        <img src={cart.product.image} className="h-16" />
      </div>
      <div className="col-span-3">
        <p className=" font-bold mb-2">{cart.product.title}</p>
        <p className=" text-gray-500">Price ( $ {cart.product.price} )</p>
      </div>
      <div className="col-span-1">
        <p className=" font-bold mb-2">Quantity</p>
        <div className=" flex gap-3 items-center">
          <button className=" text-white bg-black px-2 rounded py-0.5 active:scale-95 duration-200">-</button>
          {cart.quantity}
          <button className=" text-white bg-black px-2 rounded py-0.5 active:scale-95 duration-200">+</button>
        </div>
      </div>
      <div className="col-span-1">
        <p className=" text-end text-xl font-bold mt-3">$ {cart.cost}</p>
      </div>
    </div>
  );
};

export default Cart;
