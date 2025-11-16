import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menuSlice";
import themeReducer from "../features/themeSlice";
import searchReducer from "../features/searchSlice";
import { productsApi } from "../api/productsApi";
import { githubUserApi } from "../api/githubUserApi";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    theme: themeReducer,
    search: searchReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [githubUserApi.reducerPath]: githubUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(githubUserApi.middleware),
});
