import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFound = createAsyncThunk(
	'found/fetchFound',
	async (location, rejectWithValue) => {
		try {
			const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=3`)

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
)

const initialState = {
	foundItem: {},
	status: ''
}

export const foundSlice = createSlice({
	name: 'found',
	initialState,
	reducer: {
		setFoundItem(state, action) {
			state.foundItem = action.payload;
		}
	},
	extraReducers: {
		[fetchFound.pending]: (state) => {
			state.status = 'loading';
			state.foundItem = {};
		},
		[fetchFound.fulfilled]: (state, action) => {
			state.status = 'success';
			state.foundItem = action.payload;
		},
		[fetchFound.rejected]: (state) => {
			state.status = 'error';
			state.foundItem = {};
		}
	}
})

export const { setFoundItem } = foundSlice.actions;

export default foundSlice.reducer;