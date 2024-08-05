import { useState } from "react";

const Faq = ({ faq: { id, question, answer, isOpen } }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="">
      <div
        onClick={handleToggle}
        className="flex justify-between items-center p-5 text-xl border border-black select-none active:scale-95 duration-300"
      >
        <h1 className={`${open == false ? "" : "font-bold"}`}>{question}</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 duration-300 ${open == false ? "" : "rotate-180"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      <p className={`bg-gray-200 p-5 ${open == false ? "hidden" : ""}`}>
        {answer}
      </p>
    </div>
  );
};

export default Faq;
