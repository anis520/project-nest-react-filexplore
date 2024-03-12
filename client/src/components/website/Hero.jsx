import React from "react";
import hero from "../../assets/DMS-6.webp";
import ContainerDiv from "./containerDiv/containerDiv";

const Hero = () => {
  return (
    <ContainerDiv>
      <div className="flex flex-col gap-8 md:flex-row py-28 ">
        <div className="md:w-6/12 space-y-3 order-1 md:order-2">
          <p className="text-5xl font-bold leading-tight text-slate-800 ">
            Optimize your file more <br /> structured and <br /> organized
          </p>
          <p className="text-slate-500   text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            commodi nobis velit hic quam tenetur non pariatur. Ipsa, esse
            quaerat.
          </p>
          <div className="flex gap-5 items-center ">
            {" "}
            <button className="text-blue-400 font-semibold hover:bg-blue-100 px-5 py-2 rounded-2xl">
              Start for free
            </button>
            <button className="text-white px-5 py-2 rounded-2xl bg-blue-500 font-semibold">
              Go for primuam
            </button>
          </div>
        </div>
        <img
          className="md:w-6/12 h-[300px] object-cover order-2 md:order-1"
          src={hero}
        />
      </div>{" "}
    </ContainerDiv>
  );
};

export default Hero;
