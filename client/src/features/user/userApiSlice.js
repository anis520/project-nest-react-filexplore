import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootUrl } from "../filexplore/FileExploreApiSlice";

//Register user
export const getRegister = createAsyncThunk(
  "user/getRegister",
  async (data) => {
    try {
      const response = await axios.post(`${RootUrl}/user/singup`, data);

      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
//Login user
export const getLogin = createAsyncThunk("user/getLogin", async (data) => {
  try {
    const response = await axios.post(`${RootUrl}/auth/login`, data);

    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
//Login user
export const getMe = createAsyncThunk("user/getMe", async (data) => {
  try {
    const response = await axios.get(`${RootUrl}/auth/me`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
