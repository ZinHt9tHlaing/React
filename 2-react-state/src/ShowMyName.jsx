import { useState } from "react";
import {} from "react-router-dom";

const ShowMyName = () => {
  const [name, setName] = useState("");

  const handleZin = () => {
    setName(name + "Zin");
  };

  const handleHtet = () => {
    setName(name + "Htet");
  };

  const handleHlaing = () => {
    setName(name + "Hlaing");
  };

  const handleClear = () => {
    setName("");
  };

  return (
    <div className=" p-10 space-x-1">
      <h1 className="text-4xl font-bold mb-3">
        My Name is{" "}
        <p className=" inline-block font-bold text-5xl text-yellow-400">
          "{name}"
        </p>
      </h1>
      <button
        onClick={handleZin}
        className="border px-4 py-2 rounded-md bg-green-600 text-white active:scale-90 duration-300"
      >
        Zin
      </button>

      <button
        onClick={handleHtet}
        className="border px-4 py-2 rounded-md bg-green-600 text-white active:scale-90 duration-300"
      >
        Htet
      </button>

      <button
        onClick={handleHlaing}
        className="border px-4 py-2 rounded-md bg-green-600 text-white active:scale-90 duration-300"
      >
        Hlaing
      </button>

      <button
        onClick={handleClear}
        className=" px-4 py-2 border-2 border-red-500 text-red-500 font-medium rounded-md hover:bg-red-600 hover:text-white active:scale-90 duration-300"
      >
        Clear Name
      </button>
    </div>
  );
};

export default ShowMyName;
