import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get all users
export const getAllFiles = createAsyncThunk(
  "todo/getAllFiles",
  async (data) => {
    try {
      const response = await axios.get("http://localhost:3001");

      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// add new user
export const filesAdd = createAsyncThunk("todo/filesAdd", async (data) => {
  console.log(data);
  try {
    const response = await axios.post("http://localhost:3001/add", data);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// update  user
export const filesUpdate = createAsyncThunk(
  "todo/filesUpdate",
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
export const filesDelete = createAsyncThunk("todo/filesDelete", async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3001/remove/${id}`);

    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
