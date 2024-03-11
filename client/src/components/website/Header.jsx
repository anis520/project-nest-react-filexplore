import React from "react";
import { FaFolder } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import ContainerDiv from "./containerDiv/containerDiv";
import cn from "../../utils/cn";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-slate-50 shadow-sm shadow-blue-100  sticky top-0 left-0">
      <ContainerDiv>
        <div className=" p-5 flex gap-20 items-center">
          <Link
            to={"/"}
            className=" flex items-center gap-2 text-blue-500 text-3xl font-bold"
          >
            <FaFolder className="text-blue-400" /> Ifile
          </Link>

          {/* <===============nav item===================> */}
          <div className="flex gap-10 items-center ms-auto">
            <Link
              className={cn(
                "text-slate-700 font-bold  duration-200   px-2   ",
                {
                  "bg-blue-100 text-blue-400 rounded-md": pathname == "/",
                }
              )}
              to={"/"}
            >
              Home
            </Link>
            <Link className="text-slate-700 font-bold       " to={"/"}>
              Pricing
            </Link>
            <Link
              className={cn(
                "text-slate-700 font-bold  duration-200   px-2   ",
                {
                  "bg-blue-100 text-blue-400 rounded-md":
                    pathname == "/features",
                }
              )}
              to={"/features"}
            >
              About
            </Link>
            <Link className="text-slate-700 font-bold        " to={"/"}>
              Contact
            </Link>
          </div>
          {/* <===================sing==================> */}
          <div className="flex gap-2 items-center ">
            {" "}
            <button className="text-blue-400 font-semibold hover:bg-blue-100 px-5 py-1 rounded-2xl">
              Sing up
            </button>
            <button className="text-white px-5 py-1 rounded-2xl bg-blue-400 font-semibold">
              Sing in
            </button>
            {/* <button className="text-white px-5 py-1 rounded-2xl bg-blue-500 font-semibold flex items-center gap-2">
            <FaUser />
            Account
          </button> */}
          </div>
        </div>
      </ContainerDiv>
    </div>
  );
};

export default Header;
