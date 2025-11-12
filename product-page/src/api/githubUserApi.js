import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubUserApi = createApi({
  reducerPath: "githubUserApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/users/" }),
  endpoints: (builder) => ({
    getGithubUser: builder.query({
      query: () => "sdevishal",
    }),
  }),
});

export const { useGetGithubUserQuery } = githubUserApi;
