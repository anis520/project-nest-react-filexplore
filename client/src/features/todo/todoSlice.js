import { createSlice } from "@reduxjs/toolkit";
import { getAllUser, userAdd, userDelete, userUpdate } from "./todoapiSlice";

//create todo slice
const todoSlice = createSlice({
  name: "todo",

  initialState: {
    users: null,
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
    // get all users
    builder.addCase(getAllUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      (state.loading = false), (state.users = action.payload.data);
    });
    builder.addCase(getAllUser.rejected, (state, action) => {
      state.loading = false;
    });
    // add new user
    builder.addCase(userAdd.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userAdd.fulfilled, (state, action) => {
      (state.loading = false), state.users.push(action.payload.data);
    });
    builder.addCase(userAdd.rejected, (state, action) => {
      state.loading = false;
    });
    // update  user
    builder.addCase(userUpdate.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userUpdate.fulfilled, (state, action) => {
      (state.users[
        state.users.findIndex((data) => data.id === action.payload.data.id)
      ] = action.payload.data),
        (state.loading = false);
    });
    builder.addCase(userUpdate.rejected, (state, action) => {
      state.loading = false;
    });

    // delete  user
    builder.addCase(userDelete.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userDelete.fulfilled, (state, action) => {
      state.users = state.users.filter((i) => i.id !== action.payload.data.id);
      state.loading = false;
    });
    builder.addCase(userDelete.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

//export

// selectors
export const getUserData = (state) => state.todo;
// action
export const { setMessageEmpty } = todoSlice.actions;
// slice
export default todoSlice.reducer;
