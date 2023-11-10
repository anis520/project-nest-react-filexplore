import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get all users
export const getAllUser = createAsyncThunk("todo/getAllUser", async (data) => {
  try {
    const response = await axios.get("http://localhost:3001");

    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// add new user
export const userAdd = createAsyncThunk("todo/userAdd", async (data) => {
  try {
    const response = await axios.post("http://localhost:3001/add", data);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// update  user
export const userUpdate = createAsyncThunk("todo/userUpdate", async (data) => {
  try {
    const response = await axios.patch(
      `http://localhost:3001/update/${data.id}`,
      data
    );
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// delete  user
export const userDelete = createAsyncThunk("todo/userDelete", async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3001/remove/${id}`);

    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
