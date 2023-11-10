import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserData } from "../../features/todo/todoSlice";
import { userDelete } from "../../features/todo/todoapiSlice";

const AdminProductPage = () => {
  const { users } = useSelector(getUserData);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(userDelete(id));
  };

  return (
    <div className="px-10">
      <p className="text-2xl font-semibold  py-5">All Developers</p>
      <Link to={"/add"}>
        <button className="px-4 font-semibold py-1 rounded-r-md bg-indigo-400 my-2 text-white">
          ADD
        </button>
      </Link>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                Job title
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((item) => {
              return (
                <tr key={item.id} className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.job}
                  </th>
                  <td className="px-6 py-4">{item.sallary}</td>
                  <td className="px-6 py-4 space-x-2">
                    <Link to={`/update/${item.id}`}>
                      <button className="bg-indigo-400 text-white px-2 rounded-md font-semibold py-1">
                        Update
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-indigo-400 text-white px-2 rounded-md font-semibold py-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductPage;
