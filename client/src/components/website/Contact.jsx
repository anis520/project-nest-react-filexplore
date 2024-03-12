import React from "react";
import ContainerDiv from "./containerDiv/containerDiv";

const Contact = () => {
  return (
    <div className=" bg-gradient-to-tl from-indigo-400 to-cyan-400 py-24">
      <ContainerDiv>
        <p className="text-white text-2xl font-semibold mb-5 ">Contact Us</p>

        <div className=" md:w-4/12 space-y-3 ">
          <label htmlFor="name" className=" text-white font-semibold">
            Your name
          </label>
          <input
            className="bg-white block w-full p-2 text-slate-700 rounded-md  border outline-none"
            type="text"
            id="name"
          />
          <label htmlFor="email" className=" text-white font-semibold">
            Your Email
          </label>
          <input
            className="bg-white block w-full p-2 text-slate-700 rounded-md  border outline-none"
            type="email"
            id="email"
          />
          <label htmlFor="text" className=" text-white font-semibold">
            Text
          </label>
          <textarea
            className="bg-white block w-full p-2 text-slate-700 rounded-md  border outline-none"
            type="text"
            id="text"
          />
          <button className="w-full text-white bg-blue-500 rounded-md py-2  font-semibold ">
            Sent
          </button>
        </div>
      </ContainerDiv>
    </div>
  );
};

export default Contact;
