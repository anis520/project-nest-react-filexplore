import React from "react";
import ContainerDiv from "./containerDiv/containerDiv";
import { FaStar } from "react-icons/fa";

const Pricing = () => {
  return (
    <ContainerDiv>
      <div className="py-10">
        {" "}
        <p className="text-slate-800 text-3xl text-center font-semibold">
          Choose your plan
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 w-10/12 md:w-9/12 lg:w-7/12 mx-auto gap-10 my-8">
          <div className="bg-white rounded-2xl border p-5   space-y-4">
            <p className="text-center font-bold text-xl">Free</p>
            <hr />
            <div className="flex items-center gap-2 text-blue-500">
              <FaStar />
              <p className="text-sm font-semibold text-slate-600">All access</p>
            </div>
            <div className="flex items-center gap-2 text-blue-500">
              <FaStar />
              <p className="text-sm font-semibold text-slate-600">All access</p>
            </div>
            <div className="flex items-center gap-2 text-blue-500">
              <FaStar />
              <p className="text-sm font-semibold text-slate-600">All access</p>
            </div>
            <button className="bg-blue-500 w-full p-1 rounded-md  text-white font-semibold">
              0.00$
            </button>
          </div>
          <div className="bg-white rounded-2xl border p-5   space-y-4 scale-110">
            <p className="text-center font-bold text-xl">Free</p>
            <hr />
            <div className="flex items-center gap-2 text-blue-500">
              <FaStar />
              <p className="text-sm font-semibold text-slate-600">All access</p>
            </div>
            <div className="flex items-center gap-2 text-blue-500">
              <FaStar />
              <p className="text-sm font-semibold text-slate-600">All access</p>
            </div>
            <div className="flex items-center gap-2 text-blue-500">
              <FaStar />
              <p className="text-sm font-semibold text-slate-600">All access</p>
            </div>
            <button className="bg-blue-500 w-full p-1 rounded-md  text-white font-semibold">
              0.00$
            </button>
          </div>{" "}
          <div className="bg-white rounded-2xl border p-5   space-y-4">
            <p className="text-center font-bold text-xl">Free</p>
            <hr />
            <div className="flex items-center gap-2 text-blue-500">
              <FaStar />
              <p className="text-sm font-semibold text-slate-600">All access</p>
            </div>
            <div className="flex items-center gap-2 text-blue-500">
              <FaStar />
              <p className="text-sm font-semibold text-slate-600">All access</p>
            </div>
            <div className="flex items-center gap-2 text-blue-500">
              <FaStar />
              <p className="text-sm font-semibold text-slate-600">All access</p>
            </div>
            <button className="bg-blue-500 w-full p-1 rounded-md  text-white font-semibold">
              0.00$
            </button>
          </div>
        </div>
      </div>
    </ContainerDiv>
  );
};

export default Pricing;
