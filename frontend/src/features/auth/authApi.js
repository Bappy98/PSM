import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: "/token",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            access_token: result.data.access_token,
                           
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            access_token: result.data.access_token,
                        
                            
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
     
    }),
});

export const { useLoginMutation} = authApi;
