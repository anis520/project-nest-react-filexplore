import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const RootUrl = "http://localhost:3001";

//get all files
export const getAllFiles = createAsyncThunk(
  "FileExplore/getAllFiles",
  async (data) => {
    try {
      console.log(data);
      const response = await axios.get(RootUrl, {
        headers: {
          Authorization: "Bearer " + data,
        },
      });

      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
//get total size
export const getusedStorage = createAsyncThunk(
  "FileExplore/getusedStorage",
  async (data) => {
    try {
      const response = await axios.get(RootUrl + "/usedStorage", {
        headers: {
          Authorization: "Bearer " + data,
        },
      });

      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// add new file
export const filesAdd = createAsyncThunk(
  "FileExplore/filesAdd",
  async (data) => {
    console.log(data);
    try {
      const response = await axios.post(`${RootUrl}/add`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
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
      const response = await axios.delete(`${RootUrl}/remove/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
