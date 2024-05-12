import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/", // Corrected baseUrl format
        prepareHeaders: async (headers, { getState, endpoint }) => {
            const auth = JSON.parse(localStorage.getItem('auth'));
            const token = auth?.access_token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        },
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),
});
