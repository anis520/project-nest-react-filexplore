import React, { useState } from "react";
import banner from "../../assets/banner4.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRegister } from "../../features/user/userApiSlice";
import loginbanner from "../../assets/login.png";

const Login = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    username: "ss",
    email: "s@gmail.com",
    password: "ss",
  });

  const handleRegister = () => {
    dispatch(getRegister(input));
  };
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className=" h-screen  bg-cover  "
    >
      <div className="   w-full  h-full bg-opacity-30  backdrop-blur-sm bg-white flex items-center justify-center ">
        <div className="w-7/12 p-6 bg-white rounded-md flex gap-5">
          <div className="w-6/12 p-5   ">
            <h3 className="text-gray-700 font-semibold text-2xl">
              Get Started
            </h3>
            <p className="font-semibold text-sm my-2 text-gray-500">
              Login your account now
            </p>

            <div className="space-y-3">
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-gray-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border outline-none rounded-md py-1  px-2 text-gray-600 "
                  placeholder="Your email"
                />{" "}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-xs font-semibold text-gray-500"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full border outline-none rounded-md py-1  px-2 text-gray-600 "
                  placeholder="Your password"
                />{" "}
              </div>
              <button
                onClick={handleRegister}
                className="w-full p-2 text-white bg-blue-500 rounded-md font-semibold"
              >
                Login
              </button>
              <Link
                to={"/register"}
                className="font-semibold text-sm text-blue-400 hover:shadow-sm shadow-blue-400"
              >
                Create an account ?
              </Link>
            </div>
          </div>
          <img
            className="w-6/12 h-auto object-cover"
            src={loginbanner}
            alt=""
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default Login;
