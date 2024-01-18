import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const RootUrl = "http://localhost:3001";

//get all users
export const getAllFiles = createAsyncThunk(
  "FileExplore/getAllFiles",
  async (data) => {
    try {
      const response = await axios.get(RootUrl);

      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// add new user
export const filesAdd = createAsyncThunk(
  "FileExplore/filesAdd",
  async (data) => {
    console.log(data);
    try {
      const response = await axios.post(`${RootUrl}/add`, data);
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// update  user
export const filesUpdate = createAsyncThunk(
  "FileExplore/filesUpdate",
  async (data) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/update/${data.id}`,
        data
      );
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// delete  user
export const filesDelete = createAsyncThunk(
  "FileExplore/filesDelete",
  async (id) => {
    try {
      const response = await axios.delete(`${RootUrl}/remove/${id}`);

      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
