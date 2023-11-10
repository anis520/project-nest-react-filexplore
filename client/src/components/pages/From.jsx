import React, { useEffect, useState } from "react";
import { AiFillBackward, AiOutlineLogin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";
import { getUserData } from "../../features/todo/todoSlice";
import userFromField from "../../hooks/useFrom";
import { userAdd, userUpdate } from "../../features/todo/todoapiSlice";

const From = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { users } = useSelector(getUserData);
  const { input, handleInputChange, resetForm, setinput } = userFromField({
    name: "",
    sallary: "",
    job: "",
  });

  const handleSave = () => {
    if (params.id) {
      input.id = params.id;
      dispatch(userUpdate(input));
    } else {
      dispatch(userAdd(input));
    }
    resetForm();
    navigate("/");
  };

  useEffect(() => {
    setinput(users?.find((i) => i.id == params.id));
  }, [users]);

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
            <label className="font-semibold text-slate-500" htmlFor="name">
              Enter Name :
            </label>
            <input
              // onChange={handleInput}
              className="w-full border outline-slate-300 p-1 rounded-md "
              value={input?.name}
              type="text"
              name="name"
              onChange={handleInputChange}
              id="name"
            />

            <label className="font-semibold text-slate-500 " htmlFor="sallary">
              Enter sallary :
            </label>
            <input
              // onChange={handleInput}
              value={input?.sallary}
              className="w-full border outline-slate-300 p-1 rounded-md"
              type="text"
              onChange={handleInputChange}
              name="sallary"
              id="sallary"
            />
            <label className="font-semibold text-slate-500 " htmlFor="job">
              Enter job :
            </label>
            <input
              // onChange={handleInput}
              value={input?.job}
              className="w-full border outline-slate-300 p-1 rounded-md"
              type="text"
              name="job"
              onChange={handleInputChange}
              id="job"
            />
            <button
              onClick={handleSave}
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

export default From;
