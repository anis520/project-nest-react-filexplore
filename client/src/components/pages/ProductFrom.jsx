import React from "react";
import { AiFillBackward, AiOutlineLogin } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

const ProductFrom = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      {" "}
      <div className="w-screen h-screen flex items-center justify-center bg-indigo-200">
        <Link to={"/"}>
          <div className="hover:scale-110 duration-100 fixed top-3 left-3 flex items-center gap-4 text-indigo-400  bg-white font-semibold py-1 px-3 cursor-pointer rounded-md">
            <span>Back</span>
            <AiFillBackward />
          </div>
        </Link>
        <div className="bg-white p-5   w-10/12 sm:w-7/12 md:w-4/12   rounded-xl shadow-lg hover:scale-105 duration-300 ">
          <p className="text-slate-500 font-semibold text-xl mb-2 flex items-center gap-3">
            <span>{params.id ? "Update product" : " Add product "}</span>
            <span>
              <AiOutlineLogin className="text-indigo-400 h-9 w-9" />{" "}
            </span>
          </p>{" "}
          <hr className="w-full h-2 bg-indigo-400 rounded-md" />
          <div className="space-y-3 py-3">
            <label className="font-semibold text-slate-500" htmlFor="email">
              Enter Name :
            </label>
            <input
              // onChange={handleInput}
              className="w-full border outline-slate-300 p-1 rounded-md "
              // value={input.email}
              type="email"
              name="email"
              id="email"
            />

            <label className="font-semibold text-slate-500 " htmlFor="password">
              Enter Price :
            </label>
            <input
              // onChange={handleInput}
              // value={input.password}
              className="w-full border outline-slate-300 p-1 rounded-md"
              type="password"
              name="password"
              id="password"
            />
            <button
              // onClick={handleRegister}
              className="w-full p-2 text-white bg-indigo-400 rounded-xl  font-semibold"
            >
              {params.id ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFrom;
