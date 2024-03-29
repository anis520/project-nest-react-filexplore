import { configureStore } from "@reduxjs/toolkit";
import fileExploreReducer from "../features/filexplore/FileExplore";
import userReducer from "../features/user/userSlice";
import { getMe } from "../features/user/userApiSlice";

//create sotre
const store = configureStore({
  reducer: {
    fileExplore: fileExploreReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

export default store;
