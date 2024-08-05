import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (!count < 1) {
      setCount(count - 1);
    } else {
      count;
    }
  };

  return (
    <div className="p-10 text-center space-x-3">
      <h1 className="text-9xl mb-5 font-bold text-black">{count}</h1>
      <button
        onClick={handleDecrease}
        className="border px-4 py-2 rounded-md bg-red-600 text-white active:scale-95 duration-200"
      >
        Decrement -
      </button>

      <button
        onClick={handleIncrease}
        className="border px-4 py-2 rounded-md bg-green-600 text-white active:scale-95 duration-200"
      >
        Increment +
      </button>
    </div>
  );
};

export default App;
