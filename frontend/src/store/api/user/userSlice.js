import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchWrapper from './../../../../util/fetchWrapper';

const initialState = {
  loading: false,
  error: null,
  success: false,
  user: {},
};

export const getUser = createAsyncThunk('user/getUser', async ({ user_id }, { rejectWithValue }) => {
  try {
    const response = await fetchWrapper.get(`user/${user_id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data : error.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch user data';
      });
  },
});

export default userSlice.reducer;
