import { createSlice } from "@reduxjs/toolkit";
import { getLogin, getMe, getRegister } from "./userApiSlice";

//create todo slice
const user = createSlice({
  name: "user",

  initialState: {
    user: localStorage.getItem("user") ? localStorage.getItem("user") : null,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    message: null,
    error: null,
    loading: false,
  },
  reducers: {
    setMessageEmpty: (state) => {
      (state.message = null), (state.error = null);
    },
    setLogout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    // get register  user
    builder.addCase(getRegister.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.data.message;
    });
    builder.addCase(getRegister.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // get register  user
    builder.addCase(getLogin.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.data.message;
      state.token = action.payload.data.token;
      state.user = action.payload.data.user;
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", state.user);
    });
    builder.addCase(getLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // get user info

    builder.addCase(getMe.fulfilled, (state, action) => {
      // state.loading = false;
      // state.message = action.payload.data.message;
      state.user = action.payload.data.user;
      localStorage.setItem("user", state.user);
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.loading = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.token = null;
      state.user = null;
      state.error = action.error.message;
    });
  },
});

//export

// selectors
export const getUserData = (state) => state.user;
// action
export const { setMessageEmpty, setLogout } = user.actions;
// slice
export default user.reducer;
