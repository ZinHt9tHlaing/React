import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle }) => {
  return (
    <div className="w-full flex items-center gap-3 mb-5">
      <Link to={"/"} className=" text-gray-500 active:scale-95 duration-200">Home</Link>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
      <p className=" font-bold">{currentPageTitle}</p>
    </div>
  );
};

export default Breadcrumb;
