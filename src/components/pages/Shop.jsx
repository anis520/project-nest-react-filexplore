import React from "react";
import image from "../../assets/download.jpg";
import banner2 from "../../assets/banner2.jpg";
const Shop = () => {
  return (
    <div className="p-5">
      <p className="text-xl py-4 font-semibold">Shop here </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div className=" bg-white border rounded-md shadow-lg  ">
          <img
            src={image}
            alt="product"
            className="w-full h-44 object-cover p-2 rounded-md hover:scale-105 duration-300"
          />

          {/* card body  */}
          <div className="p-3 flex items-center justify-between gap-2">
            <p className="font-semibold text-lg ">good product</p>
            <p className="font-semibold text-indigo-400 ">55$</p>
          </div>
          {/* card footer  */}
          <div className="flex items-center justify-between gap-2 p-2">
            <button className="bg-red-400 text-white w-6/12 font-semibold p-1 rounded-md hover:scale-105 duration-200">
              Add to card
            </button>
            <button className="bg-slate-200  w-6/12 font-semibold p-1 rounded-md hover:scale-105 duration-200">
              See more
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Shop;
