import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchWrapper from "../../../util/fetchWrapper";

const initialState = {
  loading: false,
  error: null,
  success: false,
  branch: [],
};

export const getAllBranch = createAsyncThunk("branch/list", async () => {
  try {
    const response = await fetchWrapper("branch");
    return response.data.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
});

const branchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBranch.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.branch = action.payload;
      })
      .addCase(getAllBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch Branch data";
      });
  },
});

export default branchSlice.reducer;
