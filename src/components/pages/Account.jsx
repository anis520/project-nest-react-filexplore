import React from "react";
import image from "../../assets/banner.jpg";
import Order from "../Order";
const Account = () => {
  return (
    <div className="p-5 ">
      <p className="text-3xl font-semibold mb-2">Your acconnt</p>
      <hr />

      {/* account details  */}

      <div className="py-5 md:flex gap-10 items-end flex-wrap">
        <img
          className="w-32 h-32 rounded-full object-cover"
          src={image}
          alt=""
        />

        <div className="py-4">
          <p className="font-semibold text-xl">Name :-</p>
          <p className="font-semibold ">Anisul houqe</p>
        </div>
        <div className="py-4">
          <p className="font-semibold text-xl">Email :-</p>
          <p className="font-semibold ">@gmai.comhouqe</p>
        </div>
        <button className="bg-red-400 text-white rounded-md px-4 py-1 font-semibold ms-auto ">
          Logout
        </button>
      </div>

      {/* order details  */}

      <Order />
    </div>
  );
};

export default Account;
