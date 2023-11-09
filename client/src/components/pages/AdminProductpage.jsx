import React from "react";
import { Link } from "react-router-dom";

const AdminProductPage = () => {
  return (
    <div>
      <Link to={"/add"}>
        <button className="px-4 font-semibold py-1 rounded-r-md bg-indigo-400 my-2 text-white">
          ADD
        </button>
      </Link>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4 space-x-2">
                <Link to={"/update/554"}>
                  <button className="bg-indigo-400 text-white px-2 rounded-md font-semibold py-1">
                    Update
                  </button>
                </Link>

                <button className="bg-indigo-400 text-white px-2 rounded-md font-semibold py-1">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductPage;
