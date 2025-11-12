import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menuSlice";
import themeReducer from "../features/themeSlice";
import { productsApi } from "../api/productsApi";
import { githubUserApi } from "../api/githubUserApi";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    theme: themeReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [githubUserApi.reducerPath]: githubUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(githubUserApi.middleware),
});
