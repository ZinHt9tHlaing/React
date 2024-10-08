import { FaHome } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle }) => {
  return (
    <nav className="flex mb-7" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <FaHome className="w-4 h-4 me-1.5" />
          <Link
            to="/"
            className="inline-flex items-center text-sm text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active:scale-95 duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <HiChevronRight className="w-4 h-4 font-medium mx-2" />
            <span className="ms-1 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
              {currentPageTitle}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
