import React, { useEffect } from "react";
import {
  FaCloudversify,
  FaFolder,
  FaShare,
  FaSpeakerDeck,
  FaStumbleupon,
} from "react-icons/fa";
import ContainerDiv from "./containerDiv/containerDiv";

const Features = () => {
  return (
    <ContainerDiv>
      <div className="space-y-4 py-10">
        <p className="bg-slate-200 px-4 py-2  font-semibold  mx-auto w-fit text-slate-500 rounded-full">
          For more fun
        </p>
        <p className="text-slate-800 text-3xl text-center font-semibold">
          Welcome to Ifile
        </p>
        <p className="text-sm text-center text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, error!{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 py-10">
          <div className="bg-white border hover:shadow-sm p-5 rounded-2xl cursor-pointer hover:scale-110 duration-700">
            <div className="bg-teal-100 p-4 rounded-2xl w-fit mx-auto">
              <FaFolder className="text-teal-500 text-2xl" />
            </div>
            <p className="font-semibold mt-1 mb-3 text-center">Manage file</p>
            <p className="text-sm text-slate-500 mt-1 mb-3 text-center">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="bg-white  border hover:shadow-sm  p-5 rounded-2xl cursor-pointer hover:scale-110 duration-700 ">
            <div className="bg-indigo-100 p-4 rounded-2xl w-fit mx-auto">
              <FaStumbleupon className="text-indigo-400 text-2xl" />
            </div>
            <p className="font-semibold mt-1 mb-3 text-center">Stactured</p>
            <p className="text-sm text-slate-500 mt-1 mb-3 text-center">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="bg-white border  hover:shadow-sm  p-5 rounded-2xl cursor-pointer hover:scale-110 duration-700 ">
            <div className="bg-orange-100 p-4 rounded-2xl w-fit mx-auto">
              <FaSpeakerDeck className="text-orange-400 text-2xl" />
            </div>
            <p className="font-semibold mt-1 mb-3 text-center">Until Space</p>
            <p className="text-sm text-slate-500 mt-1 mb-3 text-center">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="bg-white  border hover:shadow-sm  p-5 rounded-2xl cursor-pointer hover:scale-110 duration-700 ">
            <div className="bg-blue-100 p-4 rounded-2xl w-fit mx-auto">
              <FaCloudversify className="text-blue-400 text-2xl" />
            </div>
            <p className="font-semibold mt-1 mb-3 text-center">Secured</p>
            <p className="text-sm text-slate-500 mt-1 mb-3 text-center">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="bg-white border   hover:shadow-sm  p-5 rounded-2xl cursor-pointer hover:scale-110 duration-700 ">
            <div className="bg-green-100 p-4 rounded-2xl w-fit mx-auto">
              <FaShare className="text-green-500  text-2xl" />
            </div>
            <p className="font-semibold mt-1 mb-3 text-center">Share file</p>
            <p className="text-sm text-slate-500 mt-1 mb-3 text-center">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>{" "}
    </ContainerDiv>
  );
};

export default Features;
