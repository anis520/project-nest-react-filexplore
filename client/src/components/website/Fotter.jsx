import React from "react";
import ContainerDiv from "./containerDiv/containerDiv";
import { FaLocationPin, FaRightLeft } from "react-icons/fa6";
import {
  FaAlignRight,
  FaMailBulk,
  FaMailchimp,
  FaMobile,
  FaMobileAlt,
  FaVoicemail,
} from "react-icons/fa";

const Fotter = () => {
  return (
    <div className="w-full py-10 bg-blue-100 ">
      <ContainerDiv>
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row">
          <div className="space-y-5 w-8/12">
            <p className=" text-xl font-semibold text-blue-500">Ifile</p>
            <p className="text-slate-600 text-sm font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              facere.
            </p>
            <div className="flex ">
              <input
                className="border rounded-l-xl outline-none p-2 "
                type="email"
              />
              <button className="bg-blue-500 p-2 font-semibold flex items-center gap-2 text-white rounded-r-xl">
                Submit <FaAlignRight />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-slate-800 text-xl font-bold">Contact info</p>
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
              <FaLocationPin className="text-blue-500" /> Dhaka , Bangladesh
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
              <FaMobileAlt className="text-blue-500" /> 01852320729
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
              <FaMailchimp className="text-blue-500" /> anisulhoque520@gmail.com
            </div>
          </div>
        </div>

        <hr className=" h-[2px] bg-blue-200 my-5 " />
        <p className="text-slate-700 text-sm md:text-center">
          Copyright @ 2021 Ifile Rights Reserved
        </p>
      </ContainerDiv>
    </div>
  );
};

export default Fotter;
