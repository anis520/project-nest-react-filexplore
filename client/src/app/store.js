import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

//create sotre
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

export default store;
