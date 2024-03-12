import React, { useEffect } from "react";
import { FaBars, FaFolder } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import ContainerDiv from "./containerDiv/containerDiv";
import cn from "../../utils/cn";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setNav(false);
  }, [pathname]);
  return (
    <div className="bg-slate-50 shadow-sm shadow-blue-100  sticky top-0 left-0 z-10">
      <ContainerDiv>
        <div className=" p-5 flex gap-20 items-center">
          <Link
            to={"/"}
            className=" flex items-center gap-2 text-blue-500 text-3xl font-bold"
          >
            <FaFolder className="text-blue-400" /> Ifile
          </Link>

          {/* <===============nav item===================> */}
          <div className="hidden lg:flex gap-10 items-center ms-auto">
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
            <Link
              className={cn(
                "text-slate-700 font-bold  duration-200   px-2   ",
                {
                  "bg-blue-100 text-blue-400 rounded-md":
                    pathname == "/pricing",
                }
              )}
              to={"/pricing"}
            >
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
            <Link
              className={cn(
                "text-slate-700 font-bold  duration-200   px-2   ",
                {
                  "bg-blue-100 text-blue-400 rounded-md":
                    pathname == "/contact",
                }
              )}
              to={"/contact"}
            >
              Contact
            </Link>
          </div>
          {/* <===================sing==================> */}
          <div className=" hidden  lg:flex ms-auto lg:ms-0 gap-2 items-center ">
            {" "}
            <Link
              to={"/login"}
              className="text-blue-400 font-semibold hover:bg-blue-100 px-5 py-1 rounded-2xl"
            >
              Sing up
            </Link>
            <Link
              to={"/register"}
              className="text-white px-5 py-1 rounded-2xl bg-blue-400 font-semibold"
            >
              Sing in
            </Link>
            {/* <button className="text-white px-5 py-1 rounded-2xl bg-blue-500 font-semibold flex items-center gap-2">
            <FaUser />
            Account
          </button> */}
          </div>

          {/* <===============mobile menu===============> */}
          <button
            onClick={() => setNav(!nav)}
            className="text-2xl bg-blue-100 text-blue-500 p-[2px] rounded-md ms-auto lg:hidden"
          >
            <FaBars />
          </button>
          {nav && (
            <div className="fixed flex items-center justify-end    top-0 left-0 w-full h-full bg-black bg-opacity-60">
              <div
                onClick={() => setNav(false)}
                className="absolute top-0 left-0 h-full w-full  "
              ></div>
              <div
                className={cn(
                  "w-8/12  sm:w-6/12 duration-500 bg-white h-full  p-10  z-10",
                  {}
                )}
              >
                <div className="  space-y-4 ">
                  <Link
                    className={cn(
                      "text-slate-700 w-full py-1 font-bold  duration-200   px-2   ",
                      {
                        "bg-blue-100 text-blue-400 rounded-md": pathname == "/",
                      }
                    )}
                    to={"/"}
                  >
                    Home
                  </Link>
                  <Link
                    className={cn(
                      "text-slate-700  w-full py-1 font-bold  duration-200   px-2   ",
                      {
                        "bg-blue-100 text-blue-400 rounded-md":
                          pathname == "/pricing",
                      }
                    )}
                    to={"/pricing"}
                  >
                    Pricing
                  </Link>
                  <Link
                    className={cn(
                      "text-slate-700  w-full py-1 font-bold  duration-200   px-2   ",
                      {
                        "bg-blue-100 text-blue-400 rounded-md":
                          pathname == "/features",
                      }
                    )}
                    to={"/features"}
                  >
                    About
                  </Link>
                  <Link
                    className={cn(
                      "text-slate-700  w-full py-1 font-bold  duration-200   px-2   ",
                      {
                        "bg-blue-100 text-blue-400 rounded-md":
                          pathname == "/contact",
                      }
                    )}
                    to={"/contact"}
                  >
                    Contact
                  </Link>

                  <div className="         ">
                    {" "}
                    <Link
                      to={"/login"}
                      className="text-blue-400 w-full text-center font-semibold hover:bg-blue-100 px-5 py-1 rounded-md mt-10 mb-3"
                    >
                      Sing up
                    </Link>
                    <Link
                      to={"/register"}
                      className="text-white px-5 py-1 rounded-md w-full text-center bg-blue-400 font-semibold"
                    >
                      Sing in
                    </Link>
                    {/* <button className="text-white px-5 py-1 rounded-2xl bg-blue-500 font-semibold flex items-center gap-2">
            <FaUser />
            Account
          </button> */}
                  </div>

                  <button
                    onClick={() => setNav(!nav)}
                    className="absolute rounded-md bottom-5 right-5 font-semibold bg-blue-100 text-blue-500 px-5 py-2 "
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </ContainerDiv>
    </div>
  );
};

export default Header;
