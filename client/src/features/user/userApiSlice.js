import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootUrl } from "../filexplore/FileExploreApiSlice";

//get all users
export const getRegister = createAsyncThunk(
  "user/getRegister",
  async (data) => {
    try {
      const response = await axios.post(`${RootUrl}/user/add`, data);

      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
