import { createSlice } from "@reduxjs/toolkit";
import {
  filesAdd,
  filesDelete,
  filesUpdate,
  getusedStorage,
} from "./FileExploreApiSlice";
import { getAllFiles } from "./FileExploreApiSlice";

//create todo slice
const fileExplore = createSlice({
  name: "FileExplore",

  initialState: {
    allFiles: null,
    filterData: null,
    size: null,
    favourite: [],
    root: JSON.parse(localStorage.getItem("root"))
      ? JSON.parse(localStorage.getItem("root"))
      : { id: null },
    message: null,
    error: null,
    loading: false,
    fileUploadLoading: false,
  },
  reducers: {
    setMessageEmpty: (state) => {
      (state.message = null), (state.error = null);
    },
    setRoot: (state, action) => {
      localStorage.setItem("root", JSON.stringify(action.payload));
      state.root = action.payload;

      state.filterData = state.allFiles.filter(
        (i) => i.parentId == action.payload.id
      );
    },
    setQuickTab: (state, action) => {
      state.filterData = action.payload;
      state.root = null;
      localStorage.setItem("root", JSON.stringify(null));
    },
    setLoading: (state, action) => {
      state.fileUploadLoading = true;
    },
  },
  extraReducers: (builder) => {
    // get all files
    builder.addCase(getAllFiles.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllFiles.fulfilled, (state, action) => {
      (state.loading = false),
        (state.allFiles = action.payload.data),
        (state.filterData = state.allFiles.filter(
          (i) => i.parentId == state.root.id
        ));
    });
    builder.addCase(getAllFiles.rejected, (state, action) => {
      state.loading = false;
    });
    // add new file
    builder.addCase(filesAdd.pending, (state, action) => {
      state.fileUploadLoading = true;
    });
    builder.addCase(filesAdd.fulfilled, (state, action) => {
      (state.fileUploadLoading = false),
        state.allFiles.push(action.payload.data),
        state.filterData.push(action.payload.data);
      state.size = state.size + action.payload.data.size;
    });
    builder.addCase(filesAdd.rejected, (state, action) => {
      state.fileUploadLoading = false;
      state.error = action.error.message;
    });
    // update  file
    builder.addCase(filesUpdate.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(filesUpdate.fulfilled, (state, action) => {
      (state.allFiles[
        state.allFiles.findIndex((data) => data.id === action.payload.data.id)
      ] = action.payload.data),
        (state.loading = false);
    });
    builder.addCase(filesUpdate.rejected, (state, action) => {
      state.loading = false;
      state.fileUploadLoading = false;
    });

    // delete  file
    // builder.addCase(filesDelete.pending, (state, action) => {
    //   state.loading = true;
    // });
    builder.addCase(filesDelete.fulfilled, (state, action) => {
      state.allFiles = state.allFiles.filter(
        (i) => i.id !== action.payload.data.id
      );
      state.filterData = state.filterData.filter(
        (i) => i.id !== action.payload.data.id
      );
      state.size = state.size - action.payload.data.size;
      state.loading = false;
    });
    builder.addCase(filesDelete.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getusedStorage.fulfilled, (state, action) => {
      state.size = action.payload.data;
    });
  },
});

//export

// selectors
export const getFilesData = (state) => state.fileExplore;
// action
export const {
  setMessageEmpty,
  setQuickTab,

  setRoot,
  setLoading,
} = fileExplore.actions;
// slice
export default fileExplore.reducer;
