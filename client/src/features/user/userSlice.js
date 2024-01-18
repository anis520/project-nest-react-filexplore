import { createSlice } from "@reduxjs/toolkit";
import { getRegister } from "./userApiSlice";

//create todo slice
const user = createSlice({
  name: "user",

  initialState: {
    user: null,
    message: null,
    error: null,
    loading: false,
  },
  reducers: {
    setMessageEmpty: (state) => {
      (state.message = null), (state.error = null);
    },
  },
  extraReducers: (builder) => {
    // get all files
    builder.addCase(getRegister.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getRegister.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getRegister.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

//export

// selectors
export const getUserData = (state) => state.user;
// action
export const { setMessageEmpty } = user.actions;
// slice
export default user.reducer;
