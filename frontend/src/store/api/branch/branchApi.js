import { apiSlice } from "./../apiSlice";

export const branchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    branchCreate: builder.mutation({
        query: (data) => ({
          url: "/branch/Create",
          method: "post",
          body: data,
        }),
      }),
      branchList: builder.mutation({
        query: (data) => ({
          url: "/branch",
          method: "GET",
          body: data,
        }),
      }),
      
      
   
  }),
});

export const { useBranchCreateMutation,useBranchListMutation  } = branchApi;