import { configureStore } from "@reduxjs/toolkit";
import githubUserReducer from '../features/github-user-data/githubUserSlice'

export const store = configureStore({
  reducer: {
    user: githubUserReducer,
  },
});
