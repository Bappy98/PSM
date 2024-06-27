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
      branchList: builder.query({
        query: () => ({
          url: "/company",
          method: "GET",
        }),
      }),
      
      
   
  }),
});

export const { useBranchCreateMutation,useBranchListQuery  } = branchApi;
