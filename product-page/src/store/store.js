import { configureStore } from "@reduxjs/toolkit";
import githubUserReducer from "../features/githubUserSlice";
import menuReducer from "../features/menuSlice";
import productsReducer from "../features/productsSlice";
import themeReducer from "../features/themeSlice";
import { productsApi } from "../api/productsApi";

export const store = configureStore({
  reducer: {
    user: githubUserReducer,
    menu: menuReducer,
    products: productsReducer,
    theme: themeReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

