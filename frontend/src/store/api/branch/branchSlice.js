import fetchWrapper from '@/util/fetchWrapper';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	success: false,
	blog: {},
};

export const getBlog = createAsyncThunk(
	'blog/getBlog',
	async ({ id }) => {
		try {
			const response = await fetchWrapper(`blogs/${id}`);
			console.log(response.data)
			return response.data;
		} catch (error) {
			throw error.response ? error.response.data : error.message;
		}
	}
);

const blogSlice = createSlice({
	name: 'blog',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getBlog.pending, state => {
				state.loading = true;
			})
			.addCase(getBlog.fulfilled, (state, action) => {
				state.loading = false;
				state.success = true;
				state.blog = action.payload;
			})
			.addCase(getBlog.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch blog data';
			});
	},
});

export default blogSlice.reducer;

