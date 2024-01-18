import React, { useState } from "react";
import banner from "../../assets/banner4.jpg";
import register from "../../assets/register.png";
import { useDispatch } from "react-redux";
import { getRegister } from "../../features/user/userApiSlice";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const schema = Yup.object().shape({
  username: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email !")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your Password !").min(6),
});

const Register = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password, username }) => {
      const data = { username, email, password };
      dispatch(getRegister(data));
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  console.log(errors);
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
              Create your account now
            </p>
            <form onSubmit={handleSubmit}>
              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="username"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Name{" "}
                    {errors.username && touched.username && (
                      <span className="text-red-500  ms-2 text-xs  ">
                        ( {errors.username} )
                      </span>
                    )}
                  </label>
                  <input
                    name=""
                    type="text"
                    value={values.username}
                    onChange={handleChange}
                    id="username"
                    className="w-full border outline-none rounded-md py-1  px-2 text-gray-600 "
                    placeholder="Your name"
                  />{" "}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Email{" "}
                    {errors.email && touched.email && (
                      <span className="text-red-500  ms-2 text-xs  ">
                        ( {errors.email} )
                      </span>
                    )}
                  </label>
                  <input
                    name=""
                    value={values.email}
                    onChange={handleChange}
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
                    Password{" "}
                    {errors.password && touched.password && (
                      <span className="text-red-500  ms-2 text-xs  ">
                        ( {errors.password} )
                      </span>
                    )}
                  </label>
                  <input
                    name=""
                    value={values.password}
                    onChange={handleChange}
                    id="password"
                    type="password"
                    className="w-full border outline-none rounded-md py-1  px-2 text-gray-600 "
                    placeholder="Your password"
                  />{" "}
                </div>
                <button
                  type="submit"
                  className="w-full p-2 text-white bg-blue-500 rounded-md font-semibold"
                >
                  Register
                </button>
                <Link
                  className="font-semibold text-sm text-blue-400 hover:shadow-sm shadow-blue-400"
                  to={"/login"}
                >
                  Have an account ?
                </Link>
              </div>
            </form>
          </div>
          <img className="w-6/12 h-auto object-cover" src={register} alt="" />
        </div>
      </div>{" "}
    </div>
  );
};

export default Register;
