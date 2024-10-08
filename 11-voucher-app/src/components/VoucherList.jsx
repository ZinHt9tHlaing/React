import { HiDotsHorizontal } from "react-icons/hi";
import { HiComputerDesktop } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const VoucherList = () => {
  return (
    <section className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-between mb-3 mt-5 ms-3">
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoSearch className="size-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black focus:border-black-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black duration-200"
              placeholder="Search Product..."
              required
            />
          </div>
        </div>
        <div>
          <Link
            to={"/sale"}
            className="text-white flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 hover:ring-4 hover:ring-blue-300 focus:outline-none active:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:ring-blue-800 active:scale-95 duration-200"
          >
            Create Sale <HiComputerDesktop className="size-3" />
          </Link>
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Voucher id.
            </th>
            <th scope="col" className="px-6 py-3">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Date
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hidden last:table-row">
            <td colSpan={5} className="px-6 py-4 text-center font-semibold">
              There is no Voucher
            </td>
          </tr>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td className="px-6 py-4">#12345</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              kaung Kaung
            </th>
            <td className="px-6 py-4 text-end">kaungkaung@gmail.com</td>
            <td className="px-6 py-4 text-end">
              <p className="text-xs md:text-sm">8 Oct 2024</p>
              <p className="text-xs md:text-sm">10:30 PM</p>
            </td>
            <td className="px-6 py-4 text-end">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-gray-100 shadow rounded-lg hover:text-white hover:bg-blue-600 duration-200"
                >
                  <HiDotsHorizontal className="size-4 text-black" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default VoucherList;
