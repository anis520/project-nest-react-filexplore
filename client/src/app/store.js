import { configureStore } from "@reduxjs/toolkit";
import fileExploreReducer from "../features/filexplore/FileExplore";

//create sotre
const store = configureStore({
  reducer: {
    fileExplore: fileExploreReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

export default store;
