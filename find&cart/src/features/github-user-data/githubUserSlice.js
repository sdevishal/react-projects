import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const res = await fetch("https://api.github.com/users/sdevishal");
  return await res.json();
});

export const githubUserSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default githubUserSlice.reducer;
