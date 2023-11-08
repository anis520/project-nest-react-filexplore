import React from "react";
import image from "../assets/banner.jpg";

const Order = () => {
  return (
    <div>
      {" "}
      <p className="text-2xl font-semibold mb-2 uppercase text-indigo-400 md:mt-7">
        Your orders
      </p>
      <div className="p-5 rounded-lg bg-slate-100 ">
        <ul>
          <li className="bg-white py-2">
            <p className="text-slate-700 font-semibold">
              Order Id : {"332sfsdf"}
            </p>
            <div className="flex items-end  gap-4">
              <img className="w-3/12" src={image} alt="" />
              <p className="text-lg font-semibold">batin sitdes</p>
              <p className="text-lg font-semibold">price : 2544</p>
              <p className="h-fit ms-auto bg-green-400 text-white w-fit p-2 rounded-md">
                Status
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Order;
