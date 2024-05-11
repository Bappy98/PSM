import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    access_token: undefined,
   
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.access_token = action.payload.access_token;
           
        },
        userLoggedOut: (state) => {
            state.access_token = undefined;
           
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
