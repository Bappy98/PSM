import { createSlice } from "@reduxjs/toolkit";

const storeUser = JSON.parse(localStorage.getItem("auth"));

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: storeUser?.accessToken ? storeUser.accessToken : null,
    isLoggedIn: storeUser?.accessToken ? true : false,
    user_id: storeUser?.user_id ? storeUser?.user_id : null,
  },
  reducers: {
    setUser: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
      state.user_id = action.payload.user_id;
    },
    logOut: (state, action) => {
      state.accessToken = null;
      state.isLoggedIn = false;
      state.user_id = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user_id;
export const selectCurrentToken = (state) => state.auth.accessToken;
