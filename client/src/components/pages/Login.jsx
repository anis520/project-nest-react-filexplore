import React, { useEffect, useState } from "react";
import banner from "../../assets/banner4.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLogin, getRegister } from "../../features/user/userApiSlice";
import loginbanner from "../../assets/login.png";
import { toast } from "react-toastify";
import { getUserData, setMessageEmpty } from "../../features/user/userSlice";
import Header from "../website/Header";

const Login = () => {
  const { message, error } = useSelector(getUserData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    dispatch(getLogin(input));
  };

  useEffect(() => {
    if (message) {
      navigate("/");
      toast.success(message);
    }
    if (error) {
      toast.error(error);
    }
    dispatch(setMessageEmpty());
  }, [error, message, dispatch]);

  return (
    <>
      <Header />

      <div
        // style={{ backgroundImage: `url(${banner})` }}
        className=" h-screen  bg-cover bg-gradient-to-r from-indigo-400 to-cyan-400  "
      >
        <div className="   w-full  h-full   flex items-center justify-center  p-10 md:p-0 ">
          <div className=" w-11/12  md:w-7/12 p-6 bg-white rounded-md flex flex-col md:flex-row gap-5">
            <div className="md:w-6/12 p-5   ">
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
                    value={input.email}
                    name="email"
                    onChange={(e) =>
                      setInput({ ...input, email: e.target.value })
                    }
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
                    value={input.password}
                    name="password"
                    onChange={(e) =>
                      setInput({ ...input, password: e.target.value })
                    }
                    className="w-full border outline-none rounded-md py-1  px-2 text-gray-600 "
                    placeholder="Your password"
                  />{" "}
                </div>
                <button
                  onClick={handleLogin}
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
              className="md:w-6/12 h-auto object-cover"
              src={loginbanner}
              alt=""
            />
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Login;
