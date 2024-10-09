import { HiChevronRight, HiMiniHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle, links }) => {
  return (
    <div className="flex w-full gap-3 mb-5">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="flex items-center">
            <HiMiniHome className="size-4 me-1.5" />
            <Link
              to="/"
              className="text-sm text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active:scale-95 duration-200"
            >
              Home
            </Link>
          </li>
          {links &&
            links.map((link, index) => (
              <li key={index} className="flex items-center">
                <HiChevronRight className="size-4 font-medium mx-2" />
                <Link
                  to={link.path}
                  className="text-sm text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active:scale-95 duration-200"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          <li>
            <div className="flex items-center">
              <HiChevronRight className="size-4 font-medium mx-2" />
              <span className="ms-1 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
