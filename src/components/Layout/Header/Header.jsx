import React, { useState } from "react";
import { AiFillCloseCircle, AiFillShop, AiFillShopping } from "react-icons/ai";
import image from "../../../assets/banner2.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  const [card, setCard] = useState(false);

  return (
    <div className="bg-slate-200 text-slate-800 p-5 flex items-center justify-between  ">
      <div className=" font-semibold text-2xl md:text-4xl flex gap-4 items-center">
        <Link to="/">
          <AiFillShop />
        </Link>
        <Link to="/">
          <p>Simple shop</p>
        </Link>
        <div
          onClick={() => setCard(!card)}
          className="relative text-slate-700 bg-white p-1 rounded-full cursor-pointer"
        >
          <span className="bg-indigo-400 text-white absolute top-[-5px] right-[-10px] text-sm p-1 h-6 w-6 rounded-full  flex items-center justify-center ">
            11
          </span>
          <AiFillShopping />
        </div>
      </div>

      <Link to="/admin">
        <div className=" p-2 rounded-md font-semibold cursor-pointer bg-indigo-400 text-white">
          Admin panel
        </div>
      </Link>

      {/* card  */}
      <div
        className={`duration-300 fixed top-3  ${
          card ? "right-5 " : "right-[-400px]"
        } bg-white border p-5 shadow-lg rounded-2xl w-3/12`}
      >
        <span className="absolute top-2 right-2 text-2xl">
          <AiFillCloseCircle
            onClick={() => setCard(false)}
            className="hover:scale-105 cursor-pointer duration-300"
          />
        </span>
        <p className="text-slate-600 font-semibold  mb-2">Your card</p>
        <hr className="" />
        <ul className="mt-2 space-y-3">
          <li className="flex gap-2 items-center">
            <img className="w-4/12 rounded-md" src={image} alt="product" />
            <p className="font-semibold">good prou</p>
            <button className="bg-indigo-400 text-xs text-white h-fit p-1 font-semibold rounded-md ms-auto">
              comform
            </button>
          </li>

          <button className="bg-red-400 text-white px-3 rounded-md">
            remove all
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
