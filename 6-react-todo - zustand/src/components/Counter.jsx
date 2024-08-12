import useCounterStore from "../store/useCounterStore";


const Counter = () => {
  // console.log(userCounterStore());

  const { count, resetCount, increaseCount, decreaseCount } =
  useCounterStore();

  const handleIncrement = () => {
    increaseCount(5);
  };

  const handleDecrement = () => {
    decreaseCount();
  };

  const handleReset = () => {
    resetCount();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-4">Counter</h1>
        <div className="flex justify-center items-center space-x-6 mb-4">
          <button
            onClick={handleDecrement}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 active:scale-90 duration-200"
          >
            -
          </button>
          <span className="text-6xl font-semibold">{count}</span>
          <button
            onClick={handleIncrement}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 active:scale-90 duration-200"
          >
            +
          </button>
        </div>
        <button
          onClick={handleReset}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 w-full active:scale-95 duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
