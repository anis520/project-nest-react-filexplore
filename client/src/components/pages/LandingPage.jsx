import React from "react";
import banner from "../../assets/banner4.jpg";
import hero from "../../assets/banner5.png";
import { Link } from "react-router-dom";
import { BiLogoDeezer } from "react-icons/bi";
import { FaUserSecret } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className=" h-screen overflow-scroll overflow-x-hidden bg-cover  "
    >
      <div className="   w-full  bg-opacity-30  backdrop-blur-sm bg-white ">
        {/* /============================= header ==========================/ */}

        <div className="px-20    flex  justify-between py-4 bg-white bg-opacity-90 shadow-sm shadow-blue-200 ">
          <Link
            to={"/"}
            className="text-blue-500 font-bold text-2xl flex items-center gap-2"
          >
            <BiLogoDeezer />
            ifile
          </Link>
          <div className="flex items-center gap-10 text-blue-500  ">
            <Link>About</Link>
            <Link>Features</Link>
            <Link>Pricing</Link>
            <Link
              to={"/app"}
              className="text-white bg-blue-500 px-2 py-1 rounded-md  font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* /============================= hero ==========================/ */}
        <div className=" p-20    flex  items-center gap-4">
          <div className="w-6/12 space-y-4">
            <h3 className="text-5xl font-semibold">
              Manage <span className="text-blue-500">all your files</span>{" "}
              <br /> in <span className="text-blue-500">one place</span>
            </h3>
            <p className="text-lg font-semibold text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              quo?
            </p>
            <Link
              to={"/app"}
              className="text-white bg-blue-500 px-8 py-2 font-semibold rounded-md"
            >
              Get Starded
            </Link>
          </div>
          <img
            src={hero}
            className=" rounded-2xl w-6/12  object-cover"
            alt=""
          />
        </div>
        {/* /============================= Features ==========================/ */}
      </div>{" "}
      <div className=" px-20 py-36 bg-blue-500 grid grid-cols-3  gap-6   ">
        <div className=" hover:scale-105 bg-white px-4 py-8 hover:scale-y-110 h-fit rounded-lg space-y-3 group duration-300 cursor-pointer border-2 border-white hover:bg-blue-500">
          <h2 className="text-2xl font-semibold text-blue-500 text-center group-hover:text-white   ">
            Simple login
          </h2>
          <p className=" font-semibold text-gray-700  text-center group-hover:text-white  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            totam!
          </p>
          <FaUserSecret className="text-blue-600 text-6xl mx-auto group-hover:text-white  " />
        </div>
        <div className="hover:scale-105 bg-white px-4 py-8 hover:scale-y-110 h-fit rounded-lg space-y-3 group duration-300 cursor-pointer border-2 border-white hover:bg-blue-500">
          <h2 className="text-2xl font-semibold text-blue-500 text-center group-hover:text-white   ">
            Simple login
          </h2>
          <p className=" font-semibold text-gray-700  text-center group-hover:text-white  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            totam!
          </p>
          <FaUserSecret className="text-blue-600 text-6xl mx-auto group-hover:text-white  " />
        </div>
        <div className="hover:scale-105 bg-white px-4 py-8 hover:scale-y-110 h-fit rounded-lg space-y-3 group duration-300 cursor-pointer border-2 border-white hover:bg-blue-500">
          <h2 className="text-2xl font-semibold text-blue-500 text-center group-hover:text-white   ">
            Simple login
          </h2>
          <p className=" font-semibold text-gray-700  text-center group-hover:text-white  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            totam!
          </p>
          <FaUserSecret className="text-blue-600 text-6xl mx-auto group-hover:text-white  " />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
