import { createSlice } from "@reduxjs/toolkit";
import { filesAdd, filesDelete, filesUpdate } from "./FileExploreApiSlice";
import { getAllFiles } from "./FileExploreApiSlice";

//create todo slice
const fileExplore = createSlice({
  name: "FileExplore",

  initialState: {
    allFiles: null,
    filterData: null,
    favourite: [],
    message: null,
    error: null,
    loading: false,
  },
  reducers: {
    setMessageEmpty: (state) => {
      (state.message = null), (state.error = null);
    },
    setQuickTab: (state, action) => {
      state.filterData = action.payload;
    },
    setFavourite: (state, action) => {
      state.favourite.push(action.payload);
    },
    setUnFavourite: (state, action) => {
      state.favourite = state.favourite.filter(
        (i) => i.id !== action.payload.id
      );
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
        (state.filterData = action.payload.data);
    });
    builder.addCase(getAllFiles.rejected, (state, action) => {
      state.loading = false;
    });
    // add new file
    builder.addCase(filesAdd.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(filesAdd.fulfilled, (state, action) => {
      (state.loading = false), state.allFiles.push(action.payload.data);
    });
    builder.addCase(filesAdd.rejected, (state, action) => {
      state.loading = false;
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
    });

    // delete  file
    builder.addCase(filesDelete.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(filesDelete.fulfilled, (state, action) => {
      state.allFiles = state.allFiles.filter(
        (i) => i.id !== action.payload.data.id
      );
      state.loading = false;
    });
    builder.addCase(filesDelete.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

//export

// selectors
export const getFilesData = (state) => state.fileExplore;
// action
export const { setMessageEmpty, setQuickTab, setFavourite, setUnFavourite } =
  fileExplore.actions;
// slice
export default fileExplore.reducer;
