import { configureStore } from "@reduxjs/toolkit";
import githubUserReducer from "../features/githubUserSlice";
import menuReducer from "../features/menuSlice";
import productsReducer from "../features/productsSlice";

export const store = configureStore({
  reducer: {
    user: githubUserReducer,
    menu: menuReducer,
    products: productsReducer,
  },
});
