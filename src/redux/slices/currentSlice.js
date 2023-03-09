import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrent = createAsyncThunk(
	'current/fetchCurrent',
	async (location, rejectWithValue) => {
			try {
				const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=d88c8afef3a846359c1171727232002&${location}&days=9`)
				
				return data;
			} catch (error) {
				return rejectWithValue(error.message);
			}
	}
)

const initialState = {
	currentItem: {},
	status: ''
}

export const currentSlice = createSlice({
	name: 'current',
	initialState,
	reducers: {
		setCurrentItem(state, action) {
			state.currentItem = action.payload;
		}
	},
	extraReducers: {
		[fetchCurrent.pending]: (state) => {
			state.status = 'loading';
			state.currentItem = {};
		},
		[fetchCurrent.fulfilled]: (state, action) => {
			state.currentItem = action.payload;
			state.status = 'success';
		},
		[fetchCurrent.rejected]: (state) => {
			state.status = 'error';
			state.currentItem = {};
		}
	}
})

export const { setCurrentItem } = currentSlice.actions;

export default currentSlice.reducer;